<script>
	export let title, skills;
</script>

<section class="wrapper">
	<h3 class="title">{title}</h3>
	<p class="info">{skills.join(', ')}</p>
</section>

<style>
	.wrapper {
		text-align: left;
		margin-bottom: 10px;
	}

	.title {
		margin: 0;
		font-weight: 600;
		font-size: 1em;
	}

	.info {
		margin: 0;
	}
</style>
