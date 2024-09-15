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