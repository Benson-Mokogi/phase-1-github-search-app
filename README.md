This JavaScript code is an application for displaying movie information and ticket sales.
Features

    Displays information about movies including the poster, title, runtime, showtime and description.
    Displays the available seats and number of tickets sold and available for purchase.
    Allows users to purchase tickets, which updates the number of available tickets and the number of tickets sold.

Usage

To use this application, you will need to have a server running to provide the movie data. In this code, the server is running on http://localhost:3000/Movies. You can update the server endpoint to match the location of your movie data.

After starting the server, you can run the code to display the movie information and available tickets. You can also purchase tickets by entering the number of tickets you want to buy and clicking the "Buy" button. The code will update the available tickets and number of tickets sold accordingly.
Functionality
renderMovies(movieData)

This function creates an HTML element containing the movie information and appends it to the movieslist element. It also appends the title of the movie to the repos-list element.
tickets()

This function creates an HTML element containing information about the available seats, number of tickets sold, and available tickets. It also creates an input field and button for purchasing tickets. The element is appended to the tickets element.
fetchMovies()

This function fetches the movie data from the server and calls the renderMovies() and tickets() functions to display the movie information and available tickets. It also adds an event listener to the "Buy" button to handle ticket purchases.