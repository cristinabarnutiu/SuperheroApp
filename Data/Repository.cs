using Microsoft.EntityFrameworkCore;
using SuperheroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;
        public Repository(DataContext context) { 
            _context = context; 
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Superhero> GetSuperhero(int id)
        {
            //return first or default superhero that matches the id
            var superhero = await _context.Superheroes.Include(p => p.Photos).FirstOrDefaultAsync(s => s.Id == id);
            return superhero;
        }

        public async Task<IEnumerable<Superhero>> GetSuperheroes()
        {
            var superheroes = await _context.Superheroes.Include(p => p.Photos).ToListAsync();
            return superheroes;
        }

        public async Task<bool> SaveAll()
        {
            //if something has been changed to the db, it will return true
            return await _context.SaveChangesAsync() > 0;

        }


        //user methods
        public async Task<User> GetUser(int id)
        {
            //return first or default superhero that matches the id
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }
    }
}
