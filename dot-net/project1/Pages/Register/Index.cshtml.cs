using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace project1.Pages.Register
{
    public class IndexModel : PageModel
    {
        public void OnGet()
        {
            Console.WriteLine("Register Page is called");
        }
    }
}
