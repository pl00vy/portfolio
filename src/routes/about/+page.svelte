<script lang="ts">
    import type { PageProps } from "./$types";
    import Header from "$lib/components/Header.svelte";

    let { data }: PageProps = $props()
</script>

<Header></Header>

<div class="container flex-row rounded-2xl py-3 mx-auto w-2xl">
    <h1 class="font-bold text-3xl text-center">About Me</h1>
    <div class="relative rounded-2xl bg-gray-50 p-2 my-2">
        <p class="z-30">Hello. My name is.</p>
        <!-- <div class="absolute inset-0 rounded-2xl hover:shadow-xl/30 z-50 transition-all"></div> -->
    </div>
    {#each data.faq as qa}
        <div class="relative rounded-2xl bg-gray-50 p-2 my-2">
            <h2 class="text-bold underline">{qa.question}</h2>
            <p>{qa.answer}</p>
        </div>

    {/each}
</div>