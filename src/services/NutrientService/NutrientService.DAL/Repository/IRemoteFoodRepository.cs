using NutrientService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutrientService.DAL.Repository
{
    public interface IRemoteFoodRepository
    {
        Task<Food> GetFood(string name, string id);
        Task<IEnumerable<Food>> GetFoodByName(string name);
    }
}
