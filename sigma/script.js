const movieData = {
  trending: [
    { title: 'The Queen\'s Gambit', genre: 'Drama', year: '2020', tag: 'Top', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80', description: 'A gifted chess prodigy battles addiction while chasing greatness in a beautifully designed coming-of-age drama.' },
    { title: 'Dark', genre: 'Sci-Fi', year: '2017', tag: 'New', image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80', description: 'A missing child triggers a chain reaction that leads to a mind-bending mystery across time, space, and family secrets.' },
    { title: 'Wednesday', genre: 'Mystery', year: '2022', tag: 'Hot', image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80', description: 'The Gothic queen of Nevermore is back with sharp wit, supernatural troubles, and a very dangerous school mystery.' },
    { title: 'You', genre: 'Thriller', year: '2018', tag: 'New', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=900&q=80', description: 'A charming writer becomes fascinated with a woman and soon discovers obsession is a dangerous game.' },
    { title: 'The Umbrella Academy', genre: 'Action', year: '2019', tag: 'TV', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80', description: 'A dysfunctional family of superheroes tries to stop the apocalypse while fighting their own demons.' },
    { title: 'Lucifer', genre: 'Fantasy', year: '2016', tag: 'Binge', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80', description: 'The Devil himself trades hell for Los Angeles and becomes a consultant to the LAPD.' }
  ],
  picks: [
    { title: 'Black Mirror', genre: 'Drama', year: '2011', tag: 'Epic', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80', description: 'A chilling look at how technology shapes our lives in ways both brilliant and terrifying.' },
    { title: 'Midnight Mass', genre: 'Horror', year: '2021', tag: 'New', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80', description: 'A small island parish experiences extraordinary and horrifying events that awaken old fears.' },
    { title: 'The Fall of the House of Usher', genre: 'Mystery', year: '2023', tag: 'Hit', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', description: 'A haunting investigation into a wealthy family and the curses that consume them.' },
    { title: 'Arcane', genre: 'Animation', year: '2021', tag: 'Top', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80', description: 'Two sisters find themselves on opposite sides of a war between power, pride, and destiny.' },
    { title: 'Money Heist', genre: 'Crime', year: '2017', tag: 'Popular', image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80', description: 'A mastermind recruits a team for the biggest heist in history while the police close in.' },
    { title: 'The Witcher', genre: 'Fantasy', year: '2019', tag: 'Epic', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80', description: 'A monster hunter with a dangerous past navigates a battle of fate, prophecy, and power.' }
  ],
  new: [
    { title: 'The Diplomat', genre: 'Political', year: '2023', tag: 'New', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', description: 'Diplomacy, leverage, and global crises collide in a tense thriller full of political intrigue.' },
    { title: '3 Body Problem', genre: 'Sci-Fi', year: '2024', tag: 'Hot', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=900&q=80', description: 'A secret group of scientists races to decode an alien message that could change humanity forever.' },
    { title: 'The Crown', genre: 'Drama', year: '2016', tag: 'Award', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80', description: 'A lavish portrait of the British royal family through the decades, filled with scandal and sacrifice.' },
    { title: 'Evil', genre: 'Mystery', year: '2019', tag: 'Trending', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80', description: 'A skeptical priest and a psychologist investigate cases that may point to supernatural evil.' },
    { title: 'The Bond', genre: 'Action', year: '2024', tag: 'Top', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80', description: 'A covert operative uncovers a deadly global conspiracy and must outmaneuver everyone in sight.' },
    { title: 'One Piece', genre: 'Adventure', year: '2023', tag: 'New', image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=900&q=80', description: 'A feared pirate crew sets sail on a grand adventure to find the ultimate treasure and change the world.' }
  ]
};

const modal = document.getElementById('movieModal');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalGenre = document.getElementById('modalGenre');
const modalDescription = document.getElementById('modalDescription');
const modalHero = document.getElementById('modalHero');

function openModal(movie) {
  modalTitle.textContent = movie.title;
  modalYear.textContent = movie.year;
  modalGenre.textContent = movie.genre;
  modalDescription.textContent = movie.description;
  modalHero.style.backgroundImage = `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url('${movie.image}')`;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

function renderMovieRow(items, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = items
    .map(
      (movie) => `
        <article class="movie-card" style="--movie-bg: url('${movie.image}')" data-title="${movie.title}" data-genre="${movie.genre}" data-year="${movie.year}" data-description="${movie.description}" data-image="${movie.image}">
          <div class="movie-card__overlay">
            <div class="movie-card__top">
              <span class="badge">${movie.tag}</span>
              <button class="bookmark" aria-label="Add to My List">+</button>
            </div>
            <div class="movie-card__info">
              <h3>${movie.title}</h3>
              <p>${movie.genre} • ${movie.year}</p>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.bookmark').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      button.classList.toggle('active');
      button.textContent = button.classList.contains('active') ? '✓' : '+';
    });
  });

  document.querySelectorAll('.movie-card').forEach((card) => {
    card.addEventListener('click', () => {
      const movie = {
        title: card.dataset.title,
        genre: card.dataset.genre,
        year: card.dataset.year,
        description: card.dataset.description,
        image: card.dataset.image
      };
      openModal(movie);
    });
  });
}

function renderAllMovies() {
  renderMovieRow(movieData.trending, 'trendingRow');
  renderMovieRow(movieData.picks, 'topPicksRow');
  renderMovieRow(movieData.new, 'newReleaseRow');
}

function setupFaq() {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isOpen = item.classList.contains('open');

      faqButtons.forEach((btn) => {
        btn.parentElement.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');

  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();
    let visibleCount = 0;

    document.querySelectorAll('.movie-card').forEach((card) => {
      const title = card.dataset.title.toLowerCase();
      const matches = title.includes(query);
      card.style.display = matches ? 'block' : 'none';
      if (matches) visibleCount += 1;
    });

    noResults.classList.toggle('hidden', visibleCount !== 0 || query === '');
  });
}

function setupHeroButtons() {
  const playButton = document.querySelector('.play-button');
  const infoButton = document.querySelector('.info-button');

  playButton.addEventListener('click', () => {
    alert('Playing: Stranger Things');
  });

  infoButton.addEventListener('click', () => {
    const featuredMovie = {
      title: 'Stranger Things',
      genre: 'Sci-Fi',
      year: '2022',
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'
    };
    openModal(featuredMovie);
  });
}

function setupModal() {
  const closeBtn = document.querySelector('.modal-close');
  const backdrop = document.querySelector('.modal-backdrop');

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function setupFooterYear() {
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllMovies();
  setupFaq();
  setupSearch();
  setupHeroButtons();
  setupModal();
  setupFooterYear();
});
