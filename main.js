let icon = document.querySelector('#icon');
let ul = document.querySelector('ul');
let body = document.body;
document.addEventListener("DOMContentLoaded" , change)
function change(){
    icon.addEventListener("click" , dam)
    function dam (){
        ul.classList.toggle('show');
    }
}


document.getElementByClassName("demo").innerHTML = 
"Screen height is " + screen.height;

// let collap =document.querySelector('#collap');

// collap.onclick= function(){
//     collap.classList.toggle("chang")   
// }




// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
// acc[i].addEventListener("click", function() {
//  this.classList.toggle("active");
//  var panel = this.nextElementSibling;
//  if (panel.style.display === "block") {
//    panel.style.display = "none";
   
   
//  } else {
//    panel.style.display = "block";
//    panel.style.background = "white";
//   }
// });
// }


let btn_one= document.getElementById("btn-one")
let btn_tow= document.getElementById("btn-tow")
let btn_three= document.getElementById("btn-three")
let btn4= document.getElementById("btn-four")
let btn5= document.getElementById("btn-five")
let btn6= document.getElementById("btn-six")


console.log(btn_one,btn_tow,btn_three,btn4,
btn5,
btn6)




let accord1 = document.querySelector(".accord1")
let accord2 = document.querySelector(".accord2")
let accord3 = document.querySelector(".accord3")
let accord4 = document.querySelector(".accord4")
let accord5 = document.querySelector(".accord5")
let accord6 = document.querySelector(".accord6")
accord2.classList.add("hidden")
accord3.classList.add("hidden")
accord4.classList.add("hidden")
accord5.classList.add("hidden")
accord6.classList.add("hidden")
btn_one.onclick = function change(){

accord2.classList.add("hidden")
accord3.classList.add("hidden");
accord1.classList.remove("hidden");
accord4.classList.add("hidden")
accord5.classList.add("hidden");
accord6.classList.add("hidden");



}
btn_tow.onclick = function hide(){

accord2.classList.remove("hidden")
accord1.classList.add("hidden")
accord3.classList.add("hidden");
accord4.classList.add("hidden")
accord5.classList.add("hidden");
accord6.classList.add("hidden");





}
btn_three.onclick = function hide2(){

accord3.classList.remove("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord4.classList.add("hidden")
accord5.classList.add("hidden");
accord6.classList.add("hidden");


}
btn4.onclick = function hide3(){

accord4.classList.remove("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord3.classList.add("hidden");
accord5.classList.add("hidden");
accord6.classList.add("hidden");

}
btn5.onclick = function hide4(){
accord5.classList.remove("hidden")

accord4.classList.add("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord3.classList.add("hidden");
accord6.classList.add("hidden");
}
btn6.onclick = function hide5(){
accord6.classList.remove("hidden")
accord4.classList.add("hidden")
accord2.classList.add("hidden")
accord1.classList.add("hidden");
accord3.classList.add("hidden");
accord5.classList.add("hidden");
}


let btn = document.getElementById("btn");

btn.onclick = function (){
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
}
