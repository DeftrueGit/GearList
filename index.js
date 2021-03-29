gear = document.querySelector(".gear");
elscroll = document.querySelector(".list");
pre = document.querySelector("pre");

function draw() {
  requestAnimationFrame(draw);
  gear.style.transform = `rotate(${
    -lenToDeg(125, elscroll.scrollTop) - 23.774
  }deg)`;
  /* pre.innerHTML = `
  ${parseFloat(elscroll.scrollTop.toFixed(4))}
  ${Math.PI}

  ${gear.style.transform}
  `;*/
}
function lenToDeg(r, l) {
  let m = (f(Math.PI) * f(r)) / f(180);
  return f(l / m);
}
draw();
function f(n) {
  return parseFloat(n.toFixed(4));
}
