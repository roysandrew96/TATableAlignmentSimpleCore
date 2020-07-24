using System.Collections.Specialized;
using System.Reflection.PortableExecutable;
using System.Transactions;
using System.Security.Cryptography.X509Certificates;
using System.Runtime.CompilerServices;
using System.Reflection.Emit;
using System.Data.SqlTypes;
using System.ComponentModel;
using System.Text;
using System.Runtime.InteropServices;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TATableAlignmentSimpleCore.Models;
using System.Web;

namespace TATableAlignmentSimpleCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        private static String[] colorNames = {
            "Red",
            "Green",
            "Blue"
        };

        private static StringBuilder sb = new StringBuilder();

        public static string BuildColorList() {
            foreach (string color in colorNames)
            {
                sb.Append(String.Format("<option>{0}</option>", color));
            }
            return sb.ToString();
        }

        public IActionResult Index()
        { 

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
