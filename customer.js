let customs =  [ ];
let accountNumber = 8050200;


let addCustom = () =>{
    custom = {
        customName: prompt('enter your name'),
        cusomBalance: prompt('enter your balance'),
        customAccount: accountNumber += 1
    }
    customs.push(custom)
}

addCustom()
// addCustom()

// document.querySelector('#addDataCustom').addEventListener('click' , addCustom)

customs.forEach(element => {
    document.querySelector('#customName').textContent = (`${element.customName}`)
    document.querySelector('#customBalance').textContent = (`${element.cusomBalance}`)
    document.querySelector('#customAccount').textContent = (`${element.customAccount}`)
});


