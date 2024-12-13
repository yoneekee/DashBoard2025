//import styles from "../style/Primary.css";

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const tabContents = document.querySelectorAll(".tabContent");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("tabActive"));

      // Add active class to clicked tab
      tab.classList.add("tabActive");

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("tabActive"));

      // Show the associated content
      const contentKey = tab.getAttribute("data-content");
      document.getElementById(contentKey).classList.add("tabActive");
    });
  });
});
