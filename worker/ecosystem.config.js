module.exports = {
  apps : [{
    name   : "worker",
    script : "./worker.js",
		watch: true,
		ignore_watch: ["node_modules", "data/*"],
		watch_options: {
			followSymlinks: false
		}
  }]
}
