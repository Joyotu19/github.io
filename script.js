/* =====================================================
MOHAN PERFUME
PRODUCT INFORMATION

You can change your perfume information here.

===================================================== */

/* =====================================================
WHATSAPP NUMBER

IMPORTANT:
Write your WhatsApp number with country code.

Bangladesh example:

8801XXXXXXXXX

Do NOT use:
+
spaces
------

===================================================== */

const whatsappNumber = "8801XXXXXXXXX";

/* =====================================================
PERFUME PRODUCTS

Change the information below whenever you want.
===================================================== */

const perfumes = [

```
{
    name: "Hawas Kobra",

    style: "Fresh • Fruity • Woody",

    description:
        "A vibrant fragrance with a fresh and modern character.",

    notes: {
        top: "Add top notes here",
        middle: "Add middle notes here",
        base: "Add base notes here"
    },

    smell:
        "Add a description of how Hawas Kobra smells here.",

    bestTime:
        "Daytime • Evening",

    season:
        "Spring • Summer",

    prices: {
        "5ml": "Contact for Price",
        "10ml": "Contact for Price",
        "30ml": "Contact for Price"
    },

    available: true
},


{
    name: "Hawas Fire",

    style: "Warm • Spicy • Aromatic",

    description:
        "A bold fragrance with a warm and energetic character.",

    notes: {
        top: "Add top notes here",
        middle: "Add middle notes here",
        base: "Add base notes here"
    },

    smell:
        "Add a description of how Hawas Fire smells here.",

    bestTime:
        "Evening • Night",

    season:
        "Fall • Winter",

    prices: {
        "5ml": "Contact for Price",
        "10ml": "Contact for Price",
        "30ml": "Contact for Price"
    },

    available: true
},


{
    name: "Opulant Dubai",

    style: "Luxurious • Warm • Oriental",

    description:
        "A rich and sophisticated fragrance with an elegant character.",

    notes: {
        top: "Add top notes here",
        middle: "Add middle notes here",
        base: "Add base notes here"
    },

    smell:
        "Add a description of how Opulant Dubai smells here.",

    bestTime:
        "Evening • Special Occasions",

    season:
        "Fall • Winter",

    prices: {
        "5ml": "Contact for Price",
        "10ml": "Contact for Price",
        "30ml": "Contact for Price"
    },

    available: true
},


{
    name: "Liquid Brun",

    style: "Sweet • Warm • Woody",

    description:
        "A smooth and elegant fragrance with warmth and depth.",

    notes: {
        top: "Add top notes here",
        middle: "Add middle notes here",
        base: "Add base notes here"
    },

    smell:
        "Add a description of how Liquid Brun smells here.",

    bestTime:
        "Evening • Night",

    season:
        "Fall • Winter",

    prices: {
        "5ml": "Contact for Price",
        "10ml": "Contact for Price",
        "30ml": "Contact for Price"
    },

    available: true
},


{
    name: "Odyssey Limoni",

    style: "Citrus • Fresh • Energetic",

    description:
        "A bright and refreshing fragrance with a lively citrus character.",

    notes: {
        top: "Add top notes here",
        middle: "Add middle notes here",
        base: "Add base notes here"
    },

    smell:
        "Add a description of how Odyssey Limoni smells here.",

    bestTime:
        "Daytime • Casual",

    season:
        "Spring • Summer",

    prices: {
        "5ml": "Contact for Price",
        "10ml": "Contact for Price",
        "30ml": "Contact for Price"
    },

    available: true
}
```

];

/* =====================================================
CREATE PRODUCT CARDS
===================================================== */

const container =
document.getElementById("perfume-container");

perfumes.forEach(perfume => {

```
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


    <p class="perfume-style">
        ${perfume.style}
    </p>


    <p>
        ${perfume.description}
    </p>


    <div class="info-section">

        <h4 class="info-title">
            👃 Fragrance Notes
        </h4>

        <p>
            <strong>Top:</strong>
            ${perfume.notes.top}
        </p>

        <p>
            <strong>Middle:</strong>
            ${perfume.notes.middle}
        </p>

        <p>
            <strong>Base:</strong>
            ${perfume.notes.base}
        </p>

    </div>


    <div class="info-section">

        <h4 class="info-title">
            ✨ How Does It Smell?
        </h4>

        <p>
            ${perfume.smell}
        </p>

    </div>


    <div class="info-section">

        <h4 class="info-title">
            🕒 Best Time to Wear
        </h4>

        <p>
            ${perfume.bestTime}
        </p>

        <p>
            ${perfume.season}
        </p>

    </div>


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
```

});
