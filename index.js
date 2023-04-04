
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Once the DOM loads, we render the first film automatically on the page.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.addEventListener("DOMContentLoaded", ()=> {
  
  //fetching data again to render each film property.
  fetch("http://localhost:3000/films/1")
  .then(res => res.json())
  .then(firstFilm => {
    const card = `
    <h3>${firstFilm.title}</h3>
    <img src="${firstFilm.poster}"/>
    <p><h4>Description</h3>${firstFilm.description}</p>
    <p>Showtime: ${firstFilm.showtime}</p>
    <p>Runtime: ${firstFilm.runtime}</p>
    `;
    //append the card variable to the innerHTML of #renderMovies
    const movieElement = document.getElementById("renderMovies");
    movieElement.innerHTML = card;

    //Render the ticket section here when the page DOM loads
    const filmTicket = `
    <h3>Ticket Section</h3>
    <label for capacity>Total Capacity:<lable>
    <p id="capacity">${firstFilm.capacity}</p>

    <label for tickets_sold>Tickets Sold:<lable>
    <p id="tickets_sold">${firstFilm.tickets_sold}</p>

    <label for buyTickets>Buy Tickets</label>
    <input id="buyTickets" type="number"></input>
    <input id="button" type="submit" value="Buy"></input>
    `;
    document.getElementById("tickets").innerHTML = filmTicket

    fetchData()
    updateTickets()
        
  })
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//create a function to fetch data from the server
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function fetchData(){
  fetch("http://localhost:3000/films")
  .then(res => res.json())
  .then(data => data.forEach(filmData => renderList(filmData)))
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//create a function that renders films on the console
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function renderList(filmData){
  const li = document.createElement("li")
  li.id = filmData.id

  li.textContent = filmData.title
  document.getElementById("movielist").appendChild(li)
  
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//create a function that renders the movies after listening to a click event
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.getElementById("movielist").addEventListener("click", (event) => {
  
  //console.log(`i have been cliked at ${event.target.id}`)

  //fetching data again to render each film property.
  fetch(`http://localhost:3000/films/${event.target.id}`)
  .then(res => res.json())
  .then(film => {
    const card = `
    <h3>${film.title}</h3>
    <img src="${film.poster}"/>
    <p><h4>Description</h3>${film.description}</p>
    <p>Showtime: ${film.showtime}</p>
    <p>Runtime: ${film.runtime}</p>    
    `;

    //append the card variable to the innerHTML of #renderMovies
    const movieElement = document.getElementById("renderMovies");
    movieElement.innerHTML = card;

    //render the tickets section here
    const filmTicket = `
    <h3>Ticket Section</h3>

    <label for capacity>Total Capacity:<lable>
    <p id="capacity">${film.capacity}</p>

    <label for tickets_sold>Tickets Sold:<lable>
    <p id="tickets_sold">${film.tickets_sold}</p>
    
    <label for buyTickets>Buy Tickets</label>
    <input id="buyTickets" type="number"></input>
    <input id="button" type="submit" value="Buy"></input>
    `;
    document.getElementById("tickets").innerHTML = filmTicket

    updateTickets()
  })
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//create a function that renders the tickets section
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function updateTickets(){

  document.getElementById("button").addEventListener("click", event => {
    event.preventDefault()
  
    const input = parseInt(document.getElementById("buyTickets").value);
    console.log("hello")
    const soldTickets = parseInt(document.getElementById("tickets_sold").textContent);
    const cinemaCapacity = parseInt(document.getElementById("capacity").textContent); 
    const availableTicket = cinemaCapacity - soldTickets; 



    const checkInput = isNaN(input);

    if(checkInput === false){

      if(input > availableTicket){
        alert(`We only have ${availableTicket} tickets remaining`)
      } else {
        const newSoldTickets = soldTickets + input
        console.log(newSoldTickets)
        document.getElementById("tickets_sold").textContent = newSoldTickets;
        
      }

    } else {
      alert("Enter a valid number");
    }
  
    
  
  })

}



/////Needs to be looked at really well