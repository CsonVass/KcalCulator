using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.Models
{
    public class DailyRecordsDTO
    {
        public string Date { get; set; }
        public List<Record> Records { get; set; }
    }
}
