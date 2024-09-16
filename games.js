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

var game0 = {
    Genre: "adventure",
    Price: "39",
    Age: "10",
    Rating: "4",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Minecraft"></button><h4 class="game_title_games">Minecraft</h4><img src="Minecraft Display Image.jpeg" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span>3 Stars</span><br><br><h5>Price: $39.00</h5><br><a href="game_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var game1 = {
    Genre: "other",
    Price: "0",
    Age: "0",
    Rating: "3",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Amongus"></button><h4 class="game_title_games">Among Us</h4><img src="Amongus Display Image.jpeg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h4><span>2 Stars</span><br><br><h5>Price: Free</h5><br><a href="amongus_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};


var game2 = {
    Genre: "shooter",
    Price: "0",
    Age: "15",
    Rating: "4",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Fortnite"></button><h4 class="game_title_games">Fortnite</h4><img src="Fortnite Display Image.jpeg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity: </h4><span>3 Stars</span><br><br><h5>Price: Free</h5><br><a href="fortnite_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var game3 = {
    Genre: "sport",
    Price: "39",
    Age: "0",
    Rating: "5",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn" onclick="favourite(this)" id="FC24"><i class="fa fa-heart-o" aria-hidden="true"></i></button><h4 class="game_title_games">EA FC 24</h4><img src="FC24 Display Image.jpg" class="game_disp_img" ></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span>2 Stars</span><br><br><h5>Price: $39.00</h5><br><a href="fc24_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var game4 = {
    Genre: "racing",
    Price: "0",
    Age: "0",
    Rating: "2",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Asphalt9"></button><h4 class="game_title_games">Asphalt 9</h4><img src="Asphalt Display Image.jpeg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity: </h5><span>3 Stars</span><br><br><h5>Price: $39.00</h5><br><a href="asphalt9_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var game5 = {
    Genre: "action",
    Price: "124",
    Age: "15",
    Rating: "4.5",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Ragnarok"></button><h4 class="col-12 game_title_games" style="margin-left: -10%;">God of War Ragnarok</h4><img src="Ragnarok Display.jpg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5 style="margin-top: 8%;">Popularity: </h5><span>2 Stars</span><br><br><h5>Price: $124.95</h5><br><a href="ragnarok_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var game6 = {
    Genre: "adventure",
    Price: "59.99",
    Age: "15",
    Rating: "4.5",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Elden"></button><h4 class="col-12 game_title_games">Elden Ring</h4><img src="Elden Display.webp" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center;" class="col-6"><h5 style="margin-top: 8%;">Popularity: </h5><span>2 Stars</span><br><br><h5>Price: $59.99</h5><br><a href="elden_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var game7 = {
    Genre: "action",
    Price: "124",
    Age: "15",
    Rating: "4.5",
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="RDR2"></button><h4 class="col-12 game_title_games" style="margin-left: -10%;">Red Dead Redemption 2</h4><img src="RDR2 Display.avif" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center;" class="col-6"><h5 style="margin-top: 25%;">Popularity: </h5><span>2 Stars</span><br><br><h5>Price: $90.95</h5><br><a href="rdr2_detail.html"><button class="btn btn-primary">View Game</button></a></div>'
};

var all_games = [game0, game1, game2, game3, game4, game5, game6, game7];
var all_displays = ["disp0", "disp1", "disp2", "disp3", "disp4", "disp5", "disp6", "disp7"];
var all_faves = ["Minecraft", "Amongus", "Fortnite", "FC24", "Asphalt9", "Ragnarok", "Elden", "RDR2"];

show_all();

function show_all()
{
    for (let i = 0; i < all_games.length; i++)
    {
        document.addEventListener('DOMContentLoaded', () => {
            for (let i = 0; i < all_games.length;) {
                disp_div = document.getElementById("disp" + i.toString());
                if (disp_div) 
                { 
                    disp_div.innerHTML = all_games[i].Data;
                } else 
                {
                    console.error(`Element with ID ${all_displays[i]} not found.`);
                }
                i++;
            }
            checkIfFavorited();
        });
    }
    console.log("Show_all occurred");
}
function getSelectedGenres() {
    const checkboxes = document.querySelectorAll('input[name="genre"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function getSelectedPrices() {
    const checkboxes = document.querySelectorAll('input[name="price"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function getSelectedAges() {
    const checkboxes = document.querySelectorAll('input[name="age"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function getSelectedRatings() {
    const checkboxes = document.querySelectorAll('input[name="rating"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.value);
}

function filter() {
    all_displays.forEach(display => {
        document.getElementById(display).style.display = "block";
        document.getElementById(display).innerHTML = all_games[all_displays.indexOf(display)].Data;
    });
    
    const selectedGenres = getSelectedGenres();
    const maxPrice = getSelectedPrices();
    const minAge = getSelectedAges();
    const minRating = getSelectedRatings();

    // Get all game items
    const gameItems = document.querySelectorAll('.game_disp');

    // Initialize match count
    let i = 0;

    all_games.forEach(game => {
        // Get data attributes from each game item
        const gameGenre = game.Genre;
        const gamePrice = game.Price;
        const gameAge = game.Age;
        const gameRating = game.Rating;

        // Determine if the game matches the filters
        const matchesGenre = selectedGenres.length === 0 || selectedGenres.includes(gameGenre);
        const matchesPrice = maxPrice.length === 0 || maxPrice.some(price => gamePrice <= price);
        const matchesAge = minAge.length === 0 || minAge.some(age => gameAge >= age);
        const matchesRating = minRating.length === 0 || minRating.some(rating => gameRating >= rating);
        
        

        // Show or hide game based on matching criteria
        if (matchesGenre && matchesPrice && matchesAge && matchesRating) 
        {
            document.getElementById("disp" + i.toString()).innerHTML = game.Data;
               
            //game.classList.remove('hidden');  Makes it visible
            i++; //Increment count if game matches
        } else {
            //game.classList.add('hidden'); Hides it while keeping layout
        }
    });
    for (let j = i; j < all_displays.length; j++)
    {
        document.getElementById("disp" + j.toString()).style.display = "none";
    }


    // Update the display with the number of matching games
    //document.getElementById('match-count').textContent = `Matching Games: ${matchCount}`;
}

var username = localStorage.getItem("Email: ");

if (username != "")
{
var userFavoritesRef = firebase.database().ref("User_credentials/" + username + "/Favourites");
}

function favourite(game_element) {
    // First, check if the game is already in the favorites list
    game_name = game_element.id;
    fave_element = document.getElementById(game_name);
if (username != "")
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
    userFavoritesRef.once('value', function(snapshot) {
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

// Call this function when the page loads to check the initial button state
document.addEventListener("DOMContentLoaded", function() {
    

    // Add event listener to toggle favorite status when clicked
});