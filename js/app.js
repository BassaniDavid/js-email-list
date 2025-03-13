
// email list html
const emailList = document.getElementById("email-list");

// elemento iniziale a cui aggiungo html
let items = '';

// richiamo funzione per far comparire le mail
generateEmailhtml();


// bonus2

// bottone
const buttonElement = document.getElementById("button")

buttonElement.addEventListener('click', function () {
    // svuoto le mail generate in precedenza
    emailList.innerHTML = ''
    // svuoto la variabile per generare html in stringa
    items = ''
    // applico la funzione
    generateEmailhtml()
}
);


//      FUNZIONI

// funzione per inserire html
function createHtml(dataEmail) {
    items += `<li class="list-group-item pt-2 pb-2 ps-5 pe-5">${dataEmail}</li>`
};

// funzione per richiamare API e inserire HTML
function generateEmailhtml() {
    // reitero per 10 volte per avere 10 mail diverse
    for (let i = 0; i < 10; i++) {

        // fetch per fare una richiesta all API di boolean
        fetch("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => response.json())
            .then(data => {
                createHtml(data.response)
                emailList.innerHTML = items;
            })
            .catch(error => {
                console.error(error);
            });
    };
};