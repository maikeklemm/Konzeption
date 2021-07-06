"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Konzeption = void 0;
const Url = require("url");
const Http = require("http");

var Konzeption;
(function (Konzeption) {

   

    let port = process.env.PORT;
    if (port == undefined)
        port = 5500;
    startServer(port);
    console.log("Hallo Server");
    //*starte Server*
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    } //start server zu
    function handleRequest(_request, _response) {
        console.log("Server handlet Request");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            // let url = Url.parse(_request.url, true);
            // // for (let key in url.query) {
            // // _response.write(key + ":" + url.query[key] + "<br/>");
            // //  }
            // let jsonString = JSON.stringify(url.query);
            // _response.write(jsonString);
            let url = Url.parse(_request.url, true);
            let command = url.query["command"];
            if (command == "retrieve") {

            //     console.log("retrieve Question");      
            // var questions = ["What if animals could talk, which would be the rudest?","What if gravity was slowly disappearing?","What if you could design a planet. What would your perfect planet look like?"];
            // var question = questions[Math.floor(Math.random() * questions.length)];
            // console.log(question);
            // _response.write(question);


            }
            else{
                let url = Url.parse(_request.url, true);
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString + "serrrrvveeer");

            }
        }
        _response.end();
    } //handleRequest zu
})(Konzeption = exports.Konzeption || (exports.Konzeption = {})); //namespace zu
//# sourceMappingURL=ServerKonzeption.js.map