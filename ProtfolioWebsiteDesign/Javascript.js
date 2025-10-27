/*----------------------------------About Page Script -------------------------------------------------*/


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/*-------------------------------------For Small Screen SideMenu Option-----------------------------------------------------------*/


let sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function  closemenu(){
    sidemenu.style.right="-200px";
}


/*------------------------------------Script for Fetching The Form----------------------------------------*/
/*-----
const ScriptURL = '<SCRIPTURL>' 
const form = document.forms['submit-to-respective-sheet']

form.addEventListener('submit',e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST' , body : new FormData(form)})
    .then(response => console.log('success!' , response))
    .catch(error => console.error('Error!',error.message))
})

----------*/


function validateForm() {
    let Name = document.forms["myForm"]["name"].value;
    let Email = document.forms["myForm"]["email"].value;
    let Message = document.forms["myForm"]["message"].value;

    if (Name == "") {
      alert("Name must be filled out");
      return false;
    }

    if(Email == ""){
        alert("E-Mail Must be Filled out");
        return false;

    }

    if(Message == ""){
        alert("Please enter any Message");
        return false;
    }
  }

  