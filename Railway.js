const  prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
function afficherMenu() 
{
        console.log(`
        ================================= 
                RAILWAY MANAGER 
        ================================= 
        1. Afficher les trajets 
        2. Acheter un ticket 
        3. Afficher les tickets 
        4. Annuler un ticket 
        5. Rechercher un ticket 
        6. Filtrer les trajets 
        7. Trier les trajets 
        0. Quitter `);
    }

function AfficherTrajets () {
    console.log('=== TRAJETS DISPONIBLES === ');
            for (let i = 0; i < trips.length; i++) {
                console.log(` 
                id: ${trips[i].id}
                departure: ${trips[i].departure}
                destination: ${trips[i].destination}
                departureTime: ${trips[i].departureTime}
                arrivalTime: ${trips[i].arrivalTime}
                price: ${trips[i].price}
                availableSeats: ${trips[i].availableSeats}
                `);
            }
}

let tickets = []; 

function AcheterTicket(){
    let Fullname= (prompt('Entrer ton nom : '));
    let tripId=Number (prompt("Entrer L'id de Trajet : "));
    let id_exist = false ;
    let trip;
    for (let i = 0 ; i < trips.length ; i++) {
        if (tripId === trips[i].id){
            id_exist = true;
            trip = trips[i];
            if (trip.availableSeats <= 0 ) {
            console.log(`Train complet.`)
         }
            else {
                tickets.push({id : tickets.length + 1 ,
                    passengerName : Fullname ,
                    tripId : tripId , 
                    price : trip.price ,
                    seatNumber : (50) - (trip.availableSeats) + 1
                }) 
                trip.availableSeats --
                let Newticket = tickets[tickets.length - 1];
                console.log(`Ticket acheter avec succès.
                    Ticket #${Newticket.id}
                    Passager : ${Newticket.passengerName}
                    Trajet : ${trip.departure} → ${trip.destination}
                    place : ${Newticket.seatNumber}
                    prix : ${trip.price}`)
            }
        } 
    }
    if(id_exist == false){
        console.log('Trajet introuvable !')
    }
}

function Afficherticket() {
    if (tickets.length <= 0 ){
        console.log('Aucun ticket enregistré.')
    } 
    else {
        console.log('=== TICKETS === ');
        for (let i=0 ; i < tickets.length ; i++) {
            let index=tickets[i].tripId;
            console.log(`
            Ticket #${tickets[i].id}
            Passager : ${tickets[i].passengerName}
            Trajet : ${trips[index-1].departure} → ${trips[index - 1].destination}
            Place : ${tickets[i].seatNumber}
            Prix : ${tickets[i].price} 
            `)
        }
    }
}

function AnnulerTickets () {
    let removeticket=Number (prompt("Entrez L'id de votre ticket : "));
    let trouve=false;
    for (let i=0 ; i <tickets.length ; i++ ){
        if (removeticket == tickets[i].id){
                const ticket = tickets[i];
                const trip = trips[ticket.tripId - 1];
                trip.availableSeats++;
                tickets.splice(i,1);
                trouve=true;
                console.log(`Identifiant du ticket : ${removeticket} 
                Ticket annulé avec succès.`)
                break;
        }
    }

     if (trouve==false){
            console.log('Ticket introuvable.');
    }
}
let choix;

do{
    afficherMenu();
    choix = Number(prompt('Votre choix : '));
    switch (choix) {
        case 1:
            AfficherTrajets();
            break;
        case 2:
            AcheterTicket();
            break;
        case 3:
            Afficherticket() ;
            break;
        case 4 :
            AnnulerTickets(); 
        }
}while(choix != 0); 
