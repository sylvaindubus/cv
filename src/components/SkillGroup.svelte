<script>
	export let title, skills;
</script>

<div class="wrapper">
	<h3 class="title">{title}</h3>
	<p class="info">{skills.join(', ')}</p>
</div>

<style>
	.wrapper {
		margin-bottom: 10px;
	}

	.title {
		margin: 0;
		font-weight: 600;
		font-size: var(--fontSize-md);
	}

	.info {
		margin: 0;
	}
</style>
