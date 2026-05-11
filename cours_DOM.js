// Imports



const subscribeButton = document.getElementById("subscribe");
const maPopUp = document.createElement("div");

subscribeButton.addEventListener("click",function (){
    event.preventDefault();
    //alert("Bouton Click");
    //subscribeButton.innerHTML = "explose"
    document.body.appendChild(maPopUp);
    maPopUp.style.backgroundColor = "green";
    maPopUp.style.height = "50px";
    maPopUp.style.width = "50px";
});

const purchaseButtonM = document.getElementById("purchaseButtonM");
purchaseButtonM.addEventListener("pointerover",function(){
    purchaseButtonM.classList.add("purple");
});
purchaseButtonM.addEventListener("pointerout",function(){
    purchaseButtonM.classList.remove("purple");
});

//navButtons

const allNavButtons = document.querySelectorAll(".navButtons");
allNavButtons.forEach((navButtons,index) => {
    navButtons.addEventListener("pointerover", function(){
        navButtons.classList.add("navButtons1");
        navButtons.classList.remove("navButtons");
    });
    navButtons.addEventListener("pointerout", function(){
        navButtons.classList.remove("navButtons1");
        navButtons.classList.add("navButtons");
    });
});


//Common 
// modifier contenu

    //subscribeButton.innerHTML =
    //subscribeButton.innerHTML = "explose"
    //document.body.appendChild(maPopUp);
    // document.body.appendChild(maPopUp);
    // maPopUp.style.backgroundColor = "green";
    // maPopUp.style.height = "50px";
    // maPopUp.style.width = "50px";

const logInButton = document.getElementById("logInButton");
logInButton.addEventListener("mouseover", function (){
    logInButton.classList.add("biggerSize");
    // logInButton.classList.remove("logInButton");
});
logInButton.addEventListener("mouseout", function (){
    logInButton.classList.remove("biggerSize");
    // logInButton.classList.add("logInButton");
});

// function clear(id){
//     document.getElementById(id).innerHTML = "";
// };



// maPopUpElement.addEventListener("toggle", (event) => {
//     if (event.newState === "open"){
//         console.log("La fenêtre contextuelle a été affichée");
//     } 
//     else {
//         console.log("La fenêtre contextuelle a été masquée");
//     };
    

// });    
// const maPopUpElement = document.getElementById("hiddenText");
// const monButton = document.getElementById("technicalAnalysisToggle")
// function addPop(id,content){
//     document.getElementById(id).innerHTML = content;
// };
// addPop("hiddenText","Popover content omg wow plein de texte c'est fou pitié dommage il y a pas de lorem 15 ici lol");

//const popperInstance = popper.
// const button = document.querySelector('#technicalAnalysisToggle');
// const tooltip = document.querySelector('#tooltip');

// const popperInstance = Popper.createPopper(button, tooltip);

// $(function () {
//   // Active tous les popovers de la page
//   $('[data-toggle="popover"]').popover()
// });

// Initialisation des popovers Bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
popoverTriggerList.forEach(el => new bootstrap.Popover(el));

const reserveButton = document.getElementById("reserveButton")
const popReserve = document.getElementById("textHidden")
reserveButton.addEventListener("mouseover", () => {
    popReserve.style.visibility ="visible";
    // popReserve.classList.add("visible");
    // popReserve.classList.remove("invisible");
})
reserveButton.addEventListener("mouseout", () => {
    popReserve.style.visibility ="hidden";
    // popReserve.classList.add("invisible");
    // popReserve.classList.remove("visible");
})


const allFooterNavButtons = document.querySelectorAll(".footerButtons");
allFooterNavButtons.forEach((navButtons,index) => {
    navButtons.addEventListener("pointerover", function(){
        navButtons.classList.add("footerButtonsRed");
        navButtons.classList.remove("footerButtons");
    });
    navButtons.addEventListener("pointerout", function(){
        navButtons.classList.remove("footerButtonsRed");
        navButtons.classList.add("footerButtons");
    });
});