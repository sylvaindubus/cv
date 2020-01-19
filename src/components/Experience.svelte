<script>
	export let title, date, company, points;
</script>

<section class="wrapper">
	<header class="header">
		<h3 class="title">{title}</h3>
		<time class="date">{date}</time>
	</header>
	<p class="company">{company || ''}</p>
	<ul class="list">
	{#each points as point}
		<li>{point}</li>
	{/each}
	</ul>
</section>

<style>
	.wrapper {
		margin-bottom: 20px;
	}

	.header {
		display: flex;
		flex-direction: column-reverse;	
	}

	.title {
		margin: 0;
		color: #ff3e00;
		font-size: 1em;
		font-weight: 600;
		text-transform: uppercase;
	}

	.date {
		font-size: 0.9em;
		font-weight: 400;
		color: #ff3e00;
	}

	.company {
		margin: 0 0 5px;
		font-weight: 600;
	}

	.list {
		margin: 0 0 5px;
		padding-left: 15px;
		font-size: 0.9em;
	}

	@media (min-width: 768px) {
		.header {
			flex-direction: row;	
			align-items: center;
			justify-content: space-between;	
		}
	}
</style>