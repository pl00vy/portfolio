<script lang="ts">
    import ArticleTile from '$lib/components/ArticleTile.svelte';
    import type { article } from '$lib/types';
    let article_preview:article = {
        title: "Article 1",
        slug:"article-1",
        date:"2025-01-01",
        lead: "In this article, we will...",
    }
</script>


<div class="flex-col mx-auto">
    <ArticleTile post={article_preview}></ArticleTile>
</div>