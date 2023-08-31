import React from "react";
import Header from "./components/Header";
import Apartments from "./components/Apartments";

function App() {
  return (
    <div>
      <Header></Header>
      <Apartments></Apartments>
      <div className="text-center mt-28 mb-7">
        <span className="text-zinc-500 text-sm font-medium">created by</span>
        <span className="text-zinc-500 text-sm font-semibold"> </span>
        <span className="text-zinc-500 text-sm font-bold underline"><a href="http://www.github.com/alxandrkgb">alxandrkgb</a></span>
        <span className="text-zinc-500 text-sm font-bold"> </span>
        <span className="text-zinc-500 text-sm font-medium">- devChallenges.io</span>
      </div>
    </div>
  );
}

export default App;