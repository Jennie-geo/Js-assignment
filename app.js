let data = [ 
    {id:1,
   principal:2500, 
   time:1.8
   },
   {id:2,
   principal:1000, 
   time:5
   },
   {id:3,
   principal:3000, 
   time:1
   },
   {id:4,
   principal:2000, 
    time:3
   }
];
      //console.log(data);
function interestCalculator(array) { 
   if (principal >= 2500 && time > 1 < 3) {
       console.log("rate = 3");
   }
    else if  (principal >= 2500 && time >= 3) {
       console.log("rate = 4");
   }
    else if (principal < 2500 || time <= 1) {
       console.log("rate = 2");
   }
  else {
   console.log("rate = 1");
}
   
}; 
 // calculating the interest of each individual. 
       //for interest1
let interest = "";
function interestCalculation(principal, time, rate,){ 
   console.log(principal * time * rate /100)
} 
interest = interestCalculation(2500 , 1.8, 3)

    //for interest2 interest2:{
let interest2 = "";
function interestCalculation(principal, time, rate,){ 
   console.log(principal * time * rate /100)
} 
interest2 = interestCalculation(1000 , 5, 4)
     //for interest3 interest3:{
let interest3 = "";
function interestCalculation(principal, time, rate,){ 
   console.log(principal * time * rate /100)
} 
interest3 = interestCalculation(3000 , 1, 2)
//for interest4  interest4:{
let interest4 = "";
function interestCalculation(principal, time, rate,){ 
   console.log(principal * time * rate /100)
} 
interest4 = interestCalculation(2000 , 3, 1)

// calculating an array of object called "interestData"

  const interestData = [
   {
   principal:2500, 
   time:1.8,
   rate:3,
   interest:135
   },
   {
   principal:1000, 
   time:5,
   rate:4,
   interest:200
   }, 
   {
   principal:3000, 
   time:1,
   rate:2,
   interest:60
   },
   {
   principal:2000, 
   time:3,
   rate:1,
   interest:60
   }
];
    console.log(interestData);
 return interestData;