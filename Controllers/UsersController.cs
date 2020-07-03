using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update;
using SuperheroApp.Data;
using SuperheroApp.Dtos;
using SuperheroApp.Helpers;
using SuperheroApp.Models;

namespace SuperheroApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        //private readonly DataContext _context;

        private readonly IRepository _repo;
        private readonly IMapper _mapper;

        public UsersController(IRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _repo.GetUsers();
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users);

            return Ok(usersToReturn);
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetailedDto>(user);

            if (userToReturn == null) { return NotFound("User not found."); }

            return Ok(userToReturn);
        }
 

        // PUT: api/User/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {
            if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized("Not allowed");
            var userFromRepo = await _repo.GetUser(id);

            //updates user from dto and saves in user from repo
            _mapper.Map(userForUpdateDto, userFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Failed to update user with id {id}");
        }

        // POST: api/Superheroes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        
        /*
        [HttpPost]
        public async Task<ActionResult<Superhero>> PostSuperhero(Superhero superhero)
        {
            _context.Superheroes.Add(superhero);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = superhero.Id }, superhero);
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
