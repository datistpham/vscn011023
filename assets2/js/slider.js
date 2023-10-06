// Firebase Realtime Database reference
const db = firebase.database();
const slidersRef = db.ref("settings_vscn_011023");
const listSlide = document.getElementById("list-slide-container");

slidersRef.once("value").then((snapshot) => {
  const sliders = snapshot.val();
  const productsArray = Object.values(sliders);
  listSlide.innerHTML = productsArray.map(
    (item) => `
    <div class="item">
        <a href="#" class="clearfix" title="Gara auto 43, mua bán ô tô cũ">
            <picture>
                <source media="(min-width: 1200px)" srcset=${item.imageUrl}>
                <source media="(min-width: 992px)" srcset=${item.imageUrl}>
                <source media="(min-width: 569px)" srcset=${item.imageUrl}>
                <source media="(min-width: 480px)" srcset=${item.imageUrl}>
                <img loading="lazy" src=${item.imageUrl} alt="Gara auto 43, mua bán ô tô cũ" class="lazy img-responsive center-block" />
            </picture>
        </a>
    </div>
  `
  ).join("");
});

document.getElementById("list-slide-container").innerHTML = ``;
