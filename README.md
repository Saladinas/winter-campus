&nbsp;
# About me
My name is Lukas Jasmontas, I am from the south of Lithuania, a small town `Druskininkai` not too far from `Poland` border. I am 28 years old, currently working as a Software Engineer at `CERN`. Previously I finished my Bachelor degree in Software Engineering at `Vilnius University` and Masters joint degree in Computer Science: Big Data Engineering at `Vrije Universiteit Amsterdam` and `University of Amsterdam`.

Today I will be talking about the modern user interface library called **React**. My first date with modern user interface libraries happened 8 years go and continues to this day.

# Live programming

During this lecture we will using a small application that is written in  **React** and **Material UI** to better visualize theory with practice. Feel free to ask questions and take notes. Since we have limited time I might have to go faster in some parts of the presentation. But don't worry, this presentation and all the code will be shared with you! 

### Link to the Polish dishes application:
### [https://polish-dishes.app.cern.ch/](https://polish-dishes.app.cern.ch/)

![React application](https://i.ibb.co/6Z9XBgj/Screenshot.png)


# Table of content
- [Introduction](#introduction)
	- [Old days of WEB](#old-days)
	- [Modern front-end libraries](#modern-libraries)
	- [Why React is so popular](#why-react-popular)
- [React](#react)
	- [Rrerequisites](#prerequisites)
	- [Create React App](#create-react-app)
	- [TypeScript](#typescript)
	- [The smallest React app](#smallest-react-app)
	- [Embedding expressions in JSX](#jsx)
- [Components, props, state management and hooks](#compoenntns-props-state-hooks)
	- [Class components](#class-components)
	- [Functional components](#functional-components)
	- [Passing props to components](#props)
	- [State management](#state)
	- [Hooks](#hooks)
- [Routing with react-router](#routing)
- [Multilingual (i18next)](#multilingual)
- [Responsiveness and component libraries](#responsivness-component-libraries)
	- [Material UI](#material-ui)
		- [Responsiveness](#responsiveness)
		- [Theming](#theming)
		- [Accessing the theme with useTheme hook](#usetheme-hook)
- [Testing](#testing)
- [Building](#building)
- [Migrating existing applications to React](#migrating-existing-apps-to-react)
	- [Migrating CERN applications to React](#migrating-cern-applications-to-React)
	- [Information flow from Polymer to React](#from-polymer-to-react)
	- [Information flow from React to Polymer](#from-react-to-polymer)
- [Questions](#questions)
- [Contacts and presentation materials](#contacts-materials)

<div id='introduction'/>

# Introduction

<div id='old-days'/>

## Old days of WEB

Do you remember the old days of web? 

![React application](https://i.ibb.co/4VLC8Qq/most-ugly-websites.webp)

<div id='modern-libraries'/>

## Modern front-end libraries

The most popular modern **JavaScritpt** front-end libraries with weekly downloads on **npm**:
- **React**: 17,758,196 weekly downloads.
- **Vue.js**: 3,773,746 weekly downloads.
- **Angular**: 3,203,998 weekly downloads.
- **svetle**: 402,386 weekly downloads.

![enter image description here](https://i.ibb.co/bg0xnqP/React-vs-others.png)

<div id='why-react-popular'/>

## Why React is so popular

- Free.
- Open-source.
- Backward compatibility.
- Large community.
- Portability (**React** + **React Native**).
- Reusable components.

<div id='react'/>

# React

To start our little journey we first have to install **React**.

<div id='prerequisites'/>

## Prerequisites

- Install **Node.js** on the computer.
- Basic knowledge of **JavaScript**.
- Some familiarity with **HTML** and **CSS**.

<div id='create-react-app'/>

## Create React App

**Create React App** is a comfortable environment for learning **React**, and is the best way to start building a new single-page application in **React**. It sets up your development environment so that you can use the latest **JavaScript** features, provides a nice developer experience, and optimizes your app for production. **Create React App** doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want.

- Scaling to many files and components
- Using third-party libraries from **npm**.
- Detecting common mistakes early.
- Live-editing **CSS** and **JavaScript** in development.

It is very straight-forward to create and start new application with **TypeScript**: 
```bash
npx create-react-app winter-campus --template typescript
cd winter-campus
npm start
```

<div id='typescript'/>

## TypeScript

**TypeScript** adds additional syntax to **JavaScript** to support a tighter integration with your editor. Catch errors early in your editor.

```ts
type Ingredient = {
  section: string;
  items: string[];
};

type Dish = {
  id: number;
  name: string;
  author: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  steps: string[];
};
```

To add **TypeScript** to an existing **Create React App** project, first install it:
```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

Next, rename any file to be a **TypeScript** file (e.g. `src/index.js` to `src/index.tsx`) and restart your development server.

<div id='smallest-react-app'/>

## The smallest React app:

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);
```
We call this a “root” DOM node because everything inside it will be managed by **React DOM**. Applications built with just **React** usually have a single root DOM node. If you are integrating **React** into an existing app, you may have as many isolated root DOM nodes as you like.

We will come back to this later in the presentation when talking about migrating existing **CERN** web applications to **React**. **React DOM** compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

<div id='jsx'/>

## Embedding expressions in JSX

**JSX** is a syntax extension to **JavaScript**. In the example below, we declare a variable called name and then use it inside **JSX** by wrapping it in curly braces. 

```ts
type Dish = {
  name: string;
  duration: number;
}

function formatDish(dish: Dish) {
  return `${dish.name} (${dish.duration} minutes)`;
}

const dish: Dish = {
  name: 'Pierogi',
  duration: 45
};

const element = (
  <h1>
    I love to cook {formatDish(dish)}!
  </h1>
);
```
You can put any valid **JavaScript** expression inside the curly braces in **JSX**. For example are all these JavaScript expressions are valid:
 - `2 + 2`
 - `formatName(user)`
 - `dish.name`

<div id='compoenntns-props-state-hooks'/>

# Components, props, state management and hooks

**Components** let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like **JavaScript** functions. They accept arbitrary inputs (called **props**) and return **React** elements describing what should appear on the screen.

<div id='class-components'/>

## Class components

Components are independent and reusable bits of code. 

- Component's name must start with an upper case letter.
- The component has to include the `extends React.Component` statement.
- The component also requires a `render()` method, this method returns **HTM**.

```ts
type DishProps = {
  name: string;
}

class Dish extends React.Component<DishProps, {}> {
  render() {
    return <h1>I love to cook {this.props.name}!</h1>;
  }
}
```

With the addition of **Hooks** (we will jump to them in a minute!), `Function components` are now almost equivalent to `Class components`. The differences are so minor that you will probably never need to use a `Class component` in **React**.

<div id='functional-components'/>

## Functional components

A functional component is basically a JavaScript/ES6 function that returns a React element (JSX).
```ts
type DishProps = {
  name: string;
}

function Dish({ name }: DishProps) {
  return <h1>I love, {name}!</h1>;
}
```

This function is a valid **React** component because it accepts a single `props` object (which stands for properties) with data and returns a **React** element. The above two components are equivalent from **React’s** point of view.

<div id='props'/>

## Passing props to components

**Props** are read-only properties passed to the component. Whether you declare a component as a function or a class, it must never modify its own props.

```js
const element = <Dish name="Pierogi" />;
```

It is recommended naming **props** from the component’s own point of view rather than the context in which it is being used.  This is why we have given its prop a more generic name: `name` rather than `dishName` so it can be later used for drinks or other types of meals.

As we cannot change **props**, let's see how to change state in **React** components.

<div id='state'/>

## State management


**State** is a built-in **React** object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in **state** can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.

**State** and it's changes in the **class** components would look like this:

```jsx
class Dish extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  
  setPierogi = () => {
	this.setState(prevState => ({
	  ...prevState,
	  name: 'Pierogi',
	}))

    this.setState({color: "blue"});
  }
  
  render() {
    return (
      <div>
        <h1>My {this.state.name}</h1>
        <button
          type="button"
          onClick={setPierogi}
        >Set pierogi</button>
      </div>
    );
  }
}
```

However, since **hooks** have been introduced, it became much easier and convenient to use and change **state** in **functional components**.

<div id='hooks'/>

## Hooks

**Hooks** are functions that let developers "hook into" **React** state and lifecycle features from function components. Hooks do not work inside classes.

**React** provides a few built-in hooks such as:
-  **useState** lets you add **React** state to function components.
-  **useEffect** lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
-  **useContext** - lets you read the context and subscribe to its changes. You still need a `<MyContext.Provider>` above in the tree to provide the value for this context.
- **useReducer**, **useMemo**,  **useRef**, and more...  

Now we can combine all the previous knowledge we learned so far and create a reusable hook to query the data from the server:

```ts
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function useGet<T>(url: string) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<Error>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios
      .get<T>(url)
      .then((response: any) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err: Error) => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, error, loading }
}

export default useGet
```

It is a good practice to put all your created **hooks** under the ``hooks/`` folder.

<div id='routing'/>

# Routing with react-router

**react-router** is a lightweight, fully-featured routing library for the **React**. **react-router** runs everywhere that **React** runs: on the web, on the server (using **Node.js**), and on **React Native**.
Installing **react-router** package is straightforward:
```bash
npm install --save react-router-dom
```

The **React Router API** is based on three components:

-   `<Router>`: The router that keeps the UI in sync with the URL.
-   `<Link>`: Renders a navigation link.
-   `<Route>`: Renders a UI component depending on the URL.

Importing router component from `react-router-dom` and use it to wrap the **App** component.

```ts
import React from 'react';
// ...
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<App  />
	</BrowserRouter>
);
```

Then we can declare multiple ``Routes`` for different components and ``Links`` to them:

```ts
// ...
import { Routes, Route, Link } from 'react-router-dom';
import Dishes from './views/Dishes/Dishes';
import Dish from './views/Dishes/Dish/Dish';

function App() {

	return (
	<div className="App-winter-campus">
      <Link to={'dishes'}>
        <button type="button">Dishes</button>
      </Link>
      <Link to={'dishes/1'}>
        <button type="button">Pierogi</button>
      </Link>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dishes" element={<Dishes/>} />
        <Route path="/dishes/:id" element={<Dish/>} />
      </Routes>
	</div>
	);
}
```

It is recommended to put your routes components under the views or pages folder so it is easy to follow how project is structured, especially for the bigger projects.

<div id='multilingual'/>

# Multilingual (i18next)

**i18next** is an internationalization-framework written in and for **JavaScript**.  It provides you with a complete solution to localize your product from web to mobile and desktop. The module provides multiple components to assert that needed translations get loaded or that your content gets rendered when the language changes.

Again simple installation:
```bash
npm install --save react-i18next i18next
```
After it's installed, we can set-up our internationalization configuration by creating `i18n.ts` file with following content:
```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
```

Where `translationX.json` looks like this:
```json
{
  "Dishes": "Posiłek",
  "Dumplings": "Pierogi",
  "Random dish": "Losowy posiłek",
  "Ingredients": "Składniki",
  "Recipe": "Przepis"
}
```

Now it's time to connect `i18n.ts` file to the **React** project by importing it inside  `index.ts` file.

```ts
import './i18n.ts';
```


After that, translations and language update is possible throughout the whole application by using `useTranslation` hook:
```js
import React from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
	const { t, i18n } = useTranslation();

	//Creating a method to change the language from the select box
	const changeLanguageHandler = (e) => {
	  const languageValue = e.target.value
	  i18n.changeLanguage(languageValue);
	}

  return (
    <div className="App">
    <h1>{t('Home')}</h1>
    <select onChange={changeLanguageHandler}>
       <option value="en" >English</option>
       <option value="pl" >Polish</option>
    </select>
    </div>
  );	
}
```

<div id='responsivness-component-libraries'/>

# Responsiveness and component libraries

The most popular modern mobile-first web component libraries:
- `Material UI`.
- `Bootstrap`.
- `Ant Design`.
- `Semantic UI`.

Encourage consistency across platforms, environments, and screen sizes by using uniform elements and spacing.

<div id='material-ui'/>

## Material UI

- **Easy to use.** Build beautiful UIs with ease.
- **Intuitive customization.** Components are as flexible as they are powerful.
- **High quality documentation.** Docs boast over 2,000 contributors.
- **Big community.** Accessibility is one of the highest priorities with every new feature.

Install **Material-UI** and it's icons is again very simple:
```bash
npm install --save @mui/material @emotion/react @emotion/styled  @mui/icons-material
```

<div id='responsiveness'/>

### Responsiveness

The **Material Design** responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. `Material Design's` responsive UI is based on a **12-column** grid layout.

 -   It uses  `CSS's Flexible Box module`  for high flexibility.
-   There are two types of layout:  `containers`  and  `items`.
-   Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
-   Items have padding to create the spacing between individual items.
-   There are five grid breakpoints: 
	- `xs`, extra-small: 0px.
	- `sm`, small: 600px.
	- `md`, medium: 900px.
	- `lg`, large: 1200px.
	- `xl`, extra-large: 1536px.

For example with as simple code as below we already have a responsive layout for different screens:
```ts
 <Grid container spacing={3}>
   {[1, 2, 3, 4].map((n: number, index: number) => (
     <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
       {n}
     </Grid>
   ))}
 </Grid>
```

<div id='theming'/>

### Theming

Changing the theme configuration variables is the most effective way to match `Material-UI` to your needs. The following sections cover the most important theme variables:

- Palette.
- Typography.
- Spacing.
- Breakpoints.
- z-index.
- Globals.

First we have to import **ThemeProvider** to our root component:
```ts
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
```

<div id='usetheme-hook'/>

### Accessing the theme with `useTheme` hook

You might need to access the theme variables inside your **React** components.
```ts
import { Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type AvatarProps = {
  name: string;
}

function Avatar({ name }: AvatarProps) {
  const theme = useTheme();

  return <Avatar sx={{ bgcolor: theme.palette.secondary.main }}>
    {name}
  </Avatar>
}
```

<div id='testing'/>

# Testing

Usually user interface testing takes less priority than backend testing, however, our team at `CERN` are trying to reach for 80% tests coverage for both frontend and backend.

**Create React App** uses **Jest** as its test runner.

**Jest** will look for test files with any of the following naming conventions:

-   Files with  `.ts`  suffix in  `__tests__`  folders.
-   Files with  `.test.ts`  suffix.
-   Files with  `.spec.ts`  suffix.

To run tests in your React application, you just have to run this command:

```bash
npm run test
```

**Jest** will launch in watch mode. Every time you save a file, it will re-run the tests, like how `npm start` recompiles the code.

Here is example of the simple test which checks if dish name was rendered:

```ts
const mockedDish: Dish = {
  name: 'Pierogi',
  ...,
}

test('renders dish name', () => {
  render(<DishCard dish={mockedDish} />);

  const dishName = screen.getByText(/Pierogi/i);
  expect(dishName).toBeInTheDocument();
});
```

<div id='building'/>

# Building

Separate components files let you focus on writing more modular chunks of code. When it’s time to move your app to production, having multiple **JavaScript** or **CSS** files isn’t ideal.

When a user visits your site, each of your files will require an additional **HTTP** request making your site slower to load. To remedy this, you can create a **“build”** of our app, which merges all your **CSS** files into one file, and does the same with **JavaScript**. 

When you are ready to build your application, call the following command:
```bash
npm run build
```
will create an optimized build of your app in the `build` folder. Now your app is compatected, has a very few files and is ready to be deployed.

<div id='migrating-existing-apps-to-react'/>

# Migrating existing applications to React

Typically, new **React** apps have a single `App` component at the very top. However, if you integrate **React** into an existing app, you might start bottom-up with a small component like `Button` and gradually work your way to the top of the view hierarchy.

Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps. A good rule of thumb is that if a part of your UI is used several times (`Button`, `Panel`, `Avatar`), or is complex enough on its own (`DishCard`, `FeedStory`, `Comment`), it is a good candidate to be extracted to a separate component.

<div id='migrating-cern-applications-to-React'/>

## Migrating CERN applications to React

The most difficult part is to correctly set-up **React** in the project that already uses different technology (plain **JavaScript**, **Handlebars**, **Polymer**, ...) as they might be using different way of building. Also information can flow in two directions - let's say from `Polymer` to `React` or from `React` to `Polymer`. So before moving many existing components to `React`, one should first configure that `React` files are included in build and figure it out how to communicate withi different technologies. 

Rules:
- All new UI developments should be done in `React`.
- If we are fixng a bug on the UI, consider moving component to `React`.
- At least  80% tests coverage.
- Responsive.
- Multi language.

<div id='from-polymer-to-react'/>

### Information flow from Polymer to React

As **React** needs root **HTML** element to render it's tree, put empty div tag where **React** element should rendered:
```html
<div id="individual-simulation-form"/>
```

Then function was created which calls global function with following parameters: element id, **React** element name and props:
```ts
formSubmit: function (event) {
  ...
}

renderSimulationForm: function (data) {
  const renderProps = {
    targetElementTag: 'simulation-element',
    formSubmitEvent: formSubmit,
    data,
  };

  window.renderComponent(
    document.getElementById('individual-simulation-form'),
    'individualSimulationsForm',
    renderProps)
},
```

Global function to render **React** elements looks like this:
```ts
declare global {
  interface Window {
    renderComponent: (container: HTMLElement, componentName: string, props: object) => void
  }
}

interface ComponentsMap {
  [key: string]: (props: object) => JSX.Element
}

window.renderComponent = function renderReact(container: HTMLElement, componentName: string, props: object) {
  const componentsMap: ComponentsMap = {
    individualSimulationsForm: (props: object) => (
      <IndividualSimulationForm
        formSubmitEvent={(props as IndividualSimulationFormProps).formSubmitEvent}
        targetElementTag={(props as IndividualSimulationFormProps).targetElementTag}
        personRecordId={(props as IndividualSimulationFormProps).personRecordId}
        simulationTypeChangeEvent={(props as IndividualSimulationFormProps).simulationTypeChangeEvent}
      />
    ),
    reportValidation: (props: object) => <ValidationReportPage {...props} />,
  }

  const root = ReactDOM.createRoot(container)
  root.render(<AppComponentWrapper>{componentsMap[componentName](props)}</AppComponentWrapper>)
}
```

<div id='from-react-to-polymer'/>

### Information flow from React to Polymer

For this we are passing **JavaScript** events to **React** from **Polymer**, then **React** simply can call these events with the data **Polymer** is expecting:
```ts
document.getElementsByTagName(targetElementTag)[0]?.dispatchEvent(
  new CustomEvent(formSubmitEvent, {
    detail: { 
        responseData: data,
        responseStatus: status,
        simulationType: simulationType
    },
  })
)
```


<div id='questions'/>

## Questions?

- What's your favourite Polish dish?

<div id='contacts-materials'/>

## Contacts and presentation materials

- jasmontas.lukas@gmail.com
- https://www.linkedin.com/in/lukasjasmontas/
- https://github.com/Saladinas/winter-campus
