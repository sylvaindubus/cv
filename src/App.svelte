<script>
	import 'src/styles/vars.css';
	import 'src/styles/global.css';

	import Intro from 'src/components/Intro.svelte';
	import Social from 'src/components/Social.svelte';
	import SkillGroup from 'src/components/SkillGroup.svelte';
	import Languages from 'src/components/Languages.svelte';
	import Experience from 'src/components/Experience.svelte';
	import Diploma from 'src/components/Diploma.svelte';
	import Hobbies from 'src/components/Hobbies.svelte';

	import { getLangFromUrl, getLangFromStorage, setLangToStorage } from 'src/helpers/lang.js';
	import { getData } from 'src/helpers/data.js';

	// Try to find the best language
	let lang = getLangFromUrl() || getLangFromStorage() || 'fr';
	let data = getData(lang);

	const switchLang = () => {
		lang = lang === 'fr' ? 'en' : 'fr';
		data = getData(lang);
		setLangToStorage(lang);
	}
</script>

<main class="wrapper">
	<section class="section intro">
		<Intro name="{data.name}" status="{data.status}" years="{data.years}" yearsLabel="{data.yearsLabel}" />
	</section>
	<section class="section social">
		<Social mail="{data.mail}" linkedin="{data.linkedin}" github="{data.github}" />
	</section>
	<section class="section experiences">
		<h2 class="sectionTitle big">{data.experiencesTitle}</h2>
		{#each data.experiences as exp}
			<Experience 
				title={exp.title}
				date={exp.date}
				company={exp.company}
				context={exp.context}
				points={exp.points}
				env={exp.env}
				contextLabel={data.expContextLabel}
				envLabel={data.expEnvLabel} />
		{/each}
	</section>
	<section class="section diplomas">
		<h2 class="sectionTitle big">{data.diplomasTitle}</h2>
		{#each data.diplomas as diploma}
			<Diploma title={diploma.title} subtitle={diploma.subtitle} />
		{/each}
	</section>
	<section class="section skills">
		<h2 class="sectionTitle">{data.skillsTitle}</h2>
		{#each data.skillGroups as skillGroup}
			<SkillGroup title={skillGroup.title} skills={skillGroup.skills} />
		{/each}
	</section>
	<section class="section languages">
		<h2 class="sectionTitle">{data.languagesTitle}</h2>
		<Languages languages={data.languages} />
	</section>
	<section class="section hobbies">
		<h2 class="sectionTitle">{data.hobbiesTitle}</h2>
		<Hobbies hobbies={data.hobbies} />
	</section>
	<button class="langButton" on:click={switchLang}>{data.switchLangLabel}</button>
</main>

<style>
	.wrapper {
		position: relative;
		align-items: top;
		min-height: 100%;
		padding: 0 20px 20px;
	}

	.intro {
		margin: 0 -20px;
		background-color: var(--color-lightBackground);
	}

	.social {
		margin: 0 -20px;
		padding: 10px;
		background-color: var(--color-lightBackground);
	}

	.langButton {
		position: absolute;
		top: 10px;
		right: 20px;
		padding: 0;
		border: none;
		background: none;
		text-decoration: underline;
		color: var(--color-lightText);
		font-size: var(--fontSize-sm);
		cursor: pointer;
	}

	.sectionTitle {
		margin: 0 -20px 10px;
		padding: 3px;
		font-size: var(--fontSize-lg);
		font-weight: 200;
		color: var(--color-white);
		background-color: var(--color-main);
		text-align: center;
	}

	@media (min-width: 768px) {
		.wrapper {
			box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
		}
	}

	@media print {
		.wrapper {
			width: 80%;
		}
	}

	@media print, (min-width: 768px) {
		.wrapper {
			display: flex;
			flex-flow: column wrap;
			max-width: 900px;
			max-height: 2200px;
			margin: 0 auto;
			padding: 0;
			background-color: var(--color-lightBackground);
		}

		.wrapper > .section {
			padding: 0 20px;
			box-sizing: border-box;
		}

		.intro,
		.social,
		.skills,
		.languages,
		.hobbies {
			margin: 0;
			width: var(--width-column);
		}

		.experiences,
		.diplomas {
			width: calc(100% - var(--width-column));
			background-color: #fff;
		}

		.intro {
			order: 1;
		}

		.social {
			order: 2;
		}

		.skills {
			order: 3;
		}

		.languages {
			order: 4;
		}

		.hobbies {
			order: 5;
		}

		.experiences {
			order: 6;
		}

		.diplomas {
			order: 7;
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
			background-color: var(--color-main);
			opacity: .5;
		}

		.sectionTitle {
			margin: 0 0 10px;
			padding: 0;
			color: var(--color-main);
			background-color: transparent;
		}

		.sectionTitle.big {
			margin-top: 10px;
			text-align: left;
			font-size: var(--fontSize-xl);
			text-transform: uppercase;
		}
	}
</style>