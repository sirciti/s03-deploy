<script lang="ts">
  import { product } from "../store";

  const {
    title,
    price,
    description = "Aucune description",
    thumbnail
  } = $props();

  // Handle click on selected product
  const handleClick = () => {
    // Update the product store with the selected product
    product.set({ title, price, description, thumbnail })
  };
</script>


<article>
  <div>
    <img src={thumbnail} alt={title} loading="lazy">
    <strong>{price} €</strong>
  </div>
  <h3>{title}</h3>
  <p>{description}</p>
  <button onclick={handleClick}>Details</button>
</article>


<style>
  article {
    display: grid;
    grid-template-columns: 150px 2fr;
    align-items: center;
    gap: .5rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: .5rem;
    background: #fafafa;
  }

  div {
    grid-row: span 2;
  }

  img {
    display: block;
    max-width: 100%;
  }

  strong {
    font-size: 2rem;
    color: teal;
  }

  h3 {
    margin: 0;
    text-align: left;
  }

  p {
    margin: 0;
    text-align: left;
  }

  button {
    color: #007bff;
    border: none;
    cursor: pointer;
    grid-column: 2;
  }
  button:hover {
    text-decoration: underline;
  }
</style>