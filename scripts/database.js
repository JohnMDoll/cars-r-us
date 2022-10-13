

const database = {

    paints: [{
        id: 1,
        color: "Silver",
        price: 1100,
    }, {
        id: 2,
        color: "Midnight Blue",
        price: 1200,
    }, {
        id: 3,
        color: "Firebrick Red",
        price: 1300,
    }, {
        id: 4,
        color: "Spring Green",
        price: 1400,
    }],
    interiors: [{
        id: 1,
        fabric: "Beige Fabric",
        price: 2100,
    }, {
        id: 2,
        fabric: "Charcoal Fabric",
        price: 2200,
    }, {
        id: 3,
        fabric: "White Leather",
        price: 2300,
    }, {
        id: 4,
        fabric: "Black Leather",
        price: 2400,
    }

    ],
    technologies: [{
        id: 1,
        package: "Basic Package",
        price: 3100,
    }, {
        id: 2,
        package: "Navigation Package",
        price: 3200,
    }, {
        id: 3,
        package: "Visibility Package",
        price: 3300,
    }, {
        id: 4,
        package: "Ultra Package",
        price: 3400,
    }

    ],
    wheels: [{
        id: 1,
        style: "17-inch Pair Radial",
        price: 4100,
    }, {
        id: 2,
        style: "17-inch Pair Radial Black",
        price: 4200,
    }, {
        id: 3,
        style: "18-inch Pair Spoke Silver",
        price: 4300,
    }, {
        id: 4,
        style: "18-inch Pair Spoke Black",
        price: 4400,
    }

    ],
    orders:[{
        id: 1,
        paintId: 1,
        interiorId: 1,
        technologyId: 1,
        wheelId: 1,
        timestamp: 1,
    }],
    orderBuilder:{
        id: 2,
        paintId: 1,
        interiorId: 1,
        technologyId: 1,
        wheelId: 1,
        timestamp: 1,
    }

}
export const getPaints = () => {
    return structuredClone(database.paints);
};
export const getInteriors = () => {
    return structuredClone(database.interiors);
};
export const getTechnologies = () => {
    return structuredClone(database.technologies);
};
export const getWheels = () => {
    return structuredClone(database.wheels);
};
export const getOrders = () => {
    return structuredClone(database.orders);
};
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.orders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}