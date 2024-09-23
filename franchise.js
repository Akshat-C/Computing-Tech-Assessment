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

  let path = window.location.pathname;
  let fileName = path.substring(path.lastIndexOf('/') + 1);

  if (fileName == "minecraft_franchise.html"){
    var game0 = {
        Title: "Minecraft",
        Page: "game_detail.html",
        Age: 0
    };
    var game1 = {
        Title: "Minecraft_Dungeons",
        Page: "dungeons.html",
        Age: 0
    };
    var game2 = {
        Title: "Minecraft_Legends",
        Page: "legends.html",
        Age: 0
    };
    var all_faves = ["Minecraft", "Minecraft_Dungeons", "Minecraft_Legends"];
  } else if (fileName == "ea_franchise.html"){
    var game0 = {
        Title: "FC24",
        Page: "fc24_detail.html",
        Age: 0
    };
    var game1 = {
        Title: "F124",
        Page: "f124_detail.html",
        Age: 0
    };
    var game2 = {
        Title: "UFC5",
        Page: "ufc5_detail.html",
        Age: 15
    };
    var all_faves = ["FC24", "F124", "UFC5"];
  } else if (fileName == "forza_franchise.html"){
    var game0 = {
        Title: "F_Motorsport",
        Page: "motosport_detail.html",
        Age: 0
    };
    var game1 = {
        Title: "F_Horizon",
        Page: "horizon_detail.html",
        Age: 0
    };
    var game2 = {
        Title: "F_Horizon4",
        Page: "horizon4_detail.html",
        Age: 0
    };
  } else if (fileName == "epic_franchise.html"){
    var game0 = {
        Title: "Fortnite",
        Page: "fortnite_detail.html",
        Age: 15
    };
    var game1 = {
        Title: "Fall_Guys",
        Page: "fall_detail.html",
        Age: 0
    };
    var game2 = {
        Title: "Rocket_League",
        Page: "rocket_detail.html",
        Age: 0
    };
  }

  var all_games = [game0, game1, game2];
  

  var username = localStorage.getItem("Email: ");

if (username !== undefined)
{
var userFavoritesRef = firebase.database().ref("User_credentials/" + username + "/Favourites");
}

  function fetch_ratings()
  {
      //console.log("Amo");
      all_games.forEach(game =>{
          //console.log(game.Title);
          ratings_ref = firebase.database().ref(game.Title + "/Avg_Rating");
          ratings_ref.on("value", function(snapshot){
              if (snapshot.exists())
              {
                  document.getElementById(game.Title+"_rating").innerHTML = "";
                  avg_rating = snapshot.val();
                  rounded_rating = Math.floor(avg_rating);
                  rating_diff = avg_rating - rounded_rating;
  
                  if (avg_rating >= 4.75)
                  {
                      for (i=0; i< 5; i++)
                      {
                          var star1 = document.createElement("i");
                          star1.classList.add("fa");
                          star1.classList.add("fa-star");
                          document.getElementById(game.Title+"_rating").appendChild(star1);
                      }
                  } else 
                  {
                      for (j=0; j < rounded_rating; j++)
                      {
                          var star2 = document.createElement("i");
                          star2.classList.add("fa");
                          star2.classList.add("fa-star");
                          document.getElementById(game.Title+"_rating").appendChild(star2);
                      }
                      if (rating_diff >= 0.25 && rating_diff < 0.75)
                      {
                          var star3 = document.createElement("i");
                          star3.classList.add("fa");
                          star3.classList.add("fa-star-half-o");
                          document.getElementById(game.Title+"_rating").appendChild(star3);
                      } else if (rating >= 0.75 && rating_diff < 1.0)
                      {
                          var star4 = document.createElement("i");
                          star4.classList.add("fa");
                          star4.classList.add("fa-star");
                          document.getElementById(game.Title+"_rating").appendChild(star4);
                      }
                  }
  
              }
          });
          
      });
          
  }

  function favourite(game_element) {
    // First, check if the game is already in the favorites list
    game_name = game_element.id;
    fave_element = document.getElementById(game_name);
if (username !== undefined)
{
    userFavoritesRef.once('value', function(snapshot) {
        let foundKey = null;
        snapshot.forEach(function(childSnapshot) {
            if (childSnapshot.val() === game_name) {
                foundKey = childSnapshot.key; // Store the key if found
            }
        });

        // If the game is found, remove it from favorites
        if (foundKey) {
            userFavoritesRef.child(foundKey).remove()
            .then(() => {
                console.log("Game removed from favorites:", game_name);
                fave_element.classList.remove("fa-heart");
                fave_element.classList.add("fa-heart-o");
            })
            .catch((error) => {
                console.error("Error removing favorite:", error);
            });
        } 
        // If the game is not found, add it to favorites
        else {
            userFavoritesRef.push(game_name)
            .then(() => {
                console.log("Game added to favorites:", game_name);
                fave_element.classList.remove("fa-heart-o");
                fave_element.classList.add("fa-heart");
            })
            .catch((error) => {
                console.error("Error adding favorite:", error);
            });
        }
    });
}
}

// Function to check if a game is favorited on page load
function checkIfFavorited() {
    userFavoritesRef.on('value', function(snapshot) {
        let isFavorited = false;
        let i = 0;
        snapshot.forEach(function(childSnapshot) {
            game_name = childSnapshot.val();
            if (all_faves.includes(game_name)) {
                isFavorited = true;
                fave_element = document.getElementById(game_name);
                fave_element.classList.remove("fa-heart-o");
                fave_element.classList.add("fa-heart");
            }
            i++;
        });
        // Adjust button state based on whether it's favorited or not
        /*if (isFavorited) {
            
        }*/
    });
}

var userAge;
var dob;

if (localStorage.getItem("Authenticated") == "yes")
    {
        var dob_ref = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Dob");
        dob_ref.on("value", function(dobSnapshot){
        dob = dobSnapshot.val();
        
        let today = new Date();
            let dob_date = new Date(dob);
            console.log(dob_date);
            userAge = today.getFullYear() - dob_date.getFullYear();
            let month_difference = today.getMonth() - dob_date.getMonth();
            if (month_difference < 0 || (month_difference === 0 && today.getDate() < dob_date.getDate())) {
                userAge--;
            }
        console.log(userAge);
        });
        function check_age(button){
            btn_id = button.id;
            console.log(btn_id);
            all_games.forEach(game =>{
                if (game.Name == btn_id)
                {
                    clicked_game = game;
                }
            });
            console.log(clicked_game.Age)
            if (userAge < 80){
                var alert = document.getElementById('age_alert');
                alert.style.display = "block";
                window.scrollTo(0,0);
            } else {
                window.location = clicked_game.Page;
            }
        }
    }

fetch_ratings();
checkIfFavorited();
