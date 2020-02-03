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
	<div class="simpleBlock">
		<h2 class="simpleBlockTitle">Contact</h2>
		<span>svn.dbs@gmail.com</span>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 10px;
	}

	.link {
		display: block;
		margin: 0 5px;
	}

	.icon {
		display: block;
		height: 24px;
	}

	.simpleBlock {
		display: none;
	}

	@media print {
		.link {
			display: none;
		}

		.simpleBlock {
			display: block;
			margin: 0;
			text-align: center;
		}

		.simpleBlockTitle {
			font-weight: 600;
			font-size: var(--fontSize-md);
			margin: 0;
		}
	}
</style>