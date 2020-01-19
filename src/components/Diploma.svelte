<script>
	export let title, subtitle;
</script>

<section class="wrapper">
	<h3 class="title">{title}</h3>
	<p class="info">{subtitle}</p>
</section>

<style>
	.wrapper {
		margin-bottom: 10px;
	}

	.title {
		margin: 0;
		color: #ff3e00;
		font-size: 1em;
		font-weight: 600;
		text-transform: uppercase;
	}

	.info {
		margin: 0;
		font-weight: 600;
	}
</style>