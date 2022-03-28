using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutrientService.Models
{
    public class FoodDetailsDTO
    {
        public string Id { get; set; }

        public string FoodName { get; set; }

        public double Calorie { get; set; } 

        public double Protein { get; set; }

        public double Fat { get; set; }

        public double Carbs { get; set; }

        public double Fiber { get; set; }
    }
}
