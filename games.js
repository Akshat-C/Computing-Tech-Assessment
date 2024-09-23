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
    Title: "Minecraft",
    Name: "game0",
    Page: "game_detail.html",
    Genre: "adventure",
    Price: 39,
    Age: 10,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Minecraft"></button><h4 class="game_title_games">Minecraft</h4><img src="Minecraft Display Image.jpeg" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Minecraft_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 10+</h5><br><h5 class="price_disp">$39.00</h5><br><a><button class="btn btn-primary" id="game0" onclick="check_age(this)">View Game</button></a><br><br></div>'
};

var game1 = {
    Title: "Amongus",
    Name: "game1",
    Page: "amongus_detail.html",
    Genre: "other",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Amongus"></button><h4 class="game_title_games">Among Us</h4><img src="Amongus Display Image.jpeg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h4><span id="Amongus_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">Free</h5><br><a><button class="btn btn-primary" id="game1" onclick="check_age(this)">View Game</button></a></div>'
};


var game2 = {
    Title: "Fortnite",
    Name: "game2",
    Page: "fortnite_detail.html",
    Genre: "shooter",
    Price: 0,
    Age: 15,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Fortnite"></button><h4 class="game_title_games">Fortnite</h4><img src="Fortnite Display Image.jpeg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity: </h4><span id="Fortnite_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 15+</h5><br><h5 class="price_disp">Free</h5><br><a><button class="btn btn-primary" id="game2" onclick="check_age(this)">View Game</button></a><br><br></div>'
};

var game3 = {
    Title: "FC24",
    Name: "game3",
    Page: "fc24_detail.html",
    Genre: "sport",
    Price: 39,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn" onclick="favourite(this)" id="FC24"><i class="fa fa-heart-o" aria-hidden="true"></i></button><h4 class="game_title_games">EA FC 24</h4><img src="FC24 Display Image.jpg" class="game_disp_img" ></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="FC24_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">$109.95</h5><br><a><button class="btn btn-primary" id="game3" onclick="check_age(this)">View Game</button></a></div>'
};

var game4 = {
    Title: "Asphalt9",
    Name: "game4",
    Page: "asphalt9_detail.html",
    Genre: "racing",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Asphalt9"></button><h4 class="game_title_games">Asphalt 9</h4><img src="Asphalt Display Image.jpeg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity: </h5><span id="Asphalt9_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">Free</h5><br><a><button class="btn btn-primary" id="game4" onclick="check_age(this)">View Game</button></a></div>'
};

var game5 = {
    Title: "Ragnarok",
    Name: "game5",
    Page: "ragnarok_detail.html",
    Genre: "action",
    Price: 124,
    Age: 15,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Ragnarok"></button><h4 class="col-12 game_title_games" style="margin-left: -10%;">God of War Ragnarok</h4><img src="Ragnarok Display.jpg" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5 style="margin-top: 8%;">Popularity: </h5><span id="Ragnarok_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 15+</h5><br><h5 class="price_disp">Price: $124.95</h5><br><a><button class="btn btn-primary" id="game5" onclick="check_age(this)">View Game</button></a><br></div>'
};

var game6 = {
    Title: "Elden",
    Name: "game6",
    Page: "elden_detail.html",
    Genre: "adventure",
    Price: 59.99,
    Age: 15,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Elden"></button><h4 class="col-12 game_title_games">Elden Ring</h4><img src="Elden Display.webp" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center;" class="col-6"><h5 style="margin-top: 8%;">Popularity: </h5><span id="Elden_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 15+</h5><br><h5 class="price_disp">$59.99</h5><br><a><button class="btn btn-primary" id="game6" onclick="check_age(this)">View Game</button></a><br><br></div>'
};

var game7 = {
    Title: "RDR2",
    Name: "game7",
    Page: "rdr2_detail.html",
    Genre: "action",
    Price: 124,
    Age: 15,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="RDR2"></button><h4 class="col-12 game_title_games" style="margin-left: -10%;">Red Dead Redemption 2</h4><img src="RDR2 Display.avif" class="game_disp_img"></div><div style="float: right; padding-top: 5%; text-align: center;" class="col-6"><h5 style="margin-top: 25%;">Popularity: </h5><span id="RDR2_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 15+</h5><br><h5 class="price_disp">Price: $90.95</h5><br><a><button class="btn btn-primary" id="game7" onclick="check_age(this)">View Game</button></a><br></div>'
};
var game8 = {
    Title: "Minecraft_Legends",
    Name: "game8",
    Page: "legends.html",
    Genre: "action",
    Price: 39.99,
    Age: 10,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Minecraft_Legends"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Minecraft Legends</h4><img src="MC_Legends Display.avif" class="game_disp_img"><br><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Minecraft_Legends_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 10+</h5><br><h5 class="price_disp">$39.00</h5><br><a><button class="btn btn-primary" id="game8" onclick="check_age(this)">View Game</button></a><br><br></div>'
};
var game9 = {
    Title: "F124",
    Name: "game9",
    Page: "f124_detail.html",
    Genre: "racing",
    Price: 39.99,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="F124"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">F1 24</h4><img src="F124 Display.avif" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="F124_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">$99.00</h5><br><a><button class="btn btn-primary" id="game9" onclick="check_age(this)">View Game</button></a>'
};
var game10 = {
    Title: "Fall_Guys",
    Name: "game10",
    Page: "fall_detail.html",
    Genre: "none",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Fall_Guys"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Fall Guys</h4><img src="Fall Display.webp" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Fall_Guys_Rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5>Free</h5><br><a><button class="btn btn-primary" id="game10" onclick="check_age(this)">View Game</button></a>'
};
var game11 = {
    Title: "Minecraft_Dungeons",
    Name: "game11",
    Page: "dungeons_detail.html",
    Genre: "action",
    Price: 19.99,
    Age: 10,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Minecraft_Dungeons"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Minecraft Dungeons</h4><img src="MC_Dungeons Display.avif" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Minecraft_Dungeons_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">$39.00</h5><br><a><button class="btn btn-primary" id="game11" onclick="check_age(this)">View Game</button></a></div>'
};
var game12 = {
    Title: "Rocket_League",
    Name: "game12",
    Page: "rocket_detail.html",
    Genre: "sports",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Rocket_League"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Rocket League</h4><img src="Rocket Display.jpeg" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Rocket_League_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">Free</h5><br><a><button class="btn btn-primary" id="game12" onclick="check_age(this)">View Game</button></a></div>'
};
var game13 = {
    Title: "F_Motorsport",
    Name: "game13",
    Page: "motorsport_detail.html",
    Genre: "racing",
    Price: 119.95,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="F_Motorsport"></button><h5 class="game_title_games" style="white-space: nowrap; font-size: 20px;">Forza Motorsport 8</h4><img src="F_Motorsport Display.jpeg" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="F_Motorsport_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">$119.95</h5><br><a><button class="btn btn-primary" id="game13" onclick="check_age(this)">View Game</button></a></div>'
};
var game14 = {
    Title: "F_Horizon",
    Name: "game14",
    Page: "horizon_detail.html",
    Genre: "racing",
    Price: 99.95,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="F_Horizon"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Forza Horizon 5</h4><img src="F_Horizon Display.jpg" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="F_Horizon_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">99.95</h5><br><a><button class="btn btn-primary" id="game14" onclick="check_age(this)">View Game</button></a></div>'
};
var game15 = {
    Title: "UFC5",
    Name: "game15",
    Page: "ufc5_detail.html",
    Genre: "sport",
    Price: 109.95,
    Age: 15,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="UFC5"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">UFC 5</h4><img src="UFC5 Display.avif" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="UFC5_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: 15+</h5 class="price_disp"><br><h5>$109.95</h5><br><a><button class="btn btn-primary" id="game15" onclick="check_age(this)">View Game</button></a></div>'
};
var game16 = {
    Title: "Passguard",
    Name: "game16",
    Genre: "adventure",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Passguard"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">PassGuard Quest</h4><img src="Pass_Quest Display.png" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Passguard_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">Free</h5><br><a href="https://scratch.mit.edu/projects/1021441361" target="_blank"><button class="btn btn-primary">View Game</button></a></div>'
};
var game17 = {
    Title: "F_Horizon4",
    Name: "game17",
    Page: "horizon4_detail.html",
    Genre: "racing",
    Price: 99.95,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="F_Horizon4"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Forza Horizon 4</h4><img src="F_Horizon4 Display.jpeg" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="F_Horizon4_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5>$99.95</h5><br><a><button class="btn btn-primary" id="game17" onclick="check_age(this)">View Game</button></a></div>'
};
var game18 = {
    Title: "Cybersaver",
    Name: "game18",
    Genre: "adventure",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Cybersaver"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Cyber Saver</h4><img src="Cyber_Saver Display.png" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Cybersaver_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">Free</h5><br><a href="https://scratch.mit.edu/projects/973744695" target="_blank"><button class="btn btn-primary">View Game</button></a></div>'
};
var game19 = {
    Title: "Cybersaviour",
    Name: "game19",
    Genre: "shooter",
    Price: 0,
    Age: 0,
    Rating: null,
    Data: '<div style="float: left;" class="col-6"><button class="btn icon_btn fa fa-heart-o" onclick="favourite(this)" id="Cybersaviour"></button><h5 class="game_title_games" style="white-space: normal; font-size: 20px;">Cyber Saviour</h4><img src="Cybersaviour Displau.png" class="game_disp_img"><br></div><div style="float: right; padding-top: 5%; text-align: center; margin-top: 5%;" class="col-6"><h5>Popularity:</h5><span id="Cybersaviour_rating">No Reviews Yet</span><br><br><h5 style="margin-left: 1vw;">Age Rating: Everyone</h5><br><h5 class="price_disp">Free</h5><br><a href="https://scratch.mit.edu/projects/1036077873" target="_blank"><button class="btn btn-primary">View Game</button></a></div>'
};


var all_games = [game0, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15, game16, game17, game18, game19];
var all_displays = ["disp0", "disp1", "disp2", "disp3", "disp4", "disp5", "disp6", "disp7", "disp8", "disp9", "disp10", "disp11", "disp12", "disp13", "disp14", "disp15", "disp16", "disp17", "disp18", "disp19"];
var all_faves = ["Minecraft", "Amongus", "Fortnite", "FC24", "Asphalt9", "Ragnarok", "Elden", "RDR2", "Minecraft_Legends", "F124", "Fall_Guys", "Minecraft_Dungeons", "Rocket_League", "F_Motorsport", "F_Horizon", "UFC5", "F_Horizon4", "Passguard", "Cybersaver", "Cybersaviour"];

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
                    fetch_ratings();
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
                if (localStorage.getItem("Authenticated") == "yes")
                {
                    btn_id = button.id;
                        console.log(btn_id);
                        all_games.forEach(game =>{
                            if (game.Name == btn_id)
                            {
                                clicked_game = game;
                            }
                        });
                        console.log(clicked_game.Age);
                        console.log(userAge);
                        if (userAge < clicked_game.Age && clicked_game.age >= 15){
                            var alert = document.getElementById('age_alert');
                            document.getElementById("alert_text").innerHTML = " You are intending to access a game with an age restriction."
                            alert.style.display = "block";
                            window.scrollTo(0,0);
                        } else {
                            window.location = clicked_game.Page;
                        }
                } else {
                    btn_id = button.id;
                        console.log(btn_id);
                        all_games.forEach(game =>{
                            if (game.Name == btn_id)
                            {
                                clicked_game = game;
                            }
                        });
                        console.log(clicked_game.Age);
                        console.log(userAge);
                        if (clicked_game.age >= 15){
                            var alert = document.getElementById('age_alert');
                            document.getElementById("alert_text").innerHTML = " You are attempting to access a game with a strict age requirement. Please log in to verify your age."
                            alert.style.display = "block";
                            window.scrollTo(0,0);
                        } else {
                            window.location = clicked_game.Page;
                        }
                }
            }
    } else {
        function check_age(button){
            if (localStorage.getItem("Authenticated") == "yes")
            {
                btn_id = button.id;
                    console.log(btn_id);
                    all_games.forEach(game =>{
                        if (game.Name == btn_id)
                        {
                            clicked_game = game;
                        }
                    });
                    console.log(clicked_game.Age);
                    console.log(userAge);
                    if (userAge < clicked_game.Age && clicked_game.age >= 15){
                        var alert = document.getElementById('age_alert');
                        document.getElementById("alert_text").innerHTML = " You are intending to access a game with an age restriction."
                        alert.style.display = "block";
                        window.scrollTo(0,0);
                    } else {
                        window.location = clicked_game.Page;
                    }
            } else {
                btn_id = button.id;
                    console.log(btn_id);
                    all_games.forEach(game =>{
                        if (game.Name == btn_id)
                        {
                            clicked_game = game;
                        }
                    });
                    console.log(clicked_game.Age);
                    console.log(userAge);
                    if (clicked_game.Age >= 15){
                        var alert = document.getElementById('age_alert');
                        document.getElementById("alert_text").innerHTML = " You are attempting to access a game with a strict age requirement. Please log in to verify your age."
                        alert.style.display = "block";
                        window.scrollTo(0,0);
                    } else {
                        window.location = clicked_game.Page;
                    }
            }
        
        
            /*btn_id = button.id;
            console.log(btn_id);
            all_games.forEach(game =>{
                if (game.Name == btn_id)
                {
                    clicked_game = game;
                    window.location = clicked_game.Page; //amo amo
                }
            });
            console.log(clicked_game.Age)
            if (userAge < clicked_game.Age && clicked_game.age >= 15){
                var alert = document.getElementById('age_alert');
                alert.style.display = "block";
                window.scrollTo(0,0);
            } else {*/
                
            //}
        }
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
                game.Rating = avg_rating;

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



var all_view = document.querySelectorAll(".btn-primary");
var all_redirections = document.querySelectorAll(".btn-danger");
var called_button; 

/*all_view.forEach(function(button){
    button.addEventListener("click", function(event){
        called_button = event.currentTarget.id;
        localStorage.setItem("Vwoop", "Cenat")
    
        if (userAge < 80)
        {
            var myModal = new bootstrap.Modal(document.getElementById('age_prompt'));
            myModal.show();
            localStorage.setItem("Vwoop", "Cenat");
        } else {
            window.location = called_button.Page;
        }
    });
});*/


/*function redirect(){
    window.location = called_button;
}*/


/*all_redirections.forEach(function(btn){
    btn.addEventListener("click", function(){
        window.location = called_button.Page;
    });
});*/



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

    fetch_ratings();
    checkIfFavorited();


    // Update the display with the number of matching games
    //document.getElementById('match-count').textContent = `Matching Games: ${matchCount}`;
}

var username = localStorage.getItem("Email: ");

if (username !== undefined)
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

// Call this function when the page loads to check the initial button state
document.addEventListener("DOMContentLoaded", function() {
    

    // Add event listener to toggle favorite status when clicked
});