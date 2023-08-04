using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SteelTank_TestingEnvironment.Models.ViewModels
{
    public class PageList<T> where T : class
    {
        public PageList()
        {
            PageItems = new List<T>();
        }

        public int PageIndex { get; set; }
        public int PageCount { get; set; }
        public List<T> PageItems { get; set; }
    }
}
