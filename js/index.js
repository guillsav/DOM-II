// Your code goes here

const heroImg = document.querySelector('.home img');
heroImg.addEventListener('mouseover', e => {
  e.target.src = 'img/funBus2.jpg';
});

heroImg.addEventListener('mouseout', e => {
  e.target.src = 'img/fun-bus.jpg';
});

const navigation = document.querySelector('.main-navigation');

const log = document.createElement('p');
log.className = 'new-element';

document.body.appendChild(log);

const newClass = document.querySelector('.new-element');
console.log(newClass);

let customStr = '';

window.addEventListener('keydown', function(e) {
  e.stopPropagation();
  customStr += e.key;
  log.textContent = customStr;
});

// h2
const adventureText = document.querySelector('.content-section .text-content');
adventureText.addEventListener('select', e => {
  e.target.style.background = 'teal';
  e.target.style.color = 'white';
  console.log(`selected`);
});

const adventure = document.querySelector('.img-content');

const signMeUP = document.querySelector('.destination div');

function pause() {
  signMeUP.classList.add('paused');
  signMeUP.classList.remove('btn');
}

function play() {
  signMeUP.classList.add('btn');
  signMeUP.classList.remove('paused');
}

signMeUP.addEventListener('blur', pause);
signMeUP.addEventListener('focus', play);
console.log(signMeUP);

const header = document.querySelector('.main-navigation .nav-container');

const search = document.createElement('input');
search.placeholder = 'search';
search.className = 'search';
header.append(search);
console.log(search);

let last_known_scroll_position = 0;

function isScroll(scroll_pos) {
  if (scroll_pos > 100) {
    return true;
  }
  return false;
}

window.addEventListener('scroll', function(e) {
  window.requestAnimationFrame(function() {
    // isScroll(last_known_scroll_position);
    navigation.style.background = 'teal';
    navigation.style.color = 'white';
    navigation.style.opacity = 0.9;
    navigation.style.border = 'none';
    search.style.borderColor = 'white';
    search.style.backgroundColor = 'teal';
    search.style.color = 'white';
    search.classList.add('white');
  });
});
