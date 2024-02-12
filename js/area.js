function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const base = parseFloat(triangleBaseInput.value);
    const triangleHeightInput = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeightInput.value);
    const area = 0.5 * base * height;
    console.log(area);
}


function calculateRectangleArea() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidthInput.value);
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLengthInput.value);
    const area = width * length;
    console.log(area);
}


function calculateParallelogramArea() {
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const base = parseFloat(parallelogramBaseInput.value);
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const height = parseFloat(parallelogramHeightInput.value);
    const area = base * height;
    console.log(area);
}


function calculateRhombusArea() {
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const d1 = parseFloat(rhombusD1Input.value);
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const d2 = parseFloat(rhombusD2Input.value);
    const area = 0.5 * d1 * d2;
    console.log(area);
}


function calculatePentagonArea() {
    const pentagonPInput = document.getElementById('pentagon-p');
    const pentagonP = parseFloat(pentagonPInput.value);
    const pentagonBInput = document.getElementById('pentagon-b');
    const pentagonB = parseFloat(pentagonBInput.value);
    const area = 0.5 * pentagonP * pentagonB;
    console.log(area);
}


function calculateEllipseArea() {
    const ellipseAInput = document.getElementById('ellipse-a');
    const ellipseA = parseFloat(ellipseAInput.value);
    const ellipseBInput = document.getElementById('ellipse-b');
    const ellipseB = parseFloat(ellipseBInput.value);
    const area = 3.1416 * ellipseA * ellipseB;
    console.log(area);
}