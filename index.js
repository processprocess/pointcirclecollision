function pointCircleCollision(px, py, cx, cy, r) {
  if (r === 0) return false;
  let dx = px - cx;
  let dy = py - cy;

  return dx * dx + dy * dy <= r * r;
}

module.exports = pointCircleCollision;