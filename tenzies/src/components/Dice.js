function Dice(props) {
	const diceValue = parseInt(props.value);
	let diceSpanEles;

	if(diceValue === 1){
		diceSpanEles =  <div className="dice first-face" >
							<span className="dot" style={{backgroundColor: "rgb(255 100 89)"}}> </span>
						</div>;
	} else if(diceValue === 2) {
		diceSpanEles =  <div className="dice second-face">
							<span className="dot"> </span>
							<span className="dot"> </span>
						</div>;
	} else if(diceValue === 3) {
		diceSpanEles =  <div className="dice third-face">
							<span className="dot"></span>
							<span className="dot"></span>
							<span className="dot"></span>
						</div>;		
	} else if(diceValue === 4) {
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
	} else if(diceValue === 5) {
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
	} else if(diceValue === 6) {
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
	} else {
		diceSpanEles = <h2 className="dice-num">{props.value}</h2>;
	}

	const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="dice-face" style={styles} onClick={props.holdDice}>
			{diceSpanEles}
        </div>
    );
}

export default Dice;
