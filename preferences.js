if (localStorage.getItem("Sign Up Process: ") == "proceeding" || localStorage.getItem("Authenticated") == "yes")
{
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("preferences_div").style.display = "block";   
        document.getElementById("account_prompt").style.display = "none";
    });
} else 
{
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("preferences_div").style.display = "none";   
        document.getElementById("account_prompt").style.display = "block";
    });
    
}

if (localStorage.getItem("Sign Up Process: ") == "proceeding")
{
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("dob_inp").style.display = "block";
        document.getElementById("dob").style.display = "block";
    });
    var userDetails = {
        Dob: 0,
        Username: "",
        Genre: "none",
        Price: 0
    };
    var signing_up = "yes";
} else 
{
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById("dob_inp").style.display = "none";
        document.getElementById("dob").style.display = "none";
    });
    var userDetails = {
        Username: '',
        Genre: "none",
        Price: 0
    };
}

function prompt(html_file)
{
    if (localStorage.getItem("Sign Up Process: ") == "proceeding")
    {
        document.getElementById("alert").style.display = "block";
    } else
    {
        window.location = html_file.id;
    }
    
}


// Import the functions you need from the SDKs you need
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7qNaX-8a1PjKCGCJcAPo-9ZYurDGGHMc",
    authDomain: "gamenet-assessment.firebaseapp.com",
    databaseURL: "https://gamenet-assessment-default-rtdb.firebaseio.com",
    projectId: "gamenet-assessment",
    storageBucket: "gamenet-assessment.appspot.com",
    messagingSenderId: "1090351654728",
    appId: "1:1090351654728:web:f182a2b0854a2c5502b57d",
    measurementId: "G-90TBFX7ZSF"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);


var prev_button = "";


function btn_select(id, id1, id2, id3, id4)
{
    const element = document.getElementById(id); 
    element.classList.remove("btn-primary");
    element.classList.add("btn-secondary");

    const element1 = document.getElementById(id1); 
    element1.classList.remove("btn-secondary");
    element1.classList.add("btn-primary");
    const element2 = document.getElementById(id2); 
    element2.classList.remove("btn-secondary");
    element2.classList.add("btn-primary");
    const element3 = document.getElementById(id3); 
    element3.classList.remove("btn-secondary");
    element3.classList.add("btn-primary");
    const element4 = document.getElementById(id4); 
    element4.classList.remove("btn-secondary");
    element4.classList.add("btn-primary");
}

function genre(button)
{
    if (prev_button != "")
    {
        prev_button.classList.remove("btn-secondary");
        prev_button.classList.add("btn-info");
    }

    var button_id = document.getElementById(button.id);
    button_id.classList.remove("btn-info");
    button_id.classList.add("btn-secondary");
    prev_button = button_id;
    userDetails.Genre = button.id;

}
function price_f()
{
    btn_select("btn_f", "btn_3", "btn_5", "btn_8", "btn_n");
    userDetails.Price = "Free";
}

function price_3()
{
    btn_select("btn_3", "btn_f", "btn_5", "btn_8", "btn_n");
    userDetails.Price = 30;
}

function price_5()
{
    btn_select("btn_5", "btn_3", "btn_f", "btn_8", "btn_n");
    userDetails.Price = 50;
}

function price_8()
{
    btn_select("btn_8", "btn_3", "btn_5", "btn_f", "btn_n");
    userDetails.Price = 80;
}

function price_n()
{
    btn_select("btn_n", "btn_3", "btn_5", "btn_8", "btn_f");
    userDetails.Price = "none";
}



function add_preferences() 
{
    if (localStorage.getItem("Sign Up Process: ") == "proceeding")
    {
        if (document.getElementById("username_inp").value != "" || userDetails.Dob != 0 )
            {
                userDetails.Username = document.getElementById("username_inp").value;
                userDetails.Dob = document.getElementById("dob_inp").value;
                console.log(userDetails.Dob);
        
                var preferenceRef = firebase.database().ref('User_credentials/' + localStorage.getItem("Email: "));
                preferenceRef.update(userDetails)
                .then(() => {
                 console.log('User details updated successfully');
                 localStorage.setItem("Sign Up Process: ", "done");
                 localStorage.setItem("Username", userDetails.Username);
                 localStorage.setItem("Authenticated", "yes");
                 window.location = "games.html";
                })
                .catch((error) => {
                console.error('Error updating user details:', error);
                document.getElementById("alert").style.display = "block";
                });
        
            } else 
            {
                document.getElementById("alert").style.display = "block";
            }
    } else 
    {
        userDetails.Username = document.getElementById("username_inp").value;
        var preferenceRef = firebase.database().ref('User_credentials/' + localStorage.getItem("Email: "));
        preferenceRef.update(userDetails);
        localStorage.setItem("User: ", userDetails.Username);
    }



    
}
