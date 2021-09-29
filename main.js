// Navigate site to contact page
function navigateToHomePage() {
  history.pushState(null, null, "/");
  setHomeVisible();
}

// Navigate site to contact page
function navigateToContact() {
  history.pushState(null, null, "#contact");
  setContactVisible();
}

// Set home page as visible page
function setHomeVisible() {
  const homePage = document.getElementById("home-page");
  homePage.classList.remove("d-none");

  const contactPage = document.getElementById("contact-page");
  contactPage.classList.add("d-none");
}

// Set contact page as visible page
function setContactVisible() {
  const homePage = document.getElementById("home-page");
  homePage.classList.add("d-none");

  const contactPage = document.getElementById("contact-page");
  contactPage.classList.remove("d-none");
}

// watch for back and forward actions by user to set the correct page as visible
window.addEventListener("popstate", (e) => {
  const hrefSplit = window.location.href.split("/");
  if (
    window.location.pathname == "/contact" ||
    hrefSplit[hrefSplit.length - 1] == "#contact"
  )
    setContactVisible();
  else setHomeVisible();
});

// Set the name of the contct from local storage if we have it
function setContactName() {
  const contactName = window.localStorage.getItem("contactName");
  if (contactName) document.getElementById("name").value = contactName;
}

// Thank the user for contacting and saving his name in local storage
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

// Set the initial state of the site from the location
function Init() {
  const hrefSplit = window.location.href.split("/");
  if (
    window.location.pathname == "/contact" ||
    hrefSplit[hrefSplit.length - 1] == "#contact"
  )
    setContactVisible();
  else setHomeVisible();

  setContactName();
}
Init();
