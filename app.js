var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//code.mFuncion();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/resources", express.static(path.join(__dirname, "./")));

app.post("/submit-student-data", function (req, res) {
  var number = req.body.hiadica;

  if (isNaN(number) || number == "") {
      res.send('<h1>Ingrese un numero</h1> <a href="./resources/index.html">Volver</a>');

  } else {
    var msg = "";
    var txt = "";
    for (let index = 0; index <= 10; index++) {
      msg += number + "*" + index + ": " + number * index + "<br>";
      txt += number + "*" + index + ": " + number * index + "\n";
    }

    res.setHeader(
      "Content-disposition",
      "attachment; filename=theDocument.txt"
    );
    res.setHeader("Content-type", "text/plain");
    res.charset = "UTF-8";
    res.write(txt);
    res.write(
      "Recuerde abrir el documento en un editor, pues en el bloc de notas no está organizado con los saltos de linea"
    );
    res.end();
  }
});

app.listen(3000);
