document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerPrice = document.getElementById('player-price').value;
    const playerExpense = document.getElementById('player-expenses');

    playerExpense.innerText = playerPrice;

})

document.getElementById('calculate-total').addEventListener('click', function () {

    const managerPrice = document.getElementById('manager-price').value;
    const coachPrice = document.getElementById('coach-price').value;
    const playerPrice = document.getElementById('player-price').value;
    const totalPrice = parseFloat(managerPrice) + parseFloat(coachPrice) + parseFloat(playerPrice);

    const total = document.getElementById('total');

    total.innerText = totalPrice;


})