using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiaryService.Models
{
    public class RecordCreateDTO
    {
        public Food Food { get; set; }

        public string UserId { get; set; }

        public double Quantity { get; set; }

        public DateTime TimeStamp { get; set; }

        public string Date { get; set; }
    }

    public class RecordUpdateDTO
    {
        public string RecordId { get; set; }

        public string UserId { get; set; }

        public double Quantity { get; set; }

        public string Date { get; set; }

    }
}
