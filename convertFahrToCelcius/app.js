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
let x
function convertFahrToCelcius(fahr){
    if(isNaN(fahr)){
        console.log( `${fahr} is not a valid number, but a ${typeof(fahr)}`)
    }
    else if(Array.isArray(fahr)){
        console.log( `${fahr} is not a valid number, but a ${typeof(fahr)}`)
     }
  
    else{
        x = parseFloat(fahr)
        let cel = ((x -32) * (5/9)) 

        console.log(x)
        console.log(cel.toFixed(4))
    }
}
convertFahrToCelcius(5684.5)