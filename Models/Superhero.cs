using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Models
{
    public enum Studio { Marvel, DC }
    public class Superhero
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Superpower { get; set; }
        public Studio Studio {get; set;}
        public ICollection<Review> Reviews { get; set; }
        public ICollection<UserSuperhero> UserSuperheroes { get; set; }

    }
}
