const whatsappNumber = "8801675550131";

const perfumes = [

    {
        name: "Hawas Fire",

        prices: {
            "5ml": "320 Taka",
            "10ml": "620 Taka",
            "30ml": "1800 Taka"
        },

        available: true
    },

    {
        name: "Hawas Kobra",

        prices: {
            "5ml": "250 Taka",
            "10ml": "480 Taka",
            "30ml": "1250 Taka"
        },

        available: true
    },

    {
        name: "Opulent Dubai",

        prices: {
            "5ml": "200 Taka",
            "10ml": "380 Taka",
            "30ml": "980 Taka"
        },

        available: true
    },

    {
        name: "Liquid Brun",

        prices: {
            "5ml": "320 Taka",
            "10ml": "620 Taka",
            "30ml": "1800 Taka"
        },

        available: true
    },

    {
        name: "Odyssey Limoni",

        prices: {
            "5ml": "270 Taka",
            "10ml": "520 Taka",
            "30ml": "1500 Taka"
        },

        available: true
    }

];


const container =
    document.getElementById("perfume-container");


perfumes.forEach(perfume => {

    const availabilityText =
        perfume.available
            ? "● In Stock"
            : "● Out of Stock";


    const availabilityClass =
        perfume.available
            ? "available"
            : "unavailable";


    const whatsappMessage =
        `Hello! I am interested in ${perfume.name}.`;


    const whatsappLink =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    const card =
        document.createElement("div");


    card.classList.add("perfume-card");


    card.innerHTML = `

        <h2 class="perfume-name">
            ${perfume.name}
        </h2>


        <div class="price-table">

            <div class="price-row">
                <span>5 ml</span>
                <span class="price">
                    ${perfume.prices["5ml"]}
                </span>
            </div>


            <div class="price-row">
                <span>10 ml</span>
                <span class="price">
                    ${perfume.prices["10ml"]}
                </span>
            </div>


            <div class="price-row">
                <span>30 ml</span>
                <span class="price">
                    ${perfume.prices["30ml"]}
                </span>
            </div>

        </div>


        <div class="availability ${availabilityClass}">
            ${availabilityText}
        </div>


        <a
            class="whatsapp-button"
            href="${whatsappLink}"
            target="_blank"
        >
            Order via WhatsApp
        </a>

    `;


    container.appendChild(card);

});