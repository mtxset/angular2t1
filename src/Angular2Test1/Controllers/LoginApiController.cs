using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Test1.Models;
using System.Net;

namespace Angular2Test1.Controllers
{
    [Route("api/login")]
    public class LoginApiController : Controller
    {
        [HttpPost]
        public User UserLogin([FromBody]User user)
        {
            if (user.username == "mtx" && user.password == "gg")
                return user;
            else
                return null;
        }

        [HttpGet]
        [Route("checkuser")]
        public User CheckUser()
        {
            if (bool.FalseString != "true")
                return new User { username = "mtx", password = null };

            return null;
        }

        [HttpPost]
        [Route("logout")]
        public HttpStatusCode Logout()
        {
            return HttpStatusCode.Continue;
        }
    }
}
