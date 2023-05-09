function App() {
  let name: string = "ramazan";
  let age: number = 26;
  let done: boolean = true;
  let trial: number | string = "deneme"; //bureda any de kullanabiliriz
  //anlammı ben buna ne string nede number demek istemiyorum
  //yada bu şekilde de kullanabilirsiniz number | string
  // ----------------------------------1---------------------

  // interface ile type aynı şey sadece kullanımları farklı

  interface obj {
    name: string;
    age: number;
    done?: boolean; // buradaki ? işareti opsiyonel demek
    //yani kullanada bilirm kullanmayada bilirm
  }
  interface objTwo extends obj {
    accept?: boolean;
  }

  // type obj= {
  //   name: string;
  //   age: number;
  //   done?: boolean; // buradaki ? işareti opsiyonel demek
  //   //yani kullanada bilirm kullanmayada bilirm
  // }
  // type objTwo extends obj ={
  //   accept?: boolean;
  // }

  let obj: objTwo = {
    name: "ramazan",
    age: 26,
  };

  // -----------------------------------------2----------------------
  return (
    <div className="App">
      {name + " - " + age}
      <br />
      {done}
      <br />
      {trial}
    </div>
  );
}

export default App;
