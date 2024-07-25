using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class IndexModel : PageModel
    {
        [BindProperty]
        public string InputText { get; set; }

        [BindProperty]
        public bool CheckBox { get; set; }

        public string TextColor { get; set; } = "black";

        public void OnPost()
        {
            TextColor = CheckBox ? "red" : "black";
        }

        public void OnGet()
        {
            InputText = string.Empty;
            CheckBox = false;
        }
    }
}
