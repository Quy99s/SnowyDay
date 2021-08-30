System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, Vec2, CCInteger, UITransform, Size, UIOpacity, EventTarget, SystemEventType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, instance, SET_JOYSTICK_TYPE, DirectionType, SpeedType, JoystickType, Joystick;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    DirectionType: void 0,
    SpeedType: void 0,
    JoystickType: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
      Vec2 = _cc.Vec2;
      CCInteger = _cc.CCInteger;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      UIOpacity = _cc.UIOpacity;
      EventTarget = _cc.EventTarget;
      SystemEventType = _cc.SystemEventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8255NBFYBE9LgoAMND4zR5", "Joystick", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("instance", instance = new EventTarget());

      _export("SET_JOYSTICK_TYPE", SET_JOYSTICK_TYPE = "SET_JOYSTICK_TYPE");
      /**
       * 方向类型
       */


      (function (DirectionType) {
        DirectionType[DirectionType["FOUR"] = 0] = "FOUR";
        DirectionType[DirectionType["EIGHT"] = 1] = "EIGHT";
        DirectionType[DirectionType["ALL"] = 2] = "ALL";
      })(DirectionType || _export("DirectionType", DirectionType = {}));

      (function (SpeedType) {
        SpeedType[SpeedType["STOP"] = 0] = "STOP";
        SpeedType[SpeedType["NORMAL"] = 1] = "NORMAL";
        SpeedType[SpeedType["FAST"] = 2] = "FAST";
      })(SpeedType || _export("SpeedType", SpeedType = {}));

      (function (JoystickType) {
        JoystickType[JoystickType["FIXED"] = 0] = "FIXED";
        JoystickType[JoystickType["FOLLOW"] = 1] = "FOLLOW";
      })(JoystickType || _export("JoystickType", JoystickType = {}));

      _export("Joystick", Joystick = (_dec = ccclass('Joystick'), _dec2 = property({
        type: Node,
        displayName: "Dot",
        tooltip: "摇杆操纵点"
      }), _dec3 = property({
        type: Node,
        displayName: "Ring",
        tooltip: "摇杆背景节点"
      }), _dec4 = property({
        type: Enum(JoystickType),
        displayName: "Touch Type",
        tooltip: "触摸类型"
      }), _dec5 = property({
        type: Enum(DirectionType),
        displayName: "Direction Type",
        tooltip: "方向类型"
      }), _dec6 = property({
        type: Vec3,
        tooltip: "摇杆所在位置"
      }), _dec7 = property({
        type: Vec2,
        tooltip: "触摸位置"
      }), _dec8 = property({
        type: CCInteger,
        displayName: "Ring Radius",
        tooltip: "半径"
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Joystick, _Component);

        function Joystick() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dot", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ring", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "joystickType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "directionType", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_stickPos", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "_touchLocation", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "radius", _descriptor7, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Joystick.prototype;

        _proto.onLoad = function onLoad() {
          var _getComponent;

          if (!this.dot) {
            console.warn("Joystick Dot is null!");
            return;
          }

          if (!this.ring) {
            console.warn("Joystick Ring is null!");
            return;
          }

          var uiTransform = this.ring.getComponent(UITransform);
          var size = this.radius * 2;
          var ringSize = new Size(size, size);
          uiTransform === null || uiTransform === void 0 ? void 0 : uiTransform.setContentSize(ringSize);
          (_getComponent = this.ring.getChildByName("bg").getComponent(UITransform)) === null || _getComponent === void 0 ? void 0 : _getComponent.setContentSize(ringSize);

          this._initTouchEvent(); // hide joystick when follow


          var uiOpacity = this.node.getComponent(UIOpacity);

          if (this.joystickType === JoystickType.FOLLOW && uiOpacity) {
            uiOpacity.opacity = 0;
          }
        }
        /**
         * 启用时
         */
        ;

        _proto.onEnable = function onEnable() {
          instance.on(SET_JOYSTICK_TYPE, this._onSetJoystickType, this);
        }
        /**
         * 禁用时
         */
        ;

        _proto.onDisable = function onDisable() {
          instance.off(SET_JOYSTICK_TYPE, this._onSetJoystickType, this);
        }
        /**
         * 改变摇杆类型
         * @param type
         */
        ;

        _proto._onSetJoystickType = function _onSetJoystickType(type) {
          this.joystickType = type;
          var uiOpacity = this.node.getComponent(UIOpacity);

          if (uiOpacity) {
            uiOpacity.opacity = type === JoystickType.FIXED ? 255 : 0;
          }
        }
        /**
         * 初始化触摸事件
         */
        ;

        _proto._initTouchEvent = function _initTouchEvent() {
          // set the size of joystick node to control scale
          this.node.on(SystemEventType.TOUCH_START, this._touchStartEvent, this);
          this.node.on(SystemEventType.TOUCH_MOVE, this._touchMoveEvent, this);
          this.node.on(SystemEventType.TOUCH_END, this._touchEndEvent, this);
          this.node.on(SystemEventType.TOUCH_CANCEL, this._touchEndEvent, this);
        }
        /**
         * 触摸开始回调函数
         * @param event
         */
        ;

        _proto._touchStartEvent = function _touchStartEvent(event) {
          if (!this.ring || !this.dot) return;
          instance.emit(SystemEventType.TOUCH_START, event);
          var location = event.getUILocation();
          var touchPos = new Vec3(location.x, location.y);

          if (this.joystickType === JoystickType.FIXED) {
            this._stickPos = this.ring.getPosition(); // 相对中心的向量

            var moveVec = touchPos.subtract(this.ring.getPosition()); // 触摸点与圆圈中心的距离

            var distance = moveVec.length(); // 手指在圆圈内触摸,控杆跟随触摸点

            if (this.radius > distance) {
              this.dot.setPosition(moveVec);
            }
          } else if (this.joystickType === JoystickType.FOLLOW) {
            // 记录摇杆位置，给 touch move 使用
            this._stickPos = touchPos;
            this.node.getComponent(UIOpacity).opacity = 255;
            this._touchLocation = event.getUILocation(); // 更改摇杆的位置

            this.ring.setPosition(touchPos);
            this.dot.setPosition(new Vec3());
          }
        }
        /**
         * 触摸移动回调函数
         * @param event
         */
        ;

        _proto._touchMoveEvent = function _touchMoveEvent(event) {
          if (!this.dot || !this.ring) return; // 如果 touch start 位置和 touch move 相同，禁止移动

          if (this.joystickType === JoystickType.FOLLOW && this._touchLocation === event.getUILocation()) {
            return false;
          } // 以圆圈为锚点获取触摸坐标


          var location = event.getUILocation();
          var touchPos = new Vec3(location.x, location.y); // move vector

          var moveVec = touchPos.subtract(this.ring.getPosition());
          var distance = moveVec.length();
          var speedType = SpeedType.NORMAL;

          if (this.radius > distance) {
            this.dot.setPosition(moveVec);
            speedType = SpeedType.NORMAL;
          } else {
            // 控杆永远保持在圈内，并在圈内跟随触摸更新角度
            this.dot.setPosition(moveVec.normalize().multiplyScalar(this.radius));
            speedType = SpeedType.FAST;
          }

          instance.emit(SystemEventType.TOUCH_MOVE, event, {
            speedType: speedType,
            moveVec: moveVec.normalize()
          });
        }
        /**
         * 触摸结束回调函数
         * @param event
         */
        ;

        _proto._touchEndEvent = function _touchEndEvent(event) {
          if (!this.dot || !this.ring) return;
          this.dot.setPosition(new Vec3());

          if (this.joystickType === JoystickType.FOLLOW) {
            this.node.getComponent(UIOpacity).opacity = 0;
          }

          instance.emit(SystemEventType.TOUCH_END, event, {
            speedType: SpeedType.STOP
          });
        };

        return Joystick;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ring", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "joystickType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return JoystickType.FIXED;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "directionType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DirectionType.ALL;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_stickPos", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_touchLocation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Joystick.js.map