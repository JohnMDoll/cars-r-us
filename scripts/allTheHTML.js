import { Wheelies } from "./wheels.js";
import { Paints } from "./paint.js";
import { Technologies } from "./technology.js";
import { Interiors } from "./interior.js";
import {Orders} from "./orders.js"
//import all the html bits and cram them together in here
//export html assembly func from here for main to give to index.html
import { addCustomOrder } from "./database.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id ==="orderButton"){
            addCustomOrder()
        }

    }
)

export const PageHTML=()=>{return `
<h1>Cars-R-U</h1>

<article class="choices">
    <section class="choices__wheels options">
        <h2>Wheels</h2>
        ${Wheelies()}
    </section>
    <section class="choices__Interiors options">
        <h2>Interiors</h2>
        ${Interiors()}
    </section>
    <section class="choices__Paints options">
        <h2>Paints</h2>
        ${Paints()}
    </section>
    <section class="choices__Technologies options">
        <h2>Technologies</h2>
        ${Technologies()}
    </section>
</article>

<article>
    <button id="orderButton">Create Car R U Order</button>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`
}