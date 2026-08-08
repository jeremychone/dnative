import { spawnSync } from "node:child_process";

const result = spawnSync(
	"webtk",
	[
		"sketch",
		"export",
		"-g",
		"d-ico/*",
		"--format",
		"svg-symbols",
		"--keep-raw-export",
		"-o",
		"dnui/assets",
		".design/dnui-assets.sketch",
	],
	{ stdio: "inherit" },
);

if (result.status !== 0) {
	process.exit(result.status ?? 1);
}
