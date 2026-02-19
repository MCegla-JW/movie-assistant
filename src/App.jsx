import { useState } from "react";
import Markdown from "react-markdown";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);

    const backendUrl = import.meta.env.VITE_BACKEND || 'http://127.0.0.1:8000'

    try {
      const res = await fetch(`${backendUrl}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      });
      if (!res.ok) {
        throw new Error("Something went wrong.");
      }
      const result = await res.json();
      setResponse(result.response);
    } catch (error) {
      console.error(error);
      setResponse("Something went wrong");
    }
    setLoading(false);
  };

  const handleClear = () => {
    setUserInput("");
    setResponse("");
  };
  return (
    <>
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          fontFamily: "Arial, sans-serif",
          padding: "0 20px",
        }}
      >
        <h1 style={{ color: "#dceaeb" }}> 🎬 Movie Night Suggestion 🎬 </h1>
        <label
          style={{ display: "block", marginBottom: "10px", color: "#dddbdb" }}
        >
          What movie should I watch next:{" "}
          <textarea
            style={{
              width: "100%",
              height: "100px",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              resize: "vertical",
              boxSizing: "border-box",
              marginBottom: "10px",
              marginTop: "10px",
            }}
            name="input"
            placeholder="Enter your prompt here"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "#0961e5",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
            disabled={loading || !userInput}
            type="button"
            onClick={handleGenerate}
          >
            {loading ? "Loading..." : "Generate"}
          </button>
          <button
            style={{
              backgroundColor: "#796e65ee",
              color: "white",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "6px",
              cursor: "pointer",
              margin: "10px",
            }}
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
        </label>
        {response && (
          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "6px",
              color: "#131010",
            }}
          >
            <h3 style={{ marginTop: 0, color: "#131010" }}>Response</h3>
            <Markdown>{response}</Markdown>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
