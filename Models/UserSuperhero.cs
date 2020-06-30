namespace SuperheroApp.Models
{
    //many to many
    public class UserSuperhero
    {
        public int SuperheroId { get; set; }
        public Superhero Superhero { get; set; }
        public int UserId { get => UserId; set => UserId = User.Id; }
        public User User { get; set; }
    }
}