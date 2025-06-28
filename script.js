// Real-time preview
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const summaryInput = document.getElementById("summary");
const skillsInput = document.getElementById("skills");

nameInput.addEventListener("input", () => {
  document.getElementById("preview-name").textContent = nameInput.value;
});

emailInput.addEventListener("input", () => {
  document.getElementById("preview-email").textContent = emailInput.value;
});

phoneInput.addEventListener("input", () => {
  document.getElementById("preview-phone").textContent = phoneInput.value;
});

summaryInput.addEventListener("input", () => {
  document.getElementById("preview-summary").textContent = summaryInput.value;
});

skillsInput.addEventListener("input", () => {
  document.getElementById("preview-skills").textContent = skillsInput.value;
});

// Dynamic Education
document.getElementById("add-education").addEventListener("click", () => {
  const section = document.getElementById("education-section");
  const entry = document.createElement("div");
  entry.className = "edu-entry";
  entry.innerHTML = `
    <input type="text" placeholder="School/College" class="edu-input"/>
    <input type="text" placeholder="Year" class="edu-input"/>
  `;
  section.insertBefore(entry, section.lastElementChild);
});

// Dynamic Experience
document.getElementById("add-experience").addEventListener("click", () => {
  const section = document.getElementById("experience-section");
  const entry = document.createElement("div");
  entry.className = "exp-entry";
  entry.innerHTML = `
    <input type="text" placeholder="Company Name" class="exp-input"/>
    <input type="text" placeholder="Role/Title" class="exp-input"/>
  `;
  section.insertBefore(entry, section.lastElementChild);
});

// Auto update education & experience preview
document.getElementById("resume-form").addEventListener("input", () => {
  const eduList = document.getElementById("preview-education");
  eduList.innerHTML = "";
  document.querySelectorAll(".edu-entry").forEach(entry => {
    const inputs = entry.querySelectorAll("input");
    const text = `${inputs[0].value} (${inputs[1].value})`;
    if (inputs[0].value) {
      const li = document.createElement("li");
      li.textContent = text;
      eduList.appendChild(li);
    }
  });

  const expList = document.getElementById("preview-experience");
  expList.innerHTML = "";
  document.querySelectorAll(".exp-entry").forEach(entry => {
    const inputs = entry.querySelectorAll("input");
    const text = `${inputs[0].value} – ${inputs[1].value}`;
    if (inputs[0].value) {
      const li = document.createElement("li");
      li.textContent = text;
      expList.appendChild(li);
    }
  });
});
