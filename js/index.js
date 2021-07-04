// Your code goes here

const heroImg = document.querySelector('.home img');
heroImg.addEventListener('mouseover', e => {
  e.target.src = 'img/funBus2.jpg';
});

heroImg.addEventListener('mouseout', e => {
  e.target.src = 'img/fun-bus.jpg';
});

heroImg.addEventListener('click', e => {
  e.target.src = 'img/funBus3.jpg';
});

const navigation = document.querySelector('.main-navigation');

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
search.placeholder = 'Search';
search.className = 'search';
header.append(search);
// console.log(search);

window.addEventListener('scroll', function(e) {
  if (this.window.scrollY > 20) {
    navigation.style.background = '#FFEBCD';
    navigation.style.opacity = 0.9;
    navigation.style.borderBottom = '2px dashed #c0c0c0';
    search.style.backgroundColor = 'rgb(208, 182, 143)';
    search.classList.add('black');
  } else {
    navigation.style.background = '';
    navigation.style.opacity = 1;
    navigation.style.borderBottom = '';
    search.style.backgroundColor = '';
    search.classList.remove('black');
  }
});

const header2 = document.querySelectorAll('.text-content h2');
// console.log(header2);
for (let i = 0; i < header2.length; i++) {
  header2[i].addEventListener('dblclick', e => {
    e.target.style.fontSize = '4.6rem';
    e.target.style.color = 'rgba(213, 188, 22)';
  });
}

function pause() {
  search.classList.add('search');
  if (window.scrollY < 20) {
    search.classList.remove('searchFocus');
  } else {
    search.classList.remove('searchFocusSroll');
  }
}

function play() {
  if (window.scrollY > 20) {
    search.classList.add('searchFocusSroll');
  } else {
    search.classList.add('searchFocus');
  }
  search.classList.remove('search');
}

search.addEventListener('blur', pause);
search.addEventListener('focus', play);

const letsGoText = document.querySelector('.text-content p:nth-child(3)');
letsGoText.classList.add('hide');

const learnMore = document.createElement('button');
learnMore.textContent = 'Learn More';

function show() {
  letsGoText.classList.toggle('show');
  if (learnMore.textContent === 'Learn More') {
    learnMore.textContent = 'View Less';
  } else {
    learnMore.textContent = 'Learn More';
  }
}

learnMore.addEventListener('click', show);

const textContent = document.querySelector('.text-content');
textContent.append(learnMore);
learnMore.classList.add('btn');

// const log = document.createElement('p');
// log.className = 'new-element';

// document.body.appendChild(log);

const newClass = document.querySelector('.new-element');
// console.log(newClass);
let customStr = '';

search.addEventListener('keydown', function(e) {
  e.stopPropagation();
  customStr += e.key;
  console.log(customStr);
  // log.textContent = customStr;
});

const anchors = document.querySelectorAll('a');
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', e => {
    e.preventDefault();
  });
}

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('mouseover', e => {
    e.target.style.color = 'teal';
  });
}

for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('mouseout', e => {
    e.target.style.color = '';
  });
}
