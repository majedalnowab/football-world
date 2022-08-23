
const selectAllButton = document.querySelectorAll('.select-button');
for (const select of selectAllButton) {

    select.addEventListener('click', function (event) {

        event.target.disabled = true;
        event.target.style.background = 'gray';
        const name = event.target.parentNode.parentNode.children[0].innerText;
        const playerObject = {
            playerName: name
        }
        nameArray.push(playerObject)
        selectPlayer(nameArray)



    })
}



function inputField(field) {
    const inputFieldValue = document.getElementById(field);
    const inputFieldValueString = inputFieldValue.value;
    const inputFieldValueConvert = parseInt(inputFieldValueString);
    return inputFieldValueConvert;
}


function setValue(previusValue, newValue) {
    const valueSet = document.getElementById(previusValue)
    valueSet.innerText = newValue
}



document.getElementById('calculate-button-total').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const playerExpensesStringConvert = parseInt(playerExpensesString)
    const menagerField = inputField('manager');
    const coachField = inputField('coach');
    const totalAmout = (playerExpensesStringConvert + menagerField + coachField);

    if (playerExpenses.innerText === '') {
        alert('Please field the per player cost !!')
    }
    else if (menagerField > 0 && coachField > 0) {
        setValue('total-balance', totalAmout)
    }
    else {
        alert('Please input your valid number !!')
    }

})



const nameArray = [];

function selectPlayer(array) {

    const playerAdded = document.getElementById('player-added')
    playerAdded.innerHTML = '';

    for (let i = 0; i < array.length; i++) {

        const name = nameArray[i].playerName;

        const playerNumber = i;
        if (i < 5) {
            const tr = document.createElement('tr')
            tr.innerHTML = `
            
          <li>${name}</li>
            
            `
            playerAdded.appendChild(tr)


        }
        else {
            alert('You cannot add more than 5 player, Your button will Disabled but not counted in the player list !!')

            return playerNumber

        }
        document.getElementById('calculate-button').addEventListener('click', function () {
            const perPlayerCost = inputField('per-player');
            const selectedPlayer = playerNumber + 1;
            const selected = perPlayerCost * selectedPlayer

            if (perPlayerCost > 0) {
                setValue('player-expenses', selected)
            }
        })


    }

}