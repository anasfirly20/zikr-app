import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import gambar from "./man-dua.png";
import { ArrowRepeat } from "react-bootstrap-icons";
import "animate.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("سُبْحَانَ ٱللَّٰهِ"); //arabic
  const [total, setTotal] = useState(0);
  const [begin, setBegin] = useState("Start Zikr");

  // for toastify
  const notify = () => {
    toast("Well done! You have completed a Zikr!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
      pauseOnFocusLoss: false,
      theme: "dark",
    });
  };

  return (
    <div>
      {/* <nav class="nav sticky-top bg-secondary pb-1 pt-1">
        <div class="container-fluid">
          <div class="navbar-brand">
            <img
              src={topLeft}
              height="50"
              className="animate__animated animate__bounce"
            ></img>
          </div>
        </div>
      </nav> */}
      <div className="App">
        <header className="App-header">
          <img src={gambar} className="App-logo" alt="logo" />
          <p>Total Zikr: {total}</p>
          <p>{word}</p>
          <p>{count}x</p>
          <button
            onClick={() => {
              setCount(count + 1);
              setTotal(total + 1);
              // condition to call toastify
              if (total === 99 - 1) {
                notify();
              }
              // condition for counter and for setWord
              if (count === 33) {
                setCount(0 + 1); // +1 so total and count are synchronized
                setWord("ٱلْحَمْدُ لِلَّٰهِ");
                if (word === "ٱلْحَمْدُ لِلَّٰهِ") {
                  setWord("ٱللَّٰهُ أَكْبَرُ");
                }
                if (word === "ٱللَّٰهُ أَكْبَرُ") {
                  setWord("سُبْحَانَ ٱللَّٰهِ");
                }
              }
              // condition for button to display "Lanjut Zikie"
              if (count > 0 - 1) {
                setBegin("Continue Zikr");
              }
            }}
            className="btn btn-primary btn-lg animate__animated animate__zoomInDown"
          >
            {begin}
          </button>
          {/* ArrowRepeat icon*/}
          <button
            onClick={() => {
              setCount(0);
              setTotal(0);
              setWord("سُبْحَانَ ٱللَّٰهِ");
              setBegin("Start Zikr");
            }}
            class="btn btn-warning btn-circle m-1 animate__animated animate__rotateIn animate__fast"
          >
            <ArrowRepeat size={20} />
          </button>
          <ToastContainer />
        </header>
      </div>
      <footer class="bg-dark text-lg-start">
        <div class=" p-3 text-white">
          Copyright © 2022 FaoTech. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default App;
