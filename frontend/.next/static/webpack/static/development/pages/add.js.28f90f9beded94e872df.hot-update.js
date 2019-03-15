webpackHotUpdate("static/development/pages/add.js",{

/***/ "./components/CreateBathroom.js":
/*!**************************************!*\
  !*** ./components/CreateBathroom.js ***!
  \**************************************/
/*! exports provided: default, CREATE_BATHROOM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BATHROOM_MUTATION", function() { return CREATE_BATHROOM_MUTATION; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "/home/tithos/Code/Web-iPeeFreely/frontend/components/CreateBathroom.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_BATHROOM_MUTATION(\n    $title: String!\n    $description: String!\n    $address: String!\n    $image: String # $largeImage: String\n  ) {\n    createBathroom(\n      title: $title\n      description: $description\n      address: $address\n      image: $image\n      largeImage: $image\n    ) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var CREATE_BATHROOM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var CreateBathroom =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateBathroom, _Component);

  function CreateBathroom() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateBathroom);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateBathroom)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      title: "",
      description: "",
      address: "",
      image: "",
      largeImage: "",
      lat: "",
      lng: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === "number" ? parseFloat(value) : value;

      _this.setState(_defineProperty({}, name, val));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (address) {
      Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["geocodeByAddress"])(address).then(function (results) {
        return Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["getLatLng"])(results[0]);
      }).then(function (latLng) {
        var lat = latLng.lat,
            lng = latLng.lng;

        _this.setState({
          lat: lat,
          lng: lng
        });
      }).catch(function (error) {
        return console.error("Error", error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "uploadFile",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var files, data, res, file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("uploading file...");
                files = e.target.files;
                data = new FormData();
                data.append("file", files[0]);
                data.append("upload_preset", "iPeeFreely");
                _context.next = 7;
                return fetch("https://api.cloudinary.com/v1_1/tihos/image/upload", {
                  method: "POST",
                  body: data
                });

              case 7:
                res = _context.sent;
                _context.next = 10;
                return res.json();

              case 10:
                file = _context.sent;
                console.log(file);

                _this.setState({
                  image: file.secure_url,
                  largeImage: file.eager[0].secure_url
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(CreateBathroom, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: CREATE_BATHROOM_MUTATION,
        variables: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, function (createBathroom, _ref2) {
        var error = _ref2.error,
            loading = _ref2.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onSubmit:
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // Stop the form from submiting
                      e.preventDefault(); // Call the mutation

                      _context2.next = 3;
                      return createBathroom();

                    case 3:
                      res = _context2.sent;
                      // Change use to single item page
                      console.log(res);
                      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
                        pathname: "/bathroom",
                        query: {
                          id: res.data.createBathroom.id
                        }
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));

            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }(),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "file",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "Image", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          placeholder: "Upload an image",
          required: true,
          onChange: _this2.uploadFile,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }), _this2.state.image && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          width: "200",
          src: _this2.state.image,
          alt: "Upload Preview",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        }, "Title", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          id: "title",
          name: "title",
          placeholder: "Title",
          required: true,
          value: _this2.state.title,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("lable", {
          htmlFor: "address",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, "Address", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default.a, {
          value: _this2.state.address,
          onChange: _this2.handleChange,
          onSelect: _this2.handleSelect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, function (_ref4) {
          var getInputProps = _ref4.getInputProps,
              suggestions = _ref4.suggestions,
              getSuggestionItemProps = _ref4.getSuggestionItemProps,
              loading = _ref4.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, getInputProps({
            // name: "address",
            required: true,
            placeholder: "Address",
            className: "location-search-input"
          }), {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "autocomplete-dropdown-container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
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
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({}, getSuggestionItemProps(suggestion, {
              className: className,
              style: style
            }), {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 170
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              },
              __self: this
            }, suggestion.description));
          })));
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          htmlFor: "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "Description", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          type: "text",
          id: "description",
          name: "description",
          placeholder: "Please describe the bathroom",
          required: true,
          value: _this2.state.description,
          onChange: _this2.handleChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, "Submit")));
      });
    }
  }]);

  return CreateBathroom;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateBathroom);


/***/ })

})
//# sourceMappingURL=add.js.28f90f9beded94e872df.hot-update.js.map