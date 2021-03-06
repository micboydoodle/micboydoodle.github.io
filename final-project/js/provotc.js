var eventsSection = document.querySelector(".info");

                var requestURL = "https://micboydoodle.github.io/final-project/js/temple.json";
                var request = new XMLHttpRequest();
                request.open("GET", requestURL);
                request.responseType = "json";
                request.send();

                request.onload = function () {
                    var eventInfo = request.response;
                    showEvents(eventInfo);
                }

function showEvents(eventInfo) {
    var eventDetails = eventInfo["temples"];

    for (i=0; i < eventDetails.length; i++) {
        if (eventDetails[i].name === "provo-city") {
            var eventArticle = document.createElement("article");
            var list = document.createElement("ul");
            var townEvents = eventDetails[i].events;

            for (j=0; j < townEvents.length; j++) {
                var eventItem = document.createElement("li");
                eventItem.textContent = townEvents[j];
                eventItem.className = "info-article"
                list.appendChild(eventItem);
            }

            eventArticle.appendChild(list);
            eventsSection.appendChild(eventArticle);
            
        }

    }
}