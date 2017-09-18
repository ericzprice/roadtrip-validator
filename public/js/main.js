$(document).ready(function(){

var totalCost = 0
var totalWeight = 0
var waterCost = 1
var tentCost = 50
var lanternCost = 50
var chairCost = 15
var waterWeight = 8.0
var tentWeight = 3.5
var lanternWeight = 0.8
var chairWeight = 3.4

// add water button
$( "#add-water" ).click(function() {
    console.log( "Handler for #add-water .click() called." );
    totalCost = totalCost + waterCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight + waterWeight
    console.log('totalWeight',totalWeight);
    checkCargoStatus()
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// remove water button
$( "#remove-water" ).click(function() {
    console.log( "Handler for #remove-water .click() called." );
    totalCost = totalCost - waterCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight - waterWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// add tent button
$( "#add-tent" ).click(function() {
    console.log( "Handler for #add-tent .click() called." );
    totalCost = totalCost + tentCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight + tentWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// remove tent button
$( "#remove-tent" ).click(function() {
    console.log( "Handler for #remove-tent .click() called." );
    totalCost = totalCost - tentCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight - tentWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// add lantern button
$( "#add-lantern" ).click(function() {
    console.log( "Handler for #add-lantern .click() called." );
    totalCost = totalCost + lanternCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight + lanternWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// remove lantern button
$( "#remove-lantern" ).click(function() {
    console.log( "Handler for #remove-lantern .click() called." );
    totalCost = totalCost - lanternCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight - lanternWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// add chair button
$( "#add-chair" ).click(function() {
    console.log( "Handler for #add-chair .click() called." );
    totalCost = totalCost + chairCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight + chairWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});
// remove chair button
$( "#remove-chair" ).click(function() {
    console.log( "Handler for #remove-chair .click() called." );
    totalCost = totalCost - chairCost
    console.log('totalCost',totalCost);
    totalWeight = totalWeight - chairWeight
    checkCargoStatus()
    console.log('totalWeight',totalWeight);
    $("#total-cost").html(`$${totalCost.toFixed(2)}`)
    $("#total-weight").html(`${totalWeight.toFixed(2)} lbs`)
});

// "check cargo status" fuction
var checkCargoStatus = function(){
    if (totalCost <= 0 && totalWeight <= 0) {
        $( "#validate-button" ).addClass( "btn-danger" );
        $( "#validate-button" ).removeClass( "btn-success" );
    }
    else if (totalCost > 200 || totalWeight > 200) {
        $("#cargo-status").html(`Your cargo cost exceeds $200.00, or your weight exceeds 200 lbs. Please remove some cargo.`)
        $( "#validate-button" ).addClass( "btn-danger" );
        $( "#validate-button" ).removeClass( "btn-success" );
    }
    else if (totalCost > 0 && totalCost <= 200 && totalWeight > 0 && totalWeight <= 200) {
        $("#cargo-status").html(`Your cargo cost is under $200.00 & your cargo weight is under 200 lbs. Good to go! Please click the VALIDATE CARGO button.`)
        $( "#validate-button" ).removeClass( "btn-danger" );
        $( "#validate-button" ).addClass( "btn-success" );
    }
}

// VALIDATE CARGO BUTTON
$('#validate-button').click(function(evt) {
    evt.preventDefault();

    // Singular example of a post request
    $.post('/validate-cargo', // url
        {
            weight: totalWeight,
            cost  : totalCost,
        }, // data to be sent to the server
        function(data) { // success function
            $('#validator-status').html(data.message);
            console.log(data);
        }
    );
});
