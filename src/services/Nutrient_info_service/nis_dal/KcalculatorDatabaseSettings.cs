using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace nis_dal.Models
{
    public class KcalculatorDatabaseSettings : IKcalculatorDatabaseSettings
    {
        public string ConnectionString { get; set; } = "mongodb://localhost:27017";
        public string DatabaseName { get; set; } = "FoodDb";
        public string CollectionName { get; set; } = "Foods";

    }

    public interface IKcalculatorDatabaseSettings
    {
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
        string CollectionName { get; set; }
    }
}
