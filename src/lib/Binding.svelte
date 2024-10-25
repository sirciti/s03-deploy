<script lang="ts">
  import { z } from "zod";
  
  // Variable to store the input value
  let value = $state("");
  let error = $state("");
  
  // Define Zod validation schema
  const mySchema = z.object({
    value: z.string().min(3, "Le champ doit avoir au moins 3 caractères").max(10, "La valeur est trop longue"),
  });
  
  // Function to validate the input value
  function validateInput() {
    const result = mySchema.safeParse({ value });

    error = !result.success ? result.error.issues[0].message : '';
  }
</script>


<div>
  <!-- Bind input value to variable -->
  <input bind:value={value} oninput={validateInput}>
  
  <!-- Display a paragraph according to value -->
  {#if value}
    <p>La valeur saisie est : {value}</p>
  {:else}
    <p>Aucune valeur</p>
  {/if}

  <!-- Display validation error if any -->
  {#if error}
    <p class="error">{error}</p>
  {/if}
</div>


<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
  }
  p {
    margin-bottom: 0;
  }
  .error {
    background: #d50000;
    border-radius: 8px;
    color: #fff;
    padding: 0.5rem 1rem;
  }
</style>
