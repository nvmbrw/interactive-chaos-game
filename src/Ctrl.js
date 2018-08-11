import React from 'react'

const Ctrl = props => {
  const { handleSubmit, handleChange, state } = props
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="r_value"> r-value: </label>
      <input type="number" onChange={handleChange} value={state.r} name="r" />
      <label htmlFor="polygon"> vertices: </label>
      <input type="number" onChange={handleChange} value={state.n} name="n" />
      <label htmlFor="iterations"> iterations: </label>
      <input
        type="number"
        onChange={handleChange}
        value={state.iterations}
        name="iterations"
      />
      <button type="submit">draw</button>
    </form>
  )
}

export default Ctrl
