const express = require('express');
const app = express();
app.use(express.static('tutorial'));

app.listen(3000, () => {
  console.log(`Tutorial files are at:
  * http://localhost:3000/08-document.ready.html
  * http://localhost:3000/09-xhr-wrapper.html
`);
});