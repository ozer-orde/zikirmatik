'use client'

import Header from "@/components/Header";
import { useState } from "react";
import '@/styles/homepage.css'
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import TextField from '@mui/material/TextField';


export default function Home() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("Zikrinizi buraya yazabilirsiniz..");
  const [isEditing, setIsEditing] = useState(false);

  const arttir = () => {
    setCounter(counter + 1);
  }

  const azalt = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  }

  const sifirla = () => {
    setCounter(0);
  }

  const handleBlur = (event) => {
    setMessage(event.target.value || "Zikrinizi buraya yazabilirsiniz..");
    setIsEditing(false);
  };

  return (
    <div tabIndex={0} onKeyDown={(e) => {
      if (e.key === " ") {
        e.preventDefault();
        arttir();
      }
    }}>
      <Header />
      <div className="bodyBox">
        <div className="box">
          <div>
            <div className="zikirName">
              {isEditing ? (
                <TextField
                  id="outlined-basic"
                  label="Zikrinizi giriniz.."
                  variant="outlined"
                  autoFocus
                  onBlur={handleBlur}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleBlur(e);
                    }
                  }}
                />
              ) : (
                <button onClick={() => setIsEditing(true)}>{message}</button>
              )}
            </div>
            <div className="counter">
              {counter}
            </div>
          </div>
          <div className="effectButtons">
            <div className="minusButton" onClick={azalt}>
              <div className="minus">
                <span>Azalt</span>
                <FaArrowCircleDown />
              </div>
            </div>
            <div onClick={arttir} className="plus">
              <div className="plusButton">
                <span>Arttır</span>
                <FaArrowAltCircleUp />
              </div>
            </div>
          </div>
          <div onClick={sifirla} className="reset">
            <div className="resetButton">
              <span>Sıfırla</span>
              <BiReset />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
