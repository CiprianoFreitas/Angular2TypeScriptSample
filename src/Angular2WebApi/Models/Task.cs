using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2WebApi.Models
{
    public class Task
    {
        public int? ID { get; set; }
        public String Description { get; set; }
        public bool IsComplete { get; set; }
    }
}
