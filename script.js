// card contents
const cards = [
    {
      title: "Mopsis",
      img: "https://i.pinimg.com/236x/c9/e3/be/c9e3be2deb8e4308002667e43da31f3d.jpg",
      text: "Mopsis ir sena šķirne, kas radusies Ķīnā un vēlāk kļuvusi populāra Eiropā. Šie suņi ir pazīstami ar savu draudzīgo un rotaļīgo raksturu, kā arī ar unikālo izskatu — lielām acīm un īsu purniņu. Mopši ir lieliski ģimenes mājdzīvnieki, jo viņi ātri piesaiste saimniekiem un labi sadzīvo ar bērniem.",
    },
    {
      title: "Itāļu kurts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfX4dGkN5ArLSU6YzVECVDpxqeCuRuYiLvYXkcOvUsQ7Kw6FfrrQZTfXyqcF94GjyJgt8&usqp=CAU",
      text: "Itāļu kurts ir neliela un eleganta kurtiņu šķirne, kas cēlusies Senajā Romā. Neskatoties uz smieklīgo izskatu šajā bildē, viņi ir ļoti graciozi, mīlīgi un pieķeras saviem cilvēkiem. Tie ir aktīvi, taču mājās kļūst mierīgi un pieglaudīgi.",
    },
    {
      title: "Zeltainais retrīvers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5pGWq6Lxj1xdc5TEHiquZWqPHKpjaTxt8g&s",
      text: "Zeltainais retrīvers ir viena no populārākajām šķirnēm pasaulē. Tie ir draudzīgi, inteliģenti un ļoti sabiedriski. Retrīveri ir lieliski ģimenes mājdzīvnieki, kā arī bieži strādā kā terapijas un dienesta suņi, pateicoties savai pacietībai un apķērībai.",
    },
    {
      title: "Labradors",
      img: "https://m.media-amazon.com/images/I/51cDsGErOGL._AC_UF894,1000_QL80_.jpg",
      text: "Labradors ir uzticams, draudzīgs un enerģisks suns. Tie ir ļoti sabiedriski un viegli apmācāmi, tāpēc lieliski piemēroti ģimenēm ar bērniem un aktīviem cilvēkiem.",
      link: ""
    },
    {
      title: "Vācu aitu suns",
      img: "https://i.ytimg.com/vi/xNMxBB8bWd4/maxresdefault.jpg",
      text: "Vācu aitu suns ir drosmīgs, gudrs un uzticams. Šie suņi bieži tiek izmantoti kā dienesta un policijas suņi, jo tie ir ļoti paklausīgi un labi reaģē uz apmācību.",
      link: ""
    },
    {
      title: "Franču buldogs",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWYac-TGg0aEbgQJtGHZSTvKuIh5rT9xLoA&s",
      text: "Franču buldogs ir mazs, bet spēcīgs suns ar lielu personību. Viņš ir rotaļīgs, pieķeras saviem cilvēkiem un lieliski jūtas gan dzīvoklī, gan mājā.",
      link: ""
    },
    {
      title: "Sibīrijas haskijs",
      img: "https://i.redd.it/this-is-what-happens-when-you-mix-a-siberian-husky-and-v0-0t9knk9tx0zb1.jpg?width=3024&format=pjpg&auto=webp&s=765c5c3d8a400fb3344d4e6433dfc089768537e8",
      text: "Sibīrijas haskijs ir enerģisks, draudzīgs un neatkarīgs suns ar skaistām zilām acīm. Viņiem patīk skriet un būt aktīviem kopā ar savu saimnieku.",
      link: ""
    },
    {
      title: "Jorkšīras terjers",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VcLI5kcnzMz1nd856ZfNqBH7Ppxm77BOLg&s",
      text: "Jorkšīras terjers ir mazs, bet drosmīgs suns ar lielu sirdi. Viņš ir dzīvespriecīgs, gudrs un lieliski piemērots dzīvei pilsētā vai dzīvoklī.",
      link: ""
    },
    {
      title: "Borderkollijs",
      img: "https://i.pinimg.com/564x/55/cf/8e/55cf8e833d470ba274f1c98e83f52a26.jpg",
      text: "Borderkollijs ir ļoti gudrs un enerģisks suns, kas mīl strādāt. Viņš ir ideāls kompanjons aktīviem cilvēkiem un izceļas ar spēju ātri mācīties.",
      link: ""
    },
    {
      title: "Beigls",
      img: "https://petsi.net/images/dogphotos/beagle.jpg",
      text: "Beigls ir zinātkārs un draudzīgs suns ar izcilu ožu. Viņš ir sabiedrisks, mīl bērnus un labi sadzīvo ar citiem mājdzīvniekiem.",
      link: ""
    },
    {
      title: "Šiba inu",
      img: "https://i.pinimg.com/474x/79/54/e6/7954e65bc112ec3959e42286637fac7f.jpg",
      text: "Šiba inu ir neatkarīgs, lepns un ļoti tīrīgs suns. Viņš ir modrs un gudrs, bet tajā pašā laikā arī mīļš pret savu saimnieku.",
      link: ""
    },
    {
      title: "Dalmatīnietis",
      img: "https://i.pinimg.com/474x/49/e0/9d/49e09d6a6410e36410f91a5f63e20efc.jpg",
      text: "Dalmatīnietis ir enerģisks un draudzīgs suns ar unikāliem plankumiem. Viņš mīl kustību, uzmanību un labi jūtas aktīvā ģimenē.",
      link: ""
    }
  ];
  
  const container = document.getElementById("container");

// Create a card
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

function loadRandomCards(count = 3) {
  for (let i = 0; i < count; i++) {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    container.appendChild(createCard(randomCard));
  }
}

// Initial load
loadRandomCards(5);

// Scroll horizontally with mouse wheel
container.addEventListener("wheel", (e) => {
  if (container.scrollWidth > container.clientWidth) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }
});

// Infinite scroll trigger
container.addEventListener("scroll", () => {
  const nearEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 200;
  if (nearEnd) {
    loadRandomCards(2); // load 2 more when user nears the end
  }
});