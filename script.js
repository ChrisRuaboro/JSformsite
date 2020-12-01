// Get everything from form at once and instantiate it.
document.getElementById("myform").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Data is gucci");
    let inputDestinationName = event.target.destinationname.value;
    let inputLocation = event.target.location.value;
    let inputTravelImage = event.target.travelImage.value;
    let inputDescription = event.target.description.value;
    // Implement input validation for travelImage
    buildCard(inputDestinationName, inputLocation, inputTravelImage, inputDescription);
});

function buildCard(name, loc, img, desc) {
    // building conatiner for card
    let card = document.createElement("div");
    card.classList = "travelCard";
    // we want the image to show first so create image element
    let buildImg = document.createElement("img");
    buildImg.src = img;
    buildImg.alt = loc;
    card.appendChild(buildImg);
    // Display name
    let buildName = document.createElement("p");
    buildName.innerHTML = name;
    card.appendChild(buildName);
    // Display location
    let buildLoc = document.createElement("p");
    buildName.innerHTML = loc;
    card.appendChild(buildLoc);
    // Display description
    let buildDesc = document.createElement("p");
    buildName.innerHTML = desc;
    card.appendChild(buildDesc);

    let editBtn = document.createElement("button")
    editBtn.type(button);
    //TODO: create edit function
    editBtn.onclick = editFunction();
    card.appendChild(editBtn);
    let removeBtn = document.createElement("button")
    removeBtn.type(button);
    //TODO: create remove function
    removeBtn.onclick = removeFunction();
    card.appendChild(removeBtn);
    document.getElementById("destinations").appendChild(card);
}