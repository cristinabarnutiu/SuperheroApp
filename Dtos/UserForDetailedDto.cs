using SuperheroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        //public byte[] PasswordHash { get; set; }
        //public byte[] PasswordSalt { get; set; }
        //public ICollection<Review> Reviews { get; set; }
        public ICollection<UserSuperhero> UserSuperheroes { get; set; }
    }
}
