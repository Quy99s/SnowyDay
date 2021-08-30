System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Joystick"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, PhysicsSystem2D, Vec3, CCInteger, RigidBody2D, SystemEventType, misc, Vec2, SpeedType, instance, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpeedType(extras) {
    _reporterNs.report("SpeedType", "./Joystick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinstance(extras) {
    _reporterNs.report("instance", "./Joystick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJoystickDataType(extras) {
    _reporterNs.report("JoystickDataType", "./Joystick", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Vec3 = _cc.Vec3;
      CCInteger = _cc.CCInteger;
      RigidBody2D = _cc.RigidBody2D;
      SystemEventType = _cc.SystemEventType;
      misc = _cc.misc;
      Vec2 = _cc.Vec2;
    }, function (_Joystick) {
      SpeedType = _Joystick.SpeedType;
      instance = _Joystick.instance;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d183umA95N5ZOgIo9FHjBI", "Player", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      PhysicsSystem2D.instance.enable = true;

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        displayName: "刚体模式",
        tooltip: "不会立即停止"
      }), _dec3 = property({
        displayName: "Move Dir",
        tooltip: "移动方向"
      }), _dec4 = property({
        tooltip: "速度级别"
      }), _dec5 = property({
        type: CCInteger,
        tooltip: "移动速度"
      }), _dec6 = property({
        type: CCInteger,
        tooltip: "停止时速度"
      }), _dec7 = property({
        type: CCInteger,
        tooltip: "正常速度"
      }), _dec8 = property({
        type: CCInteger,
        tooltip: "最快速度"
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "rigidbody", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "moveDir", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_speedType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_moveSpeed", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "stopSpeed", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "normalSpeed", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "fastSpeed", _descriptor7, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_body", null);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.onLoad = function onLoad() {
          if (this.rigidbody) {
            this._body = this.node.getComponent(RigidBody2D);
          }

          (_crd && instance === void 0 ? (_reportPossibleCrUseOfinstance({
            error: Error()
          }), instance) : instance).on(SystemEventType.TOUCH_START, this.onTouchStart, this);
          (_crd && instance === void 0 ? (_reportPossibleCrUseOfinstance({
            error: Error()
          }), instance) : instance).on(SystemEventType.TOUCH_MOVE, this.onTouchMove, this);
          (_crd && instance === void 0 ? (_reportPossibleCrUseOfinstance({
            error: Error()
          }), instance) : instance).on(SystemEventType.TOUCH_END, this.onTouchEnd, this);
        };

        _proto.onTouchStart = function onTouchStart() {};

        _proto.onTouchMove = function onTouchMove(event, data) {
          this._speedType = data.speedType;
          this.moveDir = data.moveVec;
          this.onSetMoveSpeed(this._speedType);
        };

        _proto.onTouchEnd = function onTouchEnd(event, data) {
          this._speedType = data.speedType;
          this.onSetMoveSpeed(this._speedType);
        }
        /**
         * set moveSpeed by SpeedType
         * @param speedType
         */
        ;

        _proto.onSetMoveSpeed = function onSetMoveSpeed(speedType) {
          switch (speedType) {
            case (_crd && SpeedType === void 0 ? (_reportPossibleCrUseOfSpeedType({
              error: Error()
            }), SpeedType) : SpeedType).STOP:
              this._moveSpeed = this.stopSpeed;
              break;

            case (_crd && SpeedType === void 0 ? (_reportPossibleCrUseOfSpeedType({
              error: Error()
            }), SpeedType) : SpeedType).NORMAL:
              this._moveSpeed = this.normalSpeed;
              break;

            case (_crd && SpeedType === void 0 ? (_reportPossibleCrUseOfSpeedType({
              error: Error()
            }), SpeedType) : SpeedType).FAST:
              this._moveSpeed = this.fastSpeed;
              break;

            default:
              break;
          }
        }
        /**
         * 移动
         */
        ;

        _proto.move = function move() {
          this.node.angle = misc.radiansToDegrees(Math.atan2(this.moveDir.y, this.moveDir.x)) - 90;

          if (this.rigidbody && this._body) {
            var moveVec = this.moveDir.clone().multiplyScalar(this._moveSpeed / 20);
            var force = new Vec2(moveVec.x, moveVec.y);

            this._body.applyForceToCenter(force, true);
          } else {
            var oldPos = this.node.getPosition();
            var newPos = oldPos.add( // fps: 60
            this.moveDir.clone().multiplyScalar(this._moveSpeed / 60));
            console.log(this._moveSpeed / 60);
            this.node.setPosition(newPos);
            console.log(newPos);
          }
        };

        _proto.update = function update(deltaTime) {
          if (this._speedType !== (_crd && SpeedType === void 0 ? (_reportPossibleCrUseOfSpeedType({
            error: Error()
          }), SpeedType) : SpeedType).STOP) {
            this.move();
          }
        };

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rigidbody", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveDir", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 1, 0);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_speedType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return (_crd && SpeedType === void 0 ? (_reportPossibleCrUseOfSpeedType({
            error: Error()
          }), SpeedType) : SpeedType).STOP;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_moveSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stopSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "normalSpeed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "fastSpeed", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Player.js.map