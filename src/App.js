import "./App.css";
import { Header } from "./MyComponents/Header";
import Loading from "./MyComponents/Loading";
import { Body } from "./MyComponents/Body";
import backgroundImage from "./background2.gif";
import React, { useState, useEffect } from "react";
import { Footer } from "./MyComponents/Footer";
function App() {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundColor: "#f0f0f0",
    transition: "filter 1s ease",
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some heavy operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when data is ready
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading /> // Show the loading animation while data is loading
      ) : (
        <div style={divStyle}>
          <Header />
          <Body />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
