let currentLang = "en";
function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";
  document.getElementById("title").textContent = currentLang === "en" ? "GAPOS" : "جابوس";
  document.getElementById("subtitle").textContent = currentLang === "en"
    ? "Games And Programs Online Store"
    : "متجر الألعاب والبرامج";
}
window.onload = () => {
  document.body.classList.add("light");
};