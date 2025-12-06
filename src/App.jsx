import React from "react";

const App = () => {
  
  const user_1 = JSON.parse(localStorage.getItem("user"));
  console.log(user_1);
  
  const user = {
    username: "Girish",
    age: 34,
    city: "Gwalior",
  };

  localStorage.setItem("user", JSON.stringify(user));
  return <div>App</div>;
};

export default App;
