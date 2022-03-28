using Microsoft.AspNetCore.Mvc;
using NutrientService.BL;
using NutrientService.Models;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace NutrientService.API.Controllers
{
    [ApiController]
    [Route("api/nutrient")]
    public class FoodDataController : ControllerBase
    {
        private readonly FoodManager foodManager;

        public FoodDataController(FoodManager _fm) => this.foodManager = _fm;

        [HttpGet]
        [ProducesResponseType(typeof(List<Food>), (int) HttpStatusCode.OK)]
        public async Task<ActionResult<List<Food>>> GetFoods(){
            List<Food> result = new List<Food>(await foodManager.GetFoods());

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);

        }
        
        [HttpGet("{name}")]
        [ProducesResponseType(typeof(FoodNamesDTO), (int) HttpStatusCode.OK)]
        public async Task<ActionResult<FoodNamesDTO>> GetFoodByName(string name){
            FoodNamesDTO result = new FoodNamesDTO(await foodManager.GetFoodsByName(name));

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);

        }

        [HttpGet("{name}/{id}")]
        [ProducesResponseType(typeof(Food), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<Food>> GetFood(string name, string id)
        {
            Food result = await foodManager.GetFood(name, id);
            if(result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }



    }
}