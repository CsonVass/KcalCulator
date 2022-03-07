using nis_dal.Repository;
using nis_models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nis_bl
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

        public async Task<IReadOnlyCollection<KeyValuePair<string, string>>> GetFoodsByName (string nameToSearchFor)
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

            List<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>();

            foreach (Food food in foods)
            {
                result.Add(new KeyValuePair<string, string>(food.Id, food.FoodName));
            }

            return result;
            
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
