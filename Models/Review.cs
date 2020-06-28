using System;

namespace SuperheroApp.Models
{
    public class Review
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
        //adding the id will set the cascade effct on deleting
        public int SuperheroId { get => SuperheroId; set => SuperheroId = Superhero.Id; }
        public Superhero Superhero { get; set; }
        public User User { get; set; }
        public int UserId { get => UserId; set => UserId = User.Id;}
    }
}