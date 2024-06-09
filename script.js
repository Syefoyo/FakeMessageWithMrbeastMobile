let name = "MrBeast";
function sendOk() {
  const message = document.getElementById("message");
 const p = document.getElementById("myInput").value;
message.innerHTML = message.innerHTML + "<br>";
  message.innerHTML = message.innerHTML + name + ":" + p;
}
function nameJake() {
  name = "Jake";
const yuy = document.getElementById("name");
  const eye = document.getElementById("message");
  yuy.innerHTML = "Jake";
  eye.style.color = "black";
}
function nameMr() {
  name = "MrBeast"; const yup = document.getElementById("name");  const po = document.getElementById("message");
yup.innerHTML = "MrBeast";
po.style.color = "green";
}