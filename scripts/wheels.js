import {getWheels,setWheel}  from "./database.js"
let wheels = getWheels()

export const Wheelies = () =>{
    let wheelHTML=`
    <select id="wheels">
    <option value="0">Select wheels</option>`
    const wheelList = wheels.map(wheel=> {
    return `<option value="${wheel.id}">${wheel.style}</option>`})
    wheelHTML += wheelList.join("")+`</select>`
        return wheelHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = changeEvent.target.value
            setWheel(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)