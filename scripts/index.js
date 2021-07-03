// include node fs module
const fs = require('fs');

const contentsIndex = `<a href="/child-app">Angular App</a>
<hr />
<a href="/parent-app">Angular Nested Frame App</a>
<hr />
<a href="/frame.html">Angular Frame App</a>`;

const contentsFrame = `<iframe src="/child-app" style="width: 100%; height: 500px;" />`;

// writeFile function with filename, content and callback function
fs.writeFile('dist/apps/index.html', contentsIndex, function (err) {
  if (err) throw err;
  console.log('Index File is created successfully.');
});

// writeFile function with filename, content and callback function
fs.writeFile('dist/apps/frame.html', contentsFrame, function (err) {
  if (err) throw err;
  console.log('Frame File is created successfully.');
});