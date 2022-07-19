'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////
// // XMLHttpRequest AJAX Call
// //////////////////////////////

// const getCountryData = function (country) {
//   const apiURL = 'https://restcountries.com/v2';

//   const request = new XMLHttpRequest();

//   request.open('GET', `${apiURL}/name/${country}`);

//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('egypt');
// getCountryData('usa');

///////////////////////////////
// Welcome To Callback Hell
///////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} million</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//   </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   const apiURL = 'https://restcountries.com/v2';

//   //Ajax Call Country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `${apiURL}/name/${country}`);
//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Get Country 1
//     renderCountry(data);

//     // Get Neighbour Country 2
//     const neighbour = data.borders?.[1];

//     if (!neighbour) return;
//     console.log(neighbour);
//     //Ajax Call Country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `${apiURL}/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('egypt');

// // Callback Hell
// setTimeout(() => {
//   console.log('1 Second Passed');
//   setTimeout(() => {
//     console.log('2 Seconds Passed');
//     setTimeout(() => {
//       console.log('3 Seconds Passed');
//       setTimeout(() => {
//         console.log('4 Seconds Passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//////////////////////////////////
// Promises And The Fetch API
//////////////////////////////////

//   const apiURL = 'https://restcountries.com/v2';
//   const request = new XMLHttpRequest();
//   request.open('GET', `${apiURL}/name/${country}`);
//   request.send();

const apiURL = 'https://restcountries.com/v2/name/egypt';
const request = fetch(apiURL);

console.log(request);
