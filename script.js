const whatsappNumber = "8801675550131";

const perfumes = [

    // ================================
    // 1. LIQUID BRUN
    // ================================

    {
        name: "Liquid Brun",
        brand: "French Avenue",
        image: "images/liquid brun.png",

        notes: {
            top: "Cinnamon • Orange Blossom • Cardamom • Bergamot",
            middle: "Bourbon Vanilla • Elemi",
            base: "Praline • Ambroxan • Musk • Guaiac Wood"
        },

        smell: "Warm, sweet, spicy, and creamy. It opens with cinnamon and citrus, develops into a smooth vanilla heart, and settles into a rich woody and musky dry-down.",

        occasions: "Evening • Dates • Parties • Special Occasions",

        season: "Autumn • Winter • Cool Weather",

        prices: {
            "5 ml": 320,
            "10 ml": 620,
            "30 ml": 1800
        },

        available: true
    },


    // ================================
    // 2. MARWA
    // ================================

    {
        name: "Marwa",
        brand: "Arabiyat Prestige",
        image: "images/marwa.jpg",

        notes: {
            top: "Bergamot • Petit Grain • Ginger",
            middle: "Geranium • Tea • Incense",
            base: "Guaiac Wood • Ambroxan • Musk"
        },

        smell: "Fresh, citrusy, aromatic, and slightly smoky. It opens with bright bergamot and ginger, develops into a smooth tea and incense heart, and settles into a clean woody and musky dry-down.",

        occasions: "Office • Daily Wear • Travel • Special Occasions",

        season: "Spring • Summer • All Seasons",

        prices: {
            "5 ml": 300,
            "10 ml": 580,
            "30 ml": 1700
        },

        available: true
    },


    // ================================
    // 3. HAWAS KOBRA
    // ================================

    {
        name: "Hawas Kobra",
        brand: "Rasasi",
        image: "images/kobra.png",

        notes: {
            top: "Ginger • Bergamot • Tangerine",
            middle: "Green Tea • Cinnamon • Neroli",
            base: "Musk • Woody Notes • Amber"
        },

        smell: "Fresh, citrusy, spicy, and aromatic. The opening is bright and energetic, followed by refreshing green tea and neroli, with a warm woody, musky, and amber base.",

        occasions: "Daily Wear • Office • Casual Outings • Travel",

        season: "Spring • Summer • All Seasons",

        prices: {
            "5 ml": 250,
            "10 ml": 480,
            "30 ml": 1250
        },

        available: true
    },


    // ================================
    // 4. HAWAS FIRE
    // ================================

    {
        name: "Hawas Fire",
        brand: "Rasasi",
        image: "images/fire.jpg",

        notes: {
            top: "Clary Sage",
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


    // ================================
    // 5. OPULENT DUBAI
    // ================================

    {
        name: "Opulent Dubai",
        brand: "Lattafa",
        image: "images/opulent dubai.png",

        notes: {
            top: "Mango • Grapefruit • Lemon • Ginger",
            middle: "Jasmine • Cedarwood • Violet",
            base: "Woody Notes • Ambergris • Oakmoss • Benzoin"
        },

        smell: "Fruity, fresh, woody, and slightly sweet. The juicy mango and citrus opening develops into a floral and woody heart before drying down into a warm, earthy, and resinous base.",

        occasions: "Casual Wear • Parties • Evening • Special Occasions",

        season: "Spring • Summer • Autumn",

        prices: {
            "5 ml": 200,
            "10 ml": 380,
            "30 ml": 980
        },

        available: true
    },


    // ================================
    // 6. ODYSSEY LIMONI
    // ================================

    {
        name: "Odyssey Limoni",
        brand: "Armaf",
        image: "images/limoni.png",

        notes: {
            top: "Lemon • Sweet Orange • Mandarin • Bergamot",
            middle: "Orange Blossom • Marine Notes • Ginger",
            base: "Tea • Musk • Amber"
        },

        smell: "Bright, fresh, citrusy, and aquatic. It starts with lively lemon, orange, mandarin, and bergamot, followed by a refreshing marine and floral heart with a clean tea, musk, and amber finish.",

        occasions: "Daily Wear • Office • Casual Outings • Outdoor Activities",

        season: "Spring • Summer • Hot Weather",

        prices: {
            "5 ml": 270,
            "10 ml": 520,
            "30 ml": 1500
        },

        available: true
    },


    // ================================
    // 7. AT DAWN
    // ================================

    {
        name: "At Dawn",
        brand: "MINISO",
        image: "images/at dawn.jpg",

        notes: {
            top: "Citrus Fresh",
            middle: "Lily of the Valley",
            base: "Balsamic"
        },

        smell: "Fresh and bright at the opening, with a clean citrus character that develops into a soft floral heart and finishes with a warm balsamic touch.",

        occasions: "Daily Wear • Office • Casual Outings • Daytime",

        season: "Spring • Summer • Warm Weather",

        prices: {
            "5 ml": 200,
            "10 ml": 360
        },

        available: true
    },


    // ================================
    // 8. MOUNTAIN NIGHT
    // ================================

    {
        name: "Mountain Night",
        brand: "MINISO",
        image: "images/mountain night.jpg",

        notes: {
            top: "Mandarin • Lemon • Grapefruit • Mint",
            middle: "Sage • Fir Balsam • Nutmeg • Geranium",
            base: "Patchouly • Vetyver • Moss • Dry Amber"
        },

        smell: "Fresh, citrusy, green, and aromatic. The bright citrus and mint opening develops into an herbal and spicy heart, followed by a deeper earthy, woody, mossy, and amber dry-down.",

        occasions: "Daily Wear • Office • Outdoor Wear • Evening",

        season: "Autumn • Spring • Summer • All Seasons",

        prices: {
            "5 ml": 200,
            "10 ml": 360
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


    // Create price rows
    const priceRows = Object.entries(perfume.prices)
        .map(function ([size, price]) {

            return `
                <div class="price-row">

                    <span>${size}</span>

                    <span class="price">
                        ৳${price}
                    </span>

                </div>
            `;

        })
        .join("");


    // WhatsApp message
    const whatsappMessage =
        `Hello! I am interested in ${perfume.name} by ${perfume.brand}.`;


    const whatsappLink =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    // Create card
    const card = document.createElement("div");

    card.className = "perfume-card";


    card.innerHTML = `

        <!-- PRODUCT IMAGE -->

        <div class="perfume-image">

            <img
                src="${perfume.image}"
                alt="${perfume.name} by ${perfume.brand}"
            >

        </div>


        <!-- PRODUCT CONTENT -->

        <div class="perfume-content">


            <!-- PRODUCT NAME -->

            <h3>
                ${perfume.name}
            </h3>


            <!-- BRAND -->

            <p class="brand-name">
                ${perfume.brand}
            </p>


            <!-- FRAGRANCE NOTES -->

            <div class="perfume-info">

                <h4>
                    Fragrance Notes
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


            <!-- HOW DOES IT SMELL -->

            <div class="perfume-info">

                <h4>
                    How Does It Smell?
                </h4>

                <p>
                    ${perfume.smell}
                </p>

            </div>


            <!-- BEST FOR -->

            <div class="perfume-info">

                <h4>
                    Best For
                </h4>

                <p>
                    ${perfume.occasions}
                </p>

            </div>


            <!-- BEST SEASON -->

            <div class="perfume-info">

                <h4>
                    Best Season
                </h4>

                <p>
                    ${perfume.season}
                </p>

            </div>


            <!-- PRICES -->

            <div class="price-section">

                <h4>
                    Available Sizes
                </h4>

                ${priceRows}

            </div>


            <!-- AVAILABILITY -->

            <div class="availability ${availabilityClass}">
                ${availabilityText}
            </div>


            <!-- WHATSAPP -->

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