const selectShipFrom = document.getElementById("selectShipFrom");

let customer_destination_ship_from = new Array;

for (var i = 0; i < selectShipFrom.length; i++) {
    customer_destination_ship_from.push([[selectShipFrom[i].value],[]]);
};

const selectShipFromAddress = document.getElementById("selectShipFromAddress");
for (var i = 0; i < selectShipFromAddress.length; i++) {
    for (var j = 0; j < customer_destination_ship_from.length; j++) {
        if (customer_destination_ship_from[j][0] == selectShipFromAddress[i].getAttribute("customer_id")) {
            customer_destination_ship_from[j][1].push(selectShipFromAddress[i].text);
            break;
        };
    };
};

let destinations_ship_from = {};

for (var i = 0; i < customer_destination_ship_from.length; i++) {
    destinations_ship_from[customer_destination_ship_from[i][0]] = customer_destination_ship_from[i][1];
};

selectShipFrom.addEventListener("change", function() {
    const selectedDestination = destinations_ship_from[this.value];

    while (selectShipFromAddress.length > 0) {
        selectShipFromAddress.options.remove(0);
    }

    let option = new Option("Select Ship From Address", "Select Ship From Address");
    selectShipFromAddress.appendChild(option);
    
    Array.from(selectedDestination).forEach(function(element) {
        option = new Option(element, element);

        selectShipFromAddress.appendChild(option);
    })

});

const btn = document.getElementsByName("button")[0];
btn.addEventListener("click", function() {
    confirm("Are you sure you want to place an order for a truck?");
})