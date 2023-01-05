
// Ajouter un évènement pour capter et bloquer l'évènement lors du clique sur le bouton

const button = document.getElementById('comment-submit');
console.log(button);

// add a click event listener on the form submit button

button.addEventListener('click', intercept);

function intercept(event) {
    console.log(event);
    
    // don't forget to "prevent" the form from being sent
   event.preventDefault();

} 


const nameContent = document.getElementById('comment-username');
const messageContent = document.getElementById('comment-content');

nameContent.addEventListener('keyup', update);
messageContent.addEventListener('keyup', update);

function update() {


    if (nameContent.value == "" || messageContent.value == "") {

        button.disabled = true;

    } else { button.disabled = false ;}
             
}





// lors du clic sur le bouton d'envoi du formulaire, cible les champs du formulaire contenant les noms de l'utilisateur et son message
// une fois les éléments ciblés, récupère leurs contenus (value)


button.addEventListener('click', contenu);

function contenu() {

let nom = document.getElementById('comment-username').value;
let message = document.getElementById('comment-content').value;

    console.log(nom);
    console.log(message);

    button.disabled = false ;
// create a new comment with the user name, the current date (french format: dd/mm/yyyy)

// Création du nouveau li pour avoir un troisième commentaire

    var newComm = document.createElement('li');
    console.log(newComm);

// Création du titre h5 et de son contenu (deux méthodes avec textContent ou createTextNode)

    var newTitreh5 = document.createElement('h5');
    console.log(newTitreh5);

    newTitreh5.textContent = nom;

    // var h5Content = document.createTextNode('Username 3');
    // console.log(h5Content);

// Création du titre h6 et de son contenu (deux méthodes avec textContent ou createTextNode)

    var newTitreh6 = document.createElement('h6')
    console.log(newTitreh6);

    newTitreh6.textContent = new Date().toLocaleDateString();
    // var h6Content = document.createTextNode('04/01/2023');
    // console.log(h6Content);

// Création du paragraphe et de son contenu (deux méthodes avec textContent ou createTextNode)

    var newp = document.createElement('p')
    console.log(newp);

    newp.textContent = message;
    // var pContent = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, sint consequatur officiis amet laborum suscipit rerum illum ex deleniti error officia vero aliquam aspernatur ut dignissimos voluptas non, distinctio adipisci? ');
    // console.log(pContent);

// Placer les sections créées au bon endroit dans le document

    newComm.appendChild(newTitreh5);

    newComm.appendChild(newTitreh6);

    newComm.appendChild(newp)
    
// Si on a directement assigné le texte avec textContent pas besoin de ces trois lignes ci dessous
// si on a utilisé createTextNode, il faut les mettre pour assigner les variables contenant le texte en tant qu'enfant de chaque élément ajouté
    // newTitreh5.appendChild(h5Content);
    // newTitreh6.appendChild(h6Content);
    // newp.appendChild(pContent);
 

// new comments must have the same HTML structure as existing comments.

    var b = document.getElementById('comments-list');
    b.appendChild(newComm);

}
    
// cible l'élément contenant la liste des messages et ajoute ce nouvel élément à la fin de la liste
