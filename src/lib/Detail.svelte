<script lang="ts">
  import { product } from "../store";

  let selectedProduct = $state(null);

  // Subscribe to the product store and call the callback function when the value changes
  product.subscribe((value) => {
    selectedProduct = value;
  });
</script>


<!-- Show according to stored value -->
{#if selectedProduct}
  <article class="receipt">
    <header>
      <h2>{selectedProduct.title}</h2>
      <p>{new Date().toLocaleDateString()}</p>
    </header>
    <div>
      <div class="product-info">
        <p class="description">{selectedProduct.description}</p>
        <p class="price">{selectedProduct.price} €</p>
      </div>
      <div class="total">
        <p>Total</p>
        <p class="total-price">{selectedProduct.price} €</p>
      </div>
    </div>
    <footer>
      <p>Merci de votre achat !</p>
    </footer>
  </article>
{:else}
  <p>Click on a product to see its details</p>
{/if}


<style>
  .receipt {
    font-family: 'Courier New', Courier, monospace;
    width: 300px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    border-radius: 5px;
    margin: 20px auto;
  }
  header {
    text-align: center;
    border-bottom: 1px dashed #000;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  header h2 {
    margin: 0;
    font-size: 1.2em;
  }
  .product-info {
    margin-bottom: 10px;
  }
  .description {
    margin-bottom: 5px;
  }
  .price {
    font-weight: bold;
    text-align: right;
  }
  .total {
    display: flex;
    justify-content: space-between;
    border-top: 1px dashed #000;
    padding-top: 10px;
    font-weight: bold;
    margin-top: 10px;
  }
  footer {
    text-align: center;
    font-style:italic;
    font-size: 0.9em;
    margin-top: 20px;
  }
</style>