import { PageHTML } from "./allTheHTML.js";



const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = PageHTML()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})