using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.Models
{  
    public class DailyRecords
    {
        [BsonElement("Date")]
        public string Date { get; set; }
        public List<Record> Records { get; set; }
    }

    public class Record
    {
        [BsonId]
        [BsonRepresentation (MongoDB.Bson.BsonType.ObjectId)]
        public string RecordId { get; set; }

        public Food Food { get; set; }

        public string UserId { get; set; }

        public double Quantity { get; set; }

        public DateTime TimeStamp { get; set; }

        public string Date { get; set; }

    }
}
