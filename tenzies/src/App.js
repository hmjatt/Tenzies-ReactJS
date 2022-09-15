import { useState } from "react";
import "./styles/App.css";
import Dice from "./components/Dice";
import Footer from "./components/Footer";

function App() {
    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false
            })
        }
        return newDice
    }

	function rollDice() {
        setDice(allNewDice())
    }

    const diceElements = dice.map((dice) => <Dice value={dice.value} />);

    return (
        <div className="App">
            <main>
                <div className="dice-container">{diceElements}</div>
				<button className="roll-dice" onClick={rollDice}>Roll</button>
            </main>
			
            <Footer />
        </div>
    );
}

export default App;
