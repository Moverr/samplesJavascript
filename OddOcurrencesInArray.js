function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A instanceof Array && A.length > 0) {


        cycleArray(A);
    }
}


function cycleArray(A) {
   
    let ArrayIndexes = Array();
    let count = 0;
    while (count < A.length) {
   
        if (ArrayIndexes.length > 0) {
            for (let index = 0; index < ArrayIndexes.length; index++) {
                if (A[ArrayIndexes[index]] == A[count]) {

                    let newArray = Array();
                    for(let index2 = 0; index2 < A.length; index2 ++){
                        if(index2 == ArrayIndexes[index] || index2 == count ){
                            continue;
                        }
                        newArray.push(A[index2]);
                    }

                  
                    
                    console.log(newArray);

                     
                    return cycleArray(newArray); 
                }else{
                    console.log("----PINK------");
                    console.log(A);
                }
            }
        }
        // console.log(count);

        ArrayIndexes.push(count);
        
           
        
        count = count + 1;
    }

    console.log("Afressh");
    console.log(A);
    


}


let A = [9, 3, 9, 3, 9, 7, 9];
solution(A);

