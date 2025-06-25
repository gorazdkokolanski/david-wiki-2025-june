const openNoteButtons = document.querySelectorAll('.open-note');
const noteOverlay = document.getElementById('noteOverlay');
const noteEditor = document.querySelector('.note-editor');
const noteHeader = document.querySelector('.note-header');

openNoteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    noteOverlay.style.display = 'flex';
  });
});

noteOverlay.addEventListener('click', (e) => {
  if (e.target === noteOverlay) {
    noteOverlay.style.display = 'none';
  }
});

// Drag functionality
let isDragging = false;
let offsetX, offsetY;

noteHeader.addEventListener('mousedown', (e) => {
  if (window.innerWidth <= 1024) return;

  isDragging = true;
  const rect = noteEditor.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  noteEditor.style.position = 'absolute';
  noteEditor.style.margin = '0'; // remove default centering
});

document.addEventListener('mousemove', (e) => {
  if (isDragging && window.innerWidth > 1024) {
    noteEditor.style.left = `${e.clientX - offsetX}px`;
    noteEditor.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

const soundsButtons = document.querySelectorAll('.sounds');
const soundsOverlay = document.getElementById('soundsOverlay');

soundsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    soundsOverlay.style.display = 'flex';
  });
});

soundsOverlay.addEventListener('click', (e) => {
  if (e.target === soundsOverlay) {
    soundsOverlay.style.display = 'none';
  }
});

const researchOptions = document.querySelectorAll('.research-options span');
const researchPhotos = document.querySelectorAll('.research-photo img');

let activeIdx = null;

researchOptions.forEach((opt, idx) => {
  // desktop: hover shows only while hovered
  opt.addEventListener('mouseenter', () => {
    if (window.innerWidth > 1024) {
      researchPhotos.forEach((img, i) =>
        img.style.opacity = i === idx ? '1' : '0'
      );
    }
  });
  opt.addEventListener('mouseleave', () => {
    if (window.innerWidth > 1024) {
      researchPhotos.forEach(img => img.style.opacity = '0');
    }
  });

  // mobile: tap sticks until another tap
  opt.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      activeIdx = idx;
      researchPhotos.forEach((img, i) =>
        img.style.opacity = i === activeIdx ? '1' : '0'
      );
    }
  });
});


// // script.js
// document.addEventListener('DOMContentLoaded', () => {
//   const scrollEl = document.getElementById('thoughtsScroll');
//   const track = document.getElementById('thoughtsTrack');
//   const speed = 0.5;      // px per frame for auto-scroll
//   let isUserInteracting = false;
//   let wheelTimeout;

//   // — Interaction flags ——
//   ['mousedown', 'touchstart'].forEach(evt =>
//     scrollEl.addEventListener(evt, () => isUserInteracting = true)
//   );
//   ['mouseup', 'mouseleave', 'touchend'].forEach(evt =>
//     scrollEl.addEventListener(evt, () => isUserInteracting = false)
//   );

//   scrollEl.addEventListener('wheel', e => {
//     if (Math.abs(e.deltaX) > 0) {
//       isUserInteracting = true;
//       clearTimeout(wheelTimeout);
//       wheelTimeout = setTimeout(() => { isUserInteracting = false; }, 150);
//     }
//   });

//   // — Recycling logic ——
//   function recycle() {
//     const gap = parseFloat(getComputedStyle(track).gap) || 0;
//     let first, last, w;

//     // — Forward wrap —
//     while ((first = track.firstElementChild) &&
//       scrollEl.scrollLeft >= first.offsetWidth + gap) {
//       w = first.offsetWidth + gap;
//       scrollEl.scrollLeft -= w;
//       track.appendChild(first);
//     }

//     // — Backward wrap —
//     while ((last = track.lastElementChild) &&
//       scrollEl.scrollLeft <= 70) {
//       w = last.offsetWidth + gap;
//       scrollEl.scrollLeft += w;
//       track.insertBefore(last, track.firstElementChild);
//     }
//   }

//   // run recycle on any scroll (manual or code-driven)
//   // scrollEl.addEventListener('scroll', recycle);

//   // — Auto-scroll loop ——
//   function loop() {
//     scrollEl.scrollLeft += 0.5;
//     // recycle();
//     requestAnimationFrame(loop);
//   }

//   setTimeout(() => {
//     scrollEl.scrollLeft += 120; // nudge the scroll to activate on mobile
//     scrollEl.scrollLeft += 0.5;
//     scrollEl.scrollLeft += 0.5;
//       scrollEl.scrollLeft += 0.5;
//       scrollEl.scrollLeft += 0.5;
//   }, 100);

//   setInterval(() => {
//     setTimeout(() => {
//         scrollEl.scrollLeft += 0.5;
//     }, 10);
    
//   }, 50);
  

//   // loop();
// });
