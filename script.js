const photos = Array.from(new Set(String.raw`
  'Photos/2013-10-03 16.44.44.jpg Photos/2013-10-03 16.44.54.jpg Photos/2013-10-03 16.45.38.jpg Photos/2013-10-03 16.46.47.jpg Photos/2013-10-03 17.59.04.jpg Photos/2013-10-03 17.59.26.jpg Photos/2013-10-03 17.59.50.jpg Photos/2013-10-03 18.00.41.jpg Photos/2013-12-07 19.00.47.jpg Photos/2013-12-07 19.01.36.jpg Photos/2014-01-01 13.34.07.jpg Photos/2014-01-13 16.34.21.jpg Photos/2014-01-13 16.34.39.jpg Photos/2014-01-14 12.31.48.jpg Photos/2014-01-14 12.32.24.jpg Photos/2014-01-14 19.04.35.jpg Photos/2014-01-19 15.27.59.jpg Photos/2014-01-19 15.28.11.jpg Photos/2014-01-19 15.28.52.jpg Photos/2014-01-19 15.29.48.jpg Photos/2014-01-19 15.30.43.jpg Photos/2014-01-19 15.31.39.jpg Photos/2014-02-01 13.09.09.jpg Photos/2014-02-21 17.24.17.jpg Photos/2014-02-21 17.25.10.jpg Photos/2014-02-21 17.25.33.jpg Photos/2014-02-21 17.27.13.jpg Photos/2014-02-21 17.28.13.jpg Photos/2014-02-21 17.28.48.jpg Photos/2014-02-21 17.33.14.jpg Photos/2014-02-21 17.33.34.jpg Photos/2014-02-21 17.34.00.jpg Photos/2014-02-23 15.43.05.jpg Photos/2014-02-23 15.48.53.jpg Photos/2014-03-21 09.19.04.jpg Photos/2014-03-21 09.24.50 - Copy.jpg Photos/2014-03-21 09.24.50.jpg Photos/2014-06-21 10.55.12.jpg Photos/2014-06-21 10.55.28.jpg Photos/2014-06-21 10.55.42.jpg Photos/2014-06-21 10.55.59.jpg Photos/2014-06-21 10.56.09.jpg Photos/2014-06-21 10.56.34.jpg Photos/2014-07-11 17.18.33.jpg Photos/2014-07-11 17.19.49.jpg Photos/2014-07-16 12.23.13.jpg Photos/2014-07-16 12.27.00.jpg Photos/2014-07-18 13.09.37.jpg Photos/20200814_000631.jpg Photos/20200814_000937.jpg Photos/20200814_000941.jpg Photos/20200814_000953.jpg Photos/20200814_001004.jpg Photos/20201003_001423.jpg Photos/20201003_001431.jpg Photos/20201003_001436.jpg Photos/20201026_184358.jpg Photos/20201102_123052.jpg Photos/20201114_133926.jpg Photos/20201114_135610.jpg Photos/20201114_180704.jpg Photos/20201114_180722.jpg Photos/20201205_112337.jpg Photos/20210308_203812.jpg Photos/20210429_164001.jpg Photos/20210523_171104.jpg Photos/20210730_151107.jpg Photos/20210730_151148.jpg Photos/20210830_171941.jpg Photos/20210830_172109.jpg Photos/20210830_172544.jpg Photos/20210830_172843.jpg Photos/20210830_172918.jpg Photos/20210830_174216.jpg Photos/20211009_162510.jpg Photos/20211026_160816.jpg Photos/20211104_114259.jpg Photos/20211104_114641.jpg Photos/20211104_114647.jpg Photos/20211104_114711.jpg Photos/20211104_114726.jpg Photos/20211104_114735.jpg Photos/20211104_120716.jpg Photos/20211104_120756.jpg Photos/20211104_120815.jpg Photos/20211104_120838.jpg Photos/20211104_181125.jpg Photos/20211104_181150.jpg Photos/20211109_124827.jpg Photos/20211123_173012.jpg Photos/20211202_154034.jpg Photos/20211202_154205.jpg Photos/20211202_154448.jpg Photos/20211216_155601.jpg Photos/20211216_155613.jpg Photos/20211221_155325.jpg Photos/20211221_155340.jpg Photos/20211221_155348.jpg Photos/20211221_155436.jpg Photos/20211221_155458.jpg Photos/20211221_155516.jpg Photos/20211221_155543.jpg Photos/20211221_155648.jpg Photos/20211221_155652.jpg Photos/20211221_155719.jpg Photos/20211221_155756.jpg Photos/20220417_062332.jpg Photos/20220516_170505.jpg Photos/20220516_170514.jpg Photos/20220516_170548.jpg Photos/20220522_085449.jpg Photos/20220522_085550.jpg Photos/05032014333.jpg Photos/05032014334.jpg Photos/1773212303027.png Photos/1778687949996.jpg Photos/158171419584649055.jpg Photos/158211419584633331.jpg Photos/DSC00094.JPG Photos/DSC00263.JPG Photos/DSC00265.JPG Photos/DSC00268.JPG Photos/DSC00269.JPG Photos/DSC00270.JPG Photos/DSC00272.JPG Photos/DSC00273.JPG Photos/DSC00274.JPG Photos/DSC00275.JPG Photos/DSC00276.JPG Photos/DSC00278.JPG Photos/DSC00279.JPG Photos/DSC00280.JPG Photos/DSC00282.JPG Photos/DSC00286.JPG Photos/DSC00292.JPG Photos/DSC00293.JPG Photos/DSC00294.JPG Photos/DSC00297.JPG Photos/DSC00301.JPG Photos/DSC00302.JPG Photos/DSC00303.JPG Photos/DSC00304.JPG Photos/DSC00305.JPG Photos/DSC00306.JPG Photos/DSC00307.JPG Photos/DSC00310.JPG Photos/DSC00311.JPG Photos/DSC00312.JPG Photos/DSC00313.JPG Photos/DSC00314.JPG Photos/DSC00315.JPG Photos/DSC00316.JPG Photos/DSC00317.JPG Photos/DSC00327.JPG Photos/DSC00332.JPG Photos/DSC00333.JPG Photos/DSC00334.JPG Photos/DSC00335.JPG Photos/DSC00357.JPG Photos/DSC00358.JPG Photos/DSC00362.JPG Photos/DSC00363.JPG Photos/DSC00364.JPG Photos/DSC00380.JPG Photos/DSC00392.JPG Photos/DSC00397.JPG Photos/DSC00402.JPG Photos/IMG_20141123_172439.jpg Photos/IMG_20141123_172708.jpg Photos/IMG_20141207_193322.jpg Photos/IMG_20141225_154742.jpg Photos/IMG_20150214_165733.jpg Photos/IMG_20150214_165736.jpg Photos/IMG_20150214_165736-1.jpg Photos/IMG_20150325_084630.jpg Photos/IMG_20150325_084642.jpg Photos/IMG_20150328_125448.jpg Photos/IMG_20150328_125511.jpg Photos/IMG_20150328_125604.jpg Photos/IMG_20150328_125633.jpg Photos/IMG_20150328_130500.jpg Photos/IMG_20150328_130708.jpg Photos/IMG_20150407_170830.jpg Photos/IMG_20150407_170918.jpg Photos/IMG_20150407_170942.jpg Photos/IMG_20150409_104133.jpg Photos/IMG_20150409_104147.jpg Photos/IMG_20150430_121946.jpg Photos/IMG_20150430_121950.jpg Photos/IMG_20150430_122008.jpg Photos/IMG_20150510_102855_1.jpg Photos/IMG_20150510_102901.jpg Photos/IMG_20150510_102908.jpg Photos/IMG_20150510_102913.jpg Photos/IMG_20150720_075544.jpg Photos/IMG_20150720_075559.jpg Photos/IMG_20150814_110133.jpg Photos/IMG_20251229_162140.jpg Photos/IMG_20260814_214004.jpg Photos/IMG-20210428-WA0021.jpg Photos/IMG-20210428-WA0022 (0) - Copy.jpg Photos/IMG-20210428-WA0022 (0).jpg Photos/IMG-20210520-WA0008.jpg Photos/IMG-20210520-WA0010 (0).jpg Photos/IMG20260513174601.jpg'
`.match(/Photos\/.*?\.(?:jpg|jpeg|png|gif|webp)/gi) || []));

const homeView = document.querySelector('#home-view');
const albumView = document.querySelector('#album-view');

function showView(view) {
  [homeView, albumView].forEach((section) => {
    const isActive = section === view;
    section.classList.toggle('is-active', isActive);
    section.hidden = !isActive;
    section.setAttribute('aria-hidden', String(!isActive));
  });
  window.scrollTo(0, 0);
}

document.querySelector('#photos-button').addEventListener('click', () => showView(albumView));
document.querySelectorAll('[data-home]').forEach((button) => button.addEventListener('click', () => showView(homeView)));

const book = document.querySelector('#book');
const dots = document.querySelector('#dots');
const progressLabel = document.querySelector('#progress-label');
const viewCount = document.querySelector('.view-count');
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const rotateLeftImageButton = document.querySelector('#rotate-left-image');
const rotateRightImageButton = document.querySelector('#rotate-right-image');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
let currentPage = 0;
const isMobileLayout = window.matchMedia('(max-width: 650px)').matches;
const totalPages = isMobileLayout ? photos.length : Math.ceil(photos.length / 2);
const rotationByPhoto = new Map(photos.map((photo) => [photo, 0]));
let touchStartX = null;

if (isMobileLayout) {
  previousButton.setAttribute('aria-label', 'Previous photo');
  nextButton.setAttribute('aria-label', 'Next photo');
}
function getPhotoUrl(photo) {
  if (!isMobileLayout) return photo;
  const filename = photo.slice(photo.lastIndexOf('/') + 1);
  const basename = filename.slice(0, filename.lastIndexOf('.'));
  return `Photos/mobile/${encodeURIComponent(basename)}.webp`;
}

document.querySelector('.cover-page').addEventListener('click', () => goTo(currentPage + 1));

function createPhotoFace(photo, photoIndex, faceClass) {
  const face = document.createElement('div');
  face.className = `face ${faceClass} memory-page`;

  if (!photo) return face;

  const polaroid = document.createElement('figure');
  polaroid.className = 'polaroid';
  const image = document.createElement('img');
  polaroid.classList.add('is-loading');
  if (isMobileLayout) image.dataset.src = getPhotoUrl(photo);
  else image.src = getPhotoUrl(photo);
  image.alt = `Photo ${photoIndex + 1}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  if (photoIndex === 0) image.fetchPriority = 'high';
  image.dataset.photoIndex = photoIndex;
  polaroid.appendChild(image);
  face.appendChild(polaroid);
  image.addEventListener('load', () => polaroid.classList.remove('is-loading'), { once: true });
  image.addEventListener('error', () => {
    if (isMobileLayout && image.src.endsWith(getPhotoUrl(photo))) {
      image.src = photo;
      return;
    }
    polaroid.remove();
    face.setAttribute('aria-hidden', 'true');
  });
  image.addEventListener('click', (event) => { event.stopPropagation(); openLightbox(photo); });

  return face;
}

function createPage(frontPhoto, backPhoto, leafIndex) {
  const page = document.createElement('article');
  page.className = 'page';
  page.dataset.page = leafIndex;
  page.append(
    createPhotoFace(frontPhoto, isMobileLayout ? leafIndex : leafIndex * 2, 'front'),
    createPhotoFace(backPhoto, isMobileLayout ? undefined : leafIndex * 2 + 1, 'back')
  );
  page.addEventListener('click', () => {
    const pageNumber = leafIndex + 1;
    if (pageNumber === currentPage && pageNumber < totalPages) goTo(currentPage + 1);
    else if (pageNumber === currentPage - 1) goTo(currentPage - 1);
  });
  return page;
}

function generatePages() {
  const pageIncrement = isMobileLayout ? 1 : 2;
  for (let photoIndex = 0; photoIndex < photos.length; photoIndex += pageIncrement) {
    const leafIndex = isMobileLayout ? photoIndex : photoIndex / 2;
    const page = createPage(
      photos[photoIndex],
      isMobileLayout ? undefined : photos[photoIndex + 1],
      leafIndex
    );
    page.style.zIndex = totalPages - leafIndex;
    book.appendChild(page);

    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.type = 'button';
    dot.ariaLabel = `Go to ${isMobileLayout ? 'photo' : 'spread'} ${leafIndex + 1}`;
    dot.addEventListener('click', () => goTo(leafIndex + 1));
    dots.appendChild(dot);
  }
}

function goTo(pageIndex) {
  currentPage = Math.max(0, Math.min(pageIndex, totalPages));
  if (isMobileLayout) {
    [currentPage, currentPage + 1].forEach((photoPage) => {
      const image = book.querySelector(`.page[data-page="${photoPage}"] img`);
      if (image && !image.hasAttribute('src')) image.src = image.dataset.src;
    });
  }
  book.querySelectorAll('.page').forEach((page, index) => {
    const isCover = page.classList.contains('cover-page');
    const pageIndex = isCover ? 0 : index;
    page.classList.toggle('flipped', pageIndex < currentPage);
    page.style.zIndex = pageIndex < currentPage ? pageIndex + 1 : totalPages + 1 - pageIndex;
  });
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === totalPages;
  rotateLeftImageButton.disabled = getVisibleImage('left') === null;
  rotateRightImageButton.disabled = getVisibleImage('right') === null;
  progressLabel.textContent = currentPage === 0 ? 'Cover' : `Photo ${String(currentPage).padStart(2, '0')} of ${String(photos.length).padStart(2, '0')}`;
  dots.querySelectorAll('.dot').forEach((dot, index) => dot.classList.toggle('active', index === currentPage - 1));
}

function getVisibleImage(side) {
  if (currentPage === 0 || currentPage > totalPages) return null;
  if (isMobileLayout) {
    if (side === 'left') return null;
    return book.querySelector(`.page[data-page="${currentPage - 1}"]:not(.flipped) .front img`);
  }
  const leafIndex = side === 'left' ? currentPage - 2 : currentPage - 1;
  const faceClass = side === 'left' ? 'back' : 'front';
  const pageState = side === 'left' ? '.flipped' : ':not(.flipped)';
  return book.querySelector(`.page[data-page="${leafIndex}"]${pageState} .${faceClass} img`);
}

function rotateVisiblePhoto(side) {
  const image = getVisibleImage(side);
  if (!image) return;
  const photoIndex = Number(image.dataset.photoIndex);
  const photo = photos[photoIndex];
  const rotation = ((rotationByPhoto.get(photo) || 0) + 90) % 360;
  rotationByPhoto.set(photo, rotation);
  image.style.transform = `rotate(${rotation}deg)`;
  lightboxImage.style.transform = `rotate(${rotation}deg)`;
  rotateLeftImageButton.setAttribute('aria-label', `Rotate left side image (current angle ${rotation} degrees)`);
  rotateRightImageButton.setAttribute('aria-label', `Rotate right side image (current angle ${rotation} degrees)`);
}

function applyPhotoRotation(photo, rotation) {
  const photoIndex = photos.indexOf(photo);
  const image = book.querySelector(`img[data-photo-index="${photoIndex}"]`);
  if (image) image.style.transform = `rotate(${rotation}deg)`;
  lightboxImage.style.transform = `rotate(${rotation}deg)`;
  rotateLeftImageButton.setAttribute('aria-label', `Rotate left side image (current angle ${rotation} degrees)`);
  rotateRightImageButton.setAttribute('aria-label', `Rotate right side image (current angle ${rotation} degrees)`);
}

function openLightbox(photo) {
  lightboxImage.src = photo;
  lightboxImage.alt = '';
  lightboxImage.style.transform = `rotate(${rotationByPhoto.get(photo) || 0}deg)`;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}
lightboxImage.addEventListener('error', closeLightbox);
function closeLightbox() { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true'); }

viewCount.textContent = `01—${String(photos.length).padStart(2, '0')}`;
generatePages();
previousButton.addEventListener('click', () => goTo(currentPage - 1));
nextButton.addEventListener('click', () => goTo(currentPage + 1));
rotateLeftImageButton.addEventListener('click', () => rotateVisiblePhoto('left'));
rotateRightImageButton.addEventListener('click', () => rotateVisiblePhoto('right'));
book.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
book.addEventListener('touchend', (event) => {
  if (touchStartX === null) return;
  const distance = event.changedTouches[0].clientX - touchStartX;
  touchStartX = null;
  if (Math.abs(distance) < 45) return;
  goTo(currentPage + (distance < 0 ? 1 : -1));
}, { passive: true });
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') goTo(currentPage - 1);
  if (event.key === 'ArrowRight') goTo(currentPage + 1);
  if (event.key === 'Escape') closeLightbox();
});
document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
goTo(0);
showView(homeView);
