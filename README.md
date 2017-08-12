# pointCircleCollision

Performs a point-circle collision test, returning true if they collide. Inspired from Matt Desl's point-circle-collision [point-circle-collision](http://github.com/mattdesl/point-circle-collision/blob/master/LICENSE.md) node.

```js
let collision = require('./pointCircleCollision.js');

let point = {
  x: 100,
  y: 100
}

let circle = {
  x: 120,
  y: 120,
  radius: 100
}

var hit = collision(point.x, point.y, circle.x, circle.y, circle.radius)
console.log(collision)
```

## Usage

### `pointCircleCollision(pointX, pointY, circleX, circleY, circleRadius)`

Performs a collision test with the given parameters. Returns true if collision occurred.

Expects the x and y coordinates for the point and circle, and the circle's radius.

If the radius is zero, this test will return false.

## License

MIT
