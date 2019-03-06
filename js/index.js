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
    navigation.style.background = 'rgba(213, 188, 22)';

    navigation.style.borderBottom = '2px dashed black';
    search.style.backgroundColor = 'rgba(213, 188, 22, 0)';
    search.classList.add('black');
  });
});

const header2 = document.querySelector('.text-content h2');
console.log(header2);

header2.addEventListener('dblclick', e => {
  e.target.style.fontSize = '4.6rem';
  e.target.style.color = 'rgba(213, 188, 22)';
});

function pause() {
  search.classList.add('search');
  search.classList.remove('searchFocus');
}

function play() {
  search.classList.add('searchFocus');
  search.classList.remove('search');
}

search.addEventListener('blur', pause);
search.addEventListener('focus', play);
