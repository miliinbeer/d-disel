const wrapper = document.getElementById("news-wrapper");

const news = [
  {
    id: 1,
    image: "./src/images/news-image1.webp",
    title: "Новая линейка топливных систем от Volvo",
    text: "Компания D-Diesel сообщает о начале поставок новейших топливных систем Volvo, обеспечивающих более высокую эффективность и долговечность.",
    date: "06.08.2025",
  },
  {
    id: 2,
    image: "./src/images/news-image2.webp",
    title: "Открытие новых представительств в Азии",
    text: "Компания D-Diesel расширяет свою деятельность в Азиатском регионе, открывая новые представительства в Китае, Индии и Японии.",
    date: "06.08.2025",
  },
  {
    id: 3,
    image: "./src/images/news-image3.webp",
    title: "Совместный проект с Caterpillar",
    text: "Компания D-Diesel и Caterpillar объединяют усилия для создания революционных решений в области дизельных технологий.",
    date: "06.08.2025",
  },
  {
    id: 4,
    image: "./src/images/news-image4.webp",
    title: "Спецпредложение на ремонтные комплекты",
    text: "Скидка 10% на все ремонтные комплекты для Detroit Diesel Series 60. В наличии: уплотнители, плунжерные пары, иглы.",
    date: "06.08.2025",
  },
  {
    id: 5,
    image: "",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad vel enim placeat, vitae omnis nulla dolore et expedita voluptate, sapiente consectetur error culpa, doloribus saepe adipisci eos quisquam laudantium magni nihil voluptatem! Nobis quidem non nostrum, eaque quas dignissimos, tempore sapiente corrupti aspernatur velit error impedit! Ratione id laudantium perspiciatis doloremque, tempore sed aliquam temporibus aliquid quod eligendi voluptates quae rem. Fugit aliquam aut laboriosam pariatur recusandae ullam asperiores nostrum ducimus quam! Quasi architecto aspernatur sit necessitatibus voluptatibus odit excepturi, eveniet repudiandae ratione enim dignissimos repellat ducimus maiores quisquam tempore totam reiciendis non itaque. Tempore officiis voluptate dolores maiores.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ad vel enim placeat, vitae omnis nulla dolore et expedita voluptate, sapiente consectetur error culpa, doloribus saepe adipisci eos quisquam laudantium magni nihil voluptatem! Nobis quidem non nostrum, eaque quas dignissimos, tempore sapiente corrupti aspernatur velit error impedit! Ratione id laudantium perspiciatis doloremque, tempore sed aliquam temporibus aliquid quod eligendi voluptates quae rem. Fugit aliquam aut laboriosam pariatur recusandae ullam asperiores nostrum ducimus quam! Quasi architecto aspernatur sit necessitatibus voluptatibus odit excepturi, eveniet repudiandae ratione enim dignissimos repellat ducimus maiores quisquam tempore totam reiciendis non itaque. Tempore officiis voluptate dolores maiores.",

    date: "06.08.2025",
  },
];

news.forEach(({ image, title, text, date }) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `
    <div class="card">
      <img src="${image}" alt="${title}" class="card__image" />
      <div class="card__title">${title}</div>
      <div class="card__content">${text}</div>
      <div class="card__footer">
        <div class="card__date">${date}</div> 
        <a href="/" class="card__btn">Подробнее</a>
      </div>
    </div>
  `;
  wrapper.appendChild(slide);
});

new Swiper(".swiper-news", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
