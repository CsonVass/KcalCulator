using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.Models
{
    public class Food
    {
        [BsonId]
        [BsonElement("FoodId")]
        public string FoodId { get; set; }

        public string FoodName { get; set; }

        public Nutrients Nutrients { get; set; }

    }
}
