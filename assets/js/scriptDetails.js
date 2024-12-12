const pexelsUrl = 'https://api.pexels.com/v1/photos/';
const apiKey = 'hUaRGPA6Zc0lQhncZFNjwtZh9DaDGeCrSVQJ8H91oY9R8pdbNj9AudS8';

window.onload = function () {
  getImages();
};

const getImages = function () {
  let imageId = new URLSearchParams(window.location.search).get('photoId');

  fetch(pexelsUrl + imageId, {
    headers: {
      authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Errore nel caricamento dei dettagli della foto');
      }
    })
    .then((imgDetails) => {
      console.log(imgDetails);

      useDetails(imgDetails);
    })
    .catch((error) => {
      console.log(error);
    });
};

const useDetails = function (imageDetails) {
  const img = document.createElement('img');
  img.src = `${imageDetails.src.large}`;

  const photrographerDiv = document.createElement('div');
  photrographerDiv.classList.add('mt-2');

  const photrographerA = document.createElement('a');
  photrographerA.href = `${imageDetails.photographer_url}`;
  photrographerA.setAttribute('target', '_blank');
  photrographerA.innerText = `${imageDetails.photographer}`;

  const backDiv = document.createElement('div');
  backDiv.classList.add('mt-2');

  const goBack = document.createElement('a');
  goBack.href = 'pexels-start.html';
  goBack.innerText = 'INDIETRO';

  const divToFill = document.getElementById('divToFill');

  divToFill.appendChild(img);
  divToFill.appendChild(photrographerDiv);
  photrographerDiv.appendChild(photrographerA);
  divToFill.appendChild(backDiv);
  backDiv.appendChild(goBack);

  const jumbotron = document.querySelector('.jumbotron');
  jumbotron.style.backgroundColor = imageDetails.avg_color;
};
