using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AnfApiType.Models
{
    public class PeopleRepository
    {
        private static PeopleRepository repo = new PeopleRepository();

        public static PeopleRepository Current
        {
            get
            {
                return repo;
            }
        }

        private List<People> data = new List<People> {
            new People {
                PeopleId = 1, FirstName = "Петр",LastName="Шаталов"},
            new People {
                  PeopleId = 2, FirstName = "Игорь",LastName="Баталов"},
            new People {
                  PeopleId = 3, FirstName = "Юрий",LastName="Каталов"}
        };

        public IEnumerable<People> GetAll()
        {
            return data;
        }

        public IEnumerable<People> GetPerPage(int page,int pageSize) {
            return data.Skip((page-1)*pageSize).Take(pageSize);
        }

        public People Get(int id)
        {
            return data.Where(r => r.PeopleId == id).FirstOrDefault();
        }

        public People Add(People item)
        {
            item.PeopleId = data.Count + 1;
            data.Add(item);
            return item;
        }

        public void Remove(int id)
        {
            People item = Get(id);
            if (item != null)
            {
                data.Remove(item);
            }
        }

        public bool Update(People item)
        {
            People storedItem = Get(item.PeopleId);
            if (storedItem != null)
            {
                storedItem.FirstName = item.FirstName;
                storedItem.LastName = item.LastName;
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}