const en = [...document.querySelectorAll ('[i18n]')]
  .map (el => [el.getAttribute ('i18n'), el.innerText])
  .reduce ((c, [key, value]) => ((c[key] = value), c), {});

const fr = {
  what_title: 'Computer Programming, Humanities, Music',
  what_body: `<3 TØUCH > est un symposium mixant art-technologie-philosophie et dont la chaire se situe dans le Paris cyberpunk.
<3 TØUCH > est un mélange de musique électro, d'esthétique de haut niveau, de vibe féminine, de science avancée, de programmation éthique et d' hacktivisme sophistiqué.
<3 TØUCH > symposium will mix music, talks and digital art to set the tracks for interdisciplinary critical and creative debates in order to educate, inform and prevent`,
  where_title: 'WHERE ?',
  where_body: 'The Holodeck at #42born2code - Recording studio for interdisciplinary creative debates on your screen',
  when_title: 'December 3rd',
  how_title: 'Mission statement:',
  how_body: `Notre monde numérique et IoT est une société d'échantillonnage.
Boucler des fragments de données ici et là pour alimenter les technologies informatisées.
Le 3 décembre 2020, nous discuterons pourquoi et comment programmer des codes éthiques et créatifs.`,
};

function translate(lang) {
	for (const [key, value] of Object.entries(lang)) {
		document.querySelector(`[i18n=${key}]`).innerText = value
	}
}

let english = document.location.hash !== "#fr";

const flag = document.getElementById('flag')

function updateLang() {
	translate(english ? en : fr);
	document.location.hash = english ? "#en" : "#fr"
	flag.setAttribute("src", `https://cdn.rawgit.com/lipis/flag-icon-css/fe79c175/flags/4x3/${english ? 'us' : 'fr'}.svg`)
}

updateLang()

flag.addEventListener('click', () => {
	english = !english;
	updateLang()
})