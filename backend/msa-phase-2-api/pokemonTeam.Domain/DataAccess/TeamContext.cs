using Microsoft.EntityFrameworkCore;
using pokemonTeam.Domain.Models;

namespace pokemonTeam.Domain.DataAccess
{
    public class TeamContext : DbContext
    {
        public TeamContext(DbContextOptions options) : base(options) { }
        public DbSet<Pokemon> Pokemons { get; set; }
        public DbSet<Team> Teams { get; set; }
    }
}
