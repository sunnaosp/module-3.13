function navigateToHomaPage() {
  history.pushState(null, null, "/");
  setHomeVisible();
}

function navigateToContact() {
  history.pushState(null, null, "contact");
  setContactVisible();
}

function setHomeVisible() {
  const homePage = document.getElementById("home-page");
  homePage.classList.remove("d-none");

  const contactPage = document.getElementById("contact-page");
  contactPage.classList.add("d-none");
}

function setContactVisible() {
  const homePage = document.getElementById("home-page");
  homePage.classList.add("d-none");

  const contactPage = document.getElementById("contact-page");
  contactPage.classList.remove("d-none");
}

window.addEventListener("popstate", (e) => {
  if (e.target.location.pathname == "/contact") setContactVisible();
  else setHomeVisible();
});

function setContactName() {
  const contactName = window.localStorage.getItem("contactName");
  if (contactName) document.getElementById("name").value = contactName;
}

function submitContactForm() {
  const contactName = document.getElementById("name").value;
  if (!contactName) {
    document.getElementById("contact-form-status").innerHTML =
      "Það þarf allavega að setja nafn";
    return;
  }

  window.localStorage.setItem("contactName", contactName);

  document.getElementById("contact-form-status").innerHTML =
    "Takk fyrir að hafa samband";
}

function Init() {
  if (window.location.pathname == "/contact") setContactVisible();
  else setHomeVisible();

  setContactName();
}
Init();
