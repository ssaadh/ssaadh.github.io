function handleThemeChange() {
  const styles = getComputedStyle(document.documentElement);
  const themeColorMetaTag = document.querySelector("meta[name='theme-color']");
  const picoPrimary = styles.getPropertyValue("--pico-primary");
  themeColorMetaTag.setAttribute("content", picoPrimary);
}

function hidePhoneNumber() {
  // const phoneLi = document.getElementById('phone');
  // phoneLi.innerHTML = `&#x1F4F2; View in PDF version`;
}

function showPhoneNumber() {
  const phoneWithDashes = atob("MjAxLTI0MC03MTE1");
  const phoneWithoutDashes = atob("MjAxMjQwNzExNQ==");
  const phoneLi = document.getElementById('phone');
  phoneLi.innerHTML = `&#x1F4F2; <a href="tel:${phoneWithoutDashes}">${phoneWithDashes}</a>`;
}

function showEmail() {
  const email = atob("c2FhZGhzQHByb3Rvbi5tZQ==");
  const emailLi = document.getElementById("email");
  emailLi.innerHTML = `&#x1F4E5;  <a href="mailto:${email}?subject=Job Opportunity">${email}</a>`;
}

window.onload = function onload() {
  // color scheme
  const colorSchemeChangeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  colorSchemeChangeQuery.addListener(handleThemeChange);
  handleThemeChange(colorSchemeChangeQuery);

  // email
  showEmail();

  // phone
  window.addEventListener('beforeprint', showPhoneNumber);
  window.addEventListener('afterprint', hidePhoneNumber);
  hidePhoneNumber();
}