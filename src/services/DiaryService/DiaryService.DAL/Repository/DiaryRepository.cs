using DiaryService.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.DAL.Repository
{
    public class DiaryRepository : IDiaryRepository
    {
        private readonly IDiaryContext _context;

        public DiaryRepository(IDiaryContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Diary>> GetDiaries() 
        {
            return await _context
                        .Diaries
                        .Find(d => true)
                        .ToListAsync();
        }
        public async Task<Diary> GetDiary(string userId) 
        {
            return await _context
                        .Diaries
                        .Find(d => d.UserId == userId)
                        .FirstOrDefaultAsync();
        }
        public async Task<Nutrients> GetGoal(string userId) 
        {
            Diary diary = await GetDiary(userId);
            if(diary != null) { return diary.Goals; }
            return null;
            

        }
        public async Task<DailyRecords> GetDailyRecords(string userId, string date) 
        {
            Diary diary = await GetDiary(userId);
            return diary
                .Consumption
                .Where(dr => dr.Date == date)
                .FirstOrDefault() ?? new DailyRecords { Date=date, Records= new List<Record>()};
        }

        public async Task<Record> GetRecord(string recordId, string userId = null, string date = null)
        {
            if (date != null)
            {
                DailyRecords dr = await GetDailyRecords(userId, date);
                return dr.Records.Where(d => d.RecordId == recordId).FirstOrDefault();
            }

            if (userId != null)
            {
                Diary diary = await GetDiary(userId);
                foreach (var drs in diary.Consumption)
                {
                    Record r = drs.Records.Where(d => d.RecordId == recordId).FirstOrDefault();
                    if (r != null)
                    {
                        return r;
                    }
                }
            }

            if(recordId != null)
            {
                List<Diary> diaries = new List<Diary>(await GetDiaries());
                foreach (var diary in diaries)
                {
                    foreach (var drs in diary.Consumption)
                    {
                        Record r = drs.Records.Where(d => d.RecordId == recordId).FirstOrDefault();
                        if (r != null)
                        {
                            return r;
                        }
                    }
                }
            }

            
            return null;
        }

        //Create
        public async Task<bool> CreateDiary(Diary diary) 
        {
            await _context.Diaries.InsertOneAsync(diary);
            return true;
        }
        public async Task<bool> CreateRecord(RecordCreateDTO record) 
        {
            Diary diary = await GetDiary(record.UserId);
            if(diary == null)
            {
                return false;
            }

            DailyRecords dailyRecords = diary
                             .Consumption
                             .Where(dr => dr.Date == record.Date)
                             .FirstOrDefault();
            if (dailyRecords == null)
            {
                dailyRecords = new DailyRecords
                {
                    Date = record.Date,
                    Records = new List<Record>()
                };
                diary.Consumption.Add(dailyRecords);
            }

            dailyRecords.Records.Add(new Record
            {
                RecordId = ObjectId.GenerateNewId().ToString(),
                UserId = record.UserId,
                Date = record.Date,
                Food = record.Food,
                Quantity = record.Quantity,
                TimeStamp = record.TimeStamp
            });

            return await UpdateDiary(diary);

        }

        //Update
        public async Task<bool> UpdateDiary(Diary diary) 
        {
            var updateResult = await _context
                                    .Diaries
                                    .ReplaceOneAsync(filter: d => d.UserId == diary.UserId, replacement: diary);

            return updateResult.IsAcknowledged && updateResult.ModifiedCount > 0;
        }
        public async Task<bool> UpdateRecord(RecordUpdateDTO record) 
        {
            Diary diary = await GetDiary(record.UserId);
            var _record = diary.Consumption.Where(drs => drs.Date == record.Date)
                               .FirstOrDefault().Records.Where(r => r.RecordId == record.RecordId).FirstOrDefault();

            if(_record == null)
            {
                return false;
            }

            _record.Quantity = record.Quantity;

            return await UpdateDiary(diary);
            
        }

        public async Task<bool> UpdateGoals(string userId, Nutrients nutrients)
        {
            Diary diary = await GetDiary(userId);
            diary.Goals = nutrients;
            return await UpdateDiary(diary);
        }

        //Delete
        public async Task<bool> DeleteDiary(string userId)
        {
            DeleteResult deleteResult = await _context
                                              .Diaries
                                              .DeleteOneAsync(d => d.UserId == userId);
            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }
        public async Task<bool> DeleteRecord(string recordId) 
        {
            Record record = await GetRecord(recordId);
            if(record == null)
            {
                return false;
            }
            string userId = record.UserId;
            string date = record.Date;
            Diary diary = await GetDiary(userId);
            DailyRecords dailyRecords = diary.Consumption.Where(drs => drs.Date == date).FirstOrDefault();
            dailyRecords.Records.Remove(dailyRecords.Records.Find(r => r.RecordId == recordId));

            return await UpdateDiary(diary);

        }
        public async Task<bool> DeleteDailyRecords(string userId, string date)
        {
            Diary diary = await GetDiary(userId);

            diary.Consumption.Remove(diary.Consumption.Find(drs => drs.Date == date));

            return await UpdateDiary(diary);
        }

    }
}
