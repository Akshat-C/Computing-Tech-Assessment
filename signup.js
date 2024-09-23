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

var email;
var password;
var pw_len;
var has_lowcase;
var has_upcase;
var has_num;
var has_symb;

/*function reset_var()
{
    email = "";
    password = "";
    pw_len = 0;
    has_lowcase = null;
    has_upcase = null;
    has_num = null;
    has_symb = null;
}*/

var userDetails = {
  Password: '',
  Dob: 0,
  Username: '',
  Genre: '',
  Price: ''
};

function signup() 
{
    email = "";
    password = "";
    pw_len = 0;
    has_lowcase = null;
    has_upcase = null;
    has_num = null;
    has_symb = null;
    
    email = document.getElementById("signup_email_inp").value;
    password = document.getElementById("signup_pw_inp").value ;
    pw_len = password.length;

    email = email.replace(".", "`");

    has_lowcase = password.match(/[a-z]/g);
    has_upcase = password.match(/[A-Z]/g);
    has_num = password.match(/[0-9]/g);
    has_symb = password.match(/[!@#$%^&*_]/g);

    var email_ref = firebase.database().ref("User_credentials");
    if (email == " " || password == " ")
    {
      document.getElementById("error_msg").innerHTML = "*Email or password cannot be empty"
    } else 
    {
      email_ref.orderByKey().equalTo(email).once('value', function(existence) {
        if (existence.exists()) {
          document.getElementById("error_msg").innerHTML = "*Account with this email already exists";
        } else {
          if (pw_len < 8 )
              {
                  document.getElementById("error_msg").innerHTML = "*Password Must be at Least 8 Characters";
              } else if (has_lowcase == null || has_upcase == null || has_num == null || has_symb == null)
              {
                  document.getElementById("error_msg").innerHTML = "*Password Should Have Lowercase and Uppercase Characters, Numbers and Symbols";
              } else 
              {
                  console.log(email);
                  console.log(password);
                  userDetails.Password = password;
                  localStorage.setItem("Sign Up Process: ", "proceeding");
                  localStorage.setItem("Email: ", email)
                  add_user_details(email, userDetails);     
                  window.location = "preferences.html";             
              }
        }
      }, function(error) {
        console.error('Error checking username:', error);
      });
    }   
}

function add_user_details(key, value)
{
    let email_ref = database.ref("User_credentials/" + key);
    email_ref.set(value)
    .then(() => {
        console.log('User credentials added successfully');
      })
      .catch((error) => {
        console.error('Error adding user credentials:', error);
      });
}
