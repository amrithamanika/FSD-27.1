// setInterval(() => {
//   console.log("Hello");  
// },3000);


// setInterval(() => {
//     console.log("Hai");
// },4000);

// setTimeout(() => {
//     console.log("Hai");
// },1000);

// setTimeout(() => {
//     console.log("Welcome");
// }, 2000);

// setTimeout(() => {
//     console.log("Good morning");
// }, 3000);




// callback
// var btn = document.getElementById("btn1")
// btn.addEventListener("click",()=>{
//     alert("button clicked")
// })

// function add1(a,b) {
//     var sum=a+b
//     return sum 
// }

// function display(val) {
//   document.getElementById("text").innerText=`The sum is = ${val}`   
// }

// display(result)
// var result = add1(9,10)



// function mult(a,b) {
//     var mul=a*b
//     return mul 
// }

// function display(val) {
//   document.getElementById("text").innerText=`The product is = ${val}`   
// }

// var result = mult(9,12)
// display(result)

// callback function 
// function add1(a,b,callback){
//     var sum=a+b
//     callback(sum)
// }

// function display(val){
//     document.getElementById("text").innerText=`the sum is ${val}`
// }

// add1(10,45,display)


// promises
// function add1(a,b){
//     return promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Sum is not greater than 10")
//         }
//     })

// }
// add1(10,20)

//     promise.then((val)=>{
//         document.getElementById("text").innerText=`the sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("text").innerText=`The error message is ${err}`
//     })
    




// function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("sum is not greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("text").innerText=`the sum is ${val}`
// })
// .catch((err)=>{
//     document.getElementById("text").innerText=`the error message is ${err}`
// })
// }
// add1(50,13)



// function add2(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sub = a-b
//         if(sub>10){
//             resolve(sub)
//         }
//         else{
//             reject("Difference is not greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("p1").innerText=`the difference is ${val}`
// })
// .catch((err)=>{
//     document.getElementById("p1").innerText=`the error message is ${err}`
// })
// }
// add2(50,13)




// function add3(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var mul = a*b
//         if(mul>10){
//             resolve(mul)
//         }
//         else{
//             reject("Multiplication is not greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("p2").innerText=`the product is ${val}`
// })
// .catch((err)=>{
//     document.getElementById("p2").innerText=`the error message is ${err}`
// })
// }
// add3(50,13)




// function add4(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var div = a/b
//         if(div>10){
//             resolve(div)
//         }
//         else{
//             reject("Division is not greater than 10")
//         }
//     })
// promise.then((val)=>{
//     document.getElementById("p3").innerText=`the division is ${val}`
// })
// .catch((err)=>{
//     document.getElementById("p3").innerText=`the error message is ${err}`
// })
// }
// add4(500,5)





// async await
// async function by default returns promise
// await only excute after async

// async function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum= a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("text").innerHTML=`The sum is ${ans}`   
// }
// add1(10,2)


// async function add2(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sub= a-b
//         if(sub>10){
//             resolve(sub)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("p1").innerHTML=`The difference is ${ans}`
// }
// add2(15,2)

// async function add3(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var mul= a*b
//         if(mul>10){
//             resolve(mul)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("p2").innerHTML=`The product is ${ans}`   
// }
// add3(10,2)

// async function add4(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var div= a/b
//         if(div>10){
//             resolve(div)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("p3").innerHTML=`The division is ${ans}`   
// }
// add4(100,2)


function ajaxcall(){
   
    
    var xhttp = new XMLHttpRequest();
   
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true)
   

    xhttp.send();

xhttp.onreadystatechange = function(){
    let promise = new Promise((resolve,reject)=>{
        if(this.readyState==4 && this.status ==200){
            resolve("it is done")
        }
    })
    promise.then((val)=>{
        document.getElementById("text").innerHTML=`The result is ${val}`
    })
}       
}
ajaxcall()

