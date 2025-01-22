function getResume() {
  window.location.href = "./Assets/resume.pdf";
}

function goToSection(sectionId) {
  const element = document.getElementById(sectionId);
  element.scrollIntoView({ behavior: "smooth" });
}
