using MongoDB.Driver;
using NutrientService.DAL.Models;
using NutrientService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutrientService.DAL
{
    public class FoodContext : IFoodContext
    {
        public FoodContext(KcalculatorDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Foods = database.GetCollection<Food>(settings.CollectionName);
        }
        public IMongoCollection<Food> Foods { get; }
    }
}
