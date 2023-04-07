"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _typeorm = require("typeorm");
var _BasicEntity2 = require("./BasicEntity");
var _Post = require("./Post");
var _Comment = require("./Comment");
var _getDBConnection = require("@/lib/getDBConnection");
var _md = _interopRequireDefault(require("md5"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var User = (_dec = (0, _typeorm.Entity)('users'), _dec2 = (0, _typeorm.Column)('varchar'), _dec3 = (0, _typeorm.Column)('varchar'), _dec4 = (0, _typeorm.OneToMany)(function () {
  return _Post.Post;
}, function (post) {
  return post.author;
}), _dec5 = (0, _typeorm.OneToMany)(function () {
  return _Comment.Comment;
}, function (comment) {
  return comment.user;
}), _dec6 = (0, _typeorm.BeforeInsert)(), _dec(_class = (_class2 = /*#__PURE__*/function (_BasicEntity) {
  (0, _inherits2["default"])(User, _BasicEntity);
  var _super = _createSuper(User);
  function User() {
    var _this;
    (0, _classCallCheck2["default"])(this, User);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "username", _descriptor, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "password_digest", _descriptor2, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "posts", _descriptor3, (0, _assertThisInitialized2["default"])(_this));
    (0, _initializerDefineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "comments", _descriptor4, (0, _assertThisInitialized2["default"])(_this));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "errors", {
      password: [],
      username: [],
      passwordConfirmation: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "password", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "passwordConfirmation", void 0);
    return _this;
  }
  (0, _createClass2["default"])(User, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var trimedUsername, isUserDupicated;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                trimedUsername = this.username.trim();
                if (trimedUsername.length === 0) {
                  this.errors.username.push('用户名不能为空');
                }
                if (!/^[a-zA-Z0-9_]+$/.test(trimedUsername)) {
                  this.errors.username.push('用户名格式不正确，只能包含字母数字和下划线');
                }
                if (trimedUsername.length > 42) {
                  this.errors.username.push('用户名太长');
                }
                if (trimedUsername.length <= 3) {
                  this.errors.username.push('用户名太短');
                }
                if (!this.password || this.password === '') {
                  this.errors.password.push('密码不能为空');
                }
                if (this.password !== this.passwordConfirmation) {
                  this.errors.passwordConfirmation.push('密码不匹配');
                }
                _context.next = 9;
                return (0, _getDBConnection.getDatabaseConnection)();
              case 9:
                _context.next = 11;
                return _context.sent.manager.findOne(User, {
                  where: {
                    username: this.username
                  }
                });
              case 11:
                isUserDupicated = !!_context.sent;
                if (isUserDupicated) {
                  this.errors.username.push('用户名已存在，换一个试试吧');
                }
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function validate() {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return !!Object.values(this.errors).find(function (v) {
        return v.length > 0;
      });
    }
  }, {
    key: "generatePasswordDigest",
    value: function generatePasswordDigest() {
      this.password_digest = (0, _md["default"])(this.password);
    }

    // toJSON method -> define how to serialize the instance of this class with JSON.stringfy
  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this2 = this;
      var returnUser = {};
      Object.keys(this).forEach(function (key) {
        if (!["password", 'password_digest', 'passwordConfirmation', 'errors'].includes(key)) {
          returnUser[key] = _this2[key];
        }
      });
      return returnUser;
    }
  }]);
  return User;
}(_BasicEntity2.BasicEntity), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password_digest", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "posts", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comments", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "generatePasswordDigest", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "generatePasswordDigest"), _class2.prototype)), _class2)) || _class);
exports.User = User;