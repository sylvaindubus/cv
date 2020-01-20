<script>
	import data from 'src/data/cv.json';
	import labels from 'src/data/labels.json';
	import Intro from 'src/components/Intro.svelte';
	import Social from 'src/components/Social.svelte';
	import SkillGroup from 'src/components/SkillGroup.svelte';
	import Languages from 'src/components/Languages.svelte';
	import Experience from 'src/components/Experience.svelte';
	import Diploma from 'src/components/Diploma.svelte';
	import Hobbies from 'src/components/Hobbies.svelte';
</script>

<main class="wrapper">
	<section class="intro">
		<Intro name="{data.name}" status="{data.status}" yearOfExperience="{data.yearOfExperience}" />
	</section>
	<section class="social">
		<Social mail="{data.mail}" linkedin="{data.linkedin}" github="{data.github}" />
	</section>
	<section class="experiences">
		<h2 class="sectionTitle big">{labels.experienceTitle}</h2>
		{#each data.experiences as exp}
			<Experience title={exp.title} date={exp.date} company={exp.company} points={exp.points} />
		{/each}
	</section>
	<section class="diplomas">
		<h2 class="sectionTitle big">{labels.diplomasTitle}</h2>
		{#each data.diplomas as diploma}
			<Diploma title={diploma.title} subtitle={diploma.subtitle} />
		{/each}
	</section>
	<section class="skills">
		<h2 class="sectionTitle">{labels.skillsTitle}</h2>
		{#each data.skillGroups as skillGroup}
			<SkillGroup title={skillGroup.title} skills={skillGroup.skills} />
		{/each}
	</section>
	<section class="languages">
		<h2 class="sectionTitle">{labels.languageTitle}</h2>
		<Languages languages={data.languages} />
	</section>
	<section class="hobbies">
		<h2 class="sectionTitle">{labels.hobbiesTitle}</h2>
		<Hobbies hobbies={data.hobbies} />
	</section>
</main>

<style>
	.wrapper {
		align-items: top;
		min-height: 100%;
		padding: 0 20px 20px;
	}

	.intro {
		margin: 0 -20px;
		background: url('/images/background.png');
	}

	.social {
		margin: 0 -20px;
		padding: 10px;
		background: url('/images/background.png');
	}
	
	.sectionTitle {
		margin: 0 -20px 10px;
		padding: 3px;
		font-size: 1.2em;
		font-weight: 200;
		color: #fff;
		background-color: #ff3e00;
		text-align: center;
	}

	@media (min-width: 768px) {
		.wrapper {
			box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
		}
	}

	@media print, (min-width: 768px) {
		.wrapper {
			display: flex;
			flex-flow: column wrap;
			max-width: 760px;
			min-height: 100%;
			max-height: 1350px;
			margin: 0 auto;
			padding: 0;
			background: url('/images/background.png') no-repeat;
			background-size: 280px 100%;
		}

		.wrapper > * {
			padding: 0 20px;
			box-sizing: border-box;
		}

		.intro,
		.social,
		.skills,
		.languages,
		.hobbies {
			margin: 0;
			width: 280px;
		}

		.intro::after,
		.social::after,
		.skills::after,
		.languages::after {
			content: '';
			display: block;
			width: 100%;
			height: 1px;
			margin: 15px 0;
			background-color: #ff3e00;
			opacity: .5;
		}

		.hobbies::after {
			content: '';
			display: block;
			height: 15px;
		}

		.intro {
			order: 1;
		}

		.social {
			order: 2;
		}

		.skills {
			order: 3;
			width: 280px;
		}

		.languages {
			order: 4;
		}

		.hobbies {
			order: 5;
			flex-grow: 1;
		}

		.experiences {
			order: 6;
			width: calc(100% - 280px);
		}

		.diplomas {
			order: 7;
			width: calc(100% - 280px);
		}

		.sectionTitle {
			margin: 0 0 10px;
			padding: 0;
			color: #ff3e00;
			background-color: transparent;
		}

		.sectionTitle.big {
			margin-top: 10px;
			text-align: left;
			font-size: 1.6em;
			text-transform: uppercase;
		}
	}
</style>