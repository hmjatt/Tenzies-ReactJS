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
-   [x] Import **`Dice`** component inside `index.js`. Code inside `index.js` looks like this :-

	```javascript
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import './styles/index.css';
	import App from './App';

	const root = ReactDOM.createRoot(document.getElementById('root'));
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
	background-color: #0B2434;
	}

	* {
		box-sizing: border-box;
	}
	```

-	[x] Style **`App`** component by editing `App.css` and add these styles :-

	```css
	.App {
		font-family: "Karla", sans-serif;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	main {
		background-color: #F5F5F5;
		height: 40em;
		width: 40em;
		border-radius: 10px;
		box-shadow: rgba(254, 254, 254, 0.25) 0px 13px 27px -5px, rgba(255, 255, 255, 0.3) 0px 8px 16px -8px;
	}
	```
	Output :-
	![This is an image]()


### 5. Dice Component 🧩

-   [ ] Create a **`Dice`** component and basic JSX elements for it.
	- Create a Die component that takes a `value` prop
	- Render 10 instances of the Die component (manually)
 	- Provide a number between 1-6 for the value on each for now
-   [ ] Add appropriate `className`s to elements in the **`Dice`** component. Code inside `Dice.js` looks like this :-
-   [ ] Import **`Dice`** component inside `App` component.
-   [ ] Style **`Dice`** component. Here is a link to an article that helped me with some of the css in **`Dice`** component [Creating Dice in Flexbox in CSS](https://betterprogramming.pub/creating-dice-in-flexbox-in-css-a02a5d85e516)


### 6. Footer Component 🧩

<!-- -   [x] Create **`Footer`** component and basic JSX elements for it.

-   [x] Import **`Footer`** component inside `App` component.

-   [x] Style **`Footer`** component. -->


### 7. Generate Array of 10 Random Numbers 🔃 

<!-- -   [x] Change `<form>` to `<div>` inside the **`Meme`** component as we don't need to submit our _form_ instead just get a `meme image`.

-   [x] Create a `memesData.js` inside the `data` folder which is an _object of 100 most popular meme images_ returned after making an _API request_ to `imgflip API`.

-   [x] Import `memesData.js` as `memesData` _object_ inside the **`Meme`** component.

-   [x] Select a _random meme image's_ `url` property, `console.log(url)` using `onClick={getRandomImage}` _react mouse event property_ when `Get a new meme image 🖼️` _button_ is clicked.

-   [x] `console.log(url)` for now as our `UI` won't update if we insert the `url` _variable_ inside the **`Meme`** component. Because this has everything to do with the way _react_ deals with updating the `UI` using _variables_. `⚠️ Spoiler Alert!!!: React doesn't just insert every variable that is declared inside our component`. -->


### 8. Map Array to Dice Component 🪄

 <!-- -   [x] Save the _random meme URL_ in _state_ and _import the react_ `{ useState }` _hook_.

-   [x] Create a new _state_ called `memeImage` with an empty string as default.

-   [x] When the `getMemeImage` function is called, update the `memeImage` _state_ to be the _random image URL_

-   [x] Below the `div.form`, add an `<img />` element and set the src to the new `memeImage` state we created.

-   [x] Style newly created `<img />` element. -->


### 9. Roll Dice Button

 <!-- -   [x] Update our _state_ to save the meme-related data as an object called `meme`. It should have the following _3 properties_: `topText, bottomText, randomImage`.

-   [x] The _2 text states_ can default to empty strings for now, and `randomImage` should default to `"http://i.imgflip.com/1bij.jpg"`

-   [x] Next, create a _new state variable_ called `allMemeImages` which will default to `memesData`, which we imported at the top of `Meme.js`

-   [x] Lastly, update the `getMemeImage` function and the markup to reflect our newly reformed state object and array in the correct way -->


### 10. Change Dice to Objects

 <!-- -   [x] Update `topText` element to have a `value={meme.topText}`, `name="topText"` and an `onChange={handleChange}` event handler which will run `{handleChange}` _function_ on each key press. On each key press our state changes and _React_ re-renders our component and is in charge of maintaining the state.

-   [x] Update `bottomText` element to have a `value={meme.bottomText}`, `name="bottomText"` and an `onChange={handleChange}` event handler which will run `{handleChange}` _function_ on each key press. On each key press our state changes and _React_ re-renders our component and is in charge of maintaining the state.

-   [x] Create a `handleChange` _function_, use _Destructuring assignment(ES6)_ to return a new object i.e., -> `const [name, value] = event.target`. While keeping the old _object(state)_ intact create a new _object(state)_ by using the spread operator `...prevState`.

-   [x] Override the specific property `[name]: value` using _previous state_ and _arrow functions_. Making use of _Computed Properties(ES6)_ allows us to turn a _dynamic string(Something Stored in a Variable)_ and use it as the property name for our _Object_.

-   [x] Create a `div` with `className=meme` containing `meme-image` and two `<h2>` elements, which will used to show text on top of our `meme-image`.

-   [x] Update our `<h2>` elements by using _values_ stored in `{meme.topText}, {meme.bottomText}` _keys_ inside our _meme Object_.

-   [x] Style `className=meme` `div` container and `<h2>` elements in it.  -->


### 11. Styling Held Dice

<!-- -   [x] Update _state variable_ called `allMemeImages` to `const [allMemes, setAllMemes] = React.useState([])`, where _default state_ is an empty array.

-   [x] Using _Effect Hook(`useEffect`)_, as soon as the **`Meme component`** loads the first time, make an API call to "https://api.imgflip.com/get_memes".

-   [x] When the data comes in, save just the memes array part of that data to the `allMemes` state.

-   [x] Get rid of `const memesArray = allMemeImages.data.memes;` line in our `getRandomImage()` function because new state for `allMeme` is already an _array of `memes` objects_. Update all instances of `memesArray` variable to `allMemes`. -->

### 12. Hold Dice

### 13. End Game

### 14. New Game

### 15. Make App Responsive 🎨

<!-- -   [x] Change _Absolute_ units to _Relative_.

-   [x] Make App responsive for mobile by adding `media query` . :smiley: -->


### 16. Prepare for Deployment 🪢

<!-- -   [x] Delete **unnecessary** files from directory and format code with `Prettier`.

-   [x] Test for _Responsiveness_ and make changes if need be ✅.

-   [x] Add links to `Live Preview` and _screenshots_ ✅. -->


### 17. Deploy 📤

<!-- -   [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push the project to **GitHub Pages** 🎆🎆🎆 -->


<br>

## Future Changes ♾️

-   [ ] CSS - Put *Real Dots* on the *Dice*.
-   [ ] JS - Track Number of *Rolls* it took to win the game.
-   [ ] JS - Track the *time* it took to win the game.
-   [ ] JS - Save *Best Time/Rolls* to `localStorage` and try to beat the record.


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