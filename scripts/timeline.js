const timelineData = [
  {
    year: 1945,
    events: [
      {
        title: "memex",
        desc: "interacting with microform",
        body: "<p>in \"As We May Think\", an essay by Vannevar Bush which, to some extent, predicted many kinds of technologies invented after its publication (including hypertext, personal computers and the World Wide Web). the essay describes a memex as an electromechanical device enabling individuals to develop and read a large self-contained research library, create and follow associative trails of links and personal annotations, and recall these trails at any time to share them with other researchers.</p>",
      },
    ],
  },
  {
    year: 1965,
    events: [
      {
        title: "hypertext/hypermedia",
        desc: "Ted Nelson coins terms",
        body: "<p>when describing the Evolutionary List File in \“Complex information processing: a file structure for the complex, the changing and the indeterminate\” Ted Nelson coined the terms hypertext and hypermedia:</p><p><blockquote>Let me introduce the word \"hypertext\" to mean a body of written or pictorial material interconnected in such a complex way that it could not conveniently be presented or represented on paper. It may contain summaries, or maps of its contents and their interrelations; it may contain annotations, additions and footnotes from scholars who have examined it. Let me suggest that such an object and system, properly designed and administered, could have great potential for education, increasing the student's range of choices, his sense of freedom, his motivation, and his intellectual grasp. Such a system could grow indefinitely, gradually including more and more of the world's written knowledge. However, its internal file structure would have to be built to accept growth, change and complex informational arrangements.</blockquote></p><p><blockquote>Films, sound recordings, and video recordings are also linear strings, basically for mechanical reasons. But these, too, can now be arranged as non-linear systems-- for instance, lattices-- for editing purposes, or for display with different emphasis. The hyperfilm-- a browsable or vari-sequenced movie-- is only one of the possible hypermedia that require our attention.</blockquote></p>",
      },
    ],
  },
  {
    year: 1967,
    events: [
      {
        title: "Hypertext Editing System",
        desc: "the first hypertext system",
        body: "the Hypertext Editing System was the first hypertext system available on commercial equipment that novices could use. the system organized data into two main types: links and branching text. the branching text could automatically be arranged into menus, and a point within a given area could also have an assigned name, called a label and be accessed later by that name from the screen. it required an IBM 2250 display console. the project was replaced by the File Retrieval and Editing System project around 1969. ted nelson, one of the developers of the system, claims credit for inventing the “back/undo” button with regard to hypertext, as the Hypertext Editing System was the first system that contained one.",
      },
    ],
  },
  {
    year: 1968,
    events: [
      {
        title: "FRESS",
        desc: "including a virtual terminal interface",
        body: "the File Retrieval and Editing SyStem was the first hypertext system to run on readily available commercial hardware and OS. it was a continuation of work done on the hypertext editing system. it ran on an IBM 360-series mainframe running VM/CMS. it implemented one of the first virtual terminal interfaces, in order to provide device-independence. it could run on various terminals from dumb typewriters up to the Imlac PDS-1 graphical minicomputer. the system allowed multiple users to collaborate on a set of documents, which could be of arbitrary size. its users could insert a marker at any location within a text document and link the marked selection to any other point, either in the same document or a different document. this was much like the World Wide Web of today, but without the need for the anchor hyperlinks that HTML requires. links were also bi-directional, unlike in today's web. it had two types of links: tags and \"jumps\". tags were links to information such as references or footnotes, while \"jumps\" were links that could take the user through many separate but related documents. it was probably the first hypertext system used in education.",
      },
      {
        title: "NLS system",
        desc: "a computer collaboration system",
        body: "",
      },
    ],
  },
  {
    year: 1975,
    events: [
      {
        title: "ZOG",
        desc: "the front end for AI",
        body: "",
      },
    ],
  },
  {
    year: 1978,
    events: [
      {
        title: "Aspen Movie Map",
        desc: "virtual tour through aspen",
        body: "",
      },
    ],
  },
  {
    year: 1984,
    events: [
      {
        title: "Filevision",
        desc: "information in pictures",
        body: "",
      },
    ],
  },
  {
    year: 1985,
    events: [
      {
        title: "Symbolics Document Examiner",
        desc: "introducing bookmarks",
        body: "",
      },
      {
        title: "intermedia",
        desc: "the third notable hypertext project",
        body: "",
      },
    ],
  },
  {
    year: 1986,
    events: [
      {
        title: "Guide",
        desc: "a missed opportunity",
        body: "",
      },
    ],
  },
  {
    year: 1987,
    events: [
      {
        title: "HyperCard",
        desc: "a software erector set",
        body: "",
      },
    ],
  },
  {
    year: 1990,
    events: [
      {
        title: "WorldWideWeb",
        desc: "the first web browser",
        body: "<p>WorldWideWeb was the first web browser (or browser-editor rather), when it was written in 1990 (dated 901225 although it was finished some time before that) it was the only way to see the web. it was renamed Nexus in order avoid confusion between the program and the abstract information space (now known as World Wide Web). it would browse http: space and news: and ftp: spaces and local file: space, but edit only in file: space as HTTP PUT was not implemented back then.</p><p>the program was written using a NeXT computer in objective-c. it had the advantage that there were some great tools available. in fact, you could do in a couple of months what would take more like a year on other platforms. for instance, there was an application builder to make all the menus as quickly as you could dream them up.</p>",
      },
    ],
  },
  {
    year: 1991,
    events: [
      {
        title: "Line Mode Browser",
        desc: "the second web browser",
        body: "",
      },
    ],
  },
  {
    year: 1992,
    events: [
      {
        title: "lynx",
        desc: "the oldest browser still maintained",
        body: "",
      },
      {
        title: "Erwise",
        desc: "the first GUI browser",
        body: "",
      },
      {
        title: "MidasWWW",
        desc: "viewing of PostScript",
        body: "",
      },
    ],
  },
  {
    year: 1993,
    events: [
      {
        title: "mosaic",
        desc: "the killer application",
        body: "",
      },
    ],
  },
  {
    year: 1994,
    events: [
      {
        title: "opera",
        desc: "a unique company",
        body: "",
      },
    ],
  },
  {
    year: 1995,
    events: [
      {
        title: "internet explorer",
        desc: "microsoft joined the chat",
        body: "",
      },
      {
        title: "the browser wars",
        desc: "competition for dominance",
        body: "",
      },
    ],
  },
];

const yearSlider = document.getElementById("year-slider");
const eventSliderContainer = document.getElementById("event-slider-container");
const eventSlider = document.getElementById("event-slider");

const contentHeading = document.getElementById("timeline-content-heading");
const contentBody = document.getElementById("timeline-content-body");

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

function updateTimelineContent() {
  const events = timelineData[selectedYearIndex].events;
  const selectedEvent = events[selectedEventIndex];
  contentHeading.innerHTML = selectedEvent.title;
  contentBody.innerHTML = selectedEvent.body;
}

function selectYear(idx) {
  if (idx < 0 || idx >= timelineData.length) return;
  if (selectedYearIndex !== idx) {
    selectedYearIndex = idx;
    selectedEventIndex = 0;

    updateTimelineContent();

    updateYearSlider();
    fadeOutInEvents();
  }
}

function selectEvent(idx) {
  const events = timelineData[selectedYearIndex].events;
  if (idx < 0 || idx >= events.length) return;
  if (selectedEventIndex !== idx) {
    selectedEventIndex = idx;

    updateTimelineContent();

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
