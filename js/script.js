$( document ).ready(function() {
    console.log( "ready!" );

    // var click_count = 0;
    function catClicked(event){
        // for (var i = 1; i < 3; i ++) {
        //     num = i;
        //     $("#cat"+i).append("<p>"+cat_object[i].name+"</p>")
        //     // $("#cat2").append("<p>"+cat_object[prop].name+"</p>")
        //     $("#cat").each(function(){
        //         console.log("click", event);
        //
        //         $(this).click(function(){
        //             console.log("clicked");
        //         }) ;
        //
        //     }) ;
        // }
        console.log(event);

    }

    var cat_object = {
        "1": {
            name: "cat1",
            click_count: 0
        },
        "2": {
            name: "cat2",
            click_count: 0
        }
    };




    $("#cat-list").on("click", catClicked);
});
