using DiaryService.DAL.Repository;
using DiaryService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.BL
{
    public class DiaryManager
    {

        private readonly IDiaryRepository diaryRepository;

        public DiaryManager(IDiaryRepository diaryRepository)
        {
            this.diaryRepository = diaryRepository;
        }

        //Read
        public async Task<IEnumerable<Diary>> GetDiaries()
        {
            return await diaryRepository.GetDiaries();
        }

        public async Task<DailyRecordsDTO> GetDailyRecords(string userId, string date)
        {
            DailyRecords drs = await diaryRepository.GetDailyRecords(userId, date);
            return new DailyRecordsDTO{ Records = drs.Records, Date=drs.Date };
        }

        public async Task<Nutrients> GetGoals(string userId)
        {
            Diary diary = await diaryRepository.GetDiary(userId);
            return diary.Goals;
        }

        public async Task<Diary> GetDiary(string userId)
        {
            return await diaryRepository.GetDiary(userId);
        }

        //Cretae
        public async Task<bool> CreateRecord(RecordCreateDTO record)
        {
            return await diaryRepository.CreateRecord(record);
        }

        public async Task<bool> CreateDiary(string userId, Nutrients goals)
        {
            return await diaryRepository.CreateDiary(new Diary
            {
                UserId = userId,
                Goals = goals,
                Consumption = new List<DailyRecords>()
            });
        }

        //Update
        public async Task<bool> UpdateGoals(string userId, Nutrients goals)
        {
            Diary diary = await diaryRepository.GetDiary(userId);
            return await diaryRepository.UpdateDiary(new Diary
            {
                UserId = userId,
                Consumption = diary.Consumption,
                Goals = goals
            });
        }

        public async Task<bool> UpdateRecord(RecordUpdateDTO record)
        {
            return await diaryRepository.UpdateRecord(record);
        }

        //Delete
        public async Task<bool> DeleteDiary(string userId)
        {
            return await diaryRepository.DeleteDiary(userId);
        }

        public async Task<bool> DeleteDailyRecords(string userId, string date)
        {
            return await diaryRepository.DeleteDailyRecords(userId, date);
        }
        
        public async Task<bool> DeleteRecord(string recordId)
        {
            return await diaryRepository.DeleteRecord(recordId);
        }



    }
}
