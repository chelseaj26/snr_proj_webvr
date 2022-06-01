//alert('page is loaded');



var button1Obj = document.getElementById('button1');
var button2Obj = document.getElementById('button2');
var button3Obj = document.getElementById('button3');
var button4Obj = document.getElementById('button4');
var button5Obj = document.getElementById('button5');



var tiger_fact1Obj = document.getElementById('tiger_fact1');
var tiger_fact2Obj = document.getElementById('tiger_fact2');
var tiger_fact3Obj = document.getElementById('tiger_fact3');
var tiger_fact4Obj = document.getElementById('tiger_fact4');
var tiger_fact5Obj = document.getElementById('tiger_fact5');




var fact_areaObj = document.getElementById('fact-area');

fact_areaObj.style.display = "none"; 
button1Obj.addEventListener('click', change_text1);
button2Obj.addEventListener('click', change_text2);
button3Obj.addEventListener('click', change_text3);
button4Obj.addEventListener('click', change_text4);
button5Obj.addEventListener('click', change_text5);

function change_text1(){
    // alert('Change text function called');
    //on the click of a button chnages text and swaps button imgs from inactive to active
      document.getElementById("demo").innerHTML = "The tigers look alive because the artist that created them posed or positioned them doing activities that a real tiger might do. The taxidermy artist studied the actions of tigers through pictures and information taken by the biologist who saw them in the wild.";
      tiger_fact1Obj.src = "media/buttons/unlocked_poi_active.png";
    
    fact_areaObj.style.display = "block";
  }
 
  function change_text2(){
    // alert('Change text function called');
    //on the click of a button chnages text and swaps button imgs from inactive to active
      document.getElementById("demo").innerHTML = "Tigers are nocturnal predators, which means they hunt during the night. The background is black because the museum didn’t have the funds to pay for the background when the diorama was initially built.";
      tiger_fact2Obj.src = "media/buttons/unlocked_poi_active.png";
    
    fact_areaObj.style.display = "block";
  }
  function change_text3(){
    // alert('Change text function called');
    //on the click of a button chnages text and swaps button imgs from inactive to active
      document.getElementById("demo").innerHTML = "The plants, rocks and ground are created by an artist. They represent the environment that these animals may have lived in. Some dioramas take months or even years to make! ";
      tiger_fact3Obj.src = "media/buttons/unlocked_poi_active.png";
    
    fact_areaObj.style.display = "block";
  }

  function change_text4(){
    // alert('Change text function called');
    //on the click of a button chnages text and swaps button imgs from inactive to active
      document.getElementById("demo").innerHTML = "President Theodore Roosevelt believed that if people were immersed in the natural world, they would be more likely to protect it. Dioramas bring awareness of the fragility of nature to visitors who view them at the museum.";
      tiger_fact4Obj.src = "media/buttons/unlocked_poi_active.png";
    
    fact_areaObj.style.display = "block";
  }

  function change_text5(){
    // alert('Change text function called');
    //on the click of a button chnages text and swaps button imgs from inactive to active
      document.getElementById("demo").innerHTML = "These tigers once lived in the forest in India. They were hunted by Trophy Hunters, or people who hunt animals and bring them back to be preserved by a taxidermist to be put on display for other people to see.";
      tiger_fact5Obj.src = "media/buttons/unlocked_poi_active.png";
    
    fact_areaObj.style.display = "block";
  }