namespace SuperheroApp.Models
{
    public class Photo
    { 
        public int Id { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
        public Superhero Superhero { get; set; }
        public int SuperheroId { get; set; }
    }
}