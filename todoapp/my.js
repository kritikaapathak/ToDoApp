/*let toDo= []
let req = prompt("Please enter your request");
while(true)
{ // true taaki app kaam krta rhe ek prompt task hone k baad dusra puche 
    if (req == "quit") //agr quit ki kaha h toh quit krdiya jaye 
    {
        console.log("quitting app");
        break;
    }
    if(req =="list")
    {
        console.log("__________________");
        for(let i=0;i<toDo.length;i++){
            console.log(i, toDo[i]);
        }
            console.log("__________________");
        }
        else if(req=="add"){
            let task = prompt("Please enter the task you want to add");
            toDo.push(task);
            console.log("task added");
        }
        else if(req == "delete"){
          let index = prompt("engter the index you want to delete");
        toDo.splice(index,1);
        console.log("task deleted");
        }
        else {
            console.log("wrong request");
        }
        req = prompt("Please enter your request");
    }
*/

let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        input.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}