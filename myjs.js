// task 1 
function gcd(x,y) {
    if(y == 0) {
        return x;
    } else{
    return gcd(y,Math.round(x%y))}
}
var result = gcd(106, 16);
console.log(result);

//task 2
function sumOfDigits(n){
    if (n < 10){
        return n
    }else {
        return (n % 10) + sumOfDigits(Math.floor(n/10))
    }
}
var result2 = sumOfDigits(48437);
console.log(result2);


//task3

let factory = {
    facName : 'Volkswagen Wolfsburg Plant',
    calculateWorkload : function (){
        let array = [];
        for(i= 0; i< this.employeeWeeklyWorkload.length ; i++){
            array.push(this.employeeWeeklyWorkload[i].workload)
        }
        return array;
    },
    formatArray : function (name) {
        let array2 = [];
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].name == name){
                array2.name = name;
                let timeLeft = 5 - (this.employees[i].timeSpent);
                array2.timeLeft = timeLeft;
        
            }
            
        }
        return array2
    }
    
}
let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    
}

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", workload : 25 },{name : "Maria", workload : 28 },{name : "Dan", workload : 30 },{name : "Lorelai", workload : 31 }]
}

let result1 = factory.calculateWorkload.bind(workloadData);
console.log(result1());
let result2 = factory.formatArray.bind(factoryEmployees , 'sam');
console.log(result2());


// task 4

function checkIfEven(n)  {
    if (n == 0) return 'even' ;
    if (n == 1) return 'odd';
    
    return checkIfEven(n-2)
}
let x = checkIfEven(12);
console.log(x);



