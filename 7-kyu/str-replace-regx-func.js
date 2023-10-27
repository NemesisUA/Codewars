/*
~~ is like Math.floor()
~~(Math.random()*100)  - returns [0 ... 99]

https://www.codewars.com/kata/5735956413c2054a680009ec/javascript
Task
Your task is to generate a random verification code. In accordance with the following rules:

the code length should be 8;
The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".
The 3rd-6th characters should be four numbers.
the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

Some valid verification code examples:
AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
*/

function rndCode(){  
    var p1 = 'ABCDEFGHIJKLM';
    var p2 = '0123456789';
    var p3 = '~!@#$%^&*';
    return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');  
}

// 1kyu IevgenT
let rndCode =(f= ([s]) => s[~~(s.length * Math.random``)])=>
  `aa0000~~`.replace(/a/g, i => f`ABCDEFGHIJKLM`)
            .replace(/0/g, i => f`0123456789`)
            .replace(/~/g, i => f`~!@#$%^&*`)
