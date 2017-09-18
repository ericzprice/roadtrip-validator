You're going on a road trip, and you need to plan what you're taking with you.
Create a new route for your roadtrip app, `app.get('/cargo-validator')`, which will serve the HTML page for this assignment. There should be a link from the homepage to `/cargo-validator`.
The user has $200 for supplies, and their vehicle can only hold 200lbs of cargo.
Choose at least four items that the user might take multiple of on their trip (e.g. camera, roll of quarters, spare tire, bag of chips, etc). For each item, you'll need to specify how much it costs, and how much it weighs.

1. gallon jug of water = $1.00 / 8.5 lbs
2. tent = $40.00 / 3.3 lbs
3. lantern = $35.00 / 0.9 lbs
4. camping chair = $20.00 / 3.9 lbs  

Display an image on the page for each item. Next to each image, place buttons that allow the user to add or remove 1 of that item to their vehicle.
Whenever the user adds or removes an item from their vehicle, recalculate the total weight and total cost of all the items added to the vehicle, and display those totals on the screen.
Add a button to the bottom of the page which should validate the cargo.
    - When this button is pressed, first check if the cargo is valid (costs less than $200, weighs less than 200lbs)
    - If the cargo is not valid, display a message on the screen that tells the user if their cargo costs too much, weighs too much, or both.
    - The CSS styles on the button should visually indicate if the form is valid, even before the user clicks on it. For example, if the cargo is invalid, you could put a red border around the button, or set the HTML attribute `disabled=true` on the button.
    - If the cargo is valid, send a post request to `/validate-cargo`, including all the data about how many of each item the user added.
    - The server should then check if the cargo is valid (costs less than $200, weighs less than 200lbs). This may seem redundant, because the client just performed the same logic, but this is necessary for security, because our client-side code can be manipulated by hackers.
    - The server should then send a message back to the client saying if the cargo is valid or not. The client should then display this information on the page.
