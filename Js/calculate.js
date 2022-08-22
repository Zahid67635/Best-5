document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerPrice = document.getElementById('player-price').value;
    if (playerPrice <= 0 || isNaN(playerPrice)) {
        alert("Please input a valid number for calculate");
    }
    else {
        const playerExpense = document.getElementById('player-expenses');
        const childNum = document.getElementById('order-list').childElementCount;
        playerExpense.innerText = playerPrice * childNum;
    }

})

document.getElementById('calculate-total').addEventListener('click', function () {

    const managerPrice = document.getElementById('manager-price').value;
    const coachPrice = document.getElementById('coach-price').value;
    const playerExpense = document.getElementById('player-expenses').innerText;
    const totalPrice = parseFloat(managerPrice) + parseFloat(coachPrice) + parseFloat(playerExpense);

    const total = document.getElementById('total');

    total.innerText = totalPrice;


})