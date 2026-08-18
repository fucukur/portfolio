(() => {
  const items = Array.from(document.querySelectorAll(".experience-item-container"));
  if (!items.length) return;

  const back = document.getElementById("experience-back-button");
  const next = document.getElementById("experience-next-button");
  const maxIndex = 4;
  const minIndex = 4 - (items.length - 1);
  let current = 4;
  let moving = false;

  const update = () => {
    items.forEach((el, i) => {
      const offset = i + current - 4;
      el.style.transform = `translateX(${offset * 110}%) scale(${offset === 0 ? 1 : 0.9})`;
      el.classList.toggle("experience-inactive", offset !== 0);
    });
    back.classList.toggle("work-disabled-navigation-button", current === maxIndex);
    next.classList.toggle("work-disabled-navigation-button", current === minIndex);
    moving = true;
    setTimeout(() => {
      moving = false;
    }, 450);
  };

  const moveBack = () => {
    if (current === maxIndex || moving) return;
    current += 1;
    update();
  };

  const moveForward = () => {
    if (current === minIndex || moving) return;
    current -= 1;
    update();
  };

  back.addEventListener("click", (event) => {
    event.stopPropagation();
    moveBack();
  });
  next.addEventListener("click", (event) => {
    event.stopPropagation();
    moveForward();
  });

  items.forEach((el, i) => {
    el.addEventListener("click", () => {
      if (!el.classList.contains("experience-inactive") || moving) return;
      current = 4 - i;
      update();
    });
  });

  update();
})();
