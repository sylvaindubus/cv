<script>
	export let title, date, company, points;
</script>

<div class="wrapper">
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
</div>

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
		color: var(--color-main);
		font-size: var(--fontSize-md);
		font-weight: 600;
		text-transform: uppercase;
	}

	.date {
		font-size: var(--fontSize-sm);
		color: var(--color-main);
	}

	.company {
		margin: 0 0 5px;
		font-weight: 600;
	}

	.list {
		margin: 0 0 5px;
		padding-left: 15px;
		font-size: var(--fontSize-sm);
	}

	@media (min-width: 768px) {
		.header {
			flex-direction: row;	
			align-items: center;
			justify-content: space-between;	
		}
	}
</style>