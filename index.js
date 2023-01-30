const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕"
    },
    {
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1
    },
        {
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 12,
        emoji: "🍺",
        id: 2
    }
]

const itemsContainer = document.getElementById('items-container')
const orderContainer = document.getElementById('order-container')

function render() {
    let rendering = ''
    for(let item of menuArray) {
        rendering += `
        <div class="item-container">
            <div class="emoji">
                ${item.emoji}
            </div>
            <div>
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <h4>$${item.price}</h4>
            </div>
            <button id="add-btn" data-nume="${item.id}">+</button>
        </div>
        `
    }
    itemsContainer.innerHTML = rendering
}
render()

document.getElementById('items-container').addEventListener('click', handleAddBtn)


function renderOrder() {
    const orderContainer = document.getElementById('order-container')

}
let total = 0
function handleAddBtn(e) {

    for(let item of menuArray) {
        let content = ""
        if(item.id == e.target.dataset.nume) {

            content =`
            <div class='item-order'>
                <p><strong>${item.name}</strong> <span id="remove-btn" data-remove="${item.id}">remove</span</p>
                <p><strong>$${item.price}</strong></p>
            </div>
            `
            orderContainer.innerHTML += content
            total += item.price
            document.getElementById('total-price').textContent = `$${total}`
            document.getElementById('hidden').style.display = 'block'
        }

    }

    }

document.getElementById('complete-order-btn').addEventListener('click', function() {
    document.getElementById('form').style.display = 'block'
})

document.getElementById('pay-btn').addEventListener('click', function(e) {
    e.preventDefault()
    document.getElementById('form').style.display = 'none'
    document.getElementById('finished-order').style.display = 'flex'
    orderContainer.innerHTML = ''
    document.getElementById('hidden').innerHTML = ''
})
