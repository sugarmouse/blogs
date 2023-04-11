"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _dataSource = require("./data-source");
var _Post = require("./entity/Post");
var _User = require("./entity/User");
var _Comment = require("./entity/Comment");
_dataSource.AppDataSource.initialize().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manager, u1, p1, c1;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            manager = connection.manager;
            u1 = new _User.User();
            u1.username = 'tttht';
            u1.password_digest = 'xxxxx';
            _context.next = 6;
            return manager.save(u1);
          case 6:
            p1 = new _Post.Post();
            p1.title = 'first blog';
            p1.content = 'new to here';
            p1.author = u1;
            _context.next = 12;
            return manager.save(p1);
          case 12:
            c1 = new _Comment.Comment();
            c1.content = 'great idea';
            c1.post = p1;
            c1.user = u1;
            _context.next = 18;
            return manager.save(c1);
          case 18:
            console.log('seeding completed');
            connection.destroy();
          case 20:
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