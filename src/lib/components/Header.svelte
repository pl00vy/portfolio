<script lang="ts">
  let { state } = $props()
  const sections:{name:string, href:string}[] = [
    {name:"about", href:"about"},
    {name:"works", href:"works"},
    {name:"comms", href:"commissions"},
    {name:"articles", href:"articles"}
  ]
</script>

{#snippet navButton(section:{name:string, href:string})}
  {#if section.href === state}
    <li><a href="/{section.href}" class="text-blue-600 hover:text-blue-800">{section.name}</a></li>
  {:else}
    <li><a href="/{section.href}" class="text-gray-600 hover:text-gray-800">{section.name}</a></li>
  {/if}
  
{/snippet}

<header class="bg-gray-100 py-4 px-4">
  <div class="container mx-auto flex justify-between items-center">
    <div class="text-xl font-semibold text-gray-800"><a href="/">HOME</a></div>
    <nav>
      <ul class="flex space-x-4">
        {#each sections as section}
          {@render navButton(section)}
        {/each}
      </ul>
    </nav>
  </div>
</header>