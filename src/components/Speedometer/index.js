import './index.css'

const accelerateFun = () => {
  const speed = document.getElementById('speedValue')
  const speedValue = parseInt(speed.innerHTML)
  if (speedValue >= 0 && speedValue < 200) {
    speed.innerHTML = speedValue + 10
  }
}

const brakeFun = () => {
  const speed = document.getElementById('speedValue')
  const speedValue = parseInt(speed.innerHTML)
  if (speedValue > 0) {
    speed.innerHTML = speedValue - 10
  }
}

const element = (
  <div className="container">
    <div className="container1">
      <h1 className="heading">SPEEDOMETER</h1>
      <img
        className="imageEl"
        src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        alt="speedometer"
      />
    </div>
    <div className="container2">
      <h1 id="speedheading">
        Speed is{' '}
        <span id="speedValue" className="speedVal">
          0
        </span>
        mph
      </h1>
      <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
      <button
        onClick={accelerateFun}
        type="submit"
        id="accelerate-btn"
        className="accelerate Btn"
      >
        Accelerate
      </button>
      <button
        onClick={brakeFun}
        type="submit"
        id="brake-btn"
        className="brake Btn"
      >
        Apply Brake
      </button>
    </div>
  </div>
)

const createdEl = () => element
export default createdEl
