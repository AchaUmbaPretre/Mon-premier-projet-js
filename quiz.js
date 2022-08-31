var pos = 0;
var text1, text2, question, choices, choise, chA, chB, chC, chD, correct = 0;

var questions = [
    ['Quelle est la capitale de RDC', 'Bas-congo', 'Kinshasa', 'Equateur', 'Katanga', 'B'],
    ['Quelle est la capitale de France','Lyons','Marseille','Paris','Bordeau','C'],
    ['Quel est actuel president de la RDC','Moise katumbi','Kabila','Fayulu','Felix tshisekedi','D'],
    ['Quel est le nom de gouverneur de la ville de kin','Bemba','Kamerhe','Kimbuta','Jeantini Ngobila ','D'],
];

function repond(x){

    return document.getElementById(x);
}
function renderResponse(){
    text2= repond('text2');
        if(pos >= questions.length){
            text2.innerHTML = `<h1> vous avez ${correct} sur ${questions.length}</h1> `
            repond('text1').innerHTML = 'test complet';
            pos = 0;
            correct = 0;
            return false;
        }
            repond('text1').innerHTML = `Question ${pos+1} sur ${questions.length}`;

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];

    text2.innerHTML = `${question}<br><br>`
    text2.innerHTML += `<input type='radio' name='choices' value='A'>${ chA }<br>`;
    text2.innerHTML += `<input type='radio' name='choices' value='B'>${ chB }<br>`;
    text2.innerHTML += `<input type='radio' name='choices' value='C'>${ chC }<br>`;
    text2.innerHTML += `<input type='radio' name='choices' value='D'>${ chD }<br>`;
    text2.innerHTML += `<button onclick = cheked() >Envoyer</button>`
};
function cheked(){
    let choices = document.getElementsByName('choices')
    console.log(choices.value)
    for(let i = 0; i < choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][5]){
        correct++;
    }
    pos++;
    renderResponse();
}
    
window.addEventListener('load', renderResponse, false)