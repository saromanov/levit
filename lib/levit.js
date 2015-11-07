"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var fs = _interopRequire(require("fs"));

var Levit = (function () {
    function Levit() {
        _classCallCheck(this, Levit);

        self.graph = new Map();
    }

    _createClass(Levit, {
        fromFile: {
            value: function fromFile(filepath) {
                var data = fs.readFileSync(filepath, "utf-8");
                if (data.length === 0) {
                    throw "File is not found";
                }

                data.split("\n").forEach(function (line) {
                    var items = line.split(" ");
                    if (items.length > 0) {
                        self.graph[items[0]] = items.slice(1, items.length);
                    }
                });
            }
        },
        fromDict: {
            value: function fromDict(dict) {
                this.graph = dict;
            }
        },
        run: {
            value: function run(v1, v2) {
                var queue = [];
                if (self.graph.size == 0) {
                    throw "Graph is empty";
                }

                var distance = new Map();
                distance.set(v1, 0);
                var q = [];
                q.push(v1);
                while (queue.length > 0) {
                    var v = q[0];
                    q.shift();
                    for (var i = 0; i < self.graph.size(); ++i) {}
                }
            }
        }
    });

    return Levit;
})();