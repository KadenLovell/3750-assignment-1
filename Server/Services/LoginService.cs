using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Server.Services {
    public class LoginService {
        private readonly DataContext _context;
        public LoginService(DataContext context) {
            _context = context;
        }
        public async Task<dynamic> LoginAsync(dynamic model) {
            var username = (string)model.username;
            var password = (string)model.password;

            var user = await _context.User.Where(x => x.Username == username && x.Password == password).SingleOrDefaultAsync();

            if (user == null) {
                var error = new {
                    errors = new {
                        userNotFound = true
                    }
                };
                return error;
            }

            var result = new {
                success = true,
                user = new {
                    id = user.Id,
                    firstname = user.FirstName,
                    lastname = user.LastName,
                    email = user.Email
                }
            };

            return result;
        }
    }
}