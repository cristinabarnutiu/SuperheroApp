using SuperheroApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SuperheroApp.Data
{
    public interface IRepository
    {
        //5 methods for CRUD
        //add a type of T (superhero)
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T : class;
        
        //saving changes to DB
        Task<bool> SaveAll();
        Task<IEnumerable<Superhero>> GetSuperheroes();
        Task<Superhero> GetSuperhero(int id);
    }
}
