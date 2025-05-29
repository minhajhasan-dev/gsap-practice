let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (event) => {
  gsap.to(cursor, {
    x: event.x,
    y: event.y,
    duration: 1,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 2,
  });
});
imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
