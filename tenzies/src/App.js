import "./styles/App.css";
import Dice from "./components/Dice";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
			<main>
				<div className="dice-container">
					<Dice value="1" />
					<Dice value="2" />
					<Dice value="3" />
					<Dice value="4" />
					<Dice value="5" />
					<Dice value="6" />
					<Dice value="1" />
					<Dice value="2" />
					<Dice value="3" />
					<Dice value="4" />
				</div>
        	</main>
			<Footer />
        </div>
    );
}

export default App;
