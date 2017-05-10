using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Test1.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Newtonsoft.Json;

namespace Angular2Test1.Controllers
{
    [Route("api/session")]
    public class SessionApiController : Controller
    {
        private IHostingEnvironment _env;
        private string _path;
        private List<Event> eventData;

        public SessionApiController(IHostingEnvironment env)
        {
            _env = env;
            _path = Path.Combine(_env.ContentRootPath, "data/events.json");
            LoadJson();
        }

        private void LoadJson()
        {
            eventData = JsonConvert.DeserializeObject<List<Event>>
                (System.IO.File.ReadAllText(_path));
        }

        [HttpGet]
        public IEnumerable<SessionResults> Get(string search)
        {
            // TODO: should be case/culture insensitive/sensitive
            if (string.IsNullOrEmpty(search))
            {
                var sessions = eventData
                    .Where(x => x.sessions != null)
                    .SelectMany(x => x.sessions,
                        (x, s) => new SessionResults { eventId = x.id, name = s.name });

                return sessions;
            }

            return eventData
                .Where(x => x.sessions != null)
                .SelectMany(x => x.sessions,
                        (x, s) => new SessionResults
                        { eventId = x.id, name = s.name, desc = s.@abstract })
                .Where(x => x.desc.Contains(search) || x.name.Contains(search));
        }
    }
}
