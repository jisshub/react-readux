# What is React and Redux ?

![](./screenshot/what_is_react.jpg)

## Redux ?

![](./screenshot/image-1.jpg)

# how react works ?

- v create components for diff. parts of our application.
  for example, component for navbar, search box, footer...
- job of react is to take these components and inject them in to the DOM. thus v can see them on the webpage.

![](./screenshot/image-2.jpg)

## how does REACT do this ?

- REACT takes all these components and create a js representation of the DOM. also called _Virtual DOM_.
- REACT take this _Virtual DOM_ and renders it to the browser. and browser then creates an actual DOM based on this _Virtual DOM_. thats how v see the components.
- every time v make a change in any of theses component, for eg; change ui state of the components, data inside this components. REACT look at that change and updates the DOM in the browser. this happens fast bcose of _Virtual DOM_.

![](./screenshot/image-3.jpg)

- for every change a new Virtual DOM is created. and that new Virtual DOM is compared with old one. and it knows exaclty where to update those new changes in the DOM. so it only updates that part.

![](./screenshot/image-4.jpg)

## Components and Templates

![](./screenshot/image-5.jpg)

---

# React SetUp with CDN

[React CDN Link](https://reactjs.org/docs/cdn-links.html)

or

add below line of code to the index.html file

```js
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

_both lines of code is only responsible for development._

**install extensions in vs code**

1. ES7 React/Redux/GraphQL/React-Native snippets
2. Babel JavaScript

---

# React components

## how to build a react component (Class Based Component)

- Create a class that extends from React.Component library. this class represents the component.
- Class Based component must have a render function that used to render our template to an html element.
- Inside a render function, return JSX template (JSX allows us to write html code inside JavaScript).

  1. JSX allows only one root element.
  2. Use className attribute instead of class.

- next v have to render this _App component_ to _div element_.
- use **ReactDom.render()** function for this.
- Inside the function, v pass 2 argument, one is component and other is element to which the component to be rendered.

**index.html**

```html
<body>  
  <div id="app"></div>

  <script>
    class App extends React.Component {
      render() {
        return (
          <div className='app-content'>
            <h1>Hey Ninjas</h1>
          </div>
        );
      }
    }
    ReactDOM.render(<App />, document.getElementById('app'));
  </script>
</body>
```

- But it doesnt works since JSX is not supported in the browser. throws error im console.

```console
Uncaught SyntaxError: Unexpected token '<'
```

- So we have to transpile this code to something that browser supports.
- v so this using Babel. https://babeljs.io/setup#installation

- add this two scripts

```js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">
    // component
</script>
```

- now when v inspect element, can see _App component_ nested inside the div element.

---

### Outputting Dynamic contents inside Component

```html
<script type="text/babel">
  class App extends React.Component {
    render() {
      return (
        <div className='app-content'>
          <h1>Hey Ninjas</h1>
          <p>{Math.random()}</p>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
</script>
```

- a random number is shown every time page reloads.

---

# Component State

## Theory

![](./screenshot/image-6.jpg)

**Example: Shopping Cart Component**

```js
{
  item: [
    { name: 'item-one', price: 44 },
    { name: 'item-two', price: 64 },
  ];
}
```

- Above javascript object is a _state_ of _Shopping Cart Component_.

- Updates the state when v add a new item to shopping cart.

```js
{
  item: [
    { name: 'item-one', price: 44 },
    { name: 'item-two', price: 64 },
    { name: 'item-three', price: 68 },
  ];
}
```

- Using _state_ to o/p contents inside the component dynamically.

- Changes made in state r reflected on template. Thus it is dynamic.

---

## Adding State to our App Component

**index.html**

```html
<script type="text/babel">
  class App extends React.Component {
    state = {
      name: 'Bale',
      age: 45,
    };
    render() {
      return (
        <div className='app-content'>
          <h1>Hey Ninjas</h1>
          <p>
            Name is: {this.state.name} with age: {this.state.age}
          </p>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
</script>
```

- v add a _state_ object with in our component.

- later render them in template. As state changes rendered content in template changes.

---

# React Dev Tools

- Install react dev tools extension on chrome.

  [React Dev Tools Link](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

- On Updating the state in Components tab in React Dev tools, cooresponding changes dynamically reflected in the template as well.

![](./screenshot/screen-1.jpg)

![](./screenshot/screen-2.jpg)

---

# DOM Events

## Click Event

- define a function in the component. pass an event object e.

- later, V set a reference of the function in the button element. On clicking button, it finds that reference and fires it.

- Note: V are not invoking the function in the button, since that will invoke the function straight when the page loads.

```html
<script type="text/babel">
  class App extends React.Component {
    state = {
      name: 'Bale',
      age: 45,
    };
    handleClick(e) {
      console.log(e.target);
    }
    render() {
      return (
        <div className='app-content'>
          <h1>Hey Ninjas</h1>
          <p>
            Name is: {this.state.name} with age: {this.state.age}
          </p>
          <button onClick={this.handleClick}>Click Me</button>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
</script>
```

- _handleClick_ is the function to be fired on clicking the button. v set reference to this function using _this_ keyword.

## MouseOver Event

```html
<script type="text/babel">
  class App extends React.Component {
    state = {
      name: 'Bale',
      age: 45,
    };
    handleClick(e) {
      console.log(e.target);
    }
    handleMouseOver(e) {
      console.log(e.target);
    }
    render() {
      return (
        <div className='app-content'>
          <h1>Hey Ninjas</h1>
          <p>
            Name is: {this.state.name} with age: {this.state.age}
          </p>
          <button onClick={this.handleClick}>Click Me</button>
          <button onMouseOver={this.handleMouseOver}>Hover Me</button>
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('app'));
</script>
```

# Changing State 

