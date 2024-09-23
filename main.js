var lang = localStorage.getItem("Current Language");
var zoom = localStorage.getItem("Zoom")

let path = window.location.pathname;
let fileName = path.substring(path.lastIndexOf('/') + 1);

window.onload = function(){
    googleTranslateElementInit();
    enable_lang();
    auth_status = localStorage.getItem("Authenticated");
    if (auth_status == "yes")
    {
        document.getElementById("signup_tab").style.display = "none";
        document.getElementById("login_tab").style.display = "none";
        document.getElementById("account_tab").style.display = "inline";
    } else 
    {
        document.getElementById("signup_tab").style.display = "inline";
        document.getElementById("login_tab").style.display = "inline";
        document.getElementById("account_tab").style.display = "none";
    }
    
    if (zoom != 100 || zoom !== undefined){
        document.body.style.zoom = zoom;
    }
}

function googleTranslateElementInit() {
    if (lang === undefined){
        new google.translate.TranslateElement({
            pageLanguage: "en",
            autoDisplay: false
            }, 'google_translate_element');
    } else {
        new google.translate.TranslateElement({
            pageLanguage: lang,
            autoDisplay: false
            }, 'google_translate_element');
            console.log(lang);
    }
}
 
    
function enable_lang(){
    console.log("vwoop");
    if (fileName == "accessibility.html"){
        lang = document.getElementById("select_language").value;
    }
    
    console.log(lang);
    var translateDropdown = document.querySelector('.goog-te-combo');
        if (translateDropdown) {
            translateDropdown.value = lang; // Set the dropdown to French (code 'fr')
            translateDropdown.dispatchEvent(new Event('change')); // Trigger change event
            console.log("amo");
            localStorage.setItem("Current Language", lang);
        }
    
}
    
    function enable_zoom()
    {
        zoom = document.getElementById("range_inp").value;
        console.log(zoom);
        document.body.style.zoom = zoom.toString() + "%";
        if (zoom != 100)
        {
            document.body.style.overflowX = "auto";
        } else {
            document.body.style.overflowX = "hidden";
        }
        
    }

function disable_zoom(){
    document.body.style.zoom = "100%";
    document.body.style.overflowX = "hidden";
}

function disable_lang()
{
    var translateDropdown = document.querySelector('.goog-te-combo');
    if (translateDropdown) {
        translateDropdown.value = "en"; // Set the dropdown to French (code 'fr')
        translateDropdown.dispatchEvent(new Event('change')); // Trigger change event
        console.log("amo");
        localStorage.setItem("Current Language", "en");
    }
}
    

function check_auth()
{
    auth_status = localStorage.getItem("Authenticated");
    if (auth_status == "yes")
    {
        document.getElementById("signup_tab").style.display = "none";
        document.getElementById("login_tab").style.display = "none";
        document.getElementById("account_tab").style.display = "inline";
    } else 
    {
        document.getElementById("signup_tab").style.display = "inline";
        document.getElementById("login_tab").style.display = "inline";
        document.getElementById("account_tab").style.display = "none";
    }
}

