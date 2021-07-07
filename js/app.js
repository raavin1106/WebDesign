const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('.hamburger').classList.toggle('active');
    selectElement('.nav-list').classList.toggle('active');
});

var map;
var canberraCenter = new google.maps.LatLng(-35.2792284, 149.1321033);
function initMap() {
    var canberraMap = {
        center: { lat: 41.21332, lng: -100.373692 },
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    
    map = new google.maps.Map(document.getElementById('googleMap'), canberraMap);

    
    var markers = [
        {
            // For IBM
            coords: { lat: 41.134582, lng: -73.717445 },
            content:
                ' <h1>IBM</h1>' +
                ' <img src="./images/ibm.png" ' +
                ' style="float:left; width:25%; margin-right:10px;">' +
                ' <p>Short for <b>International Business Machines,</b> the largest computer company in the world. <b>IBM</b> started in 1911 as a producer of punch card tabulating machines. In 1953, it introduced its first computer, the 701. During the 60s and 70s, IBM came to dominate the new field of mainframe and minicomputers.' +
                ' </p>'
        },
        {
            // for Google
            coords: { lat: 37.396785, lng: -122.083686 },
            content:
                ' <h1>Google</h1>' +
                ' <img src="./images/google.jpg" ' +
                ' style="float:left; width:25%; margin-right:10px;">' +
                ' <p><b>Google</b> Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock.' +
                ' </p>'
        },
        {
            // for Microsoft
            coords: { lat: 47.678861, lng: -122.127053 },
            content:
                ' <h1>Microsoft</h1>' +
                ' <img src="./images/microsoft.jpg" ' +
                ' style="float:left; width:25%; margin-right:10px;">' +
                ' <p><b>Microsoft</b>, technology corporation that focuses on the development and implementation of software used on computers and on the World Wide Web. The companys Microsoft Windows operating system is the most widely used operating system in the world. The company was founded in 1975 by former CEO Bill Gates.' +
                ' </p>'
        },
        {
            // for Amazon
            coords: { lat: 47.600337, lng: -122.324937 },
            content:
                ' <h1>Amazon</h1>' +
                ' <img src="./images/amazon.jpg" ' +
                ' style="float:left; width:25%; margin-right:10px;">' +
                ' <p>On July 5, 1994, Bezos initially incorporated the company in Washington State with the name Cadabra, Inc. He later changed the name to Amazon.com, Inc. a few months later, after a lawyer misheard its original name as "cadaver". ' +
                ' </p>'
        },
        {
            // for Oracle
            coords: { lat: 37.479506, lng: -122.230197 },
            content:
                ' <h1>Oracle</h1>' +
                ' <img src="./images/oracle.png" ' +
                ' style="float:left; width:25%; margin-right:10px;">' +
                ' <p>Larry Ellison co-founded Oracle Corporation in 1977 with Bob Miner and Ed Oates under the name Software Development Laboratories (SDL). Ellison took inspiration from the 1970 paper written by Edgar F. Codd on relational database management systems (RDBMS) named "A Relational Model of Data for Large Shared Data Banks". ' +
                ' </p>'
        },
        {
            //for SAS
            coords: { lat: 35.772452, lng: -78.79185 },
            content:
                ' <h1>SAS</h1>' +
                ' <img src="./images/sas.jpg" ' +
                ' style="float:left; width:25%; margin-right:10px;">' +
                ' <p><b>SAS</b> (previously "Statistical Analysis System") is a statistical software suite developed by SAS Institute for advanced analytics, multivariate analysis, business intelligence, criminal investigation, data management, and predictive analytics. ' +
                ' </p>'
        }
    ];

    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }
    }
}

google.maps.event.addDomListener(window, 'load', initMap);