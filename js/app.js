
// fetch per fare una richiesta all API di boolean
fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
        console.log(data.response);
        createHtml (data.response)
        console.log(items);
        emailList.innerHTML = items;
    })
    .catch(error => {
        console.error(error);
    });

    // email list html
    const emailList = document.getElementById("email-list")
    console.log(emailList)

    // elemento iniziale a cui aggiungo html
    let items = ''

    // funzione per inserire html
    function createHtml (dataEmail) {
        items += `<li>${dataEmail}</li>`
    }

