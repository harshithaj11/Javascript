var red = document.querySelector(".red");
var cyan= document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var pink = document.querySelector(".pink");
var orange = document.querySelector(".orange");
var center = document.querySelector(".center")
var colorChanger = (element)=>{
    var color= window.getComputedStyle(element).backgroundColor;
    return element.addEventListener('mouseenter',()=>{
        center.style.backgroundColor = color;
    })
}
// var color = (element) =>
// {
//     return window.getComputedStyle(element).backgroundColor;
// }
colorChanger(red);
colorChanger(pink);
colorChanger(violet);
colorChanger(orange);
colorChanger(cyan);
