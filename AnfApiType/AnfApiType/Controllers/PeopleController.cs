using AnfApiType.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AnfApiType.Controllers
{
    public class PeopleController : ApiController
    {
        PeopleRepository repository = PeopleRepository.Current;
        public IEnumerable<People> GetAll()
        {
            return repository.GetAll();
        }
    }
}
