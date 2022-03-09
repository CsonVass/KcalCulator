using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using Xunit;
using nis_dal.Repository;
using Assert = Microsoft.VisualStudio.TestTools.UnitTesting.Assert;
using System.Threading.Tasks;
using NutrientService.Models;
using System.Collections.Generic;

namespace nis_test
{
    [TestClass]
    public class DAL_Test
    {

        [TestMethod]
        public async Task TestRemoteApi()
        {
            RemoteFoodRepository rfr = new RemoteFoodRepository();

            List<Food> result = new List<Food>(await rfr.GetFoodByName("apple"));
            foreach (Food food in result)
            {
                Console.WriteLine(food.ToString());
            }

            string expected = "id: food_a1gb9ubb72c7snbuxr3weagwv0dd	name: Apple	kcal: 52	protein: 0,26	fat: 0,17	carbs: 13,81	fiber: 2,4";

            Assert.AreEqual(result[0].ToString(), expected);

        }
    }
}
