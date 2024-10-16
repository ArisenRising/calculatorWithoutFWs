const buttons = document.querySelectorAll('.nummberBtn');
const statusElement = document.getElementById('statusText');
const deleteBtn = document.getElementById('deleteBtn');
let currentStatus = "";
let intervalId;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.getAttribute('data-value');

        if (value === "=") {
            try {
                currentStatus = eval(currentStatus);
                if (isNaN(currentStatus) || currentStatus === undefined) {
                    statusElement.textContent = "ты чо еблан сука?";
                } else {
                    statusElement.textContent = currentStatus;
                }
            } catch (error) {
                statusElement.textContent = "пошел нахуй";
            }
        } else {
            currentStatus += value;
            statusElement.textContent = currentStatus;
        }
    });
});

deleteBtn.addEventListener('click', () => {
    currentStatus = String(currentStatus);
    currentStatus = currentStatus.slice(0, -1);
    statusElement.textContent = currentStatus || "0";
});

deleteBtn.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        currentStatus = String(currentStatus);
        currentStatus = currentStatus.slice(0, -1);
        statusElement.textContent = currentStatus || "0";
    }, 100);
});

deleteBtn.addEventListener('mouseup', () => {
    clearInterval(intervalId); 
});

deleteBtn.addEventListener('mouseleave', () => {
    clearInterval(intervalId); 
});
