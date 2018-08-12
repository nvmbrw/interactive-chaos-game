import React, { Component } from 'react'

class FractalCanvas extends Component {
  componentDidMount() {
    const ctx = this.canvas.getContext('2d')

    this.draw(ctx)
  }

  componentDidUpdate() {
    this.clearAndDraw()
  }

  clearAndDraw() {
    const ctx = this.canvas.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.draw(ctx)
    }
  }

  draw(cx) {
    cx.restore()
    let rValue = +this.props.state.r,
      nvertices = +this.props.state.n,
      iterations = +this.props.state.iterations

    if (nvertices > 2) {
      cx.fillStyle = 'red'

      class Point {
        constructor(x, y) {
          this.x = x
          this.y = y
        }
        rTo(a, r) {
          return Point.rOf(this, a, r)
        }
        static rOf(a, b, r) {
          return new Point(
            Math.round(a.x * r + b.x * (1 - r)),
            Math.round(a.y * r + b.y * (1 - r))
          )
        }
      }

      const regularNGon = n => {
        const radius = 300
        const center = new Point(450, 350)
        return new Array(n)
          .fill(null)
          .map(
            (vertex, i) =>
              new Point(
                center.x + radius * Math.cos((i * 2 * Math.PI) / n),
                center.y + radius * Math.sin((i * 2 * Math.PI) / n)
              )
          )
      }

      const pixel = point => cx.fillRect(point.x, point.y, 1, 1)
      const bigDot = point => cx.fillRect(point.x, point.y, 1, 1)

      const vertices = regularNGon(nvertices)

      vertices.forEach(point => bigDot(point))

      const pickVertex = () =>
        vertices[Math.round(Math.random() * (vertices.length - 1))]

      const getNewPoint = oldPoint => oldPoint.rTo(pickVertex(), rValue)

      const playGame = nIterations => {
        const startVertex = pickVertex()
        let currentPos = startVertex
        for (let i = 0; i < nIterations; i++) {
          currentPos = getNewPoint(currentPos)
          pixel(currentPos)
        }
      }

      playGame(iterations)
    }
  }

  render() {
    return (
      <canvas ref={canvas => (this.canvas = canvas)} width="900" height="700" />
    )
  }
}

export default FractalCanvas
