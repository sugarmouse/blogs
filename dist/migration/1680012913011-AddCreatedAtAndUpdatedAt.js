"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCreatedAtAndUpdatedAt1680012913011 = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _typeorm = require("typeorm");
var AddCreatedAtAndUpdatedAt1680012913011 = /*#__PURE__*/function () {
  function AddCreatedAtAndUpdatedAt1680012913011() {
    (0, _classCallCheck2["default"])(this, AddCreatedAtAndUpdatedAt1680012913011);
  }
  (0, _createClass2["default"])(AddCreatedAtAndUpdatedAt1680012913011, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.addColumns('users', [new _typeorm.TableColumn({
                  name: 'created_at',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updated_at',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);
              case 2:
                _context.next = 4;
                return queryRunner.addColumns('posts', [new _typeorm.TableColumn({
                  name: 'created_at',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updated_at',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);
              case 4:
                _context.next = 6;
                return queryRunner.addColumns('comments', [new _typeorm.TableColumn({
                  name: 'created_at',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updated_at',
                  type: 'timestamp',
                  isNullable: false,
                  "default": 'now()'
                })]);
              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function up(_x) {
        return _up.apply(this, arguments);
      }
      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return queryRunner.dropColumns('users', ['created_at', 'updated_at']);
              case 3:
                _context2.next = 5;
                return queryRunner.dropColumns('comments', ['created_at', 'updated_at']);
              case 5:
                _context2.next = 7;
                return queryRunner.dropColumns('posts', ['created_at', 'updated_at']);
              case 7:
                _context2.next = 12;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));
      function down(_x2) {
        return _down.apply(this, arguments);
      }
      return down;
    }()
  }]);
  return AddCreatedAtAndUpdatedAt1680012913011;
}();
exports.AddCreatedAtAndUpdatedAt1680012913011 = AddCreatedAtAndUpdatedAt1680012913011;