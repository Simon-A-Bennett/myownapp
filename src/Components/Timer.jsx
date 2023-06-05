import '../Styles/Timer.css'

const Timer = ({ seconds, active, startToggle, reset }) => {
	return (
		<div className="timer">
			<p className='light-on'>Let there be light in: {seconds} minutes</p>      
      <button active={active === 8 ? "active" : "inactive"} onClick={startToggle}>
				{!active ? "Start" : "Pause"}
			</button>
			<button onClick={reset}>Reset</button>
     </div>
	);
};

export default Timer;
