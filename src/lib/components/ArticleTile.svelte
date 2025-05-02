<script lang="ts">
    import type { article } from "$lib/types";

    export let post:article
</script>

<div class="bg-gray-100 rounded-2xl p-4 border-b-0">
    <h2>{post.title}</h2>
    <p>{post.lead}</p>
    <p>{post.date}</p>
</div>