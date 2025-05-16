<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props()
</script>


<div class="container flex-row rounded-2xl py-3 mx-auto w-2xl">
    <h1 class="font-bold text-3xl text-center">About Me</h1>
    <div class="relative rounded-2xl bg-gray-50 p-4 my-2">
        <p class="z-30">Hello. My name is Ploovy. I want to learn to tell stories with my art. You can find me creating oc content and fanart on socials below.</p>
        <div class="flex justify-left pt-2 px-2">
            <a href="https://x.com/pl00vy">
                <span class="size-8 rounded-full bg-[#1DA1F2] flex justify-center content-center hover:shadow-md">
                    <img src="/twitter.svg" alt="twitter" class="w-1/2">
                </span>
            </a>
        </div>
    </div>
    {#each data.faq as qa}
        <div class="relative rounded-2xl bg-gray-50 p-4 my-2">
            <h2 class="text-bold underline">{qa.question}</h2>
            <p>{qa.answer}</p>
        </div>

    {/each}
</div>