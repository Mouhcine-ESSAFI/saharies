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

  const swiper = new Swiper('.popular-tours-swiper', {
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
      }
    },
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
  });

});
