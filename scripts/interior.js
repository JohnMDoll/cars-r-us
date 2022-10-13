import {getInteriors, setInterior}  from "./database.js"

let interiors = getInteriors()

export const Interiors = () =>{
    let interiorHTML=`
    <select id="interiors">
    <option value="0">Select interiors</option>`
    const interiorList = interiors.map(interior=> {
    return `<option value="${interior.id}">${interior.fabric}</option>`})
    interiorHTML += interiorList.join("")+`</select>`
    return interiorHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)
