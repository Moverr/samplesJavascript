
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
  
    let binaryString = covertToBinary(N);
    let binaryArray = binaryString.split("");

    
    let binaryStart = 0;
    let binaryGap = 0;
    
    let binaryGapArray = Array();
   
    let count = 0;
    while(count < binaryArray.length ){

        if(binaryArray[count] == 1){
         
            if(binaryStart == 1){
                binaryGapArray.push(binaryGap);
                binaryGap = 0;
                binaryStart = 1;
                
            }else{
                binaryStart =  binaryArray[count];  
            }
           
        }

        else if(binaryStart == 1 && binaryArray[count] == 0 ){
            binaryGap = binaryGap + 1;
        }

        count ++;
    }
    binaryGapArray.sort().reverse();

    if(binaryGapArray.length > 0 ){
        return binaryGapArray[0];
    }else{
        return 0
    }
  


}

function covertToBinary(N){
     
   let result = N.toString("2");
   return result;
}



let N = 32;

solution(N)