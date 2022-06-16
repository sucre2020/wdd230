const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(response => response.json())
    .then( ( data ) => {
        const prophets = data['prophets'];
        console.table(prophets);
        prophets.forEach(displayProphets);
    });

displayProphets = (prophet) => {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('h3');
    let birthplace = document.createElement('h3');
    let portrait = document.createElement('img');
    let order = ``;

    switch (prophet.order) {
        case 1:
          order = `${prophet.order}st`;
          break;
        case 2:
          order = `${prophet.order}nd`;
          break;
        case 3:
          order = `${prophet.order}rd`;
          break;
        default:
          order = `${prophet.order}th`;
      }


    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;


    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}- ${order} Latter-Day President`);
    portrait.setAttribute('loading', 'lazy');


    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);


    cards.appendChild(card);
}