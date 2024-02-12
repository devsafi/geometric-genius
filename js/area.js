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