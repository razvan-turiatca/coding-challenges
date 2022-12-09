// my solution

function removeEnemies(names, enemies) {
	return names.filter(name => !enemies.includes(name))
}