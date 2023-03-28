"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dataSource = require("./data-source");
var _Post = require("./entity/Post");
_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var posts;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return connection.manager.save([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (i) {
              return new _Post.Post({
                title: "post".concat(i),
                content: "\u8FD9\u662F\u6211\u7684\u7B2C".concat(i, "\u7BC7\u535A\u5BA2")
              });
            }));
          case 2:
            _context.next = 4;
            return connection.manager.find(_Post.Post);
          case 4:
            posts = _context.sent;
            console.log('post after blog saved: ', posts);
            connection.destroy();
          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});