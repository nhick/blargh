module.exports = {
  apps : [{
    name   : "api",
    script : "./app.js",
		watch: true,
		ignore_watch : ["node_modules", "data/*"],
		watch_options: {
			followSymlinks: false
		}
  }]
}
