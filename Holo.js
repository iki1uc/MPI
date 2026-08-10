export function renderHolo(score, bet) {

  const canvas = document.getElementById("holoCanvas");
  const ctx = canvas.getContext("2d");

  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  // Score-Kugel Radius
  const r = Math.max(20, score);

  // Farben pro Wette
  const colors = {
    fix: "#ff0000",
    flow: "#00ffff",
    expand: "#00ff00",
    charge: "#ffff00",
    shield: "#8888ff",
    release: "#ff00ff"
  };

  const color = colors[bet] || "#ffffff";

  // Kugel
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.stroke();

  // Orbit
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, r + 20, 0, Math.PI * 2);
  ctx.strokeStyle = "#444";
  ctx.lineWidth = 2;
  ctx.stroke();

  // KIpi-Vektor (einfacher Pfeil)
  ctx.beginPath();
  ctx.moveTo(w / 2, h / 2);
  ctx.lineTo(w / 2 + r, h / 2 - r);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.stroke();
}
