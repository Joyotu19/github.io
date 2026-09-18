const whatsappNumber = "8801675550131";

const perfumes = [
    {
        name: "Liquid Brun",
        image: "images/liquid brun.png",

        notes: {
            top: "Cinnamon • Orange Blossom • Cardamom • Bergamot",
            middle: "Bourbon Vanilla • Elemi",
            base: "Praline • Ambroxan • Musk • Guaiac Wood"
        },

        smell: "Sweet, spicy, and creamy. It opens with aromatic cinnamon and citrus, develops into a smooth vanilla heart, and settles into a rich, woody and musky dry-down.",

        occasions: "Evening • Dates • Parties • Special Occasions",

        season: "Autumn • Winter • Cool Weather",

        prices: {
            "5 ml": 320,
            "10 ml": 620,
            "30 ml": 1800
        },

        available: true
    },

    {
        name: "Marwa",
        image: "images/marwa.jpg",

        notes: {
            top: "Bergamot • Petit Grain • Ginger",
            middle: "Geranium • Tea • Incense",
            base: "Guaiac Wood • Ambroxan • Musk"
        },

        smell: "Fresh, citrusy, aromatic, and slightly smoky. It opens with bright bergamot and ginger, develops into a smooth tea and incense heart, and settles into a clean woody and musky dry-down. One of the best dupes of LV Imagination",

        occasions: "Office • Daily Wear • Travel • Special Occasions",

        season: "Spring • Summer • All Seasons",

        prices: {
            "5 ml": 300,
            "10 ml": 580,
            "30 ml": 1700
        },

        available: true
    },

    {
        name: "Hawas Kobra",
        image: "images/kobra.png",

        notes: {
            top: "Ginger • Bergamot • Tangerine",
            middle: "Green Tea • Cinnamon • Neroli",
            base: "Musk • Woody Notes • Amber"
        },

        smell: "Fresh, citrusy, spicy, and aromatic. The opening is bright and energetic, followed by a refreshing green tea and neroli heart, with a warm woody, musky, and amber base. Another dupe of LV Imagination with greater longevity.",

        occasions: "Daily Wear • Office • Casual Outings • Travel",

        season: "Spring • Summer • All Seasons",

        prices: {
            "5 ml": 250,
            "10 ml": 480,
            "30 ml": 1250
        },

        available: true
    },

    {
        name: "Hawas Fire",
        image: "images/fire.jpg",

        notes: {
            top: "Fruity • Pineapple",
            middle: "Marine Notes • Egyptian Jasmine",
            base: "Amber • Mineral Notes • Ambergris"
        },

        smell: "Fresh, aquatic, mineral, and slightly salty. It combines a clean marine character with aromatic sage and jasmine before settling into a warm amber and mineral base.",

        occasions: "Outdoor Wear • Casual • Beach Days • Evening",

        season: "Spring • Summer • Warm Weather",

        prices: {
            "5 ml": 320,
            "10 ml": 620,
            "30 ml": 1800
        },

        available: true
    },

    {
        name: "Opulent Dubai",
        image: "images/opulent dubai.png",

        notes: {
            top: "Mango • Grapefruit • Lemon • Ginger",
            middle: "Cedarwood • Violet",
            base: "Woody Notes • Oakmoss • Benzoin"
        },

        smell: "Fruity, fresh, woody, and slightly sweet. The juicy mango and citrus opening develops into a floral and woody heart before drying down into a warm, earthy, and resinous base. Dupe of God of Fire.",

        occasions: "Casual Wear • Parties • Evening • Special Occasions",

        season: "Spring • Summer • Autumn",

        prices: {
            "5 ml": 200,
            "10 ml": 380,
            "30 ml": 980
        },

        available: true
    },

    {
        name: "Odyssey Limoni",
        image: "images/limoni.png",

        notes: {
            top: "Lemon • Sweet Orange • Mandarin • Bergamot",
            middle: "Orange Blossom • Marine Notes • Ginger",
            base: "Tea • Musk • Amber"
        },

        smell: "Bright, fresh, citrusy, and aquatic. It starts with a lively blend of lemon, orange, mandarin, and bergamot, followed by a refreshing marine and floral heart with a clean tea, musk, and amber finish.",

        occasions: "Daily Wear • Office • Casual Outings • Outdoor Activities",

        season: "Spring • Summer • Hot Weather",

        prices: {
            "5 ml": 270,
            "10 ml": 520,
            "30 ml": 1500
        },

        available: true
    }
];


// ================================
// DISPLAY PRODUCTS
// ================================

const perfumeContainer = document.getElementById("perfume-container");

perfumes.forEach(function (perfume) {

    const availabilityText = perfume.available
        ? "In Stock"
        : "Out of Stock";

    const availabilityClass = perfume.available
        ? "in-stock"
        : "out-of-stock";

    const priceRows = Object.entries(perfume.prices)
        .map(function ([size, price]) {
            return `
                <div class="price-row">
                    <span>${size}</span>
                    <span class="price">৳${price}</span>
                </div>
            `;
        })
        .join("");

    const whatsappMessage =
        `Hello! I am interested in ${perfume.name}.`;

    const whatsappLink =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const card = document.createElement("div");

    card.className = "perfume-card";

    card.innerHTML = `
        <div class="perfume-image">
            <img
                src="${perfume.image}"
                alt="${perfume.name} perfume"
            >
        </div>

        <div class="perfume-content">

            <h3>${perfume.name}</h3>

            <div class="perfume-info">

                <h4>Fragrance Notes</h4>

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


            <div class="perfume-info">

                <h4>How Does It Smell?</h4>

                <p>
                    ${perfume.smell}
                </p>

            </div>


            <div class="perfume-info">

                <h4>Best For</h4>

                <p>
                    ${perfume.occasions}
                </p>

            </div>


            <div class="perfume-info">

                <h4>Best Season</h4>

                <p>
                    ${perfume.season}
                </p>

            </div>


            <div class="price-section">

                <h4>Available Sizes</h4>

                ${priceRows}

            </div>


            <div class="availability ${availabilityClass}">
                ${availabilityText}
            </div>


            ${
                perfume.available
                    ? `
                        <a
                            href="${whatsappLink}"
                            class="whatsapp-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Order on WhatsApp
                        </a>
                    `
                    : `
                        <button
                            class="whatsapp-button disabled-button"
                            disabled
                        >
                            Currently Unavailable
                        </button>
                    `
            }

        </div>
    `;

    perfumeContainer.appendChild(card);
});