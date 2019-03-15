webpackHotUpdate("static/development/pages/add.js",{

/***/ "./components/AddessSearch.js":
/*!************************************!*\
  !*** ./components/AddessSearch.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/tithos/Code/Web-iPeeFreely/frontend/components/AddessSearch.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var AddessSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(AddessSearch, _Component);

  function AddessSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddessSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddessSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      address: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (address) {
      _this.setState({
        address: address
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (address) {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__["geocodeByAddress"])(address).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__["getLatLng"])(results[0]);
      }).then(function (latLng) {
        return console.log("Success", latLng);
      }).catch(function (error) {
        return console.error("Error", error);
      });
    });

    return _this;
  }

  _createClass(AddessSearch, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1___default.a, {
        value: this.state.address,
        onChange: this.handleChange,
        onSelect: this.handleSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, function (_ref) {
        var getInputProps = _ref.getInputProps,
            suggestions = _ref.suggestions,
            getSuggestionItemProps = _ref.getSuggestionItemProps,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, getInputProps({
          // name: "address",
          required: true,
          placeholder: "Address",
          className: "location-search-input"
        }), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "autocomplete-dropdown-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Loading..."), suggestions.map(function (suggestion) {
          var className = suggestion.active ? "suggestion-item--active" : "suggestion-item"; // inline style for demonstration purpose

          var style = suggestion.active ? {
            backgroundColor: "#fafafa",
            cursor: "pointer"
          } : {
            backgroundColor: "#ffffff",
            cursor: "pointer"
          };
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, getSuggestionItemProps(suggestion, {
            className: className,
            style: style
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, suggestion.description));
        })));
      });
    }
  }]);

  return AddessSearch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AddessSearch);

/***/ })

})
//# sourceMappingURL=add.js.eb0f06153a60f8b9b960.hot-update.js.map