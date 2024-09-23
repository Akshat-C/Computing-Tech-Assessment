range_inp = document.getElementById("range_inp");
console.log(range_inp);
slider = document.getElementById("slider_val");
slider.innerHTML = range_inp.value.toString() + "%";

range_inp.addEventListener('mousemove', function(){
    slider.innerHTML = range_inp.value.toString() + "%"
  });







