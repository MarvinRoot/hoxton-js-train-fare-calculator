const pricePerKilometer = 0.21 //TICKET PRICE PER KILOMETER

const age = Number(prompt(`How old are you?`))

//Ticket price if the user wants to visit SIRIUS BLACK 
const azkabanTicketPrice = 23*pricePerKilometer
const azkabanTicketPriceDiscount18 = azkabanTicketPrice-((azkabanTicketPrice*20)/100)
const azkabanTicketPriceDiscount65 = azkabanTicketPrice-((azkabanTicketPrice*40)/100)

let destination = confirm("Is your destination Azkaban?\nDistance: 23km")
if (destination && age < 18) {
    alert(`Your ticket price is: £ ${azkabanTicketPriceDiscount18.toFixed(2)}`)
}else if(destination && age > 65) {
    alert(`Your ticket price is: £ ${azkabanTicketPriceDiscount65.toFixed(2)}`)
}else if(destination){
    alert(`Your ticket price is: £ ${azkabanTicketPrice.toFixed(2)}`)
}else{

//Ticket price if the user wants to visit CORNELIUS FUDGE
const ministryOfMagicTicketPrice = 88*pricePerKilometer
const ministryOfMagicTicketPriceDiscount18 = ministryOfMagicTicketPrice-((ministryOfMagicTicketPrice*20)/100)
const ministryOfMagicTicketPriceDiscount65 = ministryOfMagicTicketPrice-((ministryOfMagicTicketPrice*40)/100)

let destination2 = confirm("Is your destination Ministry of Magic?\nDistance: 88km")
if (destination2 && age < 18) {
    alert(`Your ticket price is: £ ${ministryOfMagicTicketPriceDiscount18.toFixed(2)}`)
}else if(destination2 && age > 65) {
    alert(`Your ticket price is: £ ${ministryOfMagicTicketPriceDiscount65.toFixed(2)}`)
}else if(destination2){
    alert(`Your ticket price is: £ ${ministryOfMagicTicketPrice.toFixed(2)}`)
}else{


//Ticket price if the user wants to buy a MAGIC STICK or a fuckin FLYING BROOM NIMBUS 2000
const diagonAlleyTicketPrice = 120*pricePerKilometer
const diagonAlleyTicketPriceDiscount18 = diagonAlleyTicketPrice-((diagonAlleyTicketPrice*20)/100)
const diagonAlleyTicketPriceDiscount65 = diagonAlleyTicketPrice-((diagonAlleyTicketPrice*40)/100)

let destination3 = confirm("Is your destination Diagon Alley?\nDistance: 120km")
if (destination3 && age < 18) {
    alert(`Your ticket price is: £ ${diagonAlleyTicketPriceDiscount18.toFixed(2)}`)
}else if(destination3 && age > 65) {
    alert(`Your ticket price is: £ ${diagonAlleyTicketPriceDiscount65.toFixed(2)}`)
}else if(destination3){
    alert(`Your ticket price is: £ ${diagonAlleyTicketPrice.toFixed(2)}`)
}else{


//Ticket price if the user wants to be a WIZARD
const HogwartsTicketPrice = 300*pricePerKilometer
const HogwartsTicketPriceDiscount18 = HogwartsTicketPrice-((HogwartsTicketPrice*20)/100)
const HogwartsTicketPriceDiscount65 = HogwartsTicketPrice-((HogwartsTicketPrice*40)/100)

let destination4 = confirm("Is your destination Hogwarts?\nDistance: 300km")
if (destination4 && age < 18) {
    alert(`Your ticket price is: £ ${HogwartsTicketPriceDiscount18.toFixed(2)}`)
}else if(destination4 && age > 65) {
    alert(`Your ticket price is: £ ${HogwartsTicketPriceDiscount65.toFixed(2)}`)
}else if(destination4){
    alert(`Your ticket price is: £ ${HogwartsTicketPrice.toFixed(2)}`)
}else{


//Ticket price if the user entered the Nine and Three-Quarters Platform by mistake
if(destination==false && destination2==false && destination3==false && destination4==false) {
const distance = Number(prompt(`How far are you traveling?`))

const ticketPrice = distance*pricePerKilometer
const ticketPriceDiscount18 = ticketPrice-((ticketPrice*20)/100)
const ticketPriceDiscount65 = ticketPrice-((ticketPrice*40)/100)

if(age < 18){
    alert(`Your ticket price is: £ ${ticketPriceDiscount18.toFixed(2)}`)
} else if(age > 65) {
    alert(`Your ticket price is: £ ${ticketPriceDiscount65.toFixed(2)}`)
}else {
    alert(`Your ticket price is: £ ${ticketPrice.toFixed(2)}`)
}
}
}
}
}
}
