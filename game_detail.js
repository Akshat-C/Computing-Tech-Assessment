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

  var reviewDetails = {
    Rating: 0,
    Date: "",
    Description: ""
  };

var current_page = localStorage.getItem("Game Page");

var reviewsRef = firebase.database().ref(localStorage.getItem("Game Page"));

fetchReviews();

  /*reviewsRef.on("child_added", function(snapshot) {
    fetchReviews();
  });

  reviewsRef.on("child_changed", function(snapshot) {
    fetchReviews();
  });

  reviewsRef.on("child_removed", function(snapshot) {
    fetchReviews();
  });*/

  function btn_select(id, id1, id2, id3, id4)
{
    const element = document.getElementById(id); 
    element.classList.remove("btn-warning");
    element.classList.add("btn-secondary");

    const element1 = document.getElementById(id1); 
    element1.classList.remove("btn-secondary");
    element1.classList.add("btn-warning");
    const element2 = document.getElementById(id2); 
    element2.classList.remove("btn-secondary");
    element2.classList.add("btn-warning");
    const element3 = document.getElementById(id3); 
    element3.classList.remove("btn-secondary");
    element3.classList.add("btn-warning");
    const element4 = document.getElementById(id4); 
    element4.classList.remove("btn-secondary");
    element4.classList.add("btn-warning");
}

function star1()
{
    btn_select("star1", "star2", "star3", "star4", "star5");
    reviewDetails.Rating = 1;
}

function star2()
{
    btn_select("star2", "star1", "star3", "star4", "star5");
    reviewDetails.Rating = 2;
}

function star3()
{
    btn_select("star3", "star2", "star1", "star4", "star5");
    reviewDetails.Rating = 3;
}

function star4()
{
    btn_select("star4", "star2", "star3", "star1", "star5");
    reviewDetails.Rating = 4;
}

function star5()
{
    btn_select("star5", "star2", "star3", "star4", "star1");
    reviewDetails.Rating = 5;
}

var avgRef = database.ref(current_page + "/" + "Avg_Rating");

  function write_review()
  {
    if ((localStorage.getItem("Authenticated") == "yes") && (reviewDetails.Rating >= 1))
    {
        currentDate = new Date();
        
        reviewDetails.Description = document.getElementById("review_text").value;
        username = localStorage.getItem("Username");
        reviewDetails.Date = currentDate.getDate().toString() + "-" + (currentDate.getMonth() + 1).toString() + "-" + currentDate.getFullYear().toString();

        let reviewRef = database.ref(current_page + "/" + username + "/");
        reviewRef.set(reviewDetails);
        avgRef.set(null)
        .then(() => {
        console.log('Review added successfully');
        document.getElementById("review_success").style.display = "block";
        })
        .catch((error) => {
        console.error('Error adding review:', error);
        });
    }
  }

function fetchReviews()
{
  /*reviewsRef.once("key", function(db_user){
    review_user = db_user.val();
    console.log(review_user);
  });*/
  review_count = 0;
  total_rating = 0;



  reviewsRef.once('value', function(snapshot) {
    // Clear existing reviews display
    document.getElementById('review_disp').innerHTML = "";

    
    // Iterate over each user's review under the 'Minecraft' node
    snapshot.forEach(function(childSnapshot) {
      // Fetching each user's review data
      var reviewData = childSnapshot.val();
      var rating = reviewData.Rating;       // Fetch rating
      if (rating !== undefined){
        var date = reviewData.Date;           // Fetch date
      var description = reviewData.Description; // Fetch description

      total_rating += rating;
      console.log(total_rating);

      review_count++; 

      // Create a new div element for each review
      var reviewDiv = document.createElement("div");
      reviewDiv.classList.add("review_element");

      // Create elements for rating, date, and description
      var ratingElement = document.createElement("h3");
      ratingElement.textContent = "Rating: " + rating;
      ratingElement.classList.add("review_rating");

      var dateElement = document.createElement("h4");
      dateElement.textContent = 'Date: ' + date;
      dateElement.classList.add("review_date");

      var descriptionElement = document.createElement("h6");
      descriptionElement.textContent = description;
      descriptionElement.classList.add("review_desc");
      
      var separatorElement = document.createElement("hr");
      separatorElement.classList.add("review_separator")

      // Append the rating, date, and description to the review div
      reviewDiv.appendChild(ratingElement);
      reviewDiv.appendChild(dateElement);
      reviewDiv.appendChild(descriptionElement);
      reviewDiv.appendChild(separatorElement);

      // Append the review div to the main reviews container
      document.getElementById("review_disp").appendChild(reviewDiv);
      }
      
    });
    avg_rating = review_count > 0 ? (total_rating / review_count).toFixed(2) : 0;
    console.log(avg_rating);
    rounded_rating = Math.floor(avg_rating);
    rating_diff = avg_rating - rounded_rating;

    if (avg_rating != 0){
      document.getElementById("avg_rating").innerHTML = "";
      document.getElementById("review_display").innerHTML = "";
    }

    if (avg_rating >= 4.75)
    {
        for (i=0; i< 5; i++)
        {
            var star1 = document.createElement("i");
            star1.classList.add("fa");
            star1.classList.add("fa-star");
            document.getElementById("avg_rating").appendChild(star1);
            document.getElementById("review_display").appendChild(star1);
        }
    } else 
    {
        for (j=0; j < rounded_rating; j++)
        {
            var star2 = document.createElement("i");
            star2.classList.add("fa");
            star2.classList.add("fa-star");
            document.getElementById("avg_rating").appendChild(star2);
            document.getElementById("review_display").appendChild(star2);
        }
        if (rating_diff >= 0.25 && rating_diff < 0.75)
        {
            var star3 = document.createElement("i");
            star3.classList.add("fa");
            star3.classList.add("fa-star-half-o");
            document.getElementById("avg_rating").appendChild(star3);
            document.getElementById("review_display").appendChild(star3);
        } else if (rating_diff >= 0.75 && rating_diff < 1.0)
        {
            var star4 = document.createElement("i");
            star4.classList.add("fa");
            star4.classList.add("fa-star");
            document.getElementById("avg_rating").appendChild(star4);
            document.getElementById("review_display").appendChild(star4);
        }
    }
  }, function(error) {
    console.error('Error fetching reviews:', error);
  });

}


