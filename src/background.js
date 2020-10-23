import Triangulr from 'triangulr'

function color(path) {
	const colors = [
		'#87CEEB',
		'#FEBFD2',
		'#BFA7D2',
		'#93B9D6',
		//'#eeeeee',
	]
	return colors[(path.y + Math.floor(Math.random() * 2) - 1 + colors.length) % colors.length] + Math.floor(50 + Math.random() * 205).toString(16).padStart(2, '0')
}

const svg = new Triangulr(600, 500, 35, 10, color)

svg.classList.add("background")
document.body.prepend(svg)
