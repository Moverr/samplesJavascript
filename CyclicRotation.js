function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
   
   
    if(A instanceof Array ){

    
    
    let count = 1;
    while(count <= K){
       
        A.reverse();
       
        let lastitem = A[0];
        A.reverse();
        A.splice(-1,1);
        A.unshift(lastitem);
   
    count ++;

    }

    return (A);
}
return 0;

}


let A = [];
let K = 3;

console.log(solution(A,K));