<script lang="ts">
  import Detail from "./Detail.svelte";
  import ProductComp from "./Product.svelte";

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  };
</script>


<div>
  <!-- Call the function and wait for result -->
  {#await getProducts() }
    <!-- Show during load -->
    <p>Loading...</p>
    <!-- Put result to variable -->
  {:then data }
    <ul>
      <!-- Loop through the data and pass props to the component -->
      {#each data as product }
        <li>
          <ProductComp
            title={product.title}
            price={product.price}
            description={product.description}
            thumbnail={product.thumbnail}
          />
        </li>

        <!-- A lazy way to pass mutliple props to a component
          <li><Product {...product}/></li> 
        -->
      {/each}
    </ul>

    <section>
      <Detail />
    </section>
    <!-- Catch error if any -->
  {:catch error }
    <p>😱 {error.message}</p>
  {/await}
</div>


<style>
  div {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 1rem;
  }

  section {
    width: 50%;
    position: sticky;
    top: 1rem;
    height: fit-content;
  }
</style>