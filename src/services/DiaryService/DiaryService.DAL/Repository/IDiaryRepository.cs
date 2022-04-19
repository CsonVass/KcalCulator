using DiaryService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.DAL.Repository
{
    public interface IDiaryRepository
    {
        //Read
        public Task<IEnumerable<Diary>> GetDiaries();
        public Task<Diary> GetDiary(string userId);
        public Task<Nutrients> GetGoal(string userId);
        public Task<DailyRecords> GetDailyRecords(string userId, string date);
        public Task<Record> GetRecord(string recordId, string userId = null, string date = null);

        //Create
        public Task<bool> CreateDiary(Diary diary);
        public Task<bool> CreateRecord(RecordCreateDTO record);

        //Update
        public Task<bool> UpdateDiary(Diary diary);
        public Task<bool> UpdateRecord(RecordUpdateDTO record);

        //Delete
        public Task<bool> DeleteDiary(string userId);
        public Task<bool> DeleteRecord(string recordId);
        public Task<bool> DeleteDailyRecords(string userId, string date);




    }
}
