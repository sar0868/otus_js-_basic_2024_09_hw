const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<body>
    <div id="content"></div>
    <script>document.getElementById("content").append(document.createElement("hr"));
    </script>
  </body>`);

// The script will not be executed, by default:
console.log(dom.window.document.getElementById("content").children.length);
