using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.Models
{
    public class Nutrients
    {
        [BsonElement("ENERC_KCAL")]
        public double Calorie { get; set; } = 0;

        [BsonElement("PROCNT")]
        public double Protein { get; set; } = 0;

        [BsonElement("FAT")]
        public double Fat { get; set; } = 0;

        [BsonElement("CHOCDF")]
        public double Carbs { get; set; } = 0;

        [BsonElement("FIBTG")]
        public double Fiber { get; set; } = 0;
    }
}
