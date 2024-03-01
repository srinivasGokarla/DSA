document.addEventListener('DOMContentLoaded', function() {
    const stack = [];
    const input = document.getElementById('input');
    const pushButton = document.getElementById('pushButton');
    const emptyButton = document.getElementById('emptyButton');
    const peekButton = document.getElementById('peekButton');
  
    pushButton.addEventListener('click', function() {
        const value = input.value.trim();
        if (value === '') {
            alert('Please enter a value!');
            return;
        }
        if (stack.length >= 5) {
            alert('Stack was already full!');
            return;
        }
        stack.push(value);
        updateStackDisplay();
        input.value = '';
    });
  
    emptyButton.addEventListener('click', function() {
        if (stack.length === 0) {
            alert('Yes, Stack is empty');
        } else {
            alert('No, Stack is not empty');
        }
    });
  
    peekButton.addEventListener('click', function() {
        if (stack.length === 0) {
            alert('Operation not allowed!');
            return;
        }
        const topItem = stack[stack.length - 1];
        alert('Top Value is: ' + topItem);
    });
  
    function updateStackDisplay() {
        const stackItems = document.querySelectorAll('.stack-item');
        for (let i = 0; i < stackItems.length; i++) {
            if (stackItems.length - i <= stack.length) {
                const index = stackItems.length - i - 1;
                stackItems[i].textContent = stack[index];
            } else {
                stackItems[i].textContent = '';
            }
        }
    }
  });
  