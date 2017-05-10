using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using System;
using Newtonsoft.Json;
using Angular2Test1.Models;

namespace Angular2Test1.Controllers
{
    [Route("api/events")]
    public class EventsApiController : Controller
    {
        private IHostingEnvironment _env;
        private string _path;
        private List<Event> eventData;

        public EventsApiController(IHostingEnvironment env)
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

        private void SaveJson()
        {
            var data = JsonConvert.SerializeObject(eventData);

            System.IO.File.WriteAllText(_path, data);
        }

        // GET: api/events
        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return eventData;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Event Get(int id)
        {
            return eventData.FirstOrDefault(x => x.id == id);
        }

        // POST api/values
        [HttpPost]
        public Event Post([FromBody]Event @event)
        {
            eventData.Add(@event);
            SaveJson();
            return eventData.Last();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Event Put(int id, [FromBody]Event @event)
        {
            int index = eventData.FindIndex(x => x.id == id);
            eventData[index] = @event;
            SaveJson();
            return eventData[index];
        }

        [HttpPost]
        [Route("{eventId}/sessions/{sessionId}/voters/{voterName}")]
        public IActionResult AddVoter(int eventId, int sessionId, string voterName)
        {
            int eventIndex = eventData.FindIndex(x => x.id == eventId);
            int sessionIndex = eventData[eventIndex].sessions.FindIndex(x => x.id == sessionId);

            eventData[eventIndex].sessions[sessionIndex].voters.Add(voterName);
            SaveJson();

            return Ok();
        }

        [HttpDelete]
        [Route("{eventId}/sessions/{sessionId}/voters/{voterName}")]
        public IActionResult DeleteVoter(int eventId, int sessionId, string voterName)
        {
            int eventIndex = eventData.FindIndex(x => x.id == eventId);
            int sessionIndex = eventData[eventIndex].sessions.FindIndex(x => x.id == sessionId);

            eventData[eventIndex].sessions[sessionIndex].voters.Remove(voterName);
            SaveJson();

            return Ok();
        }
    }
}
