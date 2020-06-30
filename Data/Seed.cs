using Newtonsoft.Json;
using SuperheroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Data
{
    public class Seed
    {
        public static void SeedSuperheroes(DataContext context)
        {
            if (!context.Superheroes.Any())
            {
                //
                var superheroData = System.IO.File.ReadAllText("Data/SuperheroSeedData.json");
                //take the data and convert it
                var superheroes = JsonConvert.DeserializeObject<List<Superhero>>(superheroData);
                //this will result in a list of user that we can loop through

                foreach (var superhero in superheroes)
                {
                    superhero.Name = superhero.Name.ToLower();
                    context.Superheroes.Add(superhero);
                }

                //no need to make this async as this will be run on Startup
                context.SaveChanges();
            }

        }
    }
}
