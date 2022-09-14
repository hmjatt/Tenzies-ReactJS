# Tenzies-ReactJS 🎲

Create a **`Tenzies Game`** using `ReactJS`

<!-- ## [Live Preview](https://hmjatt.github.io/Tenzies-ReactJS/)

![This is an image]()
![This is an image]() -->

## About ℹ️

An implementation of **`Tenzies Game`** in `ReactJS`. While creating this project I learned about `Event Listeners in React`, `React State`, `Conditional Rendering in React`, `React Forms`, `React Hooks(useEffect)`, `Lazy State Initialization`, etc. After creating the project, it was deployed to `GitHub Pages` :bird: Feel free to reach me on[Twitter](https://twitter.com/hmjatt/) 👾

## Technologies Used 💻

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/792f7fce1ff8bfac6d0524a21b69161cdc6080a3c4e39979f21d5f8489d6fdd3/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6" width="50" height="50"/> </a> &emsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactJS" width="50" height="50"/> </a> &emsp; <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="figma" width="70" height="50"/> </a>

<br>

## Includes the following features/components ⚙️

    - ReactJS
    - create-react-app
    - Figma Design Template
    - Event Listeners in React
    - React State
    - React Forms
    - Conditional Rendering in React
    - React Hooks(useEffect)
    - github-pages

<br>

## Usage 🤓

```
cd tenzies

```

```
npm install

```

```
npm start

```

<br>

## Steps I followed to complete this project 🪜

### 1. Initialize Project 🎍

-   [x] Initialize the project using `npx create-react-app tenzies` which will create a
        complete **React App** pre-configured and pre-installed with all the dependencies.
-   [x] Import **`Karla`** font from google fonts and apply it to the **`App`** component.

### 2. Organize Project 🗄️

-   [x] Create a `components` folder inside the `src` directory.
-   [x] Create **custom components** inside the `components` folder.
-   [x] Create a `styles` folder inside the `src` directory and add `.css` files inside it.

### 3. Clean Directory🧹

-   [x] Delete **unnecessary** files and code from the directory.

### 4. App Component 🧩

-   [x] Create a **`App`** component and basic JSX elements for it.
-   [x] Add appropriate `className`s to elements in the **`App`** component.
-   [x] Import **`App`** component inside `index.js`. Code inside `index.js` looks like this :-

    ```javascript
    import React from "react";
    import ReactDOM from "react-dom/client";
    import "./styles/index.css";
    import App from "./App";

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    ```

-   [x] Add these styles to `index.css` :-

    ```css
    body {
        margin: 0;
        background-color: #0b2434;
    }

    * {
        box-sizing: border-box;
    }
    ```

-   [x] Style **`App`** component by editing `App.css` and add these styles :-

    ```css
    .App {
        font-family: "Karla", sans-serif;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    main {
        background-color: #f5f5f5;
        height: 40em;
        width: 40em;
        border-radius: 10px;
        box-shadow: rgba(254, 254, 254, 0.25) 0px 13px 27px -5px, rgba(
                    255,
                    255,
                    255,
                    0.3
                ) 0px 8px 16px -8px;
    }
    ```

    Output :-
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/step-4.png)

### 5. Dice Component 🧩

-   [x] Create a **`Dice`** component and basic JSX elements for it.
-   [x] Add appropriate `className`s to elements in the **`Dice`** component.

    -   Update code inside `App.js` and it should look like this :-

        ```javascript
        import "./styles/App.css";
        import Dice from "./components/Dice";
        import Footer from "./components/Footer";

        function App() {
            function allNewDice() {
                const newDice = [];
                for (let i = 0; i < 10; i++) {
                    newDice.push(Math.ceil(Math.random() * 6));
                }
                return newDice;
            }
            console.log(allNewDice());
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
        ```

    -   Code inside `Dice.js` looks like this :-

    ```javascript
    function Dice(props) {
        return (
            <div className="dice-face">
                <h2 className="dice-num">{props.value}</h2>
            </div>
        );
    }
    export default Dice;
    ```

-   [x] Style **`Dice`** component by editing `App.css` and add these styles :-

    ```css
    main {
        background-color: #f5f5f5;
        height: 40em;
        width: 40em;
        border-radius: 10px;
        box-shadow: rgba(254, 254, 254, 0.25) 0px 13px 27px -5px, rgba(
                    255,
                    255,
                    255,
                    0.3
                ) 0px 8px 16px -8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .dice-container {
        display: grid;
        grid-template: auto auto / repeat(5, 1fr);
        gap: 20px;
    }

    /* Dice Component */
    .dice-face {
        height: 50px;
        width: 50px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: white;
    }

    .dice-num {
        font-size: 2rem;
    }
    /* Dice Component */
    ```

    Output :-
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/step-5-before-dots.png)

### 6. Footer Component 🧩

-   [x] Create **`Footer`** component and basic JSX elements for it.
-   [x] Import **`Footer`** component inside `App` component.
-   [x] Style **`Footer`** component.

### 7. Generate Array of 10 Random Numbers 🔃

-   [x] Write a `allNewDice` function that returns an array of 10 random numbers between 1-6 inclusive.
-   [x] Log the array of numbers to the console for now.
-   [x] Code for `allNewDice` function inside **`App`** component looks like this :-
    ```javascript
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6));
        }
        return newDice;
    }
    console.log(allNewDice());
    ```

### 8. CSS Challenge - Replace _Numbers_ with _Dots_ 🔢

-   [x] CSS Challenge -> Put _Real Dots_ on the _Dice_. Here is a link to an article that helped me with some of the css in **`Dice`** component [Creating Dice in Flexbox in CSS](https://betterprogramming.pub/creating-dice-in-flexbox-in-css-a02a5d85e516)

-   [x] Update styles for **`Dice`** component in `App.css` and it should look like this :-

    ```css
    /* Dice Component */
    .dice-face {
        height: 55px;
        width: 55px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        cursor: pointer;
        background-color: white;
        padding: 12%;
    }

    /* .dice-num {
    font-size: 2rem;
    } */

    .dot {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgb(50, 50, 50);
    }

    .dice {
        width: 2.5em;
    }

    .first-face {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .second-face,
    .third-face,
    .fourth-face,
    .fifth-face,
    .sixth-face {
        display: flex;
        justify-content: space-between;
    }

    .second-face .dot:nth-of-type(2),
    .third-face .dot:nth-of-type(3) {
        align-self: flex-end;
    }

    .third-face .dot:nth-of-type(1) {
        align-self: flex-start;
    }

    .third-face .dot:nth-of-type(2),
    .fifth-face .column:nth-of-type(2) {
        align-self: center;
    }

    .fourth-face .column,
    .fifth-face .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    /* Dice Component */
    ```

-   [x] Update code for **`Dice`** component in `Dice.js` and it should look like this :-

    ```javascript
    function Dice(props) {
        const diceValue = parseInt(props.value);
        let diceSpanEles;

        if (diceValue === 1) {
            diceSpanEles = (
                <div className="dice first-face">
                    <span
                        className="dot"
                        style={{ backgroundColor: "rgb(255 100 89)" }}
                    >
                        {" "}
                    </span>
                </div>
            );
        } else if (diceValue === 2) {
            diceSpanEles = (
                <div className="dice second-face">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
            );
        } else if (diceValue === 3) {
            diceSpanEles = (
                <div className="dice third-face">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            );
        } else if (diceValue === 4) {
            diceSpanEles = (
                <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        } else if (diceValue === 5) {
            diceSpanEles = (
                <div className="fifth-face dice">
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
            );
        } else if (diceValue === 6) {
            diceSpanEles = (
                <div className="fourth-face dice">
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
            );
        } else {
            diceSpanEles = <h2 className="die-num">{props.value}</h2>;
        }

        return <div className="dice-face">{diceSpanEles}</div>;
    }
    export default Dice;
    ```

    Output :-
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/step-5-dots.png)

### 9. Map Array to Dice Component 🗺️

-   [x] Import `useState` hook from react using :-

    ```javascript
    import { useState } from "react";
    ```

-   [x] Create a _state_ inside **`App`** component to hold our _array of numbers_(Initialize the state by calling our `allNewDice` function so it loads all new(random) dice as soon as the app loads). :-

    ```javascript
    const [dice, setDice] = useState(allNewDice());
    ```

-   [x] Map over the _state numbers array_ to generate our array of `diceElements` and render those in place of our manually-written _10 Dice elements_.

    ```javascript
    const diceElements = dice.map((dice) => <Dice value={dice} />);
    ```

-   [x] React will show the following warning, we will fix it in the future(Ignore this for now) `Warning ⚠️ : Each child in a list should have a unique "key" prop.`

### 10. Roll Dice Button 🎢

-   [x] Create a `Roll` dice button inside **`App`** component that will re-roll all 10 dice.

	```html
	<button className="roll-dice" onClick={rollDice}>Roll</button> 
	```

-   [x] Clicking the `Roll` dice button runs `rollDice()` function, which should generate a new array of numbers and set the `dice` state to that new array (thus re-rendering the array to the page).

	```js
	function rollDice() {
		setDice(allNewDice())
	}
	```

-   [x] Style `Roll` dice button using *styles* from *figma design template*. Add these styles to `App.css` :-

	```css
	.roll-dice {
		margin-top: 2em;
		height: 50px;
		width: 100px;
		border: none;
		border-radius: 6px;
		background-color: #5035FF;
		color: white;
		font-size: 1.2rem;
		font-family: 'Karla', sans-serif;
		cursor: pointer;
	}

	.roll-dice:focus {
		outline: none;
	}

	.roll-dice:active {
		box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
	}
	```

### 11. Change Dice to Objects 🪢

-   [ ] Update the array of numbers in state to be an array of objects instead. Each object should look like: `{ value: <random number>, isHeld: false }`.

-   [ ] Making this change will break parts of our code, so make sure to update things so we're back to a working state.

<!-- -   [x] Update `bottomText` element to have a `value={meme.bottomText}`, `name="bottomText"` and an `onChange={handleChange}` event handler which will run `{handleChange}` _function_ on each key press. On each key press our state changes and _React_ re-renders our component and is in charge of maintaining the state. -->


### 12. Styling Held Dice

<!-- -   [x] Update _state variable_ called `allMemeImages` to `const [allMemes, setAllMemes] = React.useState([])`, where _default state_ is an empty array.

-   [x] Using _Effect Hook(`useEffect`)_, as soon as the **`Meme component`** loads the first time, make an API call to "https://api.imgflip.com/get_memes".

-   [x] When the data comes in, save just the memes array part of that data to the `allMemes` state.

-   [x] Get rid of `const memesArray = allMemeImages.data.memes;` line in our `getRandomImage()` function because new state for `allMeme` is already an _array of `memes` objects_. Update all instances of `memesArray` variable to `allMemes`. -->

### 13. Hold Dice

### 14. End Game

### 15. New Game

### 16. Make App Responsive 🎨

<!-- -   [x] Change _Absolute_ units to _Relative_.

-   [x] Make App responsive for mobile by adding `media query` . :smiley: -->

### 17. Prepare for Deployment 🪢

<!-- -   [x] Delete **unnecessary** files from directory and format code with `Prettier`.

-   [x] Test for _Responsiveness_ and make changes if need be ✅.

-   [x] Add links to `Live Preview` and _screenshots_ ✅. -->

### 18. Deploy 📤

<!-- -   [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push the project to **GitHub Pages** 🎆🎆🎆 -->

<br>

## Future Changes ♾️

-   [x] CSS - Put _Real Dots_ on the _Dice_.
-   [ ] JS - Track Number of _Rolls_ it took to win the game.
-   [ ] JS - Track the _time_ it took to win the game.
-   [ ] JS - Save _Best Time/Rolls_ to `localStorage` and try to beat the record.

<br>

## Links to content that helped me with this project 🔗

1. The Odin Project

    - [React Introduction](https://www.theodinproject.com/lessons/node-path-javascript-react-introduction)
    - [React State & Props](https://www.theodinproject.com/lessons/node-path-javascript-state-and-props)
    - [Handle Inputs And Render Lists](https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists)

2. Figma Design

    - [Tenzies](https://www.figma.com/file/FqsxRUhAaXM4ezddQK0CdR/Untitled?node-id=0%3A1)

3. Scrimba

    - [Learn React](https://scrimba.com/learn/learnreact)

4. React Official Documentation

    - [Mouse Events in React](https://reactjs.org/docs/events.html#mouse-events)
    - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
    - [Handling Events](https://reactjs.org/docs/handling-events.html)
    - [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
    - [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
    - [Forms](https://reactjs.org/docs/forms.html)
    - [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
    - [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

<br>

#### Quote ✒️

    “Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.”
    — Grace Hopper

> ♾️❇️🔥
