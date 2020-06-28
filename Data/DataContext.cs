using Microsoft.EntityFrameworkCore;
using SuperheroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Data
{
    //added a new column "DbContext" which represents a session with the Db
    public class DataContext : DbContext
    {
        //composite key
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserSuperhero>().HasKey(us => new { us.UserId, us.SuperheroId });

            modelBuilder.Entity<UserSuperhero>()
            .HasOne<User>(us => us.User)
            .WithMany(u => u.UserSuperheroes)
            .HasForeignKey(us => us.UserId);


            modelBuilder.Entity<UserSuperhero>()
            .HasOne<Superhero>(us => us.Superhero)
            .WithMany(u => u.UserSuperheroes)
            .HasForeignKey(us => us.SuperheroId);
        }

        //constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Superhero> Superheroes { get; set; }
        public DbSet<UserSuperhero> UserSuperheroes { get; set; }
        public DbSet<Review> Reviews { get; set; }
    }

}
