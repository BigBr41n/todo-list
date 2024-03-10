const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list"); 



// the main function of adding tasks to the list 
function addTask(){

    //chekcing if the input is empty
    if(inputBox.value == ""){
        alert("you need to enter something"); 
    }
    else {
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li); 


        // span here is for the delete button 
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7" ; 
        li.appendChild(span); 
    }

    inputBox.value = "" ; // to empty the input place
    saveData(); // call the function to store tasks in the localstorage 
}


//click listnner on each LI item to marke it as completed task 
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); 
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        saveData(); 
    }
})


//function of storing tasks list in the locastorage 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); 
}

//retrive tasks from the localstorage
function showStoredItems(){
    listContainer.innerHTML = localStorage.getItem("data"); 
}

showStoredItems(); 