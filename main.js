 let bill = 0
 let tipPercentage = 0
 let numberOfPeople = 0
 let buttonSelected = null

    function reciveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
    
    }

    function receiveOfpeopleValue() {
      numberOfPeople = document.querySelector("#people").valueAsNumber
    }

    function receiveTipPercentageValue(value) {
    tipPercentage = value / 100
     
    removeClassButtomSelected()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
    
  }

  function receiveCustomTipPercentageValue() {
  tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100
  
  removeClassButtomSelected()
  }
  
  function removeClassButtomSelected() {
   if (buttonSelected !== null) {
    buttonSelected.classList.remove("button-selected")
    buttonSelected = null
  }
  }