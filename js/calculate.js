// area calculation hidden and show ====== section
document.getElementById('third-click').addEventListener('click', function(){
        const thirdClickElement = document.getElementById('number-3').style.display = 'flex'
})
document.getElementById('fourth-click').addEventListener('click', function(){
        const fourthClickElement = document.getElementById('number-4').style.display = 'flex'
})
document.getElementById('fifth-click').addEventListener('click', function(){
        const fifthClickElement = document.getElementById('number-5').style.display = 'flex'
})
document.getElementById('sixth-click').addEventListener('click', function(){
        const sixthClickElement = document.getElementById('number-6').style.display = 'flex'
})

// First
document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleInputFieldOne = document.getElementById('triangle-field1');
    const triangleInputFieldStringOne = triangleInputFieldOne.value;
    const triangleOne = parseFloat(triangleInputFieldStringOne);
    
    const triangleInputFieldTwo = document.getElementById('triangle-field2');
    const triangleInputFieldStringTwo = triangleInputFieldTwo.value;
    const triangleTwo = parseFloat(triangleInputFieldStringTwo);

    const calculate = 0.5 * triangleOne * triangleTwo;
    
    
    const triangleResultElement = document.getElementById('triangle-result');
    const triangleResultString = triangleResultElement.innerText;
    const triangleResult = parseFloat(triangleResultString);
    
    const fullCalculation = calculate + triangleResult;
    triangleResultElement.innerText = fullCalculation;
    
    if(isNaN(triangleOne && triangleTwo)){
        alert('Please Use Only Number')
    }
    else if(triangleOne < 0 || triangleTwo < 0){
           alert('Please Use Integer Number')
    }
    else{
        triangleInputFieldOne.value = '';
        triangleInputFieldTwo.value = '';
    }
   
})
// Second
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleInputFieldOne = document.getElementById('rectangle-field1');
    const rectangleInputFieldStringOne = rectangleInputFieldOne.value;
    const rectangleOne = parseFloat(rectangleInputFieldStringOne);
    
    const rectangleInputFieldTwo = document.getElementById('rectangle-field2');
    const rectangleInputFieldStringTwo = rectangleInputFieldTwo.value;
    const rectangleTwo = parseFloat(rectangleInputFieldStringTwo);

    const calculate = rectangleOne * rectangleTwo;
    
    const rectangleResultElement = document.getElementById('rectangle-result');
    const rectangleResultString = rectangleResultElement.innerText;
    const rectangleResult = parseFloat(rectangleResultString);

    const fullCalculation = calculate + rectangleResult;
    rectangleResultElement.innerText = fullCalculation;

    

    if(isNaN(rectangleOne || rectangleTwo)){
        alert('Please Use Only Number')
    }
    else if(rectangleOne < 0 || rectangleTwo < 0){
           alert('Please Use Integer Number')
    }
    else{
        rectangleInputFieldOne.value = '';
        rectangleInputFieldTwo.value = '';
    }

})
// third
document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramInputFieldOne = document.getElementById('parallelogram-field1');
    const parallelogramInputFieldStringOne = parallelogramInputFieldOne.value;
    const parallelogramOne = parseFloat(parallelogramInputFieldStringOne);
    
    const parallelogramInputFieldTwo = document.getElementById('parallelogram-field2');
    const parallelogramInputFieldStringTwo = parallelogramInputFieldTwo.value;
    const parallelogramTwo = parseFloat(parallelogramInputFieldStringTwo);

    const calculation = parallelogramOne * parallelogramTwo;
    
    
    const parallelogramResultElement = document.getElementById('parallelogram-result');
    const parallelogrameResultString = parallelogramResultElement.innerText;
    const parallelogramResult = parseFloat(parallelogrameResultString);
    
    const fullCalculation = calculation + parallelogramResult;
    parallelogramResultElement.innerText = fullCalculation;
    
    parallelogramInputFieldOne.value = '';
    parallelogramInputFieldTwo.value = '';
})
// Fourth
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusInputFieldOne = document.getElementById('rhombus-field1');
    const rhombusInputFieldStringOne = rhombusInputFieldOne.value;
    const rhombusOne = parseFloat(rhombusInputFieldStringOne);
    
    const rhombusInputFieldTwo = document.getElementById('rhombus-field2');
    const rhombusInputFieldStringTwo = rhombusInputFieldTwo.value;
    const rhombusTwo = parseFloat(rhombusInputFieldStringTwo);

    const calculation = 0.5 * rhombusOne * rhombusTwo;
    
    
    const rhombusResultElement = document.getElementById('rhombus-result');
    const rhombusResultString = rhombusResultElement.innerText;
    const rhombusResult = parseFloat(rhombusResultString);
    
    const fullCalculation = calculation + rhombusResult;
    rhombusResultElement.innerText = fullCalculation;
    
    rhombusInputFieldOne.value = '';
    rhombusInputFieldTwo.value = '';
})
// fifth
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonInputFieldOne = document.getElementById('pentagon-field1');
    const pentagonInputFieldStringOne = pentagonInputFieldOne.value;
    const pentagonOne = parseFloat(pentagonInputFieldStringOne);
    
    const pentagonInputFieldTwo = document.getElementById('pentagon-field2');
    const pentagonInputFieldStringTwo = pentagonInputFieldTwo.value;
    const pentagonTwo = parseFloat(pentagonInputFieldStringTwo);

    const calculation = 0.5 * pentagonOne * pentagonTwo;
    
    
    const pentagonResultElement = document.getElementById('pentagon-result');
    const pentagonResultString = pentagonResultElement.innerText;
    const pentagonResult = parseFloat(pentagonResultString);
    
    const fullCalculation = calculation + pentagonResult;
    pentagonResultElement.innerText = fullCalculation;
    
    pentagonInputFieldOne.value = '';
    pentagonInputFieldTwo.value = '';
})
// Sixth
document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseInputFieldOne = document.getElementById('ellipse-field1');
    const ellipseInputFieldStringOne = ellipseInputFieldOne.value;
    const ellipseOne = parseFloat(ellipseInputFieldStringOne);
    
    const ellipseInputFieldTwo = document.getElementById('ellipse-field2');
    const ellipseInputFieldStringTwo =ellipseInputFieldTwo.value;
    const ellipseTwo = parseFloat(ellipseInputFieldStringTwo);

    const calculation = (3.14 * ellipseOne * ellipseTwo).toFixed(1);
    
    
    const ellipseResultElement = document.getElementById('ellipse-result');
    const ellipseResultString = ellipseResultElement.innerText;
    const ellipseResult = parseFloat(ellipseResultString);
    
    const fullCalculation = calculation + ellipseResult;
    ellipseResultElement.innerText = fullCalculation;
    
    ellipseInputFieldOne.value = '';
    ellipseInputFieldTwo.value = '';
})