function breakTheText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;

  const splittedText = h1Text.split("");
  // console.log(splittedText);

  let clutter = "";

  const halfValue = Math.floor(splittedText.length / 2);

  splittedText.forEach((e, index) => {
    if (index < halfValue) {
      clutter += `<span class="left">${e}</span>`;
    } else {
      clutter += `<span class="right">${e}</span>`;
    }
  });

  console.log(clutter);

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".left", {
  duration: 0.6,
  y: 50,
  opacity: 0,
  stagger: 0.15,
  delay: 0.5,
});
gsap.from(".right", {
  duration: 0.6,
  y: 50,
  opacity: 0,
  stagger: -0.15,
  delay: 0.5,
});
