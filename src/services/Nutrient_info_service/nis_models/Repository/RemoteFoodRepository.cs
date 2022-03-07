using MongoDB.Bson;
using MongoDB.Driver;
using nis_models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace nis_dal.Repository
{

    public class RemoteFoodRepository : IRemoteFoodRepository
    {
        private readonly RemoteContext _context;

        public RemoteFoodRepository()
        {
            _context = new RemoteContext();
        }

        public async Task<Food> GetFood(string name, string id)
        {
            List<Food> foods = new List<Food>(await GetFoodByName(name));
            return foods.Find(f => f.Id.Equals(id));
        }

        public async Task<IEnumerable<Food>> GetFoodByName(string name)
        {
            string result = await _context.getFoodsByName(name);
            BsonDocument document =
                MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>(result);

            List<Food> foods = new List<Food>();

            BsonArray hints = (BsonArray)document["hints"];
            foreach (var hint in hints)
            {
                Food newFood = new Food
                {
                    Id = hint["food"]["foodId"].ToString(),
                    FoodName = hint["food"]["label"].ToString(),
                    Calorie = hint["food"]["nutrients"].AsBsonDocument.Contains("ENERC_KCAL") ?
                    Double.Parse(hint["food"]["nutrients"]["ENERC_KCAL"].ToString(), CultureInfo.InvariantCulture) : 0.0,
                    Protein = hint["food"]["nutrients"].AsBsonDocument.Contains("PROCNT") ?
                    Double.Parse(hint["food"]["nutrients"]["PROCNT"].ToString(), CultureInfo.InvariantCulture) : 0.0,
                    Fat = hint["food"]["nutrients"].AsBsonDocument.Contains("FAT") ?
                    Double.Parse(hint["food"]["nutrients"]["FAT"].ToString(), CultureInfo.InvariantCulture) : 0.0,
                    Carbs = hint["food"]["nutrients"].AsBsonDocument.Contains("CHOCDF") ?
                    Double.Parse(hint["food"]["nutrients"]["CHOCDF"].ToString(), CultureInfo.InvariantCulture) : 0.0,
                    Fiber = hint["food"]["nutrients"].AsBsonDocument.Contains("FIBTG") ?
                      Double.Parse(hint["food"]["nutrients"]["FIBTG"].ToString(), CultureInfo.InvariantCulture) : 0.0
                };

                foods.Add(newFood);

            }

            return foods;

        }



        internal class RemoteContext
        {
            private readonly string url_base = "https://api.edamam.com/api/food-database/v2/parser?";
            private readonly string app_id = "c4821570";
            private readonly string nutrition_type = "logging";
            private readonly string app_key = "53ad4f46f19a0fd96fdb640faf1ed87c";

            private string url = "";

            private void generateUrl(string _ingr)
            {
                url = $"{url_base}" +
                    $"app_id={app_id}&" +
                    $"ingr={_ingr}&" +
                    $"nutrition-type={nutrition_type}&" +
                    $"app_key={app_key}";
            }

            public async Task<string> getFoodsByName(string name)
            {
                generateUrl(name);

                try
                {
                    using (HttpClient client = new HttpClient())
                    {
                        using (HttpResponseMessage res = await client.GetAsync(url))
                        {
                            using (HttpContent content = res.Content)
                            {
                                var foodData = await content.ReadAsStringAsync();

                                if (foodData != null)
                                {
                                    return foodData;
                                }
                                else
                                {
                                    return "";
                                }
                            }
                        }
                    }
                }
                catch (Exception exception)
                {
                    throw new Exception(exception.Message);
                }
            }
        }        
    }
}
