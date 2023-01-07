"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 5;
var c = 10;

var data = function () {
    function data(a, b) {
        _classCallCheck(this, data);

        this.a = a;
        this.b = b;
    }

    _createClass(data, [{
        key: "sum",
        value: function sum() {
            return this.a + this.b;
        }
    }]);

    return data;
}();

var d = new data(5, 10);
console.log(d.sum());

var data1 = function (_data) {
    _inherits(data1, _data);

    function data1(a, b, c) {
        _classCallCheck(this, data1);

        var _this = _possibleConstructorReturn(this, (data1.__proto__ || Object.getPrototypeOf(data1)).call(this, a, b));

        _this.c = c;
        return _this;
    }

    _createClass(data1, [{
        key: "sum",
        value: function sum() {
            return _get(data1.prototype.__proto__ || Object.getPrototypeOf(data1.prototype), "sum", this).call(this) + this.c;
        }
    }]);

    return data1;
}(data);

var d1 = new data1(5, 10, 15);
console.log(d1.sum());
