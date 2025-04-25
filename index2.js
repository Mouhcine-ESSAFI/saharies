// GLOBAL FUNCTION FOR SCROLLING TO BOOKING FORM
function scrollToBooking() {
    const bookingForm = document.querySelector("#bookingForm");
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      console.error("Booking form not found!");
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Promo Banner Close
    const closeBanner = document.querySelector("#promo-banner button");
    if (closeBanner) {
      closeBanner.addEventListener("click", () => {
        closeBanner.closest("#promo-banner").classList.add("hidden");
      });
    }
  
    // Mobile Sidebar Elements
    const mobileMenuBtn = document.getElementById("mobile-menu-button");
    const mobileSidebar = document.getElementById("mobile-menu");
    const sidebarContent = document.getElementById("sidebar-content");
    const closeSidebarBtn = document.getElementById("close-sidebar");
  
    // Submenus
    const submenuDesert = document.getElementById("submenu-desert");
    const submenuDayTrips = document.getElementById("submenu-day-trips");
  
    const openDesertToursBtn = document.getElementById("open-desert-tours");
    const openDayTripsBtn = document.getElementById("open-day-trips");
    const backDesertToursBtn = document.getElementById("back-desert-tours");
    const backDayTripsBtn = document.getElementById("back-day-trips");
  
    // Show Sidebar
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileSidebar.classList.remove("hidden");
        setTimeout(() => {
          sidebarContent.classList.remove("-translate-x-full");
        }, 10);
      });
    }
  
    // Hide Sidebar
    function closeSidebar() {
      sidebarContent.classList.add("-translate-x-full");
      submenuDesert.classList.add("translate-x-full");
      submenuDayTrips.classList.add("translate-x-full");
  
      setTimeout(() => {
        mobileSidebar.classList.add("hidden");
      }, 300);
    }
  
    if (closeSidebarBtn) {
      closeSidebarBtn.addEventListener("click", closeSidebar);
    }
  
    // Click outside sidebar to close
    mobileSidebar?.addEventListener("click", (e) => {
      if (e.target === mobileSidebar) {
        closeSidebar();
      }
    });
  
    // Prevent clicks inside the sidebar content from closing the sidebar
    sidebarContent?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  
    // Responsive reset on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1025) {
        mobileSidebar.classList.add("hidden");
        sidebarContent.classList.add("-translate-x-full");
        submenuDesert.classList.add("translate-x-full");
        submenuDayTrips.classList.add("translate-x-full");
      }
    });
  
    // Submenu logic
    function openSubmenu(submenu) {
      submenu.classList.remove("hidden");
      setTimeout(() => {
        sidebarContent.classList.add("-translate-x-full");
        submenu.classList.remove("translate-x-full");
      }, 10);
    }
  
    function closeSubmenu(submenu) {
      submenu.classList.add("translate-x-full");
      sidebarContent.classList.remove("-translate-x-full");
      setTimeout(() => {
        submenu.classList.add("hidden");
      }, 10);
    }
  
    openDesertToursBtn?.addEventListener("click", () =>
      openSubmenu(submenuDesert)
    );
    openDayTripsBtn?.addEventListener("click", () =>
      openSubmenu(submenuDayTrips)
    );
    backDesertToursBtn?.addEventListener("click", () =>
      closeSubmenu(submenuDesert)
    );
    backDayTripsBtn?.addEventListener("click", () =>
      closeSubmenu(submenuDayTrips)
    );
  
    // Heart Icon Toggle
    document.querySelectorAll(".heart-icon").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const icon = btn.querySelector("i");
        icon.classList.toggle("far");
        icon.classList.toggle("fas");
      });
    });
  
    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    const scrollNavbar = document.getElementById("scroll-navbar");
  
    window.addEventListener("scroll", () => {
      if (window.innerWidth < 1024) {
        // Check if the screen width is less than 1024px
        if (window.scrollY > 120) {
          navbar.classList.add(
            "fixed",
            "shadow-md",
            "top-0",
            "left-0",
            "right-0",
            "z-30"
          );
        } else {
          navbar.classList.remove(
            "fixed",
            "shadow-md",
            "top-0",
            "left-0",
            "right-0",
            "z-30"
          );
        }
      } else {
        // Remove the classes if the screen width is >= 1024px
        navbar.classList.remove(
          "fixed",
          "shadow-md",
          "top-0",
          "left-0",
          "right-0",
          "z-30"
        );
      }
  
      if (window.innerWidth > 1024 && window.scrollY > 150) {
        // Show the new minimal navbar
        scrollNavbar.classList.remove("hidden");
        scrollNavbar.classList.add("flex");
      } else {
        // Hide the new minimal navbar
        scrollNavbar.classList.add("hidden");
        scrollNavbar.classList.remove("flex");
      }
    });
  
    // Save the scroll position before the page unloads
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    });
  
    // Restore the scroll position on page load with smooth scrolling
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo({
        top: parseInt(savedScrollPosition, 10),
        behavior: "smooth",
      });
    }
  
    const swiper_tours = new Swiper(".popular-tours-swiper", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 15,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1.1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });
  
    const swiper_photos_tour = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });
  
    // swiper what's included
    const swiper_included_tours = new Swiper(".swiper_included_tours", {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-included",
        prevEl: ".swiper-button-prev-included",
      },
      breakpoints: {
        // Responsive breakpoints
        320: {
          slidesPerView: 1.3, // Show 1 card on small screens
          slidesPerGroup: 1,
        },
        640: {
          slidesPerView: 2.3, // Show 2 cards on medium screens
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 3.3, // Show 3 cards on larger screens
          slidesPerGroup: 1,
        },
        1280: {
          slidesPerView: 5, // Show 5 cards on extra-large screens
          slidesPerGroup: 1,
        },
      },
    });
  
    // Set the minimum date to today in booking form
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("arrival-date").setAttribute("min", today);
  
    // TOGGLE OVERVIEW TEXT
    const overviewText = document.getElementById("overview-text");
    const toggleButton = document.getElementById("toggle-overview");
  
    if (overviewText && toggleButton) {
      toggleButton.addEventListener("click", () => {
        if (overviewText.classList.contains("line-clamp-3")) {
          overviewText.classList.remove("line-clamp-3", "overflow-hidden");
          toggleButton.textContent = "Read Less";
        } else {
          overviewText.classList.add("line-clamp-3", "overflow-hidden");
          toggleButton.textContent = "Read More";
        }
      });
    }
  
    // FOR THE STICKY BAR
    const stickyBar = document.getElementById("stickyBar");
    const bookingForm = document.querySelector("#bookingForm");
  
    if (stickyBar && bookingForm) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Hide the sticky bar when the booking form is in view
          stickyBar.classList.toggle(
            "hidden",
            entry.isIntersecting || window.scrollY < bookingForm.offsetTop
          );
        },
        { threshold: 0.1 }
      );
  
      observer.observe(bookingForm);
  
      // Additional logic to hide the sticky bar when scrolling to the top of the page
      window.addEventListener("scroll", () => {
        if (window.scrollY < bookingForm.offsetTop) {
          stickyBar.classList.add("hidden");
        }
      });
    }
  
    // ADD EVENT LISTENER FOR SCROLL TO BOOKING BUTTON
    const scrollToBookingButton = document.getElementById(
      "scrollToBookingButton"
    );
    if (scrollToBookingButton && bookingForm) {
      scrollToBookingButton.addEventListener("click", () => {
        bookingForm.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "./images/morocco-desert.webp",
      "./images/desert.jpg",
      "./images/desert.jpg",
      "./images/desert.jpg",
      "./images/essaouira.webp",
    ];
  
    let currentIndex = 0;
  
    const modal = document.getElementById("galleryModal");
    const mainImg = document.getElementById("mainImage");
    const counter = document.getElementById("counter");
    const prevBtn = document.getElementById("prevImage");
    const nextBtn = document.getElementById("nextImage");
    const prevBtnMobile = document.getElementById("prevImageMobile");
    const nextBtnMobile = document.getElementById("nextImageMobile");
    const closeBtn = document.getElementById("closeGalleryBtn");
    const thumbnailWrapper = document.getElementById("thumbnailWrapper");
    const stickyBar = document.getElementById("stickyBar");
  
    function showImage(index) {
      currentIndex = index;
      mainImg.src = images[currentIndex];
      counter.textContent = `${currentIndex + 1} / ${images.length}`;
  
      const thumbs = thumbnailWrapper.querySelectorAll(".thumbnail");
      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("border-white", i === currentIndex);
        thumb.classList.toggle("border-transparent", i !== currentIndex);
      });
    }
  
    function openGallery(index) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Hide scroll bar
      stickyBar?.classList.add("hidden"); // Hide sticky bar
      showImage(index);
    }
  
    function closeGallery() {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // Restore scroll bar
      stickyBar?.classList.remove("hidden");
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    function renderThumbnails() {
      thumbnailWrapper.innerHTML = images
        .map(
          (src, index) => `
        <div class="cursor-pointer rounded-lg border-2 border-transparent thumbnail hover:border-white transition" onclick="showImage(${index})">
          <img src="${src}" class="h-20 w-28 object-cover rounded-lg shadow-md">
        </div>
      `
        )
        .join("");
    }
  
    // Expose globally so onclicks work
    window.openGallery = openGallery;
    window.showImage = showImage;
  
    // Event Listeners
    closeBtn.addEventListener("click", closeGallery);
    nextBtn.addEventListener("click", nextImage);
    prevBtn.addEventListener("click", prevImage);
    nextBtnMobile.addEventListener("click", nextImage);
    prevBtnMobile.addEventListener("click", prevImage);
  
    // Init thumbnails
    renderThumbnails();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
  
    const initializeHoverDropdown = (triggerId, dropdownId) => {
      const trigger = document.getElementById(triggerId);
      const dropdown = document.getElementById(dropdownId);
  
      if (!trigger || !dropdown) {
        console.warn(`Dropdown elements not found: ${triggerId}, ${dropdownId}`);
        return;
      }
  
      let isOverDropdown = false;
      let isOverButton = false;
  
      trigger.addEventListener("mouseenter", () => {
        isOverButton = true;
        dropdown.classList.remove("hidden");
        trigger.classList.remove("bg-white");
        trigger.classList.add("bg-[#ff5722]", "text-white");
      });
  
      trigger.addEventListener("mouseleave", () => {
        isOverButton = false;
        setTimeout(() => {
          if (!isOverDropdown) {
            dropdown.classList.add("hidden");
            trigger.classList.remove("bg-[#ff5722]", "text-white");
            trigger.classList.add("bg-white");
          }
        }, 100);
      });
  
      dropdown.addEventListener("mouseenter", () => {
        isOverDropdown = true;
      });
  
      dropdown.addEventListener("mouseleave", () => {
        isOverDropdown = false;
        setTimeout(() => {
          if (!isOverButton) {
            dropdown.classList.add("hidden");
            trigger.classList.remove("bg-[#ff5722]", "text-white");
            trigger.classList.add("bg-white");
          }
        }, 100);
      });
    };
  
    // === Initialize Dropdowns ===
    initializeHoverDropdown("dropdownTrigger-desert", "dropdownContent-desert");
    initializeHoverDropdown("dropdownTrigger-trips", "dropdownContent-trips");
  
    // === Initialize fixed navbar ===
    initializeHoverDropdown(
      "dropdownTrigger-desert-fixed",
      "dropdownContent-desert-fixed"
    );
    initializeHoverDropdown(
      "dropdownTrigger-trips-fixed",
      "dropdownContent-trips-fixed"
    );

  });
  