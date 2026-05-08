import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "#1e293b",
          padding: "25px",
          borderRadius: "20px",
          width: "320px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          🧮
          <br /><br /> Calculator
          <br />
          <br />
        </h1>

        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            height: "60px",
            marginBottom: "20px",
            fontSize: "2rem",
            textAlign: "right",
            borderRadius: "10px",
            border: "none",
            padding: "10px",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? calculate() : handleClick(btn)
              }
              style={{
                padding: "20px",
                fontSize: "1.2rem",
                border: "none",
                borderRadius: "10px",
                background: "#334155",
                color: "white",
                cursor: "pointer",
              }}
            >
              {btn}
            </button>
          ))}

          <button
            onClick={clear}
            style={{
              gridColumn: "span 4",
              padding: "15px",
              fontSize: "1.1rem",
              border: "none",
              borderRadius: "10px",
              background: "#ef4444",
              color: "white",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;