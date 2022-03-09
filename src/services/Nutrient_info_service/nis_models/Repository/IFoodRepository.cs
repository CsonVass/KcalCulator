using NutrientService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nis_dal.Repository
{
    public interface IFoodRepository
    {
        Task<IEnumerable<Food>> GetFoods();
        Task<Food> GetFood(string id);
        Task<IEnumerable<Food>> GetFoodByName(string name);

        Task CreateFood(Food food);
        Task<bool> UpdateFood(Food food);
        Task<bool> DeleteFood(string id);

    }
}
