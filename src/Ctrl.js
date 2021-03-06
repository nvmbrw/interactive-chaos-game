import React from 'react'

const Ctrl = props => {
  const { handleChange, state } = props
  return (
    <div>
      <label htmlFor="r_value"> r-value: </label>
      <input
        type="number"
        onChange={handleChange}
        value={state.r}
        name="r"
        step=".01"
        min="-1"
        max="1"
      />
      <label htmlFor="polygon"> vertices: </label>
      <input
        type="number"
        onChange={handleChange}
        value={state.n}
        name="n"
        min="3"
      />
      <label htmlFor="iterations"> iterations: </label>
      <input
        type="number"
        onChange={handleChange}
        value={state.iterations}
        name="iterations"
        max="500000"
      />
      <a href="https://medium.com/@nnwilliams8/the-chaos-game-in-javascript-69af056c6ec">
        what's this?
      </a>
    </div>
  )
}

export default Ctrl
