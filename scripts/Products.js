import { getProducts } from "./database.js"

//adding a click event listener that presents an alert box showing the price of a product when it is clicked by the user.

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("product")) {

        const [, productId] = itemClicked.id.split("--")


        for (const product of products) {
            if (product.id === parseInt(productId)) {
                window.alert(`$${product.price}`)
            }
        }


    }

})

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}


