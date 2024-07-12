var squareIsWhite = function(coordinates) {
    let num1 = coordinates.charCodeAt(0)-96
    let num2 = parseInt(coordinates[1])
    let result = (num1+num2)%2
    return result===0? "false":"true"
   
};