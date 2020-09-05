using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Services;

namespace Server.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase {
        private readonly DataContext _context;
        private readonly UserService _userService;
        public UserController(DataContext context, UserService userService) {
            _context = context;
            _userService = userService;
        }

        [HttpGet("{username}/{password}")]
        public async Task<IActionResult> GetUserAsync(string username, string password) {
            var result = await _userService.GetUserAsync(username, password);
            return Ok(result);
        }

        // [HttpPost("add")]
        // public async Task<IActionResult> AddUserAsync([FromBody] dynamic model) {
        //     var result = await _userService.AddUserAsync(model);
        //     return Ok(result);
        // }
    }
}