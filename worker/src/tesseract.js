const { exec } = require("child_process"),
	fs = require("fs");

// =========================
// Tesseract CMD
// =========================
function Tesseract() {

	// =========================
	// Process
	// =========================
	function process(job) {


		const identifier = "data/" + job.id;

		console.log('starting to process job user options: ', job.data.options);

		return new Promise((resolve, reject) => {
			console.log('INSIDE PROMISE');
			exec(
				"tesseract " +
				job.data.files.img +
				" " +
				identifier +
				" -l " +
				job.data.options.langs || "eng" +
				" " +
				job.data.options.formats.join(" "),
				(err, stdout, stderr) => {

					console.log('tess:out',stdout);

					console.log('tess:err', stderr);

					if (err) {
						console.log(err);
						reject(err);
						return;
					}

					console.log(identifier);

					job.data.options.formats.forEach(format => {
						job.data.files[format] = identifier + "." + format;
					});

					// finish
					resolve(job);
				}
			);
		});
	}

	return {
		process
	};
}

module.exports = Tesseract;
