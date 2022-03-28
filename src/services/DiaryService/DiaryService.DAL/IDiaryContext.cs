using DiaryService.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.DAL
{
    public interface IDiaryContext
    {
        IMongoCollection<Diary> Diaries { get; }
    }
}
