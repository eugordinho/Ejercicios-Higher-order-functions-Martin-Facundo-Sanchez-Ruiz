const printMessage = message => console.log( message )



const createMultplication = ( number1, number2 ) => number1 * number2



const array = [ 1,2,3,4,5,6,7,8,9 ]

const newArray = array.map(number => createMultplication(number, 2) )



const mostAlcoholicBeer = ( beers ) => {
    const birras = beers.map(birra => birra.abv)
    
    const mostAlcoholBirras = birras.sort(( a, b ) => b - a).slice( 0, 10 )
    
    return mostAlcoholBirras
}

/* console.log( mostAlcoholicBeer( beers ) ) */



const lessBitterBeer = ( beers ) => {
    const birras = beers.map( birra => birra.ibu )

    const lessBitterBirras = birras.sort(( a, b ) => a-b).slice( 0, 10 )

    return lessBitterBirras
}

/* console.log( lessBitterBeer( beers ) ) */



const findBeer = (beers, beer) => beers.find(birra => birra.name == beer)

/* console.log( findBeer( beers, "Pilsen Lager" ) ) */



const ibuEquals = ( beers, ibu ) => {
    const birra = beers.find(birra => birra.ibu == ibu)
    if(birra) {
        return birra
    } else{
        return `There is no beer with an ibu of ${ibu}`
    }


}

/* console.log(ibuEquals ( beers, 0 ))  */



 const findPositionBeer = ( beers, beer ) => {
    if( ( beers.findIndex(birra => birra.name === beer ) != -1) ) {
        return beers.findIndex(birra => birra.name === beer)
    } else{
        return `${beer} does not exist`
    }
 }

/* console.log( findPositionBeer( beers, "Pilsen Lager" ) )  */



const alcoholLimit = (beers, abvLimit) => {
    const abvArray = []

    for(let i = 0; i < beers.length; i++){
        if(beers[i].abv < abvLimit){
            const beerObject = {
                name: beers[i].name,
                abv: beers[i].abv,
                ibu: beers[i].ibu
            }
            abvArray.push( beerObject )
        }

        
    }

    return abvArray
}

/* console.log( alcoholLimit( beers, 5 ) ) */



const $table = document.getElementById("tabla")

$table.appendChild(document.createElement('thead'))

const $thead = document.querySelector('thead')



const tittle = document.createElement('th')

tittle.textContent = "Beer"

const abvTh = document.createElement('th')

abvTh.textContent = "ABV"

const ibuTh = document.createElement('th')

ibuTh.textContent = "IBU"

$thead.appendChild(tittle)
$thead.appendChild(abvTh)
$thead.appendChild(ibuTh)

$table.appendChild(document.createElement('tbody'))

const $tbody = document.querySelector('tbody')

const fragment = document.createDocumentFragment()

const createRow = (beers) => {
    const $row = document.createElement('tr')

    const nameCell  = document.createElement('td')

    nameCell.textContent = beers.name
    
    $row.appendChild(nameCell);

    const abvCell  = document.createElement('td')

    abvCell.textContent = beers.abv
    
    $row.appendChild(abvCell);

    const ibuCell  = document.createElement('td')

    ibuCell.textContent = beers.ibu
    
    $row.appendChild(ibuCell);

    return $row
}

beers.forEach(beer => fragment.appendChild(createRow(beer)))

$tbody.appendChild(fragment)

const $main = document.getElementById('main')

$main.classList.add("flex bg-red-600") 