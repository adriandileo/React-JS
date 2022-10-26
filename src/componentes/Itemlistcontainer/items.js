
    const items = [
        {
            "id": 1,
            "name": "Drupa",
            "details": "Blend de granos provenientes de Colombia y Brasil con un tostado intermedio, con notas de chocolate y vainilla",
            "precio": 300,
            "category": "cafe"
          },
          {
            "id": 2,
            "name": "Fuego",
            "details": "Grano porveninente de Etipia con un tostado claro, con fuertes notas de nuez",
            "precio": 300,
            "category": "cafe"
          },
          {
            "id": 10,
            "name": "Focaccia",
            "details": "Pan de pizza relleno con queso, tomate y albahaca",
            "precio": 300,
            "category": "salty"
          },
          {
            "id": 11,
            "name": "Bagel",
            "details": "Bagel de trigo o centeno, relleno con humus de garbanzos, rucula y queso rallado",
            "precio": 300,
            "category": "salty"
          },
          {
            "id": 20,
            "name": "Matilda",
            "details": "Torta puramente de chocolate, con ganache de chocolate",
            "precio": 300,
            "category": "sweet"
          },
          {
            "id": 21,
            "name": "Selva Negra",
            "details": "Torta de chocolate con crema y frutas",
            "precio": 300,
            "category": "sweet"
          }
];


function getitems(){
    return new Promise ((resolve) => {
        setTimeout(() =>
        resolve(items),1000)
    })
}
;
function getunitem(idParams){
    return new Promise ((resolve) =>{
        let itemRequerido = items.find((item) => {
           return( item.id === +idParams)
        })

        setTimeout(() =>
        resolve(itemRequerido),1000)
    } )
}

function getCategory(CategoryParams){
    return new Promise ((resolve) =>{
        let itemRequerido = items.filter((item) => {
           return( item.category === CategoryParams)
        })

        setTimeout(() =>
        resolve(itemRequerido),1000)
    } )
}


export {getitems,getunitem, getCategory} 