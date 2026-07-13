const bubbleContainer = document.querySelector(".bubbles");

const bubbles = [
  [10, 16, 13, -2],
  [20, 9, 11, -6],
  [31, 24, 17, -9],
  [44, 12, 12, -4],
  [58, 18, 15, -11],
  [70, 8, 10, -3],
  [82, 27, 19, -13],
  [92, 14, 14, -7]
];

for (const [left, size, duration, delay] of bubbles) {
  const bubble = document.createElement("span");
  bubble.className = "bubble";
  bubble.style.setProperty("--left", `${left}%`);
  bubble.style.setProperty("--size", `${size}px`);
  bubble.style.setProperty("--duration", `${duration}s`);
  bubble.style.setProperty("--delay", `${delay}s`);
  bubbleContainer.appendChild(bubble);
}

document.getElementById("year").textContent = new Date().getFullYear();
