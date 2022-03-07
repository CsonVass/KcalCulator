using Microsoft.AspNetCore.Mvc;
using nis_bl;
using nis_models;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace nis_api.Controllers
{
    [ApiController]
    [Route("api/food_data")]
    public class FoodDataController : ControllerBase
    {
        private readonly FoodManager foodManager;

        public FoodDataController(FoodManager _fm) => this.foodManager = _fm;

        [HttpGet("{name}")]
        [ProducesResponseType(typeof(IReadOnlyCollection<KeyValuePair<string, string>>), (int) HttpStatusCode.OK)]
        public async Task<ActionResult<IReadOnlyCollection<KeyValuePair<string, string>>>> GetFoodByName(string name){
            List<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>(await foodManager.GetFoodsByName(name));

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