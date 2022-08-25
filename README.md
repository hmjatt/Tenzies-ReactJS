# Tenzies-ReactJS 🎲

Create a **`Tenzies Game`** using `ReactJS`

<!-- ## [Live Preview](https://hmjatt.github.io/Tenzies-ReactJS/)

![This is an image]()
![This is an image]() -->

<hr>

### About ℹ️

Create a **`Tenzies Game`** using `ReactJS`. By creating this project I learned about `Event Listeners in React`, `React State`, `Conditional Rendering in React`, `React Forms`, `React Hooks(useEffect)`, `Lazy State Initialization`, etc. After creating the project, it was deployed to `GitHub Pages` :bird: Feel free to reach me on[Twitter](https://twitter.com/hmjatt/) 🪶

<hr>

### Technologies Used 💻

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/792f7fce1ff8bfac6d0524a21b69161cdc6080a3c4e39979f21d5f8489d6fdd3/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6" width="50" height="50"/> </a> &emsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactJS" width="50" height="50"/> </a> &emsp; <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="figma" width="70" height="50"/> </a>

<hr>

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

<hr>

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

<hr>
<hr>

## Steps I followed to complete this project 🪜

### 1. Initialize Project 🎍

<!-- -   [x] Initialize the project using `npx create-react-app meme-generator` which will create a
        complete **React App** pre-configured and pre-installed with all the dependencies.

-   [x] Import **`Karla`** font from google fonts and apply it to the **`App`** component. -->

<hr>

### 2. Organize components 🗄️

<!-- -   [x] Create a `components` folder inside the `src` directory.

-   [x] Create **custom components** inside the `components` folder.

-   [x] Create an `images` folder inside the `src` directory and add images/logos inside it.

-   [x] Create a `styles` folder inside the `src` directory and add `.css` files inside it. -->

<hr>

### 3. Clean directory🧹

<!-- -   [x] Delete **unnecessary** files and code from the directory. -->

<hr>

### 4. Header Component 🧩

<!-- -   [x] Create a **`Header`** component and basic JSX elements for it.

-   [x] Add appropriate `className`s to elements in the `Header` component.

-   [x] Add `troll-face.png` image to the **`Header`** component.

-   [x] Import **`Header`** component inside `App` component.

-   [x] Style **`Header`** and **`App`** component. -->

<hr>

### 5. Meme Component 🧩

<!-- -   [x] Create a **`Meme`** component and basic JSX elements for it.

-   [x] Add appropriate `className`s to elements in the `Meme` component.

-   [x] Import **`Meme`** component inside **`App`** component.

-   [x] Add basic style to **`Meme`** component. -->

<hr>

### 6. Footer Component 🧩

<!-- -   [x] Create **`Footer`** component and basic JSX elements for it.

-   [x] Import **`Footer`** component inside `App` component.

-   [x] Style **`Footer`** component. -->

<hr>

<!-- ### 7. Get Random Meme 🪄 -->

<!-- -   [x] Change `<form>` to `<div>` inside the **`Meme`** component as we don't need to submit our _form_ instead just get a `meme image`.

-   [x] Create a `memesData.js` inside the `data` folder which is an _object of 100 most popular meme images_ returned after making an _API request_ to `imgflip API`.

-   [x] Import `memesData.js` as `memesData` _object_ inside the **`Meme`** component.

-   [x] Select a _random meme image's_ `url` property, `console.log(url)` using `onClick={getRandomImage}` _react mouse event property_ when `Get a new meme image 🖼️` _button_ is clicked.

-   [x] `console.log(url)` for now as our `UI` won't update if we insert the `url` _variable_ inside the **`Meme`** component. Because this has everything to do with the way _react_ deals with updating the `UI` using _variables_. `⚠️ Spoiler Alert!!!: React doesn't just insert every variable that is declared inside our component`. -->

<hr>

<!-- ### 8. Add Images to the Meme Generator 🖼️ -->

<!-- -   [x] Save the _random meme URL_ in _state_ and _import the react_ `{ useState }` _hook_.

-   [x] Create a new _state_ called `memeImage` with an empty string as default.

-   [x] When the `getMemeImage` function is called, update the `memeImage` _state_ to be the _random image URL_

-   [x] Below the `div.form`, add an `<img />` element and set the src to the new `memeImage` state we created.

-   [x] Style newly created `<img />` element. -->

<hr>

### 7. Refactor State 🔃

<!-- -   [x] Update our _state_ to save the meme-related data as an object called `meme`. It should have the following _3 properties_: `topText, bottomText, randomImage`.

-   [x] The _2 text states_ can default to empty strings for now, and `randomImage` should default to `"http://i.imgflip.com/1bij.jpg"`

-   [x] Next, create a _new state variable_ called `allMemeImages` which will default to `memesData`, which we imported at the top of `Meme.js`

-   [x] Lastly, update the `getMemeImage` function and the markup to reflect our newly reformed state object and array in the correct way -->

<hr>

<!-- ### 10. Add Text to Image 📝

-   [x] Update `topText` element to have a `value={meme.topText}`, `name="topText"` and an `onChange={handleChange}` event handler which will run `{handleChange}` _function_ on each key press. On each key press our state changes and _React_ re-renders our component and is in charge of maintaining the state.

-   [x] Update `bottomText` element to have a `value={meme.bottomText}`, `name="bottomText"` and an `onChange={handleChange}` event handler which will run `{handleChange}` _function_ on each key press. On each key press our state changes and _React_ re-renders our component and is in charge of maintaining the state.

-   [x] Create a `handleChange` _function_, use _Destructuring assignment(ES6)_ to return a new object i.e., -> `const [name, value] = event.target`. While keeping the old _object(state)_ intact create a new _object(state)_ by using the spread operator `...prevState`.

-   [x] Override the specific property `[name]: value` using _previous state_ and _arrow functions_. Making use of _Computed Properties(ES6)_ allows us to turn a _dynamic string(Something Stored in a Variable)_ and use it as the property name for our _Object_.

-   [x] Create a `div` with `className=meme` containing `meme-image` and two `<h2>` elements, which will used to show text on top of our `meme-image`.

-   [x] Update our `<h2>` elements by using _values_ stored in `{meme.topText}, {meme.bottomText}` _keys_ inside our _meme Object_.

-   [x] Style `className=meme` `div` container and `<h2>` elements in it. -->

<hr>

<!-- ### 11. Get Memes form the API ⬇️

-   [x] Update _state variable_ called `allMemeImages` to `const [allMemes, setAllMemes] = React.useState([])`, where _default state_ is an empty array.

-   [x] Using _Effect Hook(`useEffect`)_, as soon as the **`Meme component`** loads the first time, make an API call to "https://api.imgflip.com/get_memes".

-   [x] When the data comes in, save just the memes array part of that data to the `allMemes` state.

-   [x] Get rid of `const memesArray = allMemeImages.data.memes;` line in our `getRandomImage()` function because new state for `allMeme` is already an _array of `memes` objects_. Update all instances of `memesArray` variable to `allMemes`. -->

<hr>

### 8. Make App Responsive 🎨

<!-- -   [x] Change _Absolute_ units to _Relative_.

-   [x] Make App responsive for mobile by adding `media query` . :smiley: -->

<hr>

### 9. Prepare for Deployment 🪢

<!-- -   [x] Delete **unnecessary** files from directory and format code with `Prettier`.

-   [x] Test for _Responsiveness_ and make changes if need be ✅.

-   [x] Add links to `Live Preview` and _screenshots_ ✅. -->

<hr>

### 10. Deploy 📤

<!-- -   [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push the project to **GitHub Pages** 🎆🎆🎆 -->

<hr>
<hr>

## Future Changes ♾️

<!-- -   [ ] Only show `meme images` that are compatible with app design(_2 text fields - top & bottom_).
-   [ ] Update the form based upon the retrieved `meme image`. -->

<hr>

## Links to content that helped me with this project 🔗

1. The Odin Project

    - [React Introduction](https://www.theodinproject.com/lessons/node-path-javascript-react-introduction)
    - [React State & Props](https://www.theodinproject.com/lessons/node-path-javascript-state-and-props)
    - [Handle Inputs And Render Lists](https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists)

2. Figma Design

    <!-- - [Meme Generator](https://www.figma.com/file/MoLwFPHNHJVrzdFurxHzNV/Meme-Generator?node-id=0%3A1) -->

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

<hr>

#### Quote ✒️

    “Humans are allergic to change. They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counterclockwise.”
    — Grace Hopper

> ♾️❇️🔥