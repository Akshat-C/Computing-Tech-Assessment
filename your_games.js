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

// Variables to hold user preferences
var preferred_genre, preferred_price, age;

// References to the database nodes
var genre_ref = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Genre");
var price_ref = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Price");
var dob_ref = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Dob");

// Function to calculate the user's age based on their date of birth
function calculateAge(dob) {
    let today = new Date();
    let dob_date = new Date(dob);
    let userAge = today.getFullYear() - dob_date.getFullYear();
    let month_difference = today.getMonth() - dob_date.getMonth();
    if (month_difference < 0 || (month_difference === 0 && today.getDate() < dob_date.getDate())) {
        userAge--;
    }
    console.log(userAge);
    return userAge;
}

var game0 = {
    Title: "Minecraft",
    Genre: "adventure",
    Price: 39,
    Age: 10,
    Rating: "4",
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="Minecraft Display Image.jpeg"></div><div class="col-6 pref_title_disp"><h3>Minecraft</h3><button class="btn btn-primary"><a href="game_detail.html">View Game</a></button></div></div><br>'
};

var game1 = {
    Title: "Amongus",
    Genre: "other",
    Price: 0,
    Age: 0,
    Rating: "3",
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="Amongus Display Image.jpeg"></div><div class="col-6 pref_title_disp"><h3>Among Us</h3><button class="btn btn-primary"><a href="amongus_detail.html">View Game</a></button></div></div><br>'
};


var game2 = {
    Title: "Fortnite",
    Genre: "shooter",
    Price: 0,
    Age: 15,
    Rating: "4",
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="Fortnite Display Image.jpeg"></div><div class="col-6 pref_title_disp"><h3>Fortnite</h3><button class="btn btn-primary"><a href="fortnite_detail.html">View Game</a></button></div></div><br>'
};

var game3 = {
    Title: "FC24",
    Genre: "sport",
    Price: 39,
    Age: 0,
    Rating: "5",
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="FC24 Display Image.jpg"></div><div class="col-6 pref_title_disp"><h3>EA FC 24</h3><button class="btn btn-primary"><a href="fc24_detail.html">View Game</a></button></div></div><br>'
};

var game4 = {
    Title: "Asphalt9",
    Genre: "racing",
    Price: 0,
    Age: 0,
    Rating: "2",
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="Asphalt Display Image.jpeg"></div><div class="col-6 pref_title_disp"><h3>Asphalt 9</h3><button class="btn btn-primary"><a href="asphalt9_detail.html">View Game</a></button></div></div><br>'
};

var game5 = {
    Title: "Ragnarok",
    Genre: "action",
    Price: 124,
    Age: 15,
    Rating: 4.5,
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="Ragnarok Display.jpg"></div><div class="col-6 pref_title_disp"><h3>God of War Ragnarok</h3><button class="btn btn-primary"><a href="ragnarok_detail.html">View Game</a></button></div></div><br>'
};

var game6 = {
    Title: "Elden",
    Genre: "adventure",
    Price: 59.99,
    Age: 15,
    Rating: 4.5,
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="Elden Display.webp"></div><div class="col-6 pref_title_disp"><h3>Elden Ring</h3><button class="btn btn-primary"><a href="elden_detail.html">View Game</a></button></div></div>'
};

var game7 = {
    Title: "RDR2",
    Genre: "action",
    Price: 124,
    Age: "15",
    Rating: 4.5,
    Data: '<div class="row col-10 pref_disp"><div class="col-6"><img class="pref_disp_img" src="RDR2 Display.avif"></div><div class="col-6 pref_title_disp"><h3>Red Dead Redemption 2</h3><button class="btn btn-primary"><a href="rdr2_detail.html">View Game</a></button></div></div><br>'
};

var all_games = [game0, game1, game2, game3, game4, game5, game6, game7];

// Fetch user preferences using Promises
Promise.all([
    genre_ref.once('value'),
    price_ref.once('value'),
    dob_ref.once('value')
]).then(([genreSnapshot, priceSnapshot, dobSnapshot]) => {
    // Assign the values from Firebase
    preferred_genre = genreSnapshot.val();
    preferred_price = priceSnapshot.val();
    age = calculateAge(dobSnapshot.val());

    // Now that all data has been fetched, process the games
    processGames();
    fetchFavorites();
}).catch(error => {
    console.error("Error fetching user preferences:", error);
});

// Function to process games based on user preferences
function processGames() {

    let i = 0; // Initialize a counter for matching games
    all_games.forEach(game => {
        const matchesGenre = preferred_genre == game.Genre;
        const matchesPrice = preferred_price >= game.Price;
        const matchesAge = age >= game.Age;

        // If all conditions match, display the game
        if (matchesGenre && matchesPrice && matchesAge) {
            console.log("Matching Game:", game);
            document.getElementById("recommendation_disp").innerHTML += game.Data;
            i++; // Increment the match count
        } else {
            console.log("Game does not match:", game);
        }
    });

    console.log(`Total matching games: ${i}`);
}

var userFavoritesRef = firebase.database().ref("User_credentials/" + localStorage.getItem("Email: ") + "/Favourites");

// Function to fetch all favorite games
function fetchFavorites() {
    all_titles = [];
    all_games.forEach(title => {
        all_titles.push(title.Title);
    });
    console.log(all_titles);
    userFavoritesRef.on('value', function(snapshot) {
        if (snapshot.exists()) {

            const favoritesList = snapshot.val();
            console.log(favoritesList);
            
            // Iterate through all favorited games and display them
            i = 0;
            for (const key in favoritesList) {
                if (favoritesList.hasOwnProperty(key)) {
                    const gameTitle = favoritesList[key];
                    console.log(gameTitle);
                    /*// Create a new list item for each game title
                    const listItem = document.createElement("li");
                    listItem.textContent = gameTitle;
                    favoritesDisplay.appendChild(listItem);*/

                    if (all_titles.includes(gameTitle))
                    {
                        fave_disp = document.getElementById("favourites_disp");
                        disp_div = document.createElement("div");
                        disp_div.classList.add("row");
                        disp_div.classList.add("col-12");
                        game_div = document.createElement("div");
                        game_div.classList.add("col-10")
                        game_div.innerHTML = all_games[all_titles.indexOf(gameTitle)].Data;
                        button = document.createElement("button");
                        button.textContent = "Remove";
                        button.style.height = "fit-content";
                        button.classList.add("btn");
                        button.classList.add("btn-danger");
                        button.classList.add("col-2");
                        disp_div.appendChild(game_div);
                        disp_div.appendChild(button);
                        fave_disp.appendChild(disp_div);
                        console.log("amo");
                    }
                    i++;
                }
            }
        } else {
            console.log("No favorites found.");
        }
    }, function(error) {
        console.error("Error fetching favorites:", error);
    });
}

// Call this function to display all favorited games when the page loads or when needed
//document.addEventListener("DOMContentLoaded", fetchFavorites);