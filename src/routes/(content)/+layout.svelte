<script>
	import '../../app.css';
    import Header from "$lib/components/Header.svelte";
    import { page } from "$app/state";
    let { children } = $props()
    let section = $derived(page.url.pathname.split('/')[1])
</script>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<Header state={ section }></Header>

{@render children()}