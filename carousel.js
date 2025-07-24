export function initCarousel(images) {
  let index = 0;
  let isClosingByClickOutside = false;

  // DOM Elements
  const carouselImage = document.getElementById("carouselImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const scrollContainer = document.getElementById("thumbnailScroll");
  const thumbLeft = document.getElementById("thumbLeft");
  const thumbRight = document.getElementById("thumbRight");
  const galleryBtn = document.getElementById("galleryBtn");
  const carouselWrapper = document.getElementById("carouselWrapper");
  const carousel = document.getElementById("carouselContainer");
  const thumbnail = document.getElementById("thumbnailScroll");

  function updateCarousel() {
    carouselImage.src = images[index];
    thumbnails.forEach((thumb, idx) => {
      thumb.classList.toggle("border-blue-500", idx === index);
      thumb.classList.toggle("border-transparent", idx !== index);
    });
  }

  function openFullscreen(element) {
    if (element.requestFullscreen) element.requestFullscreen();
    else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    else if (element.msRequestFullscreen) element.msRequestFullscreen();
  }

  // Event: Tampilkan carousel
  galleryBtn.addEventListener("click", () => {
    carouselWrapper.classList.remove("hidden");
    carousel.classList.remove("hidden");
    thumbnail.classList.remove("hidden");
    updateCarousel();

    if (window.innerWidth <= 964) {
      document.getElementById("homedescription")?.classList.add("hidden");
    }
  });

  // Event: Navigasi slide
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateCarousel();
  });

  // Event: Klik thumbnail
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      index = parseInt(thumb.dataset.index);
      updateCarousel();
    });
  });

  // Scroll thumbnail kiri/kanan
  thumbLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -150, behavior: "smooth" });
  });

  thumbRight.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 150, behavior: "smooth" });
  });

  // Event: Klik luar → tutup
  carouselWrapper.addEventListener("click", (e) => {
    if (e.target === carouselWrapper) {
      isClosingByClickOutside = true;
      carouselWrapper.classList.add("hidden");

      if (window.innerWidth <= 964 && isClosingByClickOutside) {
        document.getElementById("homedescription")?.classList.remove("hidden");
      }

      isClosingByClickOutside = false;
    }
  });

  // Fullscreen on image click
  carouselImage.addEventListener("click", () => {
    openFullscreen(carouselImage);
  });

  updateCarousel(); // Load awal
}