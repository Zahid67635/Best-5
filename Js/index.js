function addPlayer(selectBtn, nameField) {

    document.getElementById(selectBtn).addEventListener('click', function () {
        const getNameField = document.getElementById(nameField);
        document.getElementById(selectBtn).disabled = true;
        document.getElementById(selectBtn).style.backgroundColor = 'grey'
        const getname = getNameField.innerText;
        const listItems = document.getElementsByClassName('player-list');
        for (item of listItems) {
            // console.log('clicked');
            if (item.innerText === '') {
                item.innerText = getname; break
            }
            else {
                continue;
            }

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


