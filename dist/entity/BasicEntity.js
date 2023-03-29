"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicEntity = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3;
var BasicEntity = (_dec = (0, _typeorm.PrimaryGeneratedColumn)('increment'), _dec2 = (0, _typeorm.CreateDateColumn)({
  type: 'timestamp'
}), _dec3 = (0, _typeorm.UpdateDateColumn)({
  type: 'timestamp'
}), (_class = /*#__PURE__*/(0, _createClass2["default"])(function BasicEntity() {
  (0, _classCallCheck2["default"])(this, BasicEntity);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "created_at", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "updated_at", _descriptor3, this);
}), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "id", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "created_at", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class.prototype, "updated_at", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
exports.BasicEntity = BasicEntity;