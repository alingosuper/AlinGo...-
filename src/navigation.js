export function navigate(screenFunction) {
  document.getElementById("app").innerHTML = "";
  screenFunction();
}
