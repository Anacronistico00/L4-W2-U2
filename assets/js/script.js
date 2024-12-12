const prefabAlbum = document.getElementById('prefabRow');
const primaryAlbum = document.getElementById('primaryAlbum');
const secondaryAlbum = document.getElementById('secondaryAlbum');
const apiKey = 'hUaRGPA6Zc0lQhncZFNjwtZh9DaDGeCrSVQJ8H91oY9R8pdbNj9AudS8';

window.onload = function () {
  const btnPrimary = document.querySelector('.btn-primary');
  btnPrimary.addEventListener('click', function (e) {
    e.preventDefault();
    prefabAlbum.classList.add('d-none');
    secondaryAlbum.classList.add('d-none');
    if (primaryAlbum.classList.contains('d-none')) {
      primaryAlbum.classList.remove('d-none');
    }
    getImages('Sky');
  });
  const btnSecondary = document.querySelector('.btn-secondary');
  btnSecondary.addEventListener('click', function (e) {
    e.preventDefault();
    prefabAlbum.classList.add('d-none');
    primaryAlbum.classList.add('d-none');
    if (secondaryAlbum.classList.contains('d-none')) {
      secondaryAlbum.classList.remove('d-none');
    }
    getImages2('Animals');
  });
};

async function getImages(keyword) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${keyword}`,
      {
        method: 'GET',
        headers: {
          Authorization: apiKey,
        },
      }
    );

    const data = await response.json();

    data.photos.forEach((photo) => {
      const col = document.createElement('div');
      col.classList.add('col-md-4');

      const card = document.createElement('div');
      card.classList.add('card', 'mb-4', 'shadow-sm');

      const img = document.createElement('img');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardA = document.createElement('a');
      cardA.classList.add('card-title');
      cardA.href = `https://api.pexels.com/v1/photos/${photo.id}/`;
      cardA.innerText = photo.alt;

      const imgUrl = photo.src.tiny;
      img.alt = photo.alt || `Immagine di ${keyword}`;
      img.src = imgUrl;

      const cardP = document.createElement('p');
      cardP.innerText = `Immagine di ${keyword}`;

      const footerDiv = document.createElement('div');
      footerDiv.classList.add(
        'd-flex',
        'justify-content-between',
        'align-items-center'
      );

      const btnDiv = document.createElement('div');
      btnDiv.classList.add('btn-group');

      const btn1 = document.createElement('button');
      const btn2 = document.createElement('button');

      btn1.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
      btn1.setAttribute('type', 'button');
      btn1.textContent = 'VIEW';
      btn2.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
      btn2.setAttribute('type', 'button');
      btn2.textContent = 'HIDE';

      const small = document.createElement('small');
      small.classList.add('text-muted');
      small.textContent = `${photo.id}`;

      btnDiv.appendChild(btn1);
      btnDiv.appendChild(btn2);
      footerDiv.appendChild(btnDiv);
      footerDiv.appendChild(small);
      cardBody.appendChild(cardA);
      cardBody.appendChild(cardP);
      cardBody.appendChild(footerDiv);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      primaryAlbum.appendChild(col);
    });
  } catch (error) {
    console.log(error);
  }
}

async function getImages2(keyword) {
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${keyword}`,
      {
        method: 'GET',
        headers: {
          Authorization: apiKey,
        },
      }
    );

    const data = await response.json();

    data.photos.forEach((photo) => {
      const col = document.createElement('div');
      col.classList.add('col-md-4');

      const card = document.createElement('div');
      card.classList.add('card', 'mb-4', 'shadow-sm');

      const img = document.createElement('img');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardA = document.createElement('a');
      cardA.classList.add('card-title');
      cardA.href = `https://api.pexels.com/v1/photos/${photo.id}/`;
      cardA.innerText = photo.alt;

      const imgUrl = photo.src.tiny;
      img.alt = photo.alt || `Immagine di ${keyword}`;
      img.src = imgUrl;

      const cardP = document.createElement('p');
      cardP.innerText = `Immagine di ${keyword}`;

      const footerDiv = document.createElement('div');
      footerDiv.classList.add(
        'd-flex',
        'justify-content-between',
        'align-items-center'
      );

      const btnDiv = document.createElement('div');
      btnDiv.classList.add('btn-group');

      const btn1 = document.createElement('button');
      const btn2 = document.createElement('button');

      btn1.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
      btn1.setAttribute('type', 'button');
      btn1.textContent = 'VIEW';
      btn2.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
      btn2.setAttribute('type', 'button');
      btn2.textContent = 'HIDE';

      const small = document.createElement('small');
      small.classList.add('text-muted');
      small.textContent = `${photo.id}`;

      btnDiv.appendChild(btn1);
      btnDiv.appendChild(btn2);
      footerDiv.appendChild(btnDiv);
      footerDiv.appendChild(small);
      cardBody.appendChild(cardA);
      cardBody.appendChild(cardP);
      cardBody.appendChild(footerDiv);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      secondaryAlbum.appendChild(col);
    });
  } catch (error) {
    console.log(error);
  }
}
