using System.Collections.Generic;

namespace Angular2Test1.Models
{
    public class Location
    {
        public string address { get; set; }
        public string city { get; set; }
        public string country { get; set; }
    }

    public class Session
    {
        public int id { get; set; }
        public string name { get; set; }
        public string presenter { get; set; }
        public int duration { get; set; }
        public string level { get; set; }
        public string @abstract { get; set; }
        public List<string> voters { get; set; }
    }

    public class Event
    {
        public int id { get; set; }
        public string name { get; set; }
        public string date { get; set; }
        public string time { get; set; }
        public string price { get; set; }
        public string imageUrl { get; set; }
        public Location location { get; set; }
        public List<Session> sessions { get; set; }
    }

    public class SessionResults
    {
        public int eventId { get; set; }
        public string name { get; set; }
        public string desc { get; set; }
    }

    public class User
    {
        public string username { get; set; }
        public string password { get; set; }
    }
}

