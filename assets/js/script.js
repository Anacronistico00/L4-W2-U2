const prefabAlbum = document.getElementById('prefabRow');
const apiKey = 'hUaRGPA6Zc0lQhncZFNjwtZh9DaDGeCrSVQJ8H91oY9R8pdbNj9AudS8';
const dataUrl = 'https://api.pexels.com/v1/search?query=';
const jumbotron = document.querySelector('.jumbotron');

const keywordInput = document.getElementById('keywordInput');

window.onload = function () {
  const searchBtn = document.querySelector('.searchBtn');
  searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    prefabAlbum.innerText = '';
    console.log(keywordInput.value);
    getImages(keywordInput.value);
  });
  const btnPrimary = document.querySelector('.btn-primary');
  btnPrimary.addEventListener('click', function (e) {
    e.preventDefault();
    prefabAlbum.innerText = '';
    getImages('Sky');
  });
  const btnSecondary = document.querySelector('.btn-secondary');
  btnSecondary.addEventListener('click', function (e) {
    e.preventDefault();
    prefabAlbum.innerText = '';
    getImages('Animals');
  });
};

async function getImages(keyword) {
  try {
    const response = await fetch(dataUrl + `${keyword}`, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
      },
    });

    const data = await response.json();

    data.photos.forEach((photo) => {
      const col = document.createElement('div');
      col.classList.add('col-md-4');

      const card = document.createElement('div');
      card.classList.add('card', 'mb-4', 'shadow-sm');

      const img = document.createElement('img');
      img.classList.add('bd-placeholder-img', 'card-img-top');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardA = document.createElement('a');
      cardA.classList.add('card-title');
      cardA.href = `pexels-details.html?photoId=${photo.id}/`;
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

      btn1.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
      btn1.setAttribute('type', 'button');
      btn1.textContent = 'VIEW';
      btn1.setAttribute('data-bs-toggle', 'modal');
      btn1.setAttribute('data-bs-target', 'exampleModal');
      const modal = document.createElement('div');
      modal.classList.add('modal', 'fade');
      modal.id = 'exempleModal';
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-labelledby', 'exempleModalLabel');
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `  <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                ...
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                              </div>
                            </div>
                          </div>`;
      const btn2 = document.createElement('button');
      btn2.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
      btn2.setAttribute('type', 'button');

      btn2.textContent = 'HIDE';

      btn2.addEventListener('click', function () {
        col.remove();
      });

      const small = document.createElement('small');
      small.classList.add('text-muted');
      small.textContent = `${photo.id}`;

      btnDiv.appendChild(btn1);
      btnDiv.appendChild(modal);
      btnDiv.appendChild(btn2);
      footerDiv.appendChild(btnDiv);
      footerDiv.appendChild(small);
      cardBody.appendChild(cardA);
      cardBody.appendChild(cardP);
      cardBody.appendChild(footerDiv);
      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      prefabAlbum.appendChild(col);
    });
  } catch (error) {
    console.log(error);
  }
}
