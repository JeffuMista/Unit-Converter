// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound
const inputEl = document.getElementById("header-input");
const lengthEl = document.getElementById("length-el");
const massEl = document.getElementById("mass-el");
const volumeEl = document.getElementById("volume-el");
const headerBtn = document.getElementById("header-btn");

function convertUnit() {
  if (inputEl.value) {
    let inputValue = parseFloat(inputEl.value);
    let feetConversion = (inputValue * 3.281).toFixed(3);
    let metersConversion = (inputValue / 3.281).toFixed(3);
    let gallonsConversion = (inputValue * 0.264).toFixed(3);
    let litersConversion = (inputValue / 0.264).toFixed(3);
    let poundsConversion = (inputValue * 2.204).toFixed(3);
    let kilosConversion = (inputValue / 2.204).toFixed(3);

    lengthEl.textContent = `${inputValue} meters = ${feetConversion} feet | ${inputValue} feet = ${metersConversion} meters`;
    massEl.textContent = `${inputValue} kilos = ${poundsConversion} pounds | ${inputValue} pounds = ${kilosConversion} kilos`;
    volumeEl.textContent = `${inputValue} liters = ${gallonsConversion} gallons | ${inputValue} gallons = ${litersConversion} liters`;
  } else if (!inputEl.value) {
    lengthEl.textContent = "20 meters = 65.616 feet | 20 feet = 6.096 meters";
    massEl.textContent = "20 Kilos = 44.092 pounds | 20 pounds = 9.072 kilos";
    volumeEl.textContent =
      "20 liters = 5.284 gallons | 20 gallons = 75.708 liters";
  }
}

headerBtn.addEventListener("click", function () {
  convertUnit();
});
