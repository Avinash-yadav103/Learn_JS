// first.classList.toggle('red');

// if(className == 'login'){
//     login.classList.toggle('login');
//     login.innerHTML = 'Logout';
// }
// else{
//     login.classList.toggle('logout');
//     login.innerHTML = 'Login';
// }


// function logout(login) {
//     login.classList.toggle('logout');
//     login.innerHTML = 'Login';
// }


//Chapter 9
// callback functions
// function loadScript(src,callback){
//   var script = document.createElement('script');
//   script.src = src;
//   script.onload = function(){
//     console.log("Script Loaded with src " + src);
//     callback(null, src);
//   }
//   script.onload = function(){
//   console.log("Script got some error " + src);
//   callback(error, src);
//   }
  
//   document.body.appendChild(script);
// }

// function hello(error, src){
//   if(error){
//     console.log(error);
//     return
//   }
//   alert("Hello World " + src);

// }

// function goodmorning(){
//   alert('Good morning');
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js", hello);

//Promise
// let promise = new Promise(function(resolve , reject){
//   alert("Hello in promise");
//   resolve(56);
// })

// console.log("Hello one")
// setTimeout(function(){
//   console.log("Hello in 2 seconds")
// },2000)


// console.log("My name is " + "Hello three")

// let isLoggedIn = false;

// function toggleLogin() {
//   isLoggedIn = !isLoggedIn;
//   const loginButton = document.getElementById('loginButton');

//   if (isLoggedIn) {
//     // User is logged in
//     loginButton.textContent = 'Logout';
//     loginButton.classList.add('logout');
//   } else {
//     // User is logged out
//     loginButton.textContent = 'Login';
//     loginButton.classList.remove('logout');
//   }
// }

// //Promise, then and catch
// let p1 = new Promise(function(resolve, reject){
//   console.log("Promise is pending");

//   setTimeout(()=>{
//     console.log("I am a promise and I am fullfilled");
//     resolve("I am a new resolve")
//   }, 2000)
// })

// let p2 = new Promise(function(resolve, reject){
//   console.log("Promise is pending");

//   setTimeout(()=>{
//     // console.log("I am a promise and I am fullfilled");
//     reject(new Error("I am a new Error"))
//   }, 2000)
// })
// // //TO get the value
// // p1.then((value)=>{
// //   console.log(value);
// // })
// // //To get the error
// // p2.catch((error)=>{
// //   console.log("Some error in p2"+ error)
// // })

// //Error catching
// p2.then((value)=>{
//   console.log(value);
// },(error)=>{
//   console.log(error);
// })

//Promise Chaining
// .then().then().then()
// because we want one output of promise with the help of then and the output of then to next then 

// let p1 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     console.log("Resolved after 2 sec ");
//     resolve(45);
//   },2000)

// })

// p1.then((value)=>{
//   console.log(value);
//   let p2 = new Promise((resolve,reject)=>{
//     resolve("Promise 2")
//   })
//   return p2;
// }).then((value)=>{
//   console.log("We are done "+ value);

// })


// function hello(error, src){
//   if(error){
//     console.log(error);
//     return
//   }
//   alert("Hello World " + src);

// }

// function goodmorning(){
//   alert('Good morning');
// }

// const loadScript = ()=>{
//   let script = ("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js");
//   let p1 = new Promise(function(resolve,reject){
//     resolve(script);
//     console.log("Script resolved " + script)
//   })
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js");

// const loadScript =(src)=>{
//   return new Promise(function(resolve,reject){
//     let script = document.createElement('script');
//     script.type = "text/javascript";
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => resolve(1);
//     script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
//   });
// }

// let p1 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js")
// p1.then(() => console.log("Script loaded successfully bunny"))
//   .catch(error => console.error("We got some error buddy" + error));

  
// //The promise API
// let p1 = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve("Promise 1 resolved");
// }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve("Promise 2 resolved");
// }, 1000);
// });

// let p3 = new Promise((resolve, reject) => {
// setTimeout(() => {
//   resolve("Promise 3 resolved");
// }, 1000);
// });

// // p1.then((value) => console.log(value));
// // p2.then((value) => console.log(value));
// // p3.then((value) => console.log(value));
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//   console.log(value)
// })

// let promise_all_set = Promise.allSettled([p1,p2,p3])
// promise_all_set.then((value)=>{
//   console.log(value)
// })

// let promise_race = Promise.race([p1, p2, p3]);
// promise_race.then((value) => {
//   console.log("Promise race resolved with value:", value);
// }).catch((error) => {
//   console.error("Promise race rejected with error:", error);
// });

// // Using Promise.resolve
// let resolvedPromise = Promise.resolve("This is a resolved promise");
// resolvedPromise.then((value) => {
//   console.log("Resolved:", value);
// });

// // Using Promise.reject
// let rejectedPromise = Promise.reject(new Error("This is a rejected promise"));
// rejectedPromise.catch((error) => {
//   console.error("Rejected:", error.message);
// });

//Async await functions
// async function avinash() {
//   console.log("Avinash function started"); //2

//   let delhiWeather = new Promise((resolve, reject) => {
//     console.log("Fetching Delhi weather...");  //3
//     setTimeout(() => {
//       console.log("Delhi weather fetched");   // 7
//       resolve("27 deg");
//     }, 1000);
//   });

//   let bangaloreWeather = new Promise((resolve, reject) => {
//     console.log("Fetching Bangalore weather...");  //4
//     setTimeout(() => {
//       console.log("Bangalore weather fetched");
//       resolve("21 deg");
//     }, 3000);
//   });

//   console.log("Waiting for Delhi weather...");   //5
//   let delhiW = await delhiWeather;
//   console.log("Delhi weather resolved:", delhiW);  //8

//   console.log("Waiting for Bangalore weather...");  // 9
//   let bangW = await bangaloreWeather;
//   console.log("Bangalore weather resolved:", bangW);  // 10

//   console.log("Returning weather data...");  //11
//   return [delhiW, bangW];
// }

// const cherry = () => {
//   console.log("Hey I am not waiting");  //6
// }; 

// console.log("Welcome to weather control bureau"); //1
// avinash().then((weatherData) => {
//   console.log("Weather data received:", weatherData); //12
// });
// cherry();

// Practice set 8 and exercise 3 
//Question 1 
