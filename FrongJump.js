function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    let jumps =0;
    if(X == undefined  ||  Y == undefined  ||  D == undefined ){
    return jumps;
    }
    let distanceBetween = (Y-X);
    let distanceCovered = D;
   
      jumps = distanceBetween/ distanceCovered;
      jumps = Math.ceil(jumps);
       
    return (jumps);
}


let X = 10; //start point
let Y = 85; //destination
let D = 30; // frong jumps

(solution(X, Y,D));