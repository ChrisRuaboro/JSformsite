// Get everything from form at once and instantiate it.
document.getElementById("myForm").addEventListener("submit", function (event) {
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
    const defaultPic = "https://www.stockphotosecrets.com/wp-content/uploads/2018/08/hide-the-pain-stockphoto-840x560.jpg";
    // building conatiner for card
    let card = document.createElement("div");
    card.classList = "travelCard";
    // we want the image to show first so create image element
    let buildImg = document.createElement("img");
    buildImg.style.width = '20px';
    buildImg.style.height = '30px';
    if (img === null) {
    buildImg.src = img;
    }
    else {
    buildImg.src = defaultPic;
    }
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
    editBtn.innerHTML = "EDIT";
    //TODO: create edit function
    editBtn.onclick = editCard();
    card.appendChild(editBtn);
    let removeBtn = document.createElement("button")
    removeBtn.type(button);
    removeBtn.innerHTML = "REMOVE";
    //TODO: create remove function
    removeBtn.onclick = removeCard();
    card.appendChild(removeBtn);
    document.getElementById("destinations").appendChild(card);
}

function editCard() {

}

function removeCard(){

}