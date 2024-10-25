<script lang="ts">
  // Declare a variable visible and set it to false
  let visible = $state(false);

  // Invert the value of visible
  const toggle = () => {
    visible = !visible;
  };
</script>


<div>
  <!-- Handle click to toggle visible value -->
  <button onclick={toggle}>
    <!-- Change text according to visible value -->
    {visible ? "Hide" : "Show"}
  </button>
  
  <!-- Display a paragraph if visible is true -->
  {#if visible}
    <p>Visible!</p>
  {/if}
</div>


<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
  }
</style>
