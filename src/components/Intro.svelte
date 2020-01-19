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
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.6em;
		font-weight: 200;
	}

	.status,
	.experience {
		margin: 0;
		font-size: 1.3em;
		font-weight: 200;
	}
</style>