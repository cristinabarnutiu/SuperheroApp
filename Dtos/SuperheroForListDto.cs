using SuperheroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Dtos
{
    public class SuperheroForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        //public string Superpower { get; set; }
        public Studio Studio { get; set; }
        public string PhotoUrl { get; set; }
    }
 
}
