import {getTechnologies, setTechnology}  from "./database.js"
let technologies = getTechnologies()

export const Technologies = () =>{
    let technologyHTML=`
    <select id="technologies">
    <option value="0">Select tech package</option>`
    const technologyList = technologies.map(technology=> {
    return `<option value="${technology.id}">${technology.package}</option>`})
    technologyHTML += technologyList.join("")+`</select>`
    return technologyHTML
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologies") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(chosenOption))
            console.log(chosenOption)  // "1" or "2"
        }
    }
)