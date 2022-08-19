// class
class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElement) {
	  this.previousOperandTextElement = previousOperandTextElement
	  this.currentOperandTextElement = currentOperandTextElement
	  this.clear()
	}
  
	clear() {
	  this.currentOperand = ''
	  this.previousOperand = ''
	  this.operation = undefined
	}
  
	delete() {
	  this.currentOperand = this.currentOperand.toString().slice(0, -1)
	}
  
	appendNumber(number) {
	  if (number === '.' && this.currentOperand.includes('.')) return
	  this.currentOperand = this.currentOperand.toString() + number.toString()
	}
  
	chooseOperation(operation) {
	  if (this.currentOperand === '') return
	  if (this.previousOperand !== '') {
		this.compute()
	  }
	  this.operation = operation
	  this.previousOperand = this.currentOperand
	  this.currentOperand = ''
	}
  
	compute() {
	  let computation
	  const prev = parseFloat(this.previousOperand)
	  const current = parseFloat(this.currentOperand)
	  if (isNaN(prev) || isNaN(current)) return
	  switch (this.operation) {
		case '+':
		  computation = prev + current
		  break
		case '-':
		  computation = prev - current
		  break
		case '*':
		  computation = prev * current
		  break
		case '÷':
		  computation = prev / current
		  break
		case '/':
		  computation = prev / current 
		  break 
		default:
		  return
	  }
	  this.currentOperand = computation
	  this.operation = undefined
	  this.previousOperand = ''
	}
  
	
  
updateDisplay() {
	this.currentOperandTextElement.innerText = this.currentOperand
	  if (this.operation != null) {
		this.previousOperandTextElement.innerText =
		  `${this.previousOperand} ${this.operation}`
	  } else {
		this.previousOperandTextElement.innerText = ''
	  }
	}
}
  
  
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  const keyboardInput = document.getElementById("keyboard-input")

  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// number buttons
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
	  calculator.appendNumber(button.innerText)
	  calculator.updateDisplay()
	})
})

//operation numbers
operationButtons.forEach(button => {
	button.addEventListener('click', () => {
	  calculator.chooseOperation(button.innerText)
	  calculator.updateDisplay()
	})
})

// equalsbutton
equalsButton.addEventListener('click', button => {
	calculator.compute()
	calculator.updateDisplay()
})

// clearbutton
allClearButton.addEventListener('click', button => {
	calculator.clear()
	calculator.updateDisplay()
})

// deletebutton
deleteButton.addEventListener('click', button => {
	calculator.delete()
	calculator.updateDisplay()
})

// keyboard input
document.addEventListener("keydown", (event) => {
	if(event.key == "1") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "2") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "3") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "4") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "5") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "6") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "7") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "8") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "9") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "0") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == ".") {
		keyboardInput.value += event.key;
		calculator.appendNumber(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "Backspace") {
		keyboardInput.value += event.key;
		calculator.delete(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "c") {
		keyboardInput.value += event.key;
		calculator.clear(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "+") {
		keyboardInput.value += event.key;
		calculator.chooseOperation(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "-") {
		calculator.chooseOperation(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "*") {
		calculator.chooseOperation(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "/") {
		calculator.chooseOperation(event.key)
		calculator.updateDisplay()
	}
	if(event.key == "Enter") {
		calculator.compute()
		calculator.updateDisplay()
	}
	
})







