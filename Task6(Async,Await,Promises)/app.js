//?synchronous
// console.log("I")

// console.log("Eat ")

// setTimeout(()=>{
//     console.log("Ice Cream")

// },3000)
// console.log("with a")

// console.log("spoon")

//!Call Backs
// function one(call_two){
//     console.log("Step 1 complete. please call step 2")
//     call_two()
// }

// function two(){
//     console.log("Step 2")
// }

// one(two)

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple", "orange", "mango"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order = (Fruit_Name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_Name]} was selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log("the fruit has been chopped");
//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//         setTimeout(() => {
//           console.log("the machine was started");

//           setTimeout(() => {
//             console.log(`ice cream was placed on ${stocks.holder[0]}`);
//           }, 2000);

//           setTimeout(() => {
//             console.log(`${stocks.toppings[0]} was added as toppings`);
//             setTimeout(() => {
//               console.log("serve ice cream");
//             }, 2000);
//           }, 3000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };
// order(0, production);

//!Promises
// let is_shop_open = true;

// let order=(time,work)=>{
//     return new Promise((resolve,reject)=>{

//       if(is_shop_open){
//         setTimeout(() => {
//           resolve(work())
//         }, time);
//     }

//     else{
//     reject(console.log("shop is closed"))
//     }
//   })
// }


// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//   return order(0000,()=>console.log("production has started"))
// })


// .then(()=>{
//   return order(2000,()=>console.log("the fruit has been chopped"))
// })


// .then(()=>{
//   return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
// })


// .then(()=>{
//   return order(1000,()=>console.log("the machine was started"))
// })


// .then(()=>{
//   return order(2000,()=>console.log(`ice cream was placed on ${stocks.holder[0]}`))
// })


// .then(()=>{
//   return order(3000,()=>console.log(`${stocks.toppings[0]} was added as toppings`))
// })


// .then(()=>{
//   return order(2000,()=>console.log("serve the ice cream"))
// })


// .catch(()=>{
//   console.log("Customer left")
// })


// .finally(()=>{
//   console.log("day ended, shop is closed")
// })

//! Async Await
let is_shop_open = true;

// let toppings_choice=()=>{

//   return new Promise((resovle,reject)=>{
//     setTimeout(() => {
//       resovle(console.log("which topping would you like?"))
//     }, 3000);
//   })
// }
// async function kitchen(){
// console.log("A")
// console.log("B")
// console.log("C")
// await toppings_choice()
// console.log("D")
// console.log("E")
// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking orders from customers")

function time(ms){
  return new Promise((resovle,reject)=>{
      if(is_shop_open){
        setTimeout(resovle,ms)
      }
      else{
        reject(console.log("shop is closed"))
      }
  })
}

async function kitchen(){
    try{
      await time(2000)
      console.log(`${stocks.Fruits[0]} was selected`)

      await time(0000)
      console.log("Start the Production")

      await time(2000)
      console.log("cut the fruit")

      await time(1000)
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

      await time(1000)
      console.log("start the machine")

      console.log(`ice cream was placed on ${stocks.holder[0]}`)

      await time(3000)
      console.log(`${stocks.toppings[0]} was selected`)

      await time(2000)
      console.log("serve ice cream")
    }
    catch(error){
      console.log("Customer left",error)
    }
    finally{
      console.log("day ended, shop is closed")
    }
}

kitchen()