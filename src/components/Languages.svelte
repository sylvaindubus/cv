
<script>
	export let languages;
</script>

<ul class="languages">
{#each languages as lang}
	<li><strong class="name">{lang.name} - </strong>{lang.level}</li>
{/each}
</ul>

<style>
	.languages {
		margin: 0 0 10px;
		padding: 0;
		text-align: left;
		list-style: none;
		font-size: var(--fontSize-md);
	}

	.name {
		font-weight: 600;
}
</style>