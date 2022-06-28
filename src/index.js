import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet, HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <title>Joshua Piper | SWE</title>
        <meta name="description" content="Joshua Piper's software engineering portfolio." />
        {/* <link rel="icon" href="Assets/favicon/favicon.ico" /> */}
        
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Joshua Piper | SWE" />
        <meta itemprop="description" content="Joshua Piper's software engineering portfolio." />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
