import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"
import "./styles/App.css";
import Dice from "./components/Dice";
import Footer from "./components/Footer";

function App() {
    const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false)

	useEffect(() => {

		// All dice are held
		const allHeld = dice.every(die => die.isHeld)

		// All dice have the same value
		const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)

		// if `allHeld` and `allSameValue)` === true, we won
		if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDice() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDice());
        }
        return newDice;
    }

	function rollDice() {
        if(!tenzies) {
            setDice(oldDice => oldDice.map(dice => {
                return dice.isHeld ? 
                    dice :
                    generateNewDice()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    function holdDice(id) {
        setDice((oldDice) =>
            oldDice.map((dice) => {
                return dice.id === id
                    ? { ...dice, isHeld: !dice.isHeld }
                    : dice;
            })
        );
    }

    const diceElements = dice.map((dice) => (
        <Dice
            key={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            holdDice={() => holdDice(dice.id)}
        />
    ));

    return (
        <div className="App">
            <main>
				{tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls.
                </p>
                <div className="dice-container">{diceElements}</div>
                <button className="roll-dice" onClick={rollDice}>
                    {tenzies ? "New Game" : "Roll"}
                </button>
            </main>

            <Footer />
        </div>
    );
}

export default App;
