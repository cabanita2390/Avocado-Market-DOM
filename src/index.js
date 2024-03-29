/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = 'https://platzi-avo.vercel.app'

const appNode = document.querySelector('#app')
console.log(appNode)

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice
}

// Intl 

// Formato de monedas



// Web API

// TODO Conectarnos al server

window.fetch(`${baseUrl}/api/avo`)

// TODO Procesar la respuesta y convertirla en JSON

.then(respuesta => respuesta.json())

// TODO JSON --> Data --> Renderizar info en browser

.then(responseJSON => {

    const todosLosItems = []

    responseJSON.data.forEach(item => {
        // console.log(item)

        //TODO Crear imagen

        const img = document.createElement('img');
        img.src = `${baseUrl}${item.image}`   
        img.className = 'rounded-full'     
        
        //TODO Crear titulo

        const title = document.createElement('h2');
        title.textContent = item.name
        title.className = 'text-xl font-bold'
        
        //TODO Crear precio
        
        const price = document.createElement('div');
        price.textContent = formatPrice(item.price)

        // Creamos contenedor y appendeamos los elementos creados

        const container = document.createElement('div');
        container.append(img, title, price);
        container.className = 'w-full flex border-solid rounded-xl border-black m-1 mb-8 bg-gray-300 shadow-md p-10'


        
        todosLosItems.push(container)
        // console.log(todosLosItems)
    });

    appNode.append(...todosLosItems)
})

















