/**
 * Created by Wynn Drahorad on 1/16/2015.
 */

window.onload = function () {

    // element variables
    var streets_box = document.getElementById("streets");
    var routes_box = document.getElementById("routes");
    var go_button = document.getElementById("go");
    var answer_span = document.getElementById("answer");

    var streets = [];


    var parseStreets = function () {
        /*
         *  Takes list of streets, creates array "streets" of street object from each line.
         *  Each object has values "intersection1", "intersection2", "name", "t1", "t2", "t3", "t4"
         */

        // create array "input_lines" containing each line of input
        var input_lines = streets_box.value.split("\n");

        // loop through "input_lines"
        for (var line in input_lines) {

            // split each line into street elements
            var street_elements = line.split("\s");

            // store street elements in street object
            var street = {
                "t4": street_elements.pop(),
                "t3": street_elements.pop(),
                "t2": street_elements.pop(),
                "t1": street_elements.pop(),
                "name": street_elements.pop(),
                "intersection1": street_elements.pop(),
                "intersection2": street_elements.pop()
            };

            // add street to master list of streets
            streets.push(streets);
        }

        return(streets);
    };

    var parseRoutes = function () {
        /*
        *  Takes list of routes, then creates array "routes" of route object from each line.
        *  Each route object has values "origin", "destination", "time"
        */
        var routes = [];



        return(routes);
    };

};