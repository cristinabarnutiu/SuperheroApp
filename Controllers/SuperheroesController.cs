using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuperheroApp.Data;
using SuperheroApp.Dtos;
using SuperheroApp.Models;

namespace SuperheroApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperheroesController : ControllerBase
    {
        //private readonly DataContext _context;
        
        private readonly IRepository _repo;
        private readonly IMapper _mapper;

        public SuperheroesController(IRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }


        //public SuperheroesController(DataContext context)
        //{
        //    _context = context;
        //}

        // GET: api/Superheroes
        [HttpGet]
        public async Task<IActionResult> GetSuperheroes()
        {
            var superheroes = await _repo.GetSuperheroes();
            var superheroesToReturn = _mapper.Map<IEnumerable<SuperheroForListDto>>(superheroes);

            return Ok(superheroesToReturn);
        }

        // GET: api/Superheroes/5
        [HttpGet("{id}")]
        public async Task<IActionResult>GetSuperhero(int id)
        {
            var superhero = await _repo.GetSuperhero(id);
            var superheroToReturn = _mapper.Map<SuperheroForDetailedDto>(superhero);

            if (superheroToReturn == null) {     return NotFound("Superhero not found.");    }

            return Ok (superheroToReturn);
        }

        /*

        // PUT: api/Superheroes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSuperhero(int id, Superhero superhero)
        {
            if (id != superhero.Id)
            {
                return BadRequest();
            }

            _context.Entry(superhero).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SuperheroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Superheroes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Superhero>> PostSuperhero(Superhero superhero)
        {
            _context.Superheroes.Add(superhero);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSuperhero", new { id = superhero.Id }, superhero);
        }

        // DELETE: api/Superheroes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Superhero>> DeleteSuperhero(int id)
        {
            var superhero = await _context.Superheroes.FindAsync(id);
            if (superhero == null)
            {
                return NotFound();
            }

            _context.Superheroes.Remove(superhero);
            await _context.SaveChangesAsync();

            return superhero;
        }

        private bool SuperheroExists(int id)
        {
            return _context.Superheroes.Any(e => e.Id == id);
        }
        */
    }
        
}
