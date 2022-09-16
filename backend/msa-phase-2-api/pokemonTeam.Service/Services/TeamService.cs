using System.Collections.Generic;
using System.Linq;
using pokemonTeam.Domain.Models;

namespace pokemonTeam.Service.Services
{
    public class TeamService
    {
        static List<Team> teams { get; }
        static int nextId = 0;
 
        static TeamService()
        {
            teams = new List<Team>();
        }

        public static Team Get(string name) => teams.FirstOrDefault(p => p.Name == name);

        public static List<Team> GetAll() => teams;

        public static int GetPokemonIndex(string pokemonName, int id)
        {
            int indexPokemon = -1;
            int index = id - 1;

            foreach (Pokemon p in teams[index].pokemons)
            {
                if (p.Name == pokemonName) indexPokemon = teams[index].pokemons.IndexOf(p);
            }

            return indexPokemon;
        }

        public static void Add(Team team)
        {
            team.Id = nextId++;
            teams.Add(team);
        }

        public static void Delete(string name)
        {
            var team = Get(name);
            if (team is null) return;

            teams.Remove(team);
        }
    }
}
