import Rating from '../components/Rating';
import { getProducts } from '../api';
import { parseRequestUrl } from '../utils';

const HomeScreen = {
  render: async () => {
    const { value } = parseRequestUrl();
    const products = await getProducts({ searchKeyword: value });
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }


    
    return `
    <section style="margin-top: 80px">
    <img class="mySlides" src="images/mod.jpg"
    style="width:100%" >
    </section>

  <!-- Band Description -->
  <section class="w3-container w3-center w3-content" style="max-width:100%; text-align:center; font-size:30px; 
  background: rgb(175,245,255); height:400px;
  background: radial-gradient(circle, rgba(175,245,255,1) 0%, rgba(255,255,255,1) 90%);
   margin:30px; padding:50px">
    <h2 class="w3-wide">E-Bazar</h2>
    <p class="w3-opacity"><i>E-Commerce website</i></p>
    <p class="w3-justify">Responsive market palce that is suitable for any kind of product's category. Integrated with PayPal API.<br>
        Has admin statistic dashboard and managing orders and products.</p>
  </section>
    

    <ul class="products">
      ${products
        .map(
          (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
        <div class="product-name">
          <a href="/#/product/${product._id}">
            ${product.name}
          </a>
        </div>
        <div class="product-rating">
          ${Rating.render({
            value: product.rating,
            text: `${product.numReviews} reviews`,
          })}
        </div>
        <div class="product-brand">
          ${product.brand}
        </div>
        <div class="product-price">
          $${product.price}
        </div>
        </div>
      </li>

      

      `
        )
        .join('\n')}
    `;
    
  },
};

export default HomeScreen;
