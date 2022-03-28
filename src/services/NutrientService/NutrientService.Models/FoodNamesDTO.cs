using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutrientService.Models
{
    public class FoodNamesDTO
    {
       public List<NameIdPair> FoodNames { get; set; }

        public class NameIdPair
        {
            public string Id { get; set; }

            public string FoodName { get; set; }
        }

        public FoodNamesDTO(IEnumerable<Food> foods)
        {
            FoodNames = new List<NameIdPair>();
            foreach (Food food in foods)
            {
                FoodNames.Add(new NameIdPair { Id = food.Id, FoodName = food.FoodName});
            }
        }

    }
}
