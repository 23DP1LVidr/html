// cards contents
const cards = [
  {
    title: "Zeltainais retrīvers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5pGWq6Lxj1xdc5TEHiquZWqPHKpjaTxt8g&s",
    text: "Zeltainais retrīvers ir viena no populārākajām šķirnēm pasaulē. Tie ir draudzīgi, inteliģenti un ļoti sabiedriski. Retrīveri ir lieliski ģimenes mājdzīvnieki, kā arī bieži strādā kā terapijas un dienesta suņi, pateicoties savai pacietībai un apķērībai."
  },
  {
    title: "Labradors",
    img: "https://images.unsplash.com/photo-1558788353-f76d92427f16",
    text: "Labradors ir uzticams, draudzīgs un enerģisks suns. Tie ir ļoti sabiedriski un viegli apmācāmi, tāpēc lieliski piemēroti ģimenēm ar bērniem un aktīviem cilvēkiem."
  },
  {
    title: "Vācu aitu suns",
    img: "https://www.ventasbalss.lv/upload/news/8669/715x715_8f7d63d5e1baa82fa03f6b0e35b34199.jpg",
    text: "Vācu aitu suns ir drosmīgs, gudrs un uzticams. Šie suņi bieži tiek izmantoti kā dienesta un policijas suņi, jo tie ir ļoti paklausīgi un labi reaģē uz apmācību."
  },
  {
    title: "Franču buldogs",
    img: "https://infozoo.lv/wp-content/uploads/2019/11/blue_french_bulldog_1024x1024-1.jpg",
    text: "Franču buldogs ir mazs, bet spēcīgs suns ar lielu personību. Viņš ir rotaļīgs, pieķeras saviem cilvēkiem un lieliski jūtas gan dzīvoklī, gan mājā."
  },
  {
    title: "Sibīrijas haskijs",
    img: "https://play-lh.googleusercontent.com/agtUU5kqFOhs7bBswUwWx9FDVXsir9aojzV_CjLiZZGoI98T05NOZ6ajAGC8McW4uQ",
    text: "Sibīrijas haskijs ir enerģisks, draudzīgs un neatkarīgs suns ar skaistām zilām acīm. Viņiem patīk skriet un būt aktīviem kopā ar savu saimnieku."
  },
  {
    title: "Jorkšīras terjers",
    img: "https://prieku.lv/wp-content/uploads/2022/09/Screenshot_50.png",
    text: "Jorkšīras terjers ir mazs, bet drosmīgs suns ar lielu sirdi. Viņš ir dzīvespriecīgs, gudrs un lieliski piemērots dzīvei pilsētā vai dzīvoklī."
  },
  {
    title: "Borderkollijs",
    img: "https://i.jauns.lv/t/2018/10/29/1566630/490x350_precise.jpg?v=1540847730",
    text: "Borderkollijs ir ļoti gudrs un enerģisks suns, kas mīl strādāt. Viņš ir ideāls kompanjons aktīviem cilvēkiem un izceļas ar spēju ātri mācīties."
  },
  {
    title: "Beigls",
    img: "https://www.petlandtexas.com/wp-content/uploads/2023/08/shutterstock_529324609.jpg",
    text: "Beigls ir zinātkārs un draudzīgs suns ar izcilu ožu. Viņš ir sabiedrisks, mīl bērnus un labi sadzīvo ar citiem mājdzīvniekiem."
  },
  {
    title: "Šiba inu",
    img: "https://www.dogster.com/wp-content/uploads/2024/02/shiba-inu-dog-standing-on-the-road_OlesyaNickolaeva_Shutterstock.jpg",
    text: "Šiba inu ir neatkarīgs, lepns un ļoti tīrīgs suns. Viņš ir modrs un gudrs, bet tajā pašā laikā arī mīļš pret savu saimnieku."
  },
  {
    title: "Dalmatīnietis",
    img: "https://img2.spoki.lv/upload2/articles/70/707326/images/Dalmacietis-1.jpg",
    text: "Dalmatīnietis ir enerģisks un draudzīgs suns ar unikāliem plankumiem. Viņš mīl kustību, uzmanību un labi jūtas aktīvā ģimenē."
  }
];
  
const container = document.getElementById("container");

// Copy of all available cards
let remainingCards = [...cards];

// Create a card element
function createCard(card) {
  const el = document.createElement("div");
  el.classList.add("card");
  el.innerHTML = `
    <h1>${card.title}</h1>
    <img src="${card.img}" alt="${card.title}">
    <p>${card.text}</p>
    <button><a>Uzzināt vairāk</a></button>
  `;
  return el;
}

// Get and remove random card from remaining pool
function getRandomCard() {
  if (remainingCards.length === 0) return null;
  const index = Math.floor(Math.random() * remainingCards.length);
  const card = remainingCards[index];
  remainingCards.splice(index, 1); 
  return card;
}

// Load a set of unique random cards
function loadRandomCards(count = 3) {
  for (let i = 0; i < count; i++) {
    const card = getRandomCard();
    if (!card) return;
    container.appendChild(createCard(card));
  }
}

// Initial load
loadRandomCards(10);

// Horizontal scrolling with mouse wheel
container.addEventListener("wheel", (e) => {
  if (container.scrollWidth > container.clientWidth) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }
});





const searchInput = document.getElementById("mySearch");

// Listen for typing in the search bar
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const cards = container.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h1").textContent.toLowerCase();
    const text = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(query) || text.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});