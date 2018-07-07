$(document).ready(function () {



// starting variables used to render game 
    var totalDollars = 0;
    var totalHits = 0;
    var refresh = 0;
    var rank1 = 0;
    var rank2 = 0;
    var rank3 = 0;

// renders game with everything set to 0
    function renderHTML() {
        $(".clickBtn").html("<button class='clickBtn'> refresh </button>")
        $(".rankOne").html("<button class='ranks rankOne'> rank1 " + rank1 + "</button>")
        $(".rankTwo").html("<button class='ranks rankTwo'> rank2 " + rank2 + "</button>")
        $(".rankThree").html("<button class='ranks rankThree'> rank3 " + rank3 + "</button>")
        $(".totalHits").html("<h2 class='totalHits'>Total Hits: " + totalHits + "</h2>");
        timer();
    }

    renderHTML();


// timer variables 

    var counter = 0;
    var perSec;
    var perSecRank1;
    var perSecRank2;
    var perSecRank3;

// counter variables
    var counterRank1 = 0;
    var rank1Total = 0;
    var counterRank2 = 0;
    var rank2Total = 0;
    var counterRank3 = 0;
    var rank3Total = 0;



// rank 1 counter, runs everytime rank 1 is clicked
    function rank1Counter() {
        clearInterval(perSecRank1)
        perSecRank1 = setInterval(increment, 1000);
        function increment() {
            if(counterRank1 >= 0) {
                counterRank1++;
                rank1Total = rank1 * counterRank1;

                console.log(rank1Total);
            }
        }
    }

// rank 2 counter, runs everytime rank 2 is clicked
    function rank2Counter() {
        clearInterval(perSecRank2)
        perSecRank2 = setInterval(increment, 1000);
        function increment() {
            if(counterRank2 >= 0) {
                counterRank2++;
                rank2Total = rank2 * counterRank2;
            }
        }
    }

// rank 3 counter, runs everytime rank 3 is clicked
    function rank3Counter() {
        clearInterval(perSecRank3)
        perSecRank3 = setInterval(increment, 1000);
        function increment() {
            if(counterRank3 >= 0) {
                counterRank3++;
                rank3Total = rank3 * counterRank3;
            }
        }
    }



// this is the game timer, it totals your score and renders it. 
    function timer() {
        clearInterval(perSec)
        perSec = setInterval(increment, 1000);
        function increment() {
            if(counter >= 0) {
                counter++;
                totalHits = refresh + rank1Total + rank2Total + rank3Total;
            }
        
        $(".totalHits").html("<h2 class='totalHits'>Total Hits: " + totalHits + "</h2>");
        $(".timer").html(counter);
        }
    }
 
//button listeners, will increase based on each rank

    $(".clickBtn").click(function () {
        refresh++;
        $(".clickBtn").html("<button class='clickBtn'> Refresh </button>")
    });

    $(".rankOne").click(function () {
        rank1 += 1;
        counterRank1 = 0;
        rank1Counter();
       $(".rankOne").html("<button class='ranks rankOne'> rank1 " + rank1 + "</button>")
    });

    $(".rankTwo").click(function () {
        rank2 += 2;
        rank2Counter();
       $(".rankTwo").html("<button class='ranks rankTwo'> rank2 " + rank2 + "</button>")
    });

    $(".rankThree").click(function () {
        rank3 += 8;
        rank3Counter();
       $(".rankThree").html("<button class='ranks rankThree'> rank3 " + rank3 + "</button>")
    });









});