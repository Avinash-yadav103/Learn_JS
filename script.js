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

const loadScript =(src)=>{
  return new Promise(function(resolve,reject){
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => resolve(1);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
  });
}

let p1 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.min.js")
p1.then(() => console.log("Script loaded successfully bunny"))
  .catch(error => console.error("We got some error buddy" + error));

  



// Practice set 8 and exercise 3 
//Question 1
