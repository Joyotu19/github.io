const whatsappNumber = "8801675550131";

const perfumes = [

    {
        name: "Liquid Brun",
        brand: "French Avenue",
        image: "images/liquid brun.png",

        notes:
            "Cinnamon, Orange Blossom, Cardamom, Bergamot, Bourbon Vanilla, Elemi, Praline, Ambroxan, Musk and Guaiac Wood.",

        smell:
            "Warm, sweet, spicy and creamy with a smooth vanilla character. It has a rich and sophisticated presence.",

        occasions:
            "Evening, dates, special occasions and formal events.",

        season:
            "Autumn and Winter",

        prices: {
            "5 ml": 320,
            "10 ml": 620,
            "30 ml": 1800
        },

        available: true
    },


    {
        name: "Marwa",
        brand: "Arabiyat Prestige",
        image: "images/marwa.jpg",

        notes:
            "Bergamot, Petit Grain, Ginger, Geranium, Tea, Incense, Guaiac Wood, Ambroxan and Musk.",

        smell:
            "Fresh, clean and slightly spicy with a refined woody character. It feels elegant and versatile.",

        occasions:
            "Daily wear, office, casual outings and daytime occasions.",

        season:
            "Spring, Summer and Autumn",

        prices: {
            "5 ml": 300,
            "10 ml": 580,
            "30 ml": 1700
        },

        available: true
    },


    {
        name: "Hawas Kobra",
        brand: "Rasasi",
        image: "images/kobra.png",

        notes:
            "Ginger, Bergamot, Tangerine, Green Tea, Cinnamon, Neroli, Musk, Woody Notes and Amber.",

        smell:
            "Fresh citrus and spicy opening with a clean green character, followed by a warm woody and musky dry-down.",

        occasions:
            "Daily wear, office, casual outings and evening activities.",

        season:
            "Spring, Summer and Autumn",

        prices: {
            "5 ml": 250,
            "10 ml": 480,
            "30 ml": 1250
        },

        available: true
    },


    {
        name: "Hawas Fire",
        brand: "Rasasi",
        image: "images/fire.jpg",

        notes:
            "Clary Sage, Marine Notes, Egyptian Jasmine, Amber, Mineral Notes and Ambergris.",

        smell:
            "A fresh aquatic fragrance with a mineral character, balanced by aromatic and warm amber tones.",

        occasions:
            "Casual outings, daytime wear, summer activities and relaxed evenings.",

        season:
            "Spring and Summer",

        prices: {
            "5 ml": 320,
            "10 ml": 620,
            "30 ml": 1800
        },

        available: true
    },


    {
        name: "Opulent Dubai",
        brand: "Lattafa",
        image: "images/opulent dubai.png",

        notes:
            "Mango, Grapefruit, Lemon, Ginger, Jasmine, Cedarwood, Violet, Woody Notes, Ambergris, Oakmoss and Benzoin.",

        smell:
            "Fruity and citrusy at first, followed by floral and woody notes with a warm, slightly sweet finish.",

        occasions:
            "Parties, evening outings, special occasions and social events.",

        season:
            "Spring, Autumn and Winter",

        prices: {
            "5 ml": 200,
            "10 ml": 380,
            "30 ml": 980
        },

        available: true
    },


    {
        name: "Odyssey Limoni",
        brand: "Armaf",
        image: "images/limoni.png",

        notes:
            "Lemon, Sweet Orange, Mandarin, Bergamot, Orange Blossom, Marine Notes, Ginger, Tea, Musk and Amber.",

        smell:
            "Bright, fresh and citrusy with a clean aquatic feel and a soft musky dry-down.",

        occasions:
            "Everyday wear, office, outdoor activities and daytime outings.",

        season:
            "Spring and Summer",

        prices: {
            "5 ml": 270,
            "10 ml": 520,
            "30 ml": 1500
        },

        available: true
    },


    {
        name: "At Dawn",
        brand: "MINISO",
        image: "images/at dawn.jpg",

        notes:
            "Citrus Fresh, Lily of the Valley and Balsamic notes.",

        smell:
            "Fresh, light and clean with a gentle citrus opening and a soft floral character.",

        occasions:
            "Daily wear, school or university, casual outings and daytime activities.",

        season:
            "Spring and Summer",

        prices: {
            "5 ml": 200,
            "10 ml": 360
        },

        available: true
    },


    {
        name: "Mountain Night",
        brand: "MINISO",
        image: "images/mountain night.jpg",

        notes:
            "Mandarin, Lemon, Grapefruit, Mint, Sage, Fir Balsam, Nutmeg, Geranium, Patchouli, Vetiver, Moss and Dry Amber.",

        smell:
            "Fresh citrus and mint with an aromatic green character that develops into a deeper woody and earthy scent.",

        occasions:
            "Evening outings, casual wear, outdoor activities and cool-weather occasions.",

        season:
            "Autumn and Winter",

        prices: {
            "5 ml": 200,
            "10 ml": 360
        },

        available: true
    }

];


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

const perfumeContainer = document.getElementById("perfume-container");


perfumes.forEach((perfume) => {

    const card = document.createElement("article");

    card.className = "perfume-card";


    // Create price rows
    const priceRows = Object.entries(perfume.prices)
        .map(([size, price]) => {

            return `
                <div class="price-row">
                    <span>${size}</span>
                    <strong>৳${price.toLocaleString()}</strong>
                </div>
            `;

        })
        .join("");


    // WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `Hello! I am interested in ${perfume.name} by ${perfume.brand}.`
    );


    card.innerHTML = `

        <!-- PRODUCT IMAGE -->

        <div class="product-image">

            <img
                src="${perfume.image}"
                alt="${perfume.name} perfume"
            >

        </div>


        <!-- PRODUCT INFORMATION -->

        <div class="product-info">


            <!-- NAME -->

            <h3>${perfume.name}</h3>


            <!-- BRAND -->

            <p class="brand-name">
                ${perfume.brand}
            </p>


            <!-- SHORT SCENT DESCRIPTION -->

            <p class="scent-summary">
                ${perfume.smell}
            </p>


            <!-- PRICES -->

            <div class="price-section">

                <h4>Available Sizes</h4>

                ${priceRows}

            </div>


            <!-- AVAILABILITY -->

            <p class="
                availability
                ${perfume.available ? "in-stock" : "out-of-stock"}
            ">

                ${
                    perfume.available
                        ? "✓ Available"
                        : "Currently Unavailable"
                }

            </p>


            <!-- VIEW DETAILS BUTTON -->

            <button
                class="details-button"
                type="button"
            >
                View Details
            </button>


            <!-- HIDDEN DETAILS -->

            <div class="product-details">


                <div class="detail-item">

                    <h4>
                        Fragrance Notes
                    </h4>

                    <p>
                        ${perfume.notes}
                    </p>

                </div>


                <div class="detail-item">

                    <h4>
                        How Does It Smell?
                    </h4>

                    <p>
                        ${perfume.smell}
                    </p>

                </div>


                <div class="detail-item">

                    <h4>
                        Best For
                    </h4>

                    <p>
                        ${perfume.occasions}
                    </p>

                </div>


                <div class="detail-item">

                    <h4>
                        Best Season
                    </h4>

                    <p>
                        ${perfume.season}
                    </p>

                </div>


            </div>


            <!-- WHATSAPP BUTTON -->

            <a
                href="https://wa.me/${whatsappNumber}?text=${whatsappMessage}"
                class="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Order on WhatsApp
            </a>


        </div>

    `;


    perfumeContainer.appendChild(card);


    // ======================================
    // VIEW DETAILS FUNCTION
    // ======================================

    const detailsButton =
        card.querySelector(".details-button");

    const productDetails =
        card.querySelector(".product-details");


    detailsButton.addEventListener("click", () => {

        productDetails.classList.toggle("show");


        if (productDetails.classList.contains("show")) {

            detailsButton.textContent =
                "Hide Details";

        } else {

            detailsButton.textContent =
                "View Details";

        }

    });

});


// ==========================================
// HEADER SCROLL EFFECT
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});