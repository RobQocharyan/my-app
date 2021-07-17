import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { store } from "./Redux/store";
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'

function App() {

  return (
      <HashRouter>
       <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
        </Provider>
      </HashRouter>
   
  );
}

export default App;
