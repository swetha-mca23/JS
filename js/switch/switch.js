
const button = document.querySelector('button')

let resultdiv = document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)

button.addEventListener("click",displaystats)

 function displaystats(){
   
    
    const input = document.getElementById('input')
    const city =  input.options[input.selectedIndex].value
    let population=0 , literacyRate = 0 , language=""

    switch (city){
        case 'Bangalore':
            population=6565656
            literacyRate=90.80
            language="canada"
            break

        case 'Chennai':
            population=7877665
            literacyRate=90.80
            language="tamil"
            break
        case 'Salem':
            population=6575367
            literacyRate=90.80
            language="tamil"
            break
        case 'Mumbai':
            population=456793
            literacyRate=90.80
            language="marathi"
            break
        case 'Delhi':
            population=6675675
            literacyRate=90.80
            language="Hindi"
            break
    }

    let text = `The Indian city of ${city} has a population has a ${population}.language spoken is ${language} and the literacyrate is ${literacyRate}%`
    
    document.getElementById('result').innerHTML= text
 }