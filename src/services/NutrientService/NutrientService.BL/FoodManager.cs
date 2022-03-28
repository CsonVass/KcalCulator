using NutrientService.DAL.Repository;
using NutrientService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutrientService.BL
{
    public class FoodManager
    {
        private readonly IFoodRepository foodRepository;
        private readonly IRemoteFoodRepository remoteFoodRepository;

        public FoodManager(IFoodRepository foodRepository, IRemoteFoodRepository remoteFoodRepository)
        {
            this.foodRepository = foodRepository;
            this.remoteFoodRepository = remoteFoodRepository;
        }

        public async Task<IReadOnlyCollection<Food>> GetFoods()
        {
            return new List<Food>(await foodRepository.GetFoods());
        }

        public async Task<IReadOnlyCollection<Food>> GetFoodsByName (string nameToSearchFor)
        {
            List<Food> foods = new List<Food>();
            try
            {
                foods = new List<Food>(await remoteFoodRepository.GetFoodByName(nameToSearchFor));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message.ToString());
                foods = new List<Food>(await foodRepository.GetFoodByName(nameToSearchFor));
            }

            return foods;
            
        } 

        public async Task<Food> GetFood(string name, string id)
        {
            Food result = await foodRepository.GetFood(id);
            if(result == null)
            {
                result = await remoteFoodRepository.GetFood(name, id);
                if (result != null)
                {
                    await foodRepository.CreateFood(result);
                }
            }

            return result;
        }

    }
}
