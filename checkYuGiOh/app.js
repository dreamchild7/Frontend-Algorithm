 // Define the function


function checkYuGiOh(n){
    if(isNaN(n)){
        console.log(`invalid number: ${n}`) // check for invalid input
    }
    let size = parseInt(n)            // convert input to integer
    let array = []                    // declare an array variable
    for(let i = 0; i < size; i++){   
        array[i] = i + 1;             // create an iteration loop
 array = array.map(i => {             // map the possible outcomes to the strings
    if(i % 30 === 0){
        return 'yu-gi-oh'
    }else if(i % 15 === 0){
        return 'gi-oh'
    }else if(i % 10 === 0){
        return 'yu-oh'
    }else if(i % 6 ===0){
        return 'yu-gi'
    }
    else if(i % 5 === 0){
        return 'oh'
    }else if(i % 3 === 0){
        return 'gi'
    }else if(i % 2 === 0){
        return 'yu'
    }else{
        return i
    }


})
    }                                   // end for loop

    console.log(array)                 //check the result


}checkYuGiOh(12.5)                     // call the function
