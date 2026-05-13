

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

// Initialisation des popovers Bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
popoverTriggerList.forEach(el => new bootstrap.Popover(el));

// web storage //

function choiceSidePopover (){
    if (localStorage.getItem("popoverPlacement")){
        return;
    };
    return prompt("Which side for the popover ? top, right, bottom, left", "right")  
};

//mettre dans un if pour vérifier si popover placement déjà existant
// const preferencePopover = choiceSidePopover();
// localStorage.setItem("popoverPlacement",preferencePopover);


// const buttonPopover = document.querySelector('[data-bs-toggle="popover"]');
// new bootstrap.Popover(buttonPopover, {
//     placement: preferencePopover
// });

//ex local storage avec JSON
const user = { "nom": "Emma", "age":"25"};

// force l'interprétation comme un str pour éviter {object Object}
localStorage.setItem("user", JSON.stringify(user));

// promesses

// function effectuerUneTache(callback){
//     console.log("effectuer une tache ....");
//     //simuler un délai
//     setTimeout(function (){
//         console.log("tache terminée !");
//         callback(); // Appel du callback
//     },2000);
// }
//en général pas plus de 2 fonctions en callback

// function monCallback(){
//     console.log("le callback a été appelé !");
// }

// effectuerUneTache(monCallback);

// async function  connectLogin(name,mdp, appelleAPI){
//     if (name && mdp){
//         await appelleAPI(name,mdp)
//     }
//     return console.log("erreur")
// };

// function connectAPI1(name,mdp){
//     return console.log(`L'utilisateur ${name} est connecté sur l'API1`);
// };

// function connectAPI2(name,mdp){
//     return console.log(`L'utilisateur ${name} est connecté sur l'API2`);
// };

// connectLogin("Emma","mdp",connectAPI1)  


// Les objets / classes
class Person {
    constructor(nom,prenom,age,sexe){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.sexe = sexe;
    };
    sayHello(){
        console.log(`Mon nom est ${this.nom} ${this.prenom}, j'ai ${this.age}, je suis de sexe ${this.sexe} !`)
    };
};

const person1 = new Person("Feret","Emma",25,"feminin");
const person2 = new Person("El Gueder","Etienne",25,"masculin")

person1.sayHello();
person2.sayHello();


//Exemple de Classe pour changer html 
class Voiture{
    constructor(marque,couleur,km){
        this.marque = marque;
        this.couleur = couleur;
        this.km = km;
    };
    displayColor(){
        const couleurVoiture = document.getElementById("imageVoiture");
        if (this.couleur == "blue"){
            couleurVoiture.setAttribute("src","./asset/bleu.jpg")
        };
        if (this.couleur == "red"){
            couleurVoiture.setAttribute("src","./asset/rouge.png")
        };
    };
};
// const voitureBlue = new Voiture("Toyota","Blue");
// const voitureRed = new Voiture("Toyota","red");

// voitureRed.displayColor();
// voitureBlue.displayColor();


//Recuperer la valeur rentrée par user
//Lors du clic sur button go, récuperer valeur et l'attribuer à la propriété couleur voiture
//Faire en sorte que la bonne img s'affiche selon l'entrée 


const submitColor = document.getElementById("submitColor");
//si creation de l'objet dans if chaque nouvelle instance créé un nouvel objet
//donc créé l'objet avant et mettre à jour l'attribut au clic
const voitureColored = new Voiture()

submitColor.addEventListener("click",function(){
    const colorInput = document.getElementById("inputCar").value.toLowerCase();
    voitureColored.couleur = colorInput;
    voitureColored.displayColor();
});
