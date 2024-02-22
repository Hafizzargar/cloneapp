let button=document.getElementById("button");
let todo=document.getElementById("todo");
let inProgress=document.getElementById("inProgress");
let done=document.getElementById("done");

function addit(){
    //create div  
    let createinput=document.createElement("div");
    createinput.setAttribute("contenteditable", "true");//used to add text
    createinput.className="c1";
    createinput.innerHTML="Enter here";
    createinput.focus();
    
    todo.appendChild(createinput);

   
     //check if  empty div then remove it
   
    createinput.addEventListener("blur", (eventDetails)=>{
        let targetCard = eventDetails.target 
        if(targetCard.innerHTML.trim()==""){
              targetCard.remove() // remove the card if it is empty
        }
   })


   let sel=document.createElement("select");       //select create
   sel.id="sel";
  
    //create option insid select
   
   sel.innerHTML=`                         
   <option value="todo">todo</option>
   <option value="progress">InProgress</option>
   <option value="done">Done</option>
   `
   createinput.appendChild(sel);   //div append with select option

   sel.addEventListener("change",(e)=>{     //chsnge  the div todo progree done
    let z=e.target.value;
    //main important value has same name as id then it go to that id div
    document.getElementById(z).append(createinput);
   })







}
  



    

button.addEventListener("click",addit);