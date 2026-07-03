const foods = {

apple:{
name:"Apple",
calories:"95 kcal",
protein:"0.5 g",
carbs:"25 g",
sugar:"19 g",
fiber:"4.4 g",
score:"95/100",
spike:"🟢 Low",
tip:"Rich in fiber and vitamin C. A great everyday snack."
},

banana:{
name:"Banana",
calories:"105 kcal",
protein:"1.3 g",
carbs:"27 g",
sugar:"14 g",
fiber:"3.1 g",
score:"89/100",
spike:"🟡 Moderate",
tip:"High in potassium. Pair with nuts or yogurt for better blood sugar balance."
},

pizza:{
name:"Pizza",
calories:"285 kcal",
protein:"12 g",
carbs:"36 g",
sugar:"4 g",
fiber:"2.5 g",
score:"62/100",
spike:"🟡 Moderate",
tip:"Choose a thin crust and add vegetables for a healthier meal."
},

rice:{
name:"White Rice",
calories:"205 kcal",
protein:"4.2 g",
carbs:"45 g",
sugar:"0 g",
fiber:"0.6 g",
score:"58/100",
spike:"🔴 High",
tip:"Brown rice is usually a higher-fiber alternative."
},

broccoli:{
name:"Broccoli",
calories:"34 kcal",
protein:"2.8 g",
carbs:"7 g",
sugar:"1.7 g",
fiber:"2.6 g",
score:"99/100",
spike:"🟢 Low",
tip:"Packed with vitamins, minerals, and antioxidants."
},

oats:{
name:"Oats",
calories:"150 kcal",
protein:"5 g",
carbs:"27 g",
sugar:"1 g",
fiber:"4 g",
score:"97/100",
spike:"🟢 Low",
tip:"Excellent source of soluble fiber that supports heart health."
},

salad:{
name:"Garden Salad",
calories:"80 kcal",
protein:"2 g",
carbs:"10 g",
sugar:"4 g",
fiber:"5 g",
score:"98/100",
spike:"🟢 Low",
tip:"Add lean protein for a complete, balanced meal."
}

};

function searchFood(){

const input=document.getElementById("foodInput").value.toLowerCase().trim();

const result=document.getElementById("result");

if(!foods[input]){

result.style.display="block";

document.getElementById("foodName").innerHTML="❌ Food Not Found";

document.getElementById("calories").innerHTML="-";
document.getElementById("protein").innerHTML="-";
document.getElementById("carbs").innerHTML="-";
document.getElementById("sugar").innerHTML="-";
document.getElementById("fiber").innerHTML="-";
document.getElementById("score").innerHTML="-";
document.getElementById("spike").innerHTML="Unknown";
document.getElementById("tip").innerHTML="Try searching for Apple, Banana, Pizza, Rice, Broccoli, Oats or Salad.";

return;

}

const food=foods[input];

result.style.display="block";

document.getElementById("foodName").innerHTML=food.name;
document.getElementById("calories").innerHTML=food.calories;
document.getElementById("protein").innerHTML=food.protein;
document.getElementById("carbs").innerHTML=food.carbs;
document.getElementById("sugar").innerHTML=food.sugar;
document.getElementById("fiber").innerHTML=food.fiber;
document.getElementById("score").innerHTML=food.score;
document.getElementById("spike").innerHTML=food.spike;
document.getElementById("tip").innerHTML=food.tip;

}

document.querySelector(".darkButton").addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
