/* eslint-disable no-undef */
import React, { useState } from "react";
import "../Components/FizzBuzz.css";
import {
  UncontrolledPopover,
  
  PopoverBody,
  Button,
} from "reactstrap";

export const Fizzbuzz = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  let arr = [];

  function inputan(e) {
    setInput((input = e.target.value));
  }

  function submit(e) {
    e.preventDefault();

    if (input === "") {
      alert("masukan angka");
    } else if (input > 1000) {
      alert("Nilai melebihi batas maksimum");
    } else {
      for (let i = 1; i <= input; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          arr.push("FizzBuzz");
        } else if (i % 3 === 0) {
          arr.push("Fizz");
        } else if (i % 5 === 0) {
          arr.push("Buzz");
        } else {
          arr.push(i);
        }
      }
    }
    setData((data = arr));
  }

  return (
    <div className="outer">
      <h1>Fizz Buzz</h1>
      <Button id="PopoverLegacy" type="button" color="success">
      Apa Itu Algoritma FizzBuzz?
      </Button>
      <UncontrolledPopover
        placement="bottom"
        target="PopoverLegacy"
        trigger="legacy"
      >
        
        <PopoverBody>
          Fizz Buzz adalah kata pertandingan grup untuk anak-anak untuk mengajarkan
          mereka tentang pembagian. Pemain bergiliran untuk menghitung secara
          bertahap, menggantikan setiap nomor yang dapat dibagi oleh 3 dengan kata
          "Fizz", lalu nomor yang dapat di bagi 5 dengan kata "buzz", sedangkan jika nomor tersebut dapat dibagi 3 dan 5 akan di ganti dengan kata "FizzBuzz".
        </PopoverBody>
      </UncontrolledPopover>
      <form onSubmit={submit}>
        <input
          type="text"
          value={input}
          onChange={inputan}
          placeholder="Masukan angka!"
        />
        <button type="submit">mulai!</button>
      </form>
      <div className="wrapper">
        {data.map((val, idx) => (
          <h3
            key={idx}
            style={{
              backgroundColor:
                val === "FizzBuzz"
                  ? "red"
                  : val === "Buzz"
                  ? "blue"
                  : val === "Fizz"
                  ? "yellow"
                  : "white",
            }}
          >
            {val}
          </h3>
        ))}
      </div>
    </div>
  );
};
