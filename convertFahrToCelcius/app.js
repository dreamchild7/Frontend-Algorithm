// // Declare a function
// isNaN(fahr)
// function convertFahrToCelcius(fahr){
// // if(fahr === NaN){
// // console.log(`${fahr} is not a number but a ${typeof(fahr)}`)
// return !isNaN(fahr)
// // }
// // else{
// //     let x = parseFloat(fahr)
// //     console.log(x)
// // }

// }
// convertFahrToCelcius('ghrt')

function convertFahrToCelcius(fahr){
    
    if(isNaN(fahr) || Array.isArray(fahr)){
        console.log( `${fahr} is not a valid number, but a ${typeof(fahr)}`)
    }
    // else if(Array.isArray(fahr)){
    //     console.log( `${fahr} is not a valid number, but a ${typeof(fahr)}`)
    //   }
  
    else{
       let x = parseFloat(fahr)
        let cel = ((x -32) * (5/9)) 

        console.log(x)
        console.log(cel.toFixed(4))
    }
}
convertFahrToCelcius()