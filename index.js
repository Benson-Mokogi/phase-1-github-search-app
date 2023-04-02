/*
See the first movie's details, including its
 1. poster, 
 2. title, 
 3. runtime,
 4. showtime, 
 5. available tickets** when the page loads. The number of

   available tickets will need to be derived by subtracting the number of

   `tickets_sold` from the theater's `capacity`.
   
 */


// function updateTickets(){

// }


function tickets(){
    
    const seats = 30
    let ticket_sold = 0
    let ticket_available = seats - ticket_sold
    
    const div = document.createElement("div")
    div.id = "ticketsid"


    
    const ticket = `

    <label for seats>Seats Available:</label>
    <p id="seats">${seats}</p>

    <label for availableTickets>Available Tickets:</label>
    <p id="availableTickets">${ticket_available}</p>

    <label for soldTickets>Sold Tickets:</label>
    <p id="soldTickets">${ticket_sold}</p>

    <label for buyticket>Buy Ticket</label>
    <input id="buyticket" type="number"></input>

    <input id="button" type="submit" value="Buy"></input>
    `;
    div.innerHTML = ticket
    document.getElementById("tickets").appendChild(div)

}



function renderMovies(movieData){
    
    const li = document.createElement("li");
    const movieli = document.createElement("p")
    
    
    const moviesCard = `
    <div id="moviesRenders">
    <p><h4>Title:</h4> ${movieData.id}. ${movieData.title}</p>
    <img id="image" src=${movieData.poster}/>
    <h3>Description</h3>
    <p>${movieData.description}</p>
    <p>Runtime: ${movieData.runtime}</p>
    <p>Showtime: ${movieData.showtime}</p>
    </div>    
    `;
    li.innerHTML= moviesCard;
    document.getElementById("movieslist").appendChild(li)

    movieli.textContent = `${movieData.id}. ${movieData.title}`
    document.getElementById("repos-list").appendChild(movieli)
    
}


function fetchMovies(){
    //console.log("I'll be creating a movies app")
     fetch("http://localhost:3000/Movies")
    .then(res => res.json())
    .then(data => data.forEach(movieData => renderMovies(movieData)))
    .catch(error => {
         console.log(error)
         return error;
     })

     tickets()
     document.querySelector("#button").addEventListener("click", event => {
        event.preventDefault()
       // console.log("hello")
       const seatsAvailable = parseInt(document.querySelector("#seats").textContent);
       let availableTicket = parseInt(document.querySelector("#availableTickets").textContent);
       let soldTicket = parseInt(document.querySelector("#soldTickets").textContent);
       let toBuy = parseInt(document.querySelector("#buyticket").value);

       console.log(availableTicket)
       console.log(toBuy)

       if(toBuy > availableTicket){
        console.log(`We're sorry, only ${availableTicket} tickets are available`)
        return;
       } else {
        console.log(`You've bought ${toBuy} tickets`)
        console.log(toBuy > availableTicket)

        document.querySelector("#availableTickets").textContent = seatsAvailable - toBuy;
        document.querySelector("#soldTickets").textContent=toBuy;
        
        //soldTicket = soldTicket

        ticket_available = availableTicket - soldTicket

       }

       
     })
}
fetchMovies()



