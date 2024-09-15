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

function authenticate_user()
{
    email = document.getElementById("login_email").value;
    email = email.replace(/./g, ",")
    password = document.getElementById("login_password").value;

    let email_ref = firebase.database().ref('User_credentials/');
    if (email == "" || password == "")
        {
          document.getElementById("error_msg").innerHTML = "*Username or password cannot be empty"
        } else 
        {
          email_ref.orderByKey().equalTo(email).once('value', function(existence) {
            if (existence.exists()) {
                user_ref = firebase.database().ref("User_credentials/" + email + "/" + "Username");
                pw_ref = firebase.database().ref("User_credentials/" + email + "/" + "Password");
                pw_ref.once('value', function(correct_pw) {
                    if (correct_pw.exists()) {
                      database_pw = correct_pw.val();
                      if (database_pw === password)
                      {
                        console.log("Successful Authentication");
                        localStorage.setItem("Authenticated", "yes");
                        localStorage.setItem("Email: ", email);

                        user_ref.once('value', function(username) {
                          if (username.exists()) {
                            username_details = username.val();
                            localStorage.setItem("Username", username_details);
                            window.location = "games.html";
                          } else 
                          {
                            console.error("Username does not exist:", error);
                          }
                        }, function(error) {
                          console.error('Error getting username:', error);
                        });
                        

                      } else 
                      {
                        document.getElementById("error_msg").innerHTML = "*Incorrect password"
                      }
                    } 
                  }, function(error) {
                    console.error('Error checking password:', error);
                  });
            } else 
            {
                document.getElementById("error_msg").innerHTML = "*Incorrect username"
            }
          }, function(error) {
            console.error('Error checking username:', error);
          });
        }
}