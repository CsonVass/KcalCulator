using DiaryService.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.DAL
{
    public class DiaryContext : IDiaryContext
    {
        public DiaryContext(IDiaryDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Diaries = database.GetCollection<Diary>(settings.CollectionName);

        }

        public IMongoCollection<Diary> Diaries { get; }
    }
}
