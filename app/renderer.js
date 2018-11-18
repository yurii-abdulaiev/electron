// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var $ = require("jquery");

$('#test-btn').click(function () {
    mainWindow.loadFile('app/pages/home.html')
});