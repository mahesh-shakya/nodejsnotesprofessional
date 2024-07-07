// Create and export own module
function addTwoNum(a, b){
    return a+b;
}
 function RectArea(length, width){
    return length*width;
 }

 function CircleArea(r){
    return Math.PI*r*r;
 }

 const name = 'Krishi Shakya';

// module.exports.addTwoNum = addTwoNum;
// module.exports.RectArea = RectArea;
// module.exports.CircleArea = CircleArea;

module.exports = {addTwoNum, RectArea, CircleArea, name};
