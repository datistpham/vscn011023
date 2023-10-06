
  
  // Reference to your Firebase database
  var database = firebase.database();
  
  // Function to render a product
  function renderProduct(productData) {
    var productHTML = `
      <div class="col-md-3 col-sm-4 col-xs-6">
        <div class="evo-product-car b-goods_back_sm">
          <button class="flip-btn">
            <span></span>
            <span class="flip-btn-mdl"></span>
            <span></span>
          </button>
          <div class="flip-container">
            <div class="flipper">
              <div class="flip__front">
                <div class="b-goods__img">
                  <a href="/san-pham/index.html?id=${productData.productId}" title="${productData.name}" target="_blank">
                    <img style="filter: blur(0px)" class="img-responsive center-block lazy" data-src="${productData.imageUrls[0]}" src="${productData.imageUrls[0]}" alt="${productData.name}" />
                  </a>
                </div>
                <div class="b-goods__inner">
                  <div class="b-goods__name"><a href="https://www.facebook.com/watch/?ref=tab" title="${productData.name}">${productData.name}</a></div>
                  <div class="b-goods__footer">
                    <div class="b-goods__price">
                      <span class="new-price">${productData.price}</span>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="flip__back hidden-md hidden-sm hidden-xs">
                <div class="b-goods__header">
                  <div class="b-goods__name"><a href="http://127.0.0.1:5500/san-pham?id=${productData.productId}" title="${productData.name}">${productData.name}</a></div>
                  <div class="b-goods__category">${productData.category}</div>
                  <div class="flip-btn-hide"></div>
                </div>
                <div class="b-goods-info">
                  <p>${productData.info}</p>
                </div>
                <div class="flip__footer">
                  <a href="/san-pham?id=${productData.productId}" title="Chi tiết">Chi tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Append the product HTML to the container where you want to display it
    document.getElementById('list-product-home').innerHTML += productHTML;
  }
  
  // Load product data from Firebase and render it
  var productRef = database.ref('products_09202023');
  
  productRef.once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var productData = childSnapshot.val();
      renderProduct(productData);
    });
  });
  