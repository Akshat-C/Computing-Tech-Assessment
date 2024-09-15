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

var email_ref;
var user_ref;
var password_ref;
var email;
var username;
var password;

var new_username;
var new_email;
var new_password;

if (localStorage.getItem("Authenticated") == "yes")
    {
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById("settings_div").style.display = "block";   
            document.getElementById("account_prompt").style.display = "none";
            email_ref = firebase.database().ref("User_credentials/")
            user_ref = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Username");
            password_ref = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Password");
            email = localStorage.getItem("Email: ");
            console.log(email);
            document.getElementById("email_inp").value = email;
          
          user_ref.once('value', function(db_user) {
            if (db_user.exists()) {
                username = db_user.val();
                new_username = username;
                console.log(username);
                document.getElementById("username_inp").value = username;        
            } else 
              {
                console.error("Username does not exist:");
              }
              
            }, function(error) {
            console.error('Error getting username:', error);
          });
          
          password_ref.once('value', function(db_pw) {
            if (db_pw.exists()) {
                password = db_pw.val();
                new_password = password;
                console.log(password);            
            } else 
              {
                console.error("Username does not exist:", error);
              }
              
            }, function(error) {
            console.error('Error getting username:', error);
          });
          
        });
        
    } else 
    {
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById("settings_div").style.display = "none";   
            document.getElementById("account_prompt").style.display = "block";
        });
        
    }

function save_changes()
{
  new_username = document.getElementById("username_inp").value;
  new_email = document.getElementById("email_inp").value;
  ent_pw = document.getElementById("pw_inp").value;
  new_pw = document.getElementById("new_pw_inp").value;
  re_new_pw = document.getElementById("re_pw_inp").value;
  change_count = 0;

  user_ref.set(new_username);
  change_count++;

  if (ent_pw != password) 
  {
    document.getElementById("alert").style.display = "block";
    document.getElementById("success").style.display = "none";
    document.getElementById("alert").innerHTML = "Incorrect password";
  } else 
  {
    if (new_pw != re_new_pw)
    {
      document.getElementById("alert").style.display = "block";
      document.getElementById("success").style.display = "none";
      document.getElementById("alert").innerHTML = "Both your passwords do not match";
    } else 
    {
      password_ref.set(new_pw);
      change_count++;
    }
  }

  if (change_count == 2)
  {
    document.getElementById("success").style.display = "block";
    document.getElementById("alert").style.display = "none";
    document.getElementById("success").innerText = "Your username and password have been updated successfully"
  } else 
  {
    document.getElementById("success").style.display = "block";
    document.getElementById("success").innerHTML = "Your username has been updated successfully"
  }
}

function prompt(html_file)
{
    if (new_username != username || new_password != password)
    {
        document.getElementById("alert").style.display = "block";
        document.getElementById("success").style.display = "none";
        document.getElementById("alert").innerHTML = "You have unsaved changes" + "<button class='btn btn-danger><a href='index.html'>Leave without Saving</a></button>";
    } else
    {
        window.location = html_file.id;
    }
    
}
