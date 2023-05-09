import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";

const App: React.FC = () => {
  // app fonc ıunda typnı  ":React.FC"  bu şekilde belirliyoruz
  const [todo, setTodo] = useState<string>(""); // hookların type ını <string> şeklinde tanımlıyoruz

  console.log(todo, "todo");

  return (
    <div className="App">
      <Input todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
