// let message1: string = "hello world";
// console.log(message1);

// const h1=document.createElement("h1")
// h1.textContent = message1
// document.body.appendChild(h1)

// ----------------------------------------------

// const reversedText = (text: string) => {
//   //  if(typeof text !== "string"){
//   //      throw new Error("hatali mesaj")
//   //  }
//   return text.split("").reverse().join("");
// };
// console.log(reversedText("ramazan"));


// ----------------------------------------------

 function getProduct(id) {
   return {
     id,
     name: "urun #" + id,
     price: 55,
   };
 }
 const products = getProduct(1);
