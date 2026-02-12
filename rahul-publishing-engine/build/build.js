const fs = require("fs");
const path = require("path");

function readAllJS(dir) {
  let content = "";
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      content += readAllJS(full);
    } else if (file.endsWith(".js")) {
      content += fs.readFileSync(full, "utf8") + "\n";
    }
  });
  return content;
}

const js = readAllJS("../");
const css = fs.readFileSync("../css/main.css","utf8");

const final = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>${css}</style>
</head>
<body>
<div id="app"></div>
<script>
${js}
</script>
</body>
</html>
`;

fs.writeFileSync("rahul-engine-build.html", final);
console.log("Build Complete");
