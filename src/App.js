import React, { useState } from "react";
import Input from "./components/Input";
import { FaUser } from "react-icons/fa";

function App() {
  const [billDollardsInput, setBillDollarsInput] = useState("$");
  const [selectedTip, setselectTip] = useState("");

  const handleSelectTip = (event) => {
    console.log(selectedTip, event.target.value);
  };

  const tips = [5, 10, 15, 20, 50];

  return (
    <main className=" bg-indigo-400 font-momo min-h-screen flex flex-col items center justify-normal last px-8">
      <div className="text-5xl font-bold mb-4 text-center"> TIPTOP CALC </div>

      <section className="bg-white block p4 text-justify">
        <input type="button" value="" />

        <h2 className="text-slate-550">Bill</h2>
        <input
          onChange={() => null}
          name="Bill"
          // value="billDollarsInput"
          type="text"
          placeholder="$"
        />
        <button type="button" onChange={() => null}></button>
        <br />
        <br />

        <div>
          <h2 className="text-slate-550">Select tip %</h2>
          <div className="grid ml:grid-cols-3 text-center border-2 p-25 w-25 mt4">
            {tips.map((item, index) => (
              <button
                className="text-center border-2 p-25 w-25 mt4"
                key={index}
                btn={item}
                type="text"
                placeholder="%"
                handleTip={function () {
                  return handleSelectTip(item);
                }}
              >
                {" "}
                {item}%{" "}
              </button>
            ))}
            
            <input
              className="text-center border p-2 w-25 mt4 "
              type="text"
              placeholder="CUSTOM"
            />
          </div>
          <br />
          <br />

          <h2 className="text-slate-550 border-2 "> Number of People </h2>
          <input onChange={() => null} name="Bill" type="text" placeholder="" />
          {/* <button type="button" onChange={() => null}></button> */}
          {/* 
          <button className= "text-center border-2 p-25 w-25 mt4"
                
              > </button> */}
          <div className="relative">
            <FaUser className="absolute top-2 left-2" />
            <input
              className="text-center border p-2 w-25 mt4 "
              type="text"
              placeholder="0"
            />
          </div>
        </div>
      </section>

      <section>


        
      </section>
    </main>
  );
}

export default App;
