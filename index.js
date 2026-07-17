// Portfolio Data (12 projects with categories, locations, image count, aspect ratio, and custom galleries)
const portfolioProjects = [
  {
    id: 1,
    name: "",
    category: "Co-working",
    location: "",
    aspectRatioClass: "aspect-wide",
    // https://img.rocket.new/generatedImages/rocket_gen_img_1bbb6bb19-1772219937986.png
    mainImg: "https://i.pinimg.com/1200x/6d/d7/f8/6dd7f8815994d73c086b335d755c0ec1.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/6d/d7/f8/6dd7f8815994d73c086b335d755c0ec1.jpg",
      "https://i.pinimg.com/1200x/43/45/27/4345278f496f33b575d8ef012b34f7fa.jpg",
      "https://i.pinimg.com/736x/af/28/0c/af280ce53a7196e2f7b1d62c8a35a075.jpg",
      "https://i.pinimg.com/1200x/53/b3/9b/53b39ba90a1a4db0e6ee26d69aae88e6.jpg",
      "https://i.pinimg.com/1200x/b9/ac/61/b9ac61ba116ecc56aad7b42364563593.jpg",
      "https://i.pinimg.com/1200x/a1/91/fe/a191fe5c67ad88b0bdb3314ae972189c.jpg",
      "https://i.pinimg.com/1200x/2c/bb/65/2cbb6522ddd8c7e3c9e3898aec361e4e.jpg",
      "https://i.pinimg.com/1200x/26/01/8a/26018ab99062d6bc0f9c3624db668ce6.jpg"
    ]
  },
   {
    id: 2,
    name: "",
    category: "Café",
    location: "",
    aspectRatioClass: "aspect-wide",
    mainImg: "https://i.pinimg.com/1200x/78/c6/76/78c6768dea01a9b2ce9c4f28deb4effb.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/78/c6/76/78c6768dea01a9b2ce9c4f28deb4effb.jpg",
      "https://i.pinimg.com/1200x/45/b2/2b/45b22bd8604d6830b1372afde4c6252f.jpg"
    ]
  },
  {
    id: 3,
    name: "",
    category: "Restaurant",
    location: "",
    aspectRatioClass: "aspect-square",
    mainImg: "https://i.pinimg.com/1200x/33/a8/58/33a85889f1f13eb55806af87443a5f54.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/33/a8/58/33a85889f1f13eb55806af87443a5f54.jpg",
      "https://i.pinimg.com/1200x/3b/c0/1c/3bc01cfed1a9a7545ca49039ef308dcf.jpg"
    ]
  },
  
   {
    id: 4,
    name: "",
    category: "Educational Institution",
    location: "",
    aspectRatioClass: "aspect-square",
    mainImg: "https://i.pinimg.com/1200x/df/83/5d/df835df691cf6ce05b030479cf95248d.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/df/83/5d/df835df691cf6ce05b030479cf95248d.jpg",
      "https://i.pinimg.com/1200x/a8/17/47/a8174785ec703f277ddbf09ee367c593.jpg"
    ]
  },
  {
    id: 5,
    name: "",
    category: "Grocery & Supermarket Showroom",
    location: "",
    aspectRatioClass: "aspect-square",
    mainImg: "https://i.pinimg.com/1200x/41/34/6c/41346c623d584409d59a960cd89cda08.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/41/34/6c/41346c623d584409d59a960cd89cda08.jpg",
      "https://i.pinimg.com/1200x/00/10/87/001087b2ac303d2f6e5263cf16027bda.jpg"
    ]
  },
  {
    id: 6,
    name: "",
    category: "Jewellery & Fashion Shops",
    location: "",
    aspectRatioClass: "aspect-wide",
    mainImg: "https://i.pinimg.com/1200x/8d/77/6b/8d776b213c3ee830d6bed842092e65b2.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/8d/77/6b/8d776b213c3ee830d6bed842092e65b2.jpg",
      "https://i.pinimg.com/736x/39/89/8a/39898a2108b87c1d0ed4d283d2fe66a8.jpg"
    ]
  },
  {
    id: 7,
    name: "",
    category: "Furniture & Home Decor Showroom",
    location: "",
    aspectRatioClass: "aspect-square",
    mainImg: "https://i.pinimg.com/1200x/64/58/20/6458209ac3e49ecf9335c33253bf2042.jpg",
    galleryImages: [
      "https://i.pinimg.com/1200x/64/58/20/6458209ac3e49ecf9335c33253bf2042.jpg",
      "https://i.pinimg.com/1200x/d4/97/27/d497276dc71d3c11f584bf0b62c96da2.jpg"
    ]
  },
    {
    id: 8,
    name: "",
    category: "Beauty Salon",
    location: "",
    aspectRatioClass: "aspect-wide",
    mainImg: "https://i.pinimg.com/736x/13/78/02/1378026208b197af2320f24c2a9a08b7.jpg",
    galleryImages: [
      "https://i.pinimg.com/736x/13/78/02/1378026208b197af2320f24c2a9a08b7.jpg"
    ]
  },
  
];

// Testimonials Data
const testimonialsData = [
  {
    name: "Priya Shetty",
    title: "Founder, Nexus Co-working Hub, Mangalore",
    quote: "Indoortec transformed our bare shell into a world-class co-working space. Our members constantly compliment the design. Best investment we've made.",
    bgImg: "https://img.rocket.new/generatedImages/rocket_gen_img_14b3a32aa-1772054739413.png"
  },
  {
    name: "Rajan Kamath",
    title: "Director, Spice Route Restaurant, Mangalore",
    quote: "The team understood our brand vision perfectly. The restaurant now feels like a premium destination. Footfall has increased 40% since the redesign.",
    bgImg: "https://img.rocket.new/generatedImages/rocket_gen_img_150ce0f51-1773139393246.png"
  },
  {
    name: "Ananya Rao",
    title: "CEO, Vertex Tech, Bangalore",
    quote: "Our office needed to attract top engineering talent. Indoortec delivered a space that feels like a product company. Recruitment has never been easier.",
    bgImg: "https://img.rocket.new/generatedImages/rocket_gen_img_19dcb987c-1763301304743.png"
  }
];

// State Manager
const state = {
  likes: JSON.parse(localStorage.getItem("indoortec_likes") || "{}"),
  gallery: {
    currentProjectId: null,
    currentImageIndex: 0
  }
};

// DOM Elements
const header = document.querySelector(".fixed-header");
const portfolioGrid = document.getElementById("portfolio-grid");
const consultationModal = document.getElementById("consultation-modal");
const videoModal = document.getElementById("video-modal");
const galleryModal = document.getElementById("gallery-modal");
const mobileDrawer = document.getElementById("mobile-drawer");

// Form Element
const consultationForm = document.getElementById("consultation-form");

// Dynamic Render: Portfolio Items
function renderPortfolio() {
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = portfolioProjects.map(proj => {
    const isLiked = !!state.likes[proj.id];
    const likeCount = (state.likes[proj.id] || 0) + (isLiked ? 1 : 0); // Mock offset, always starting at 0 or 1.
    const finalLikeVal = isLiked ? 1 : 0;

    return `
      <div class="masonry-item">
        <button class="project-btn open-gallery" data-id="${proj.id}" aria-label="View ${proj.name} gallery">
          <div class="project-img-wrapper ${proj.aspectRatioClass}">
            <img src="${proj.mainImg}" alt="${proj.name}" class="project-img" loading="lazy" />
            <div class="project-category-badge">${proj.category}</div>
          </div>
        </button>
        <div class="project-meta-bar">
          <div class="project-info">
            <p class="project-name">${proj.name}</p>
            <p class="project-location">${proj.location}</p>
          </div>
          <div class="project-actions">
            <button class="images-btn open-gallery" data-id="${proj.id}" aria-label="View all images">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-images">
                <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path>
                <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path>
                <circle cx="13" cy="7" r="1" fill="currentColor"></circle>
                <rect x="8" y="2" width="14" height="14" rx="2"></rect>
              </svg>
              <span class="font-mono-data">${proj.galleryImages.length}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  attachPortfolioListeners();
}

// Portfolio Interaction Hooks
function attachPortfolioListeners() {
  // Gallery Modals
  document.querySelectorAll(".open-gallery").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(btn.getAttribute("data-id"));
      openGalleryModal(id);
    });
  });

  // Likes System
  document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute("data-id"));
      toggleLike(id);
    });
  });

  // Share System
  document.querySelectorAll(".share-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute("data-id"));
      shareProject(id);
    });
  });
}

// Like Actions
function toggleLike(id) {
  if (state.likes[id]) {
    delete state.likes[id];
  } else {
    state.likes[id] = 1;
  }
  localStorage.setItem("indoortec_likes", JSON.stringify(state.likes));
  renderPortfolio();
}

// Share Action
function shareProject(id) {
  const proj = portfolioProjects.find(p => p.id === id);
  if (!proj) return;

  if (navigator.share) {
    navigator.share({
      title: proj.name,
      text: `Check out Indoortec's premium commercial design for ${proj.name} in ${proj.location}`,
      url: window.location.href
    }).catch(console.error);
  } else {
    // Fallback: Copy link
    const dummyUrl = `${window.location.origin}/#portfolio`;
    navigator.clipboard.writeText(dummyUrl).then(() => {
      alert(`Link to ${proj.name} copied to clipboard!`);
    }).catch(console.error);
  }
}

// Gallery Modal Controls
const galleryCurrentImg = document.getElementById("gallery-current-img");
const galleryProjectTitle = document.getElementById("gallery-project-title");
const galleryProjectLocation = document.getElementById("gallery-project-location");
const galleryCurrentIdx = document.getElementById("gallery-current-idx");
const galleryTotalIdx = document.getElementById("gallery-total-idx");

function openGalleryModal(projectId) {
  const proj = portfolioProjects.find(p => p.id === projectId);
  if (!proj) return;

  state.gallery.currentProjectId = projectId;
  state.gallery.currentImageIndex = 0;

  updateGalleryState(proj);
  galleryModal.classList.add("open");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function updateGalleryState(proj) {
  const currentImgUrl = proj.galleryImages[state.gallery.currentImageIndex];

  // Update texts
  galleryProjectTitle.textContent = proj.name;
  galleryProjectLocation.textContent = proj.location;
  galleryCurrentIdx.textContent = state.gallery.currentImageIndex + 1;
  galleryTotalIdx.textContent = proj.galleryImages.length;

  // Load image with loader indicator
  galleryCurrentImg.classList.remove("loaded");
  galleryCurrentImg.src = currentImgUrl;
  galleryCurrentImg.onload = () => {
    galleryCurrentImg.classList.add("loaded");
  };
}

// Gallery Navigations
document.getElementById("gallery-prev-btn").addEventListener("click", () => {
  const proj = portfolioProjects.find(p => p.id === state.gallery.currentProjectId);
  if (!proj) return;

  state.gallery.currentImageIndex = (state.gallery.currentImageIndex - 1 + proj.galleryImages.length) % proj.galleryImages.length;
  updateGalleryState(proj);
});

document.getElementById("gallery-next-btn").addEventListener("click", () => {
  const proj = portfolioProjects.find(p => p.id === state.gallery.currentProjectId);
  if (!proj) return;

  state.gallery.currentImageIndex = (state.gallery.currentImageIndex + 1) % proj.galleryImages.length;
  updateGalleryState(proj);
});

document.getElementById("close-gallery-btn").addEventListener("click", () => {
  galleryModal.classList.remove("open");
  document.body.style.overflow = "";
});

// Video Testimonial Modal Controls
const videoModalBg = document.getElementById("video-modal-bg");
const videoModalTitle = document.getElementById("video-modal-title");
const videoModalSubtitle = document.getElementById("video-modal-subtitle");
const videoModalQuote = document.getElementById("video-modal-quote");

document.querySelectorAll(".open-video-modal").forEach(card => {
  card.addEventListener("click", () => {
    const idx = parseInt(card.getAttribute("data-video-index"));
    const data = testimonialsData[idx];
    if (!data) return;

    videoModalBg.src = data.bgImg;
    videoModalTitle.textContent = data.name;
    videoModalSubtitle.textContent = data.title;
    videoModalQuote.textContent = `"${data.quote}"`;

    videoModal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

document.getElementById("close-video-btn").addEventListener("click", () => {
  videoModal.classList.remove("open");
  document.body.style.overflow = "";
});

// Consultation Modal Controls
document.querySelectorAll(".open-consultation").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // Close mobile menu if open
    resetConsultationForm();
    mobileDrawer.classList.remove("open");

    consultationModal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

document.getElementById("close-consultation-btn").addEventListener("click", () => {
  resetConsultationForm();
  consultationModal.classList.remove("open");
  document.body.style.overflow = "";
});

// Reset the form Fields
function resetConsultationForm() {
    consultationForm.reset();

    // Clear error text
    phoneError.textContent = "";
    emailError.textContent = "";

    // Clear validation classes
    consultationForm.querySelectorAll("input, textarea, select").forEach(field => {
        field.classList.remove("input-error", "input-success");
        field.setCustomValidity("");
    });
}

// Mobile Drawer Menu Controls
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");

openMenuBtn.addEventListener("click", () => {
  mobileDrawer.classList.add("open");
});

closeMenuBtn.addEventListener("click", () => {
  mobileDrawer.classList.remove("open");
});

// Close Mobile Drawer on link click
document.querySelectorAll(".drawer-link").forEach(link => {
  link.addEventListener("click", () => {
    mobileDrawer.classList.remove("open");
  });
});

// Click outside modal to close
window.addEventListener("click", (e) => {
  if (e.target === consultationModal) {
    resetConsultationForm();
    consultationModal.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (e.target === videoModal) {
    videoModal.classList.remove("open");
    document.body.style.overflow = "";
  }
  if (e.target === galleryModal) {
    galleryModal.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// Keyboard Accessibility: Close Modals on ESC key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    resetConsultationForm();
    consultationModal.classList.remove("open");
    videoModal.classList.remove("open");
    galleryModal.classList.remove("open");
    mobileDrawer.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// Sticky Header Transition on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Privacy Policy Modal
document.addEventListener("DOMContentLoaded", function () {

  const privacyLinks = document.querySelectorAll(".open-privacy-policy");
  const privacyModal = document.getElementById("privacyModal");

  privacyLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      privacyModal.classList.add("active");
      console.log("Privacy policy")
      document.body.style.overflow = "hidden";
    });
  });

  privacyModal.querySelector(".modal-close").addEventListener("click", function () {
    privacyModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  privacyModal.addEventListener("click", function (e) {
    if (e.target === privacyModal) {
      privacyModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

});




// Terms and Conditions Modal
document.addEventListener("DOMContentLoaded", function () {

  const termsLinks = document.querySelectorAll(".open-terms-of-service");
  const termsModal = document.getElementById("termsModal");

  termsLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      termsModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  termsModal.querySelector(".modal-close").addEventListener("click", function () {
    termsModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  termsModal.addEventListener("click", function (e) {
    if (e.target === termsModal) {
      termsModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

});

// Form submission is handled natively by Web3Forms in HTML.

// Initialise Application
renderPortfolio();

// Phone number Validation
const phoneInput = document.getElementById("whatsapp-number");
const phoneError = document.getElementById("phone-error");

phoneInput.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

    if (this.value.length > 10) {
        this.value = this.value.substring(0, 10);
    }

    if (this.value.length === 0) {
        phoneError.textContent = "";
        this.classList.remove("input-error","input-success");
    }
    else if (this.value.length < 10) {
        phoneError.textContent = "Mobile number must contain 10 digits.";
        this.classList.add("input-error");
        this.classList.remove("input-success");
    }
    else {
        phoneError.textContent = "";
        this.classList.remove("input-error");
        this.classList.add("input-success");
    }
});

// Email Validation
const emailInput = document.getElementById("email-address");
const emailError = document.getElementById("email-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", function () {

    if (this.value === "") {
        emailError.textContent = "";
        this.classList.remove("input-error","input-success");
    }
    else if (!emailRegex.test(this.value)) {
        emailError.textContent = "Please enter a valid email address.";
        this.classList.add("input-error");
        this.classList.remove("input-success");
    }
    else {
        emailError.textContent = "";
        this.classList.remove("input-error");
        this.classList.add("input-success");
    }
});