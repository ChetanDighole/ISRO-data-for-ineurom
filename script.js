
let spacecraftsTable = document.querySelector('.spaceCraft')
let lauchTable = document.querySelector('.launcher')
let center = document.querySelector('.centers')

const temTable = document.createElement('table')
const temTable2 = document.createElement('table')
const temTable3 = document.createElement('table')

fetchSpaceCraft();
fetchLaunchers()
fetchCenters()

async function fetchSpaceCraft(){

    const data = await fetch('https://isro.vercel.app/api/spacecrafts')
    const json = await data.json()
    
    json.spacecrafts.map(each => {
        const row = spacecraftsTable.insertRow()
        const cell1 = row.insertCell()
        const cell2 = row.insertCell()
        cell1.textContent = `${each.id}`
        cell2.textContent = `${each.name}`
        cell1.setAttribute('align','center')
        cell1.setAttribute('bgcolor','white')
        cell2.setAttribute('align','center')
        cell2.setAttribute('bgcolor','white')
    })
    spacecraftsTable.appendChild(temTable)
}

async function fetchLaunchers(){

    const data = await fetch('https://isro.vercel.app/api/launchers')
    const json = await data.json()
    // console.log(json.launchers)
    
    json.launchers.map((each , index )=> {
        const row = lauchTable.insertRow()
        const cell1 = row.insertCell()
        const cell2 = row.insertCell()
        cell1.textContent = index+1
        cell2.textContent = `${each.id}`
        cell1.setAttribute('align','center')
        cell1.setAttribute('bgcolor','white')
        cell2.setAttribute('align','center')
        cell2.setAttribute('bgcolor','white')
    })
    lauchTable.appendChild(temTable2)
}

async function fetchCenters(){

    const data = await fetch('https://isro.vercel.app/api/centres')
    const json = await data.json()
    console.log(json.centres)
    
    json.centres.map((each , index )=> {
        const row = center.insertRow()
        const cell1 = row.insertCell()
        const cell2 = row.insertCell()
        const cell3 = row.insertCell()
        const cell4 = row.insertCell()

        cell1.textContent = `${each.id}`
        cell2.textContent = `${each.name}`
        cell3.textContent = `${each.Place}`
        cell4.textContent = `${each.State}`

        cell1.setAttribute('align','center')
        cell1.setAttribute('bgcolor','white')
        cell2.setAttribute('align','center')
        cell2.setAttribute('bgcolor','white')
        
        cell3.setAttribute('align','center')
        cell3.setAttribute('bgcolor','white')
        cell4.setAttribute('align','center')
        cell4.setAttribute('bgcolor','white')
    })
    center.appendChild(temTable3)
}

