using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.Models
{
    public class Diary
    {
        [BsonId]
        [BsonElement("UserId")]
        public string UserId { get; set; }

        public List<DailyRecords> Consumption { get; set; }

        public Nutrients Goals { get; set; }
    }
    
}
