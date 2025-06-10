// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   let expires = "expires="+d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

export function daysToMilliseconds(days) {
  return milliseconds * 24 * 60 * 60 * 1000;
}

export function millisecondsToDays(milliseconds) {
  return milliseconds / (1000 * 60 * 60 * 24);
}

export function setCookie(cname, cvalue, milliseconds) {
  const d = new Date();
  const expireTime = d.getTime() + milliseconds;
  console.log("Setting cookie: ", cname, cvalue, "Expires in (ms): ", milliseconds);
  console.log("Expire time: ", expireTime);
  console.log("Current time: ", d.getTime());
  console.log("Current date: ", d.toUTCString());
  console.log("Expire date: ", new Date(expireTime).toUTCString());
  d.setTime(expireTime);
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}