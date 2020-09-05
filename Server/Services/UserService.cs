using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using Server.Models;

namespace Server.Services {
    public class UserService {
        private readonly DataContext _context;
        public UserService(DataContext context) {
            _context = context;
        }
        public async Task<dynamic> GetUserAsync(string username, string password) {
            var user = await _context.User.Where(x => x.Username == username && x.Password == password).SingleOrDefaultAsync();

            if (user == null) {
                return null;
            }

            var result = new {
                username = user.Username,
                email = user.Email,
                password = user.Password,
            };
            return result;
        }

        public async Task<dynamic> AddUserAsync(dynamic model) {
            var user = new User {
                Id = model.id,
                Username = model.username,
                Password = model.password,
                Email = model.email
            };

            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return user;
        }
    }
}