using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace project1.Pages
{
    public class PrivacyModel : PageModel
    {
        private readonly ILogger<PrivacyModel> _logger;
        public int ID { get; set; }
        public string Name { get; set; }
        public PrivacyModel(ILogger<PrivacyModel> logger)
        {
            _logger = logger;
        }

        public void OnGet(int id, string name)
        {
        
            ID = id;
            Name = name;
        }
        public void OnGetNew(int id)
        {
            Console.WriteLine(id);
        }

    }
}