import './styles.css';

document.getElementById('generateBtn').addEventListener('click', generateMatrix);
document.getElementById('calculateBtn').addEventListener('click', calculateDiagonalSum);

function generateMatrix() {
    var rows = parseInt(document.getElementById('rows').value, 10);
    var cols = parseInt(document.getElementById('cols').value, 10);
    var matrixInput = document.getElementById('matrixInput');
    
    
    matrixInput.innerHTML = '';
    
    
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var input = document.createElement('input');
            input.type = 'text';
            input.id = 'cell-' + i + '-' + j;
            input.value = '0'; 
            input.addEventListener('input', validateInput); 
            matrixInput.appendChild(input);
        }
        matrixInput.appendChild(document.createElement('br'));
    }
}

function validateInput(event) {
    var value = event.target.value;

    
    var validatedValue = '';
    var isNegative = false;

    
    if (value.startsWith('-')) {
        isNegative = true;
        value = value.slice(1);
    }

    for (var i = 0; i < value.length; i++) {
        var char = value[i];
        if (char >= '0' && char <= '9') {
            validatedValue += char;
        }
    }

    
    event.target.value = isNegative ? '-' + validatedValue : validatedValue;

    
    if (event.target.value === '' || event.target.value === '-') {
        event.target.value = '0';
    }
}

function calculateDiagonalSum() {
    var rows = parseInt(document.getElementById('rows').value, 10);
    var cols = parseInt(document.getElementById('cols').value, 10);
    var sum = 0;

    
    for (var i = 0; i < Math.min(rows, cols); i++) {
        var mainDiagonalValue = toNumber(document.getElementById('cell-' + i + '-' + i).value);
        var secondaryDiagonalValue = toNumber(document.getElementById('cell-' + i + '-' + (cols - i - 1)).value);

        sum = add(sum, mainDiagonalValue);
        if (i !== (cols - i - 1) && i < rows) { 
            sum = add(sum, secondaryDiagonalValue);
        }
    }

    
    document.getElementById('result').innerText = 'Diagonal Sum: ' + sum;
}

function toNumber(str) {
    return Number(str) || 0; 
}

function add(a, b) {
    return a + b;
}
