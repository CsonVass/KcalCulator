using Microsoft.AspNetCore.Mvc;
using nis_bl;
using NutrientService.Models;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace nis_api.Controllers
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
        [ProducesResponseType(typeof(FoodNamesDto), (int) HttpStatusCode.OK)]
        public async Task<ActionResult<FoodNamesDto>> GetFoodByName(string name){
            FoodNamesDto result = new FoodNamesDto(await foodManager.GetFoodsByName(name));

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