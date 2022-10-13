import {getOrders,getInteriors,getPaints,getTechnologies,getWheels}  from "./database.js"
let interiors = getInteriors()
let wheels = getWheels()
let paint = getPaints()
let technology = getTechnologies()

const buildOrderListItem = (order) => {

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const foundPaint = paint.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechnology = technology.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const totalCost = foundWheel.price+foundInteriors.price+foundTechnology.price+foundPaint.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} for ${costString} was placed on ${order.timestamp}
    </li>`
}
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


