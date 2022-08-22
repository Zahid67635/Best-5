function addPlayer(selectBtn, nameField) {

    document.getElementById(selectBtn).addEventListener('click', function () {
        const getNameField = document.getElementById(nameField);
        document.getElementById(selectBtn).disabled = true;
        document.getElementById(selectBtn).style.backgroundColor = 'grey'
        const getname = getNameField.innerText;
        const childNum = document.getElementById('order-list').childElementCount;

        if (childNum >= 5) {
            alert('Maximum Number is selected');
        }
        else {
            const node = document.createElement("li");
            node.innerText = getname;
            document.getElementById('order-list').appendChild(node);
        }

    })


}
addPlayer('select-btn-bappe', 'mbappe');
addPlayer('select-btn-maria', 'maria');
addPlayer('select-btn-ibra', 'ibra');
addPlayer('select-btn-neyma', 'neyma');
addPlayer('select-btn-varati', 'varati');
addPlayer('select-btn-navas', 'navas');
addPlayer('select-btn-leo', 'leo');
addPlayer('select-btn-ramos', 'ramos');
addPlayer('select-btn-hakimi', 'hakimi');


