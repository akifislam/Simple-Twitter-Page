import React from "react";
import Tweet from "./tweet";

function App() {
  return(
    <div className="app">
  
      <Tweet name = "Shoriful Islam" comment="Hello Hi, I am Sagor and I love to gym. " likes = "😂 1520"> </Tweet>
      <Tweet name = "Md. Ahanaf Arif Khan" comment= "Study hard to get CGPA 4.00" likes = "😂 1990"> </Tweet>
      <Tweet name = "Farjana Aktar" comment = "Ami biye korte chai !!!!! Ami Dayyyni" likes = "😂 100"> </Tweet>
    </div>
  );

}

export default App;