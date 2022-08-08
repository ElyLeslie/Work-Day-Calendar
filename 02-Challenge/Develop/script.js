var hourInputEl = $("<textarea>");
var hourBtnEl = $('<button>');
var hourName = $('<h1>');
var newRow = $('<div>')

var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");


function displayTime(){
    
    currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    $("#currentDay").text(currentTime);

}
setInterval(displayTime, 1000);


var hoursTotalEl  = $(".container");
//hoursTotalEl.addClass('row m2 justify-content-center align-items-center')



//hoursTotalEl.addClass('w-25');
var hourArray = [{
    hour: 9,
   todo: '',
},{
    hour: 10,
    todo: '',
},{
    hour: 11,
    todo: '',
},{
    hour: 12,
    todo: '',
},{
    hour: 13,
    todo: '',
},{
    hour: 14,
    todo: '',
},{
    hour: 15,
    todo: '',
},{
    hour: 16,
    todo: '',
},{
    hour: 17,
    todo: '',
},
];


hourArray[0].todo = JSON.parse(localStorage.getItem("userInput1"));
hourArray[1].todo = JSON.parse(localStorage.getItem("userInput2"));
hourArray[2].todo = JSON.parse(localStorage.getItem("userInput3"));
hourArray[3].todo = JSON.parse(localStorage.getItem("userInput4"));
hourArray[4].todo = JSON.parse(localStorage.getItem("userInput5"));
hourArray[5].todo = JSON.parse(localStorage.getItem("userInput6"));
hourArray[6].todo = JSON.parse(localStorage.getItem("userInput7"));
hourArray[7].todo = JSON.parse(localStorage.getItem("userInput8"));
hourArray[8].todo = JSON.parse(localStorage.getItem("userInput9"));




for(i = 0; i < hourArray.length; i++) {
   

    hourInputEl = $("<textarea>");
    hourBtnEl = $('<button>');
    hourName = $('<h1>');
    newRow = $('<div>')
  
  hourInputEl.text(hourArray[i].todo);


    hourInputEl.addClass('col-8 my-1');

    hourInputEl.addClass('hour' + hourArray[i].toString());

    hourName.text(hourArray[i].hour + ":00")

    hourName.addClass("col-2")

    hourInputEl.attr("id", hourArray[i].hour.toString())

    hourBtnEl.addClass('my-3 col-2 btn btn-primary');

    

    hourBtnEl.append('<i class="fas fa-save"></i>');

    hourBtnEl.attr("id", hourArray[i].hour.toString() + "btn")

    newRow.addClass("row")


    newRow.append(hourName);
    newRow.append(hourInputEl);
    newRow.append(hourBtnEl);
    hoursTotalEl.append(newRow);

    
    $("[id=9btn]").on("click", function(event)
     {
        event.stopPropagation();
        event.stopImmediatePropagation();
        hourArray[0].todo = $("[id=9]").val();

       $("[id=9]").val(hourArray[0].todo);
       
        
       localStorage.setItem("userInput1", JSON.stringify(hourArray[0].todo));
       hourArray[0].todo = JSON.parse(localStorage.getItem("userInput1"));

        //testing for functionality
        console.log(hourArray[0].todo);
    })


    $("[id=10btn]").on("click", function(event)
    {
        event.stopPropagation();
        event.stopImmediatePropagation();
        hourArray[1].todo = $("[id=10]").val();

        $("[id=10]").val(hourArray[1].todo);
        
         
        localStorage.setItem("userInput2", JSON.stringify(hourArray[1].todo));
        hourArray[1].todo = JSON.parse(localStorage.getItem("userInput2"));

        console.log("This button was smacked");



   })
   $("[id=11btn]").on("click", function(event)
   {
       hourArray[2].todo = $("[id=11]").val();

       $("[id=11]").val(hourArray[2].todo);


       localStorage.setItem("userInput3", JSON.stringify(hourArray[2].todo));
       hourArray[2].todo = JSON.parse(localStorage.getItem("userInput3"));


       event.stopPropagation();
       event.stopImmediatePropagation();
       console.log("This button was smacked");
  })
  $("[id=12btn]").on("click", function(event)
  {
      event.stopPropagation();
      event.stopImmediatePropagation();


      hourArray[3].todo = $("[id=12]").val();

      $("[id=12]").val(hourArray[3].todo);
      
       
      localStorage.setItem("userInput4", JSON.stringify(hourArray[3].todo));

      hourArray[3].todo = JSON.parse(localStorage.getItem("userInput4"));
      console.log("This button was smacked");
 })

 $("[id=13btn]").on("click", function(event)
     {

     event.stopPropagation();
     event.stopImmediatePropagation();


     hourArray[4].todo = $("[id=13]").val();

     $("[id=13]").val(hourArray[4].todo);
     
      
     localStorage.setItem("userInput5", JSON.stringify(hourArray[4].todo));
     hourArray[4].todo = JSON.parse(localStorage.getItem("userInput5"));
     console.log("This button was smacked");
    })

    $("[id=14btn]").on("click", function(event)
    {

        event.stopPropagation();
        event.stopImmediatePropagation();


        hourArray[5].todo = $("[id=14]").val();

        $("[id=14]").val(hourArray[5].todo);
        
         
        localStorage.setItem("userInput6", JSON.stringify(hourArray[5].todo));
        hourArray[5].todo = JSON.parse(localStorage.getItem("userInput6"));
        hourArray[5].todo = JSON.parse(localStorage.getItem("userInput6"));

        console.log("This button was smacked");
   })

   $("[id=15btn]").on("click", function(event)
   {

    event.stopPropagation();
    event.stopImmediatePropagation();
    hourArray[6].todo = $("[id=15]").val();

    $("[id=15]").val(hourArray[6].todo);
    
     
    localStorage.setItem("userInput7", JSON.stringify(hourArray[6].todo));
    hourArray[6].todo = JSON.parse(localStorage.getItem("userInput7"));

    console.log("This button was smacked");
  })

  $("[id=16btn]").on("click", function(event)
  {

    event.stopPropagation();
    event.stopImmediatePropagation();


    hourArray[7].todo = $("[id=16]").val();

    $("[id=16]").val(hourArray[7].todo);
    
     
    localStorage.setItem("userInput8", JSON.stringify(hourArray[7].todo));
    hourArray[7].todo = JSON.parse(localStorage.getItem("userInput8"));
    


    console.log("This button was smacked");
 })

 $("[id=17btn]").on("click", function(event)
 {

    event.stopPropagation();
    event.stopImmediatePropagation();



    hourArray[8].todo = $("[id=17]").val();

    $("[id=17]").val(hourArray[8].todo);
    
     
    localStorage.setItem("userInput9", JSON.stringify(hourArray[8].todo));
    hourArray[8].todo = JSON.parse(localStorage.getItem("userInput8"));
    console.log("This button was smacked");
})

}


function checkHour() {

    for (var i = 0; i <hourArray.length; i++) {
        

        if (hourArray[i].hour > moment().format('HH'))
        {
            $("[id=" + hourArray[i].hour + "]").addClass('future');
            $("[id=" + hourArray[i].hour + "]").removeClass('past');
            $("[id=" + hourArray[i].hour + "]").removeClass('present');
            newRow.append(hourInputEl);
            newRow.append(hourBtnEl);
            
        } 
        else if (hourArray[i].hour < moment().format('HH')){
            $("[id=" + hourArray[i].hour + "]").addClass('past');
            $("[id=" + hourArray[i].hour + "]").removeClass('future');
            $("[id=" + hourArray[i].hour + "]").removeClass('present');
            newRow.append(hourInputEl);
            newRow.append(hourBtnEl);
        }

        else {
            $("[id=" + hourArray[i].hour + "]").removeClass('future');
            $("[id=" + hourArray[i].hour + "]").removeClass('past');
            $("[id=" + hourArray[i].hour + "]").addClass('present');
            newRow.append(hourInputEl);
            newRow.append(hourBtnEl);

    }
}}
 setInterval(checkHour, 1000);




