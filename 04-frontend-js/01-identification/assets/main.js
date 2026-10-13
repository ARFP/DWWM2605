// document.querySelector('#mail');
const mail = document.getElementById('mail');
const errors = document.getElementById('errors');
const myForm = document.querySelector('#myForm');
const errorsUl = document.querySelector('#errors ul');

console.log(myForm);


myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let conflicts = [];
    //errorsUl.textContent = "";

    const mailValue = mail.value.trim();

    if(mailValue.length < 5) {
        conflicts.push('La longueur de l\'adresse email est trop courte');
    }

    if(!mailValue.includes('@')) {
        conflicts.push('@ manquant');
    }

    // y'a t il des erreurs dans le tableau  conflicts ?
    // si oui, parcourir ce tableau et envoyer les erreurs dans le DOM

    if(conflicts.length > 0) {
        for(let oneError of conflicts) {
            // créer un LI
            // injecter l'erreur dans le LI
            // injecter le LI dans le UL
            const li = document.createElement('li');
            li.textContent = oneError;
            errorsUl.appendChild(li);
            errors.style.display = 'block';
        }

        /* for(let i = 0; i < conflicts.length; i++) {

        }

        conflicts.forEach(() => {

        })*/
    }
});
