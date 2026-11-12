
const form = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");

let items = JSON.parse(
    localStorage.getItem("schoolItems") || "[]"
);

function displayItems() {
    itemList.innerHTML = "";

    items.forEach(function(item) {
        const card = document.createElement("div");

        const heading = document.createElement("h3");
        heading.textContent = item.name;

        const status = document.createElement("p");
        status.textContent = "Status: " + item.type;

        const description = document.createElement("p");
        description.textContent = item.description;

        const location = document.createElement("p");
        location.textContent = "Location: " + item.location;

        card.append(heading, status, description, location);
        itemList.appendChild(card);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newItem = {
        name: document.getElementById("itemName").value,
        type: document.getElementById("itemType").value,
        description: document.getElementById("description").value,
        location: document.getElementById("location").value
    };

    items.push(newItem);

    localStorage.setItem(
        "schoolItems",
        JSON.stringify(items)
    );

    form.reset();
    displayItems();

    alert("Your report has been submitted!");
});

displayItems();
