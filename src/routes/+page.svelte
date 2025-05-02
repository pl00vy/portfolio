<script lang="ts">
    let sections: 
        {
            name:string,
            update:boolean
        }[]
     = [
        {name:"about", update: false},
        {name: "works", update: true},
        {name: "comms", update: false},
        {name: "articles", update: true}
    ];
</script>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>


<div class="relative w-screen h-screen flex justify-between items-center p-6 bg-gray-700">
    <h1 class="tracking-widest font-urbanist text-white text-8xl font-extralight">Your Name</h1>
    <div class="flex-col justify-center items-end">
        {#each sections as section}
            <div class="height-2 text-right my-2 mx-2">
                <ul class="relative">
                    {#if section.update === true}
                        <span class="absolute size-2 top-0.5 -right-2 rounded-full bg-white"></span>
                        <span class="absolute size-2 top-0.5 -right-2 rounded-full bg-white/50 animate-ping"></span>
                    {/if}

                    <a href={section.name} class="
                    text-2xl
                    text-shadow-lg/40
                    font-urbanist
                    font-extralight
                    text-white
                    inline-block
                    tracking-widest
                    transition-all
                    hover:translate-y-1
                    hover:duration-600
                    duration-300
                    ease-out">{section.name}</a>
                </ul>
            </div>
        {/each}
    </div>
</div>
