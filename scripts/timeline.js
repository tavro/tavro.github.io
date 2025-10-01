const timelineData = [
  {
    year: 1990,
    events: [
      {
        title: "Event 1",
        desc: "Event description 1",
      },
      {
        title: "Event 2",
        desc: "Event description 2",
      },
    ],
  },
  {
    year: 1991,
    events: [
      {
        title: "Event 3",
        desc: "Event description 3",
      },
    ],
  },
];

const yearSlider = document.getElementById("year-slider");
const eventSliderContainer = document.getElementById("event-slider-container");
const eventSlider = document.getElementById("event-slider");

let selectedYearIndex = 0;
let selectedEventIndex = 0;

function createYearButtons() {
  yearSlider.innerHTML = "";
  timelineData.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className = "year-btn";
    btn.setAttribute("type", "button");
    btn.setAttribute("tabindex", "0");
    btn.setAttribute("aria-label", `Year ${item.year}`);
    btn.textContent = item.year;
    if (idx === selectedYearIndex) btn.classList.add("selected");
    btn.addEventListener("click", () => selectYear(idx));
    btn.addEventListener("keydown", (e) => handleYearBtnKeydown(e, idx));
    yearSlider.appendChild(btn);
  });
}

function createEventCards(yearIdx) {
  eventSlider.innerHTML = "";
  const events = timelineData[yearIdx].events;
  events.forEach((event, idx) => {
    const card = document.createElement("button");
    card.className = "event-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("type", "button");
    card.setAttribute(
      "aria-label",
      event.title + (event.desc ? ": " + event.desc : "")
    );
    if (idx === selectedEventIndex) card.classList.add("selected");
    card.innerHTML = `
        <div class="event-title">${event.title}</div>
        ${event.desc ? `<div class="event-desc">${event.desc}</div>` : ""}
      `;
    card.addEventListener("click", () => selectEvent(idx));
    card.addEventListener("keydown", (e) => handleEventCardKeydown(e, idx));
    eventSlider.appendChild(card);
  });
}

function selectYear(idx) {
  if (idx < 0 || idx >= timelineData.length) return;
  if (selectedYearIndex !== idx) {
    selectedYearIndex = idx;
    selectedEventIndex = 0;
    updateYearSlider();
    fadeOutInEvents();
  }
}

function selectEvent(idx) {
  const events = timelineData[selectedYearIndex].events;
  if (idx < 0 || idx >= events.length) return;
  if (selectedEventIndex !== idx) {
    selectedEventIndex = idx;
    updateEventSlider();
  }
}

function updateYearSlider() {
  const btns = yearSlider.querySelectorAll(".year-btn");
  btns.forEach((btn, idx) => {
    if (idx === selectedYearIndex) {
      btn.classList.add("selected");
      btn.setAttribute("aria-current", "true");
      scrollIntoViewIfNeeded(btn, yearSlider);
    } else {
      btn.classList.remove("selected");
      btn.removeAttribute("aria-current");
    }
  });
}

function updateEventSlider() {
  const cards = eventSlider.querySelectorAll(".event-card");
  cards.forEach((card, idx) => {
    if (idx === selectedEventIndex) {
      card.classList.add("selected");
      card.setAttribute("aria-current", "true");
      scrollIntoViewIfNeeded(card, eventSlider);
    } else {
      card.classList.remove("selected");
      card.removeAttribute("aria-current");
    }
  });
}

function fadeOutInEvents() {
  createEventCards(selectedYearIndex);
  updateEventSlider();
  eventSliderContainer.classList.add("show");
}

function handleYearBtnKeydown(e, idx) {
  const btns = yearSlider.querySelectorAll(".year-btn");
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    if (idx < btns.length - 1) {
      btns[idx + 1].focus();
      selectYear(idx + 1);
    }
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    if (idx > 0) {
      btns[idx - 1].focus();
      selectYear(idx - 1);
    }
  } else if (e.key === "Home") {
    e.preventDefault();
    btns[0].focus();
    selectYear(0);
  } else if (e.key === "End") {
    e.preventDefault();
    btns[btns.length - 1].focus();
    selectYear(btns.length - 1);
  }
}

function handleEventCardKeydown(e, idx) {
  const cards = eventSlider.querySelectorAll(".event-card");
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    if (idx < cards.length - 1) {
      cards[idx + 1].focus();
      selectEvent(idx + 1);
    }
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    if (idx > 0) {
      cards[idx - 1].focus();
      selectEvent(idx - 1);
    }
  } else if (e.key === "Home") {
    e.preventDefault();
    cards[0].focus();
    selectEvent(0, true);
  } else if (e.key === "End") {
    e.preventDefault();
    cards[cards.length - 1].focus();
    selectEvent(cards.length - 1);
  }
}

function enableTouchScroll(element) {
  let isTouching = false;
  let startX = 0;
  let scrollLeft = 0;

  element.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    isTouching = true;
    startX = e.touches[0].pageX - element.offsetLeft;
    scrollLeft = element.scrollLeft;
  });

  element.addEventListener("touchmove", (e) => {
    if (!isTouching) return;
    const x = e.touches[0].pageX - element.offsetLeft;
    const walk = startX - x;
    element.scrollLeft = scrollLeft + walk;
  });

  element.addEventListener("touchend", () => {
    isTouching = false;
  });
}

enableTouchScroll(yearSlider);
enableTouchScroll(eventSlider);

function scrollIntoViewIfNeeded(el, container) {
  if (!el || !container) return;
  const cRect = container.getBoundingClientRect();
  const eRect = el.getBoundingClientRect();
  if (eRect.left < cRect.left) {
    container.scrollBy({
      left: eRect.left - cRect.left - 12,
      behavior: "smooth",
    });
  } else if (eRect.right > cRect.right) {
    container.scrollBy({
      left: eRect.right - cRect.right + 12,
      behavior: "smooth",
    });
  }
}

createYearButtons();
createEventCards(selectedYearIndex);
updateYearSlider();
updateEventSlider();
eventSliderContainer.classList.add("show");

window.addEventListener("resize", () => {
  scrollIntoViewIfNeeded(
    yearSlider.querySelector(".year-btn.selected"),
    yearSlider
  );
  scrollIntoViewIfNeeded(
    eventSlider.querySelector(".event-card.selected"),
    eventSlider
  );
});

yearSlider.addEventListener("keydown", (e) => {
  if (e.target !== yearSlider) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    const idx = selectedYearIndex;
    if (idx < timelineData.length - 1) {
      yearSlider.children[idx + 1].focus();
      selectYear(idx + 1);
    }
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    const idx = selectedYearIndex;
    if (idx > 0) {
      yearSlider.children[idx - 1].focus();
      selectYear(idx - 1);
    }
  }
});

eventSlider.addEventListener("keydown", (e) => {
  if (e.target !== eventSlider) return;
  const events = timelineData[selectedYearIndex].events;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    const idx = selectedEventIndex;
    if (idx < events.length - 1) {
      eventSlider.children[idx + 1].focus();
      selectEvent(idx + 1);
    }
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    const idx = selectedEventIndex;
    if (idx > 0) {
      eventSlider.children[idx - 1].focus();
      selectEvent(idx - 1);
    }
  }
});
