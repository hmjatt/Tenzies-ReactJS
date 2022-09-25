import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import "./styles/App.css";
import Dice from "./components/Dice";
import Footer from "./components/Footer";

function App() {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);
    const [numOfRolls, setNumOfRolls] = useState(0);

    // States for Timer
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

	// State for Best Time
	const [bestTime, setBestTime] = useState(0)

	// useEffect Hook that gets bestTime in localStorage
	useEffect(() => {
		const bestTime = JSON.parse(localStorage.getItem('bestTime'));
		if (bestTime) {
		 setBestTime(bestTime);
		}
	  }, []);

    // Calculate time using useEffect Hook & setInterval() method
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    // useEffect Hook that represents game state
    useEffect(() => {
        // All dice are held
        const allHeld = dice.every((die) => die.isHeld);

        // Check if some Dice are held(even if it's just one)
        const someHeld = dice.some((die) => die.isHeld);

        // All dice have the same value
        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);

        // if `someHeld` === True, Start counting
        if (someHeld) {
            setRunning(true);
        }

        // if `allHeld` and `allSameValue)` === true, we won
        if (allHeld && allSameValue) {
            // Stop Counter
            setRunning(false);

			// Store Time at the end of a win in a variable
			let currentTime = time;
			console.log(currentTime);

			// if currentTime > bestTime, store it in localStorage
			if(currentTime < bestTime) {
				setBestTime(currentTime);
				localStorage.setItem('bestTime', JSON.stringify(currentTime));
			}

            // Game Won
            setTenzies(true);
        }
    }, [dice, time, bestTime]);

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
        if (!tenzies) {
            setNumOfRolls((prevState) => prevState + 1);
            setDice((oldDice) =>
                oldDice.map((dice) => {
                    return dice.isHeld ? dice : generateNewDice();
                })
            );
        } else {
            setTenzies(false);
            setDice(allNewDice());
            setNumOfRolls(0);
            // Reset timer
            setTime(0);
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
                <h2 className="track-rolls">Number of Rolls: {numOfRolls}</h2>
                <h3>
                    <div className="timer">
                        <div className="current-time">
                            <span>
                                {("0" + Math.floor((time / 60000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>
                                {("0" + Math.floor((time / 1000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div>
						<div className="best-time">
                            <span>
                                {("0" + Math.floor((bestTime / 60000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>
                                {("0" + Math.floor((bestTime / 1000) % 60)).slice(
                                    -2
                                )}
                                :
                            </span>
                            <span>{("0" + ((bestTime / 10) % 100)).slice(-2)}</span>
                        </div>
                    </div>
                </h3>
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
