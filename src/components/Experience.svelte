<script>
	export let title, date, company, context, points, env;
</script>

<div class="wrapper">
	<header class="header">
		<h3 class="title">{title}</h3>
		<time class="date">{date}</time>
	</header>
	<p class="company">{company || ''}</p>
	{#if context}
		<p class="context"><strong>Contexte : </strong>{context}</p>
	{/if}
	<ul class="list">
	{#each points as point}
		<li>{point}</li>
	{/each}
	</ul>
	{#if env}
		<p class="env"><strong>Environnement technique : </strong>{env}</p>
	{/if}
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

	.context,
	.env {
		margin: 0 0 5px;
	}

	.env {
		font-size: var(--fontSize-sm);
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