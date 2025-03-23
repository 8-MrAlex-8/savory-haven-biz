// for preloading images for caching-in-advance.

function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

const teamMembers = [
    {
        role: "Barista",
        name: "Sam",
        description: `Sam brings a calm, chill vibe to Savory Haven, even during the 
        morning rush. They're passionate about creating a welcoming space and loves 
        introducing customers to new drinks and pastries. Sam's personal favorite? 
        An oat milk flat white paired with our house banana bread.`,
        image: "../_assets/barista-2.jpg",
    },
    {
        role: "Owner & Manager",
        name: "Gilbert",
        description: `The heart and vision behind Savory Haven, Gilbert brings a passion 
        for great food and warm hospitality. As both owner and manager, he's here daily 
        making sure everything runs smoothly—whether it's sourcing the best ingredients or 
        greeting regulars by name. You'll often catch him chatting with guests, always 
        making sure everyone feels right at home.`,
        image: "../_assets/owner.jpg"
    },
    {
        role: "Administrator",
        name: "Avery",
        description: `Avery keeps everything behind the scenes running like clockwork. 
        From scheduling to inventory to handling the books, she makes sure the team can 
        focus on what they do best—crafting amazing coffee and baked goods. Organized, 
        friendly, and always two steps ahead, Avery is the glue that holds our Savory 
        Haven family together.`,
        image: "../_assets/manager.jpg"
    },
    {
        role: "Head Baker",
        name: "Marco",
        description: `Marco wakes up before the sun to bring fresh-baked magic to our 
        shelves every morning. With a love for traditional techniques and creative twists, 
        his sourdough, croissants, and pastries are crowd favorites. He believes baking is 
        both an art and a science—and his attention to detail shows in every flaky, 
        golden layer.`,
        image: "../_assets/head-baker.jpg"
    },
    {
        role: "Baker",
        name: "Sofia",
        description: `Sofia brings warmth and creativity to our baking team. From hand-piping 
        delicate designs on cookies to perfecting our vegan and gluten-free offerings, she's
        always experimenting with flavors and textures. Her energy in the kitchen is contagious, 
        and her treats disappear fast!`,
        image: "../_assets/baker.jpg"
    },
    {
        role: "Lead Barista",
        name: "Jamie",
        description: `Jamie knows coffee like an old friend. Whether she's dialing in espresso 
        shots or pouring stunning latte art, she makes sure each cup is crafted to perfection. 
        Jamie loves chatting with customers about brew methods and recommends the perfect 
        drink every time.`,
        image: "../_assets/head-barista.jpg"
    },
    {
        role: "Barista",
        name: "Riley",
        description: `Friendly, fast, and always smiling, Riley keeps the line moving and 
        spirits high. She has a knack for remembering regular orders and makes everyone 
        feel like a VIP. Whether it's a classic cappuccino or a new seasonal special, 
        Riley serves it with heart.`,
        image: "../_assets/barista-1.jpg"
    }
];


// preload images for caching-in-advance.

teamMembers.forEach((person) => {
    preloadImages([person.image]);
});


let index = 0;

document.querySelector('.chevron-right').addEventListener("click", () => {
    index = (index + 1) % teamMembers.length;
    document.querySelector('img.person-img-a').src = teamMembers[(index % teamMembers.length)].image;
    // current focus
    focusIndex = (index + 1) % teamMembers.length;
    document.querySelector('img.person-img-b').src = teamMembers[focusIndex].image;
    document.querySelector('#name-target').textContent = teamMembers[focusIndex].name;
    document.querySelector('#role-target').textContent = teamMembers[focusIndex].role;
    document.querySelector('#description-target').textContent = teamMembers[focusIndex].description;
    document.querySelector('img.person-img-c').src = teamMembers[(index + 2) % teamMembers.length].image;
});

document.querySelector('.chevron-left').addEventListener("click", () => {
    index--;
    if (index < 0) { index = teamMembers.length - 1; }
    document.querySelector('img.person-img-a').src = teamMembers[(index) % teamMembers.length].image;
    //current focus
    document.querySelector('img.person-img-b').src = teamMembers[(index + 1) % teamMembers.length].image;
    document.querySelector('img.person-img-c').src = teamMembers[(index + 2) % teamMembers.length].image;
});


