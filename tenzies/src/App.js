import { useState } from "react";
import "./styles/App.css";
import Dice from "./components/Dice";
import Footer from "./components/Footer";

function App() {
    const [dice, setDice] = useState(allNewDice());

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6));
        }
        return newDice;
    }

    const diceElements = dice.map((dice) => <Dice value={dice} />);

    return (
        <div className="App">
            return (
            <main>
                <div className="dice-container">{diceElements}</div>
            </main>
            )
            <Footer />
        </div>
    );
}

export default App;
