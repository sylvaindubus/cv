<script>
	export let mail, linkedin, github;
</script>

<div class="wrapper">
	<a class="link" href="mailto:{mail}">
		<img class="icon" src="images/mail.svg" alt="" />
	</a>
	<a class="link" href="{linkedin}">
		<img class="icon" src="images/linkedin.svg" alt="" />
	</a>
	<a class="link" href="{github}">
		<img class="icon" src="images/github.svg" alt="" />
	</a>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.link {
		display: block;
		margin: 0 5px;
	}

	.icon {
		display: block;
		height: 24px;
	}
</style>