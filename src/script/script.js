document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"));

      // Show the associated content
      const contentKey = tab.getAttribute("data-content");
      document.getElementById(contentKey).classList.add("active");
    });
  });
});
