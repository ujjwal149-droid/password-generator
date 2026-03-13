import React, { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import Chip from "./components/Chip";
import PasswordInput from "./components/PasswordInput";
import PasswordRecord from "./components/PasswordRecord";
import Slider from "./components/Slider";

function App() {
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [lowercaseAllowed, setLowercaseAllowed] = useState(true);
  const [uppercaseAllowed, setUppercaseAllowed] = useState(true);
  const defaultLength = 8;
  const [length, setLength] = useState(defaultLength);
  const [history, setHistory] = useState([]);
  const [password, setPassword] = useState("");

  // generate the password
  const generatePassword = () => {
    if (
      !(
        numbersAllowed ||
        symbolsAllowed ||
        uppercaseAllowed ||
        lowercaseAllowed
      )
    ) {
      alert("You must allow atleast one type of characters!");
      return;
    }
    let pass = "";
    let possibleChars = "";

    if (numbersAllowed) possibleChars += "1234567890";
    if (symbolsAllowed) possibleChars += "!@#$%^&*()~`?><";
    if (uppercaseAllowed) possibleChars += "QWERTYUIOPASDFGHJKLZXCVBNM";
    if (lowercaseAllowed) possibleChars += "qwertyupioasdfghjklzxcvbnm";

    // pick random char from possible chars
    for (let i = 0; i < length; i++) {
      let c = possibleChars[Math.floor(Math.random() * possibleChars.length)];
      pass += c;
    }

    setPassword(pass);
    updateHistory(pass);
  };

  const updateHistory = (pass) => {
    const currentDate = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    const newRecord = { id: Date.now(), password: pass, date: formattedDate };
    setHistory((prev) => [...prev, newRecord].slice(-5));

    console.log(history);
  };

  const copyPassword = (pass) => {
    navigator.clipboard.writeText(pass);
  };

  return (
    <div className="min-h-screen py-10 px-6 md:px-10 w-full max-w-7xl mx-auto flex flex-col justify-center">
      <h1 className="text-[#F8EF00] mb-10 md:mb-16 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
        PASSWORD <br /> GENERATOR
      </h1>

      <div className="flex flex-col gap-y-12 lg:flex-row justify-between lg:gap-x-30">
        {/* Generation area */}
        <div className="w-full lg:w-[45%] flex flex-col gap-y-6">
          <PasswordInput value={password} onRefresh={generatePassword} />
          {/* Copy button */}
          <Chip onCopy={() => copyPassword(password)} />

          {/* Slider */}
          <Slider defaultValue={defaultLength} onChange={setLength} />

          {/* Letter Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
            <Checkbox
              text={"Uppercase letters"}
              id="uppercase"
              onChange={() => setUppercaseAllowed(!uppercaseAllowed)}
              isChecked={uppercaseAllowed}
            />
            <Checkbox
              text={"Lowercase letters"}
              id="lowercase"
              onChange={() => setLowercaseAllowed(!lowercaseAllowed)}
              isChecked={lowercaseAllowed}
            />
            <Checkbox
              text={"Numbers"}
              id="numbers"
              onChange={() => setNumbersAllowed(!numbersAllowed)}
              isChecked={numbersAllowed}
            />
            <Checkbox
              text={"Symbols"}
              id="symbols"
              onChange={() => setSymbolsAllowed(!symbolsAllowed)}
              isChecked={symbolsAllowed}
            />
          </div>
        </div>

        {/* History area */}
        <div className="w-full lg:w-[45%]">
          <h2 className="text-white mb-6 md:mb-8 text-lg sm:text-xl font-bold tracking-widest uppercase">
            Password History
          </h2>
          <div className="flex flex-col-reverse gap-y-4 sm:gap-y-5">
            {history.length && <p onClick={() => setHistory([])} className="text-[#F8EF00] text-left cursor-pointer hover:opacity-70 transition-opacity mt-2">
              Clear history
            </p>}
            {!history.length && <p className="text-[#F8EF00] text-left cursor-pointer hover:opacity-70 transition-opacity mt-2">
              No data
            </p>}
            {history.map((record) => (
              <PasswordRecord
                key={record.id}
                value={record.password}
                date={record.date}
                onCopy={copyPassword(record.password)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-6 border-t border-white/10 flex flex-wrap gap-4 justify-center sm:justify-start items-center text-xs text-[#FAFAFA] tracking-widest uppercase">
        <span className="opacity-60 hover:opacity-100 transition-opacity duration-200">
          Ujjawal Tyagi
        </span>
        <span className="hidden sm:inline opacity-30">|</span>
        <a
          href="https://github.com/ujjwal149-droid"
          target="_blank"
          rel="noopener noreferrer"
          className="
          relative opacity-60 hover:opacity-100 hover:text-[#F8EF00]
          transition-all duration-200
          after:content-[''] after:absolute after:left-0 after:-bottom-0.5
          after:w-0 after:h-px after:bg-[#F8EF00]
          after:transition-all after:duration-300
          hover:after:w-full
        "
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default App;
