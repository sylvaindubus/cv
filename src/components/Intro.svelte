<script>
	export let name, status, yearOfExperience;
</script>

<div class="wrapper">
	<img class="photo" src="images/photo.jpg" alt="" />
	<h1 class="name">{name}</h1>
	<p class="status">{status}</p>
	<p class="experience">{yearOfExperience} ans d'expérience</p>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		text-align: center;
	}

	.photo {
		width: 100%;
		max-width: 140px;
		margin: 20px auto 5px;
		border-radius: 50%;
	}

	.name {
		margin: 0;
		color: var(--color-main);
		text-transform: uppercase;
		font-size: var(--fontSize-xl);
		font-weight: 200;
	}

	.status,
	.experience {
		margin: 0;
		font-size: var(--fontSize-lg);
		font-weight: 200;
	}
</style>