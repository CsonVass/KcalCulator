using MongoDB.Driver;
using NutrientService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NutrientService.DAL.Repository
{
    public class FoodRepository : IFoodRepository
    {
        private readonly IFoodContext _context;

        public FoodRepository(IFoodContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<Food>> GetFoods()
        {
            return await _context
                           .Foods
                           .Find(filter => true)
                           .ToListAsync();
        }
        public async Task<Food> GetFood(string id) {
            return await _context
                            .Foods
                            .Find(f => f.Id.Equals(id))
                            .FirstOrDefaultAsync();
        }
        public async Task<IEnumerable<Food>> GetFoodByName(string name) {
            FilterDefinition<Food> filter = 
                Builders<Food>.Filter.ElemMatch(f => f.FoodName, name);

            return await _context
                            .Foods
                            .Find(filter)
                            .ToListAsync();
        }

        public async Task CreateFood(Food food) {
            await _context.Foods.InsertOneAsync(food);

        }
        public async Task<bool> UpdateFood(Food food) {
            var updateResult = await _context
                                .Foods
                                .ReplaceOneAsync(f => f.Id == food.Id, food);

            return updateResult.IsAcknowledged && updateResult.MatchedCount > 0;
        }

        public async Task<bool> DeleteFood(string id) {
            DeleteResult deleteResult = await _context
                                               .Foods
                                               .DeleteOneAsync(f => f.Id == id);

            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }
    }
}
