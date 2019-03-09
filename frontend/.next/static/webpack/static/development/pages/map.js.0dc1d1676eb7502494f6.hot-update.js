webpackHotUpdate("static/development/pages/map.js",{

/***/ "./components/GoogleMap.js":
/*!*********************************!*\
  !*** ./components/GoogleMap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GoogleMap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/tithos/Code/Web-iPeeFreely/frontend/components/GoogleMap.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Map = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "GoogleMap__Map",
  componentId: "o1i8m3-0"
})(["width:100px;height:90vh;"]);

var GoogleMap =
/*#__PURE__*/
function (_Component) {
  _inherits(GoogleMap, _Component);

  function GoogleMap(props) {
    var _this;

    _classCallCheck(this, GoogleMap);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleMap).call(this, props));
    _this.state = {
      coords: [],
      mapCenter: {
        lat: 37.9521987,
        lng: -122.03259079999998
      },
      mapZoom: 15 // this.getCoords = this.getCoords.bind(this)

    };
    return _this;
  } // if ("geolocation" in navigator) {
  //   let self = this
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log('set location')
  //     self.setState({
  //       mapCenter: { lat: position.coords.latitude, lng:position.coords.longitude }
  //     })
  //   });
  // } else {
  //   console.log('not set')
  // }


  _createClass(GoogleMap, [{
    key: "render",
    value: function render() {
      var mapCoords = this.state.coords.map(function (mapCoord, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BathroomMarker, {
          style: {
            height: '30px',
            width: '160px'
          },
          key: index,
          lat: mapCoord.lat,
          lng: mapCoord.lng,
          name: mapCoord.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Map, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bootstrapURLKeys: {
          key: 'AIzaSyDSuCrywX_-TbCb-0zQrrQ0W8ksCc8jL-U'
        },
        defaultCenter: {
          lat: 37.5670279,
          lng: -122.3238017
        },
        center: this.state.mapCenter,
        defaultZoom: this.state.mapZoom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, mapCoords));
    }
  }]);

  return GoogleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=map.js.0dc1d1676eb7502494f6.hot-update.js.map