function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    if (A instanceof Array && A.length > 0) {

    A.sort();

  

        let number = A[0];
        let missingNumber = null;
        while(number <= A[A.length -1] ){
            
            let result = A.includes(number);
            if(result == false){
                missingNumber = number;
                break;
            }
            
            number = number +1;
        }

     return (missingNumber);
        
    }
}
 

let A = undefined;
//[2,3,1,5];
solution();