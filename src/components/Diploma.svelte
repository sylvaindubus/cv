<script>
	export let title, subtitle;
</script>

<div class="wrapper">
	<h3 class="title">{title}</h3>
	<p class="info">{subtitle}</p>
</div>

<style>
	.wrapper {
		margin-bottom: 10px;
	}

	.title {
		margin: 0;
		color: var(--color-main);
		font-size: var(--fontSize-md);
		font-weight: 600;
		text-transform: uppercase;
	}

	.info {
		margin: 0;
		font-weight: 600;
	}
</style>