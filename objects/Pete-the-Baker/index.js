//my solution

function cakes(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((ingredient) =>
      available[ingredient]
        ? Math.floor(available[ingredient] / recipe[ingredient])
        : 0,
    ),
  )
}
