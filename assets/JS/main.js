let time = 60;
let Random;
let Randomanswer
let opinion = '';
let timehtml = document.querySelector('.timer')
let questions = [
    'Quelle est le plat préférer de Nathan ?',
    "Si on avait persuadé Elvis Presley et Bob Marley de s'accoupler, on aurait pu obtenir :",
    'Quel est le vice caché de Sherlock Holmes',
    'Quel sport pratique-t-on si on a un autocollant en forme de poing sur sa voiture ?',
    "Un seul de ces jouets ratés n'existe pas, est-ce ?",
]
let answer = [
    ['Lasagnes', 'Steak', 'The Rock', 'Riz'],
    ['Elvis Marley, le rasta king.', 'Une baleine blanche avec des dreads.', 'Des tubes comme « Spliff me tender » ou « Could you be cruel »', 'Oui mais alors on dit n’importe quoi et toutes les réponses sont possibles.'],
    ['Il est zoophile.', ' Il est pigiste au Figaro.', 'Il est cocaïnomane.', 'Il mange ses crottes de nez.'],
    ['Le fist-fucking.', 'La boxe anglaise.', 'Le karaté.', 'La boxe en voiture.'],
    ['Un Spiderman gonflable, mais au mauvais endroit.', 'Une figurine Tarzan qui se fait plaisir en secouant le manche.', 'Un pistolet à bonbons, pour apprendre aux enfants à se tirer une balle dans la bouche', ' Une liste de Noël de Schindler, pour apprendre aux enfants que les nazis n’étaient pas tous mauvais.'],
];
function random() {
    Random = Math.floor(Math.random() * questions.length)
    document.querySelector('#question').textContent = questions[Random]
    document.querySelector('#answer1').textContent = answer[Random][0];
    document.querySelector('#answer2').textContent = answer[Random][1];
    document.querySelector('#answer3').textContent = answer[Random][2];
    document.querySelector('#answer4').textContent = answer[Random][3];
}
let good = ['Lasagnes', 'Elvis Marley, le rasta king.', 'Il est cocaïnomane.', 'Le fist-fucking.', 'Une figurine Tarzan qui se fait plaisir en secouant le manche.'];
let score = 0;
document.querySelector('#score').textContent = `${score}`
function count(elem) {
    let selection = elem.textContent

    for (let i = 0; i < good.length; i++) {
        if (selection == good[i]) {
            score++
        }
        document.querySelector('#score').textContent = `${score}`

    }
    questions.splice(Random, 1);
    answer.splice(Random, 1)

    if (score >= 3) {
        opinion = 'Tu est vraiment BON'
    } else if (score < 3) {
        opinion = 'Tu est vraiment NUL'
    }
    if (questions.length == 0) {
        document.querySelector('#question').textContent = 'Vous avez terminer'
        document.querySelector('#answer1').textContent = `${score} est votre score`
        document.querySelector('#answer2').innerHTML = `<a href="">Recommencer</a>`
        document.querySelector('#answer3').innerHTML = `<a href="javascript:window.close()">Sortir</a>`
        document.querySelector('#answer4').textContent = `${opinion}`
    }
    if (questions.length > 0) {
        random()

    }
}
function Checktime() {
    if (time == 0) {
        questions.length = 0;
        window.clearInterval(timer);
    }
}
function Timer() {
    time--
    timehtml.innerHTML = `Il vous reste :${time}`
    Checktime()
}
let timer = window.setInterval(Timer,1000);
random()


