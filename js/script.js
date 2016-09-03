$( document ).ready(function() {
    console.log( "ready!" );

    var click_count = 0;

    var cat_object = {
        cat1: {
            name: "cat1"
        },
        cat2: {
            name: "cat2"
        }
    };


    $("#cat").click(function(event){
        console.log("click", event);
        // event.preventDefault();
        console.log("clicked", click_count++);
    });

    $("#cat1").append("<p>"+cat_object.cat1.name+"</p>")
    $("#cat2").append("<p>"+cat_object.cat2.name+"</p>")

    // $("#cat1").click();
});
