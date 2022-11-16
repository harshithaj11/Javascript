const courses = [
    {
        name: "Complete React Course",
        price: "2.7"
    },
    {
        name: "Complete Angular Course",
        price: "2.5"
    },
    {
        name: "Complete C++ Course",
        price: "2.1"
    },
    {
        name: "Complete Python Course",
        price: "2.6"
    },
    {
        name: "Complete Java Course",
        price: "7.4"
    }
];

function generateList() {
    
    const ul = document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach(course => {
        const li = document.createElement("li");  //<li></li>
        li.classList.add("list-group-item");      //<li class="list-group-item"></li>
        const name = document.createTextNode(course.name);       //create reference
        li.appendChild(name);                         // <li class="list-group-item">cdsfds</li>

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price= document.createTextNode("$ "+course.price);
        span.appendChild(price);

        li.appendChild(span);          //<li><span></span></li>
        ul.appendChild(li);            //<ul><li><span></span></li></ul>
    });
   

}
addEventListener("load",generateList);
const button = document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price);
    generateList();
})
const descButton = document.querySelector(".sort-btn-desc")
descButton.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateList();

})