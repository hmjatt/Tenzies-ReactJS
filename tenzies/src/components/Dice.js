function Dice(props) {
	let diceSpanEles;

	if(props.value === 1){
		diceSpanEles =  <div className="dice first-face">
							<span className="dot"> </span>
						</div>;
	} else if(props.value === 2) {
		diceSpanEles =  <div className="dice second-face">
							<span className="dot"> </span>
							<span className="dot"> </span>
						</div>;
	} else if(props.value === 3) {
		diceSpanEles =  <div className="dice third-face">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</div>;		
	} else if(props.value === 4) {
		diceSpanEles =  <div className="fourth-face dice">
							<div className="column">
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
							<div className="column">
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
						</div>		
	} else if(props.value === 5) {
		diceSpanEles =  <div className="fifth-face dice">
							<div className="column">
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
							
							<div className="column">
								<span className="dot"></span>
							</div>
							
							<div className="column">
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
						</div>		
	} else if(props.value === 6) {
		diceSpanEles =  <div className="fourth-face dice">
							<div className="column">
								<span className="dot"></span>
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
							<div className="column">
								<span className="dot"></span>
								<span className="dot"></span>
								<span className="dot"></span>
							</div>
						</div>		
	} 

    return (
        <div className="dice-face">
			{diceSpanEles}
        </div>
    );
}

export default Dice;
