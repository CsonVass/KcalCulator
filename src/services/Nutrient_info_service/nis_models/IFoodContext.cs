﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB;
using MongoDB.Driver;
using NutrientService.Models;

namespace nis_dal
{
    public interface IFoodContext
    {
        IMongoCollection<Food> Foods { get; }
    }
}
