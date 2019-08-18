$( document ).ready(function(){
    
    var Random = Math.floor(Math.random()*150 + 13);
    // Chosses random number to start with when the game begins.
    // The numbers shown above should be between 13 -150

    $('#random-number').text(Random);  
    // grabs the random number id within the html document

    var randomNumber1 = Math.floor(Math.random()*12+1);
    var randomNumber2 = Math.floor(Math.random()*12+1);
    var randomNumber3 = Math.floor(Math.random()*12+1);
    var randomNumber4 = Math.floor(Math.random()*12+1);
    // Sets up the the random numbers to every crystal being used
    // The random generated number will be within 1 - 13

    var winnersTotal= 0;
    var wins= 0;
    var losses = 0; 
    // Setting values for the tallies

    $('#numberOfWins').text(wins);
    $('#numberOfLosses').text(losses);
    //restarts my game

    function reset(){

        Random=Math.floor(Math.random()*150+13);
        console.log(Random)
        $('#random-number').text(Random);

        randomNumber1 = Math.floor(Math.random()*12+1);
        randomNumber2 = Math.floor(Math.random()*12+1);
        randomNumber3 = Math.floor(Math.random()*12+1);
        randomNumber4 = Math.floor(Math.random()*12+1);

        winnersTotal = 0
        userTotal = 0
        $('#score').text(winnersTotal);
    }
    // Adds the wins to the winnersTotal

    function yes() {
        alert("you won!");
        wins++;
        $('#wins-total').text(wins);
        reset()
    }
    // Counts up losses for winnersTotal
    function loser (){
        alert("you lost bud!");
        losses++;
        $('#losses-total').text(losses);
        reset()
    }

    //Clicks for Crystals
    $('#one').on ('click', function(){
        winnersTotal = winnersTotal + randomNumber1;

        $('#score').text(winnersTotal);

        //this sets the win/lose 
        if (winnersTotal == Random){
            //you won();
            yes()
        }
        else if (winnersTotal > Random){
            //you lost bud ();
            loser()
        }
    })

    $('#two').on ('click', function(){

        winnersTotal = winnersTotal + randomNumber2;
        
        $('#score').text(winnersTotal)
        
        //this sets the win/lose 
        // one equal sign, ASSIGNMENT 
        // two equal sign, COMPARISON
        // three equal sign, COMPARISON  and TYPE COMPARISON
     
        if (winnersTotal == Random){
            //you won();
            yes()
        }
        else if (winnersTotal > Random){
            //you lost bud ();
            loser()
        }
    })

    $('#three').on ('click', function(){
        winnersTotal = winnersTotal + randomNumber3;
        
        $('#score').text(winnersTotal);
        
        //this sets the win/lose 
        if (winnersTotal == Random){
            //you won();
            yes()
        }
        else if (winnersTotal > Random){
            //you lost bud ();
            loser()
        }
    })

    $('#four').on ('click', function(){
        console.log('asdfasdf')

        winnersTotal = winnersTotal + randomNumber4;
        
        $('#score').text(winnersTotal);
        
        //this sets the win/lose 
        if (winnersTotal == Random){
            //you won();
            yes()
        }
        else if (winnersTotal > Random){
            //you lost bud ();
            loser()
        }
    })      
})
