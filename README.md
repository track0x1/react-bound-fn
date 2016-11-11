React-Bound-Fn
=========================

A react.js helper function that returns an object with `object` and `method` properties so you can stub/spy with ease.

## Installation

React-Bound-Fn requires **React 0.14 or later.**

```
npm install --save react-bound-fn
```

React-Bound-Fn uses CommonJS-style requires, which assumes you are using a module bundler like Browserify or Webpack.

## Usage

```jsx
import rbf from 'react-bound-fn';

// In your mocha unit test...
const boundFunction = rbf(Object, 'myFunction');
sinon.spy(boundFunction.object, boundFunction.method);
```

### Why?

Finding how to stub or spy on React component methods has been very confusing. Originally it was by accessing `__reactAutoBindMap`, and then they changed it in v15.0 to `__reactAutoBindPairs`. To avoid any more headaches and make your life easier, just use `React-Bound-Fn` to get the object and method for you.

## License

ISC
