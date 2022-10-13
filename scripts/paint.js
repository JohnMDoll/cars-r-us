import {getPaints,setPaint}  from "./database.js"
let paints = getPaints()

export const Paints = () =>{
    let paintHTML=`
    <select id="paints">
    <option value="0">Select paints</option>`
    const paintList = paints.map(paint=> {
    return `<option value="${paint.id}">${paint.color}</option>`})
    paintHTML += paintList.join("")+`</select>`
    return paintHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            const chosenOption = changeEvent.target.value
            setPaint(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)
