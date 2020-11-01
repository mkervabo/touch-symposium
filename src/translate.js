const en = [...document.querySelectorAll ('[i18n]')]
  .map (el => [el.getAttribute ('i18n'), el.innerText])
  .reduce ((c, [key, value]) => ((c[key] = value), c), {});

const fr = {
  what_title: 'Computer Programming, Humanities, Music',
  what_body: `<3 TØUCH > est un symposium mixant art-technologie-philosophie et dont la chaire se situe dans le Paris cyberpunk.
<3 TØUCH > est un mélange de musique électro, d'esthétique de haut niveau, de vibe féminine, de science avancée, de programmation éthique et d' hacktivisme sophistiqué.
<3 TØUCH > symposium mêlera musique, conférences et art numérique pour ouvrir la voie à des débats interdisciplinaires critiques et créatifs afin d'éduquer, d'informer et de prévenir`,
  where_title: 'WHERE ?',
  where_body: 'The Holodeck at #42born2code - Recording studio for interdisciplinary creative debates on your screen',
  when_title: '3 Décembre',
  how_title: 'Mission:',
  how_body: `Notre monde numérique et IoT est une société d'échantillonnage.
Boucler des fragments de données ici et là pour alimenter les technologies informatisées.
Le 3 décembre 2020, nous discuterons pourquoi et comment programmer des codes éthiques et créatifs.
Les artistes français et allemands issus de la musique électronique ont saisi avant l'heure nos enjeux sociétaux. 
Depuis les années 70, Kraftwerk, Daft Punk, Miss Kittin & The Hacker, Chicks on Speed, Ellen Allien ont observé la fabrication du monde technologique dans lequel nous vivons. Les hommes-machines, les robots, la protection de la vie privée, les données numériques et l'intelligence artificielle les ont inspiré pour informer le grand public sur ces sujets de manière créative.`,
};

function translate(lang) {
	for (const [key, value] of Object.entries(lang)) {
    const el = document.querySelector(`[i18n=${key}]`)
    if (el)
		  el.innerText = value
	}
}

const url = new URL(document.location)

let english = url.searchParams.get("lang") !== "fr";

const flag = document.getElementById('flag')

function updateLang() {
	translate(english ? en : fr);
  url.searchParams.set('lang', english ? "en" : "fr")
  history.pushState({}, '', url.toString())
	flag.setAttribute("src", `https://cdn.rawgit.com/lipis/flag-icon-css/fe79c175/flags/4x3/${english ? 'fr' : 'gb'}.svg`)
}

updateLang()

flag.addEventListener('click', () => {
	english = !english;
	updateLang()
})