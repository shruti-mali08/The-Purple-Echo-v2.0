// Generates N filler stars with randomized position, size, and timing.
// Positions are percentages, so this never needs to be regenerated on resize.
const generateFillerStars = (count) => {
  const fillerStars = [];
  for (let i = 0; i < count; i++) {
    fillerStars.push({
      id: `filler-${i}`,
      xPct: Math.random() * 100,          // 0–100%
      yPct: Math.random() * 100,          // 0–100%
      size: (Math.random() * 1.8 + 0.6).toFixed(2), // 0.6px–2.4px radius-ish
      delay: (Math.random() * 5).toFixed(2) + "s",   // 0–5s stagger
      duration: (Math.random() * 3 + 2).toFixed(2) + "s", // 2–5s cycle
      baseOpacity: (Math.random() * 0.4 + 0.4).toFixed(2), // 0.4–0.8 at rest
    });
  }
  return fillerStars;
};

export default generateFillerStars; 