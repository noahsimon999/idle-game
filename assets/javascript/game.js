$(document).ready(function () {


    // total dollars
    // $0.00 / second
    // hit/sec
    // total hits
    // refresh button

    var totalDollars = 0;
    var totalHits = 0;
    var refresh = 0;
    var rank1 = 0;
    var rank2 = 0;
    var rank3 = 0;
    var counter = 0;
    var perSec;


    $(".clickBtn").click(function () {
        refresh++;
        $(".clickBtn").html("<button class='clickBtn'> Refresh </button>")
        calc();
    });

    $(".rankOne").click(function () {
        rank1 += 1;
       $(".rankOne").html("<button class='ranks rankOne'> rank1 " + rank1 + "</button>")
    });

    $(".rankTwo").click(function () {
        rank2 += 2;
       $(".rankTwo").html("<button class='ranks rankTwo'> rank2 " + rank2 + "</button>")
    });

    $(".rankThree").click(function () {
        rank3 += 8;
       $(".rankThree").html("<button class='ranks rankThree'> rank3 " + rank3 + "</button>")
    });

    function calc() {
        totalHits = refresh + rank1 + rank2 + rank3;


        $(".totalHits").html("<h2 class='totalHits'>Total Hits: " + totalHits + "</h2>");

    }


    function renderHTML() {
        $(".clickBtn").html("<button class='clickBtn'> refresh </button>")
        $(".rankOne").html("<button class='ranks rankOne'> rank1 " + rank1 + "</button>")
        $(".rankTwo").html("<button class='ranks rankTwo'> rank2 " + rank2 + "</button>")
        $(".rankThree").html("<button class='ranks rankThree'> rank3 " + rank3 + "</button>")
        timer();
    }
    renderHTML();


    function timer() {
        clearInterval(perSec)
        perSec = setInterval(increment, 1000);
        function increment() {
            if(counter >= 0) {
                counter++;
            }
        $(".timer").html(counter);
        }
    }


    //make button
    // total bought
    // title
    // price (updates)








});