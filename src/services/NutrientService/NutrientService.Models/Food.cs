using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace NutrientService.Models
{
    public class Food
    {
        [BsonId]
        [BsonElement("foodId")]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string FoodName { get; set; }

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

        public override string ToString()
        {
            return $"id: {Id}\t" +
                $"name: {FoodName}\t" +
                $"kcal: {Calorie}\t" +
                $"protein: {Protein}\t" +
                $"fat: {Fat}\t" +
                $"carbs: {Carbs}\t" +
                $"fiber: {Fiber}";
        }






    }
}
