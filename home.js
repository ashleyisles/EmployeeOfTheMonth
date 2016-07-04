$(document).ready(function () {
        var data = {
            "Employees": [
                {"Name": "Ashley", "Position": "Intern", "Age": "20", "Img": "https://scontent.xx.fbcdn.net/v/t1.0-9/12871475_10204831101497834_623993809185217838_n.jpg?oh=684d241077564db4bb3e0317ac99c82c&oe=57F8D89E"},
                {"Name": "Matthias", "Position": "Design Jesus", "Age": "30", "Img": "http://i3mainz.de/sites/default/files/public/data/matthiasdufner.jpg"},
                {"Name": "Axel", "Position": "East German", "Age": "30", "Img": "http://i3mainz.hs-mainz.de/sites/default/files/public/data/Unbenannt_klein.jpg"},
                {"Name": "Florian", "Position": "Leprechaun", "Age": "29", "Img": "https://dl.dropboxusercontent.com/u/85239194/fts.jpg"},
                {"Name": "Martin", "Position": "Mathematician", "Age": "29", "Img": "https://scontent.xx.fbcdn.net/hprofile-xla1/t5.0-1/373577_367722099963502_1868387164_n.jpg"},
                {"Name": "Thomas", "Position": "The boss", "Age": "41", "Img": "http://i3mainz.de/sites/default/files/public/data/Thomas%2003sw.jpg"},
                {"Name": "Sarah", "Position": "The normal one", "Age": "31", "Img": }
            ],

            "Special_Categories": [
                {"Summer": "Best Beach Body"},
                {"Fall": ""},
                {"Winter": "Best Beard"},
                {"Spring": ""}
            ],

            Categories: [
                "Timeliness",
                "Personal Hygiene"
            ]
        }


        for(var item in data["Employees"])
        {
            $('tbody').append("<tr><td><h4 class='ui image header'><img src= 'http://image.shutterstock.com/z/stock-photo-a-seagull-at-brighton-uk-shallow-depth-of-field-focus-on-the-eyes-224398849.jpg' class='ui mini rounded image'>"
                            + "<div class='content'>" + data["Employees"][item]["Name"]
                            + "<div class='sub header'>" + data["Employees"][item]["Position"] + " </div>"
                            + "</div></h4></td>"
                            + "<td><div id='" + data["Employees"][item]["Name"] +"_rating' class='ui star rating' data-rating='3'></div></td>"
                            + "<td></td></tr>");
        }

        console.log($("#" + data["Employees"][item]["Name"]+ "_rating").rating('get rating'));

        $('.ui.rating') .rating();


        // $('.ui.sidebar').addClass('visible');
});
