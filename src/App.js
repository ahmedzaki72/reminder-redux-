import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminder from './components/reducer/reducer';
import Container from './components/container';



const store = createStore(reminder)

function App() {
  return (
    <Provider store={store}>
         <Container/>
    </Provider>
  );
}

export default App;
