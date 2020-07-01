using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Dtos
{
    public class ReviewForDetailedDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        //adding the id will set the cascade effct on deleting
        //public int SuperheroId { get => SuperheroId; set => SuperheroId = Superhero.Id; }
        //public Superhero Superhero { get; set; }
        //public User User { get; set; }
        //public int UserId { get; set; }
    }
}
