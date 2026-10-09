// Select all buttons and content divs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event to each button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    // 1. Remove 'active' class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // 2. Add 'active' class to the clicked button
    button.classList.add('active');

    // 3. Find matching content ID and show it
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

/* ===== Your existing code (tabs, etc.) ===== */
// ... whatever you already have ...

/* ===== Hamburger menu (append at the end) ===== */
(function () {
   const hamburger = document.getElementById('hamburgerBtn');
   const navLinks  = document.getElementById('navLinks');

   if (!hamburger || !navLinks) return;

   hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
   });

   navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
      });
   });

   document.addEventListener('click', function (e) {
      const insideNav = navLinks.contains(e.target);
      const onBurger  = hamburger.contains(e.target);
      if (!insideNav && !onBurger) {
         hamburger.classList.remove('active');
         navLinks.classList.remove('active');
      }
   });
})();