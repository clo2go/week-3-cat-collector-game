var wins = 0;
var losses = 0;
var total = 0;


//$(document).ready(function(){

//var computerAnswer = Math.floor((Math.random() * 120) + 19);


//});

function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }
    var randomNumber = (getRandomInt(19, 120));
    console.log(randomNumber);

$(".randomNumber").html("<p>" + randomNumber + "</p>");
/*
//$(document).ready(function(){
 // var cat1num = [1, 5, 9];
  //var cat1points = cat1[Math.floor(Math.random() * cat1num.length)];
   // $(cat1points).appendTo().on("click",".cat1");

 // var cat2num = [2, 6, 10];
 // var  cat2points = cat2[Math.floor(Math.random() * cat2num.length)];
 //   $(cat2points).appendTo().on("click",".cat2");

 // var cat3num = [3, 7, 11];
 // var cat3points  = cat3[Math.floor(Math.random() * cat3num.length)];
//   $(cat2points).appendTo().on("click",".cat3");

 // var cat4num = [4, 8, 12];
 // var cat4points  = cat4[Math.floor(Math.random() * cat4num.length)];
   // $(cat4points).appendTo().on("click",".cat4");

  //  $(".cat1").on("click", function() {
  //    (total += cat1points);
   //   $("#sum").html(total);
      console.log(cat1points);
      if (total > randomNumber){
        alert("No kitteh for U!");
      losses++;
      $(".losses").html(losses);
//      reset();
    } else if (total == randomNumber){
        alert("U catch all teh kittehs!!");
      win++;
      $(".wins").html(wins);
//      reset();
    }
    });  */