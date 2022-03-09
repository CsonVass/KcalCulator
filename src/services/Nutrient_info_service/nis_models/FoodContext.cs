using MongoDB.Driver;
using nis_dal.Models;
using NutrientService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nis_dal
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
