System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, v3, ParticleSystem2D, RigidBody2D, Vec2, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      v3 = _cc.v3;
      ParticleSystem2D = _cc.ParticleSystem2D;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36642fwz0pGC5MYmzgjHdXO", "Player", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "bullet", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tweenMove", void 0);

          _defineProperty(_assertThisInitialized(_this), "rigidBody", void 0);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on("FIRE_TO_POS", this.fireToPosition, this);
          this.rigidBody = this.node.getComponent(RigidBody2D);
        };

        _proto.update = function update(dt) {};

        _proto.fireToPosition = function fireToPosition(position) {
          var nodePos = this.node.getPosition();
          var currentPos = new Vec2(nodePos.x - position.x, nodePos.y - position.y);
          var currentAngle = Math.atan2(currentPos.y, currentPos.x) * 180 / Math.PI;
          var x = this.force * Math.cos(currentAngle * Math.PI / 180);
          var y = this.force * Math.sin(currentAngle * Math.PI / 180);
          this.fireBullet(position);
          this.rigidBody.linearVelocity = new Vec2(0, 0);
          this.rigidBody.applyForceToCenter(new Vec2(x, y), true);
        };

        _proto.fireBullet = function fireBullet(position, callBack) {
          var _this2 = this;

          if (callBack === void 0) {
            callBack = null;
          }

          this.bullet.setPosition(this.node.getPosition());
          this.bullet.getComponent(ParticleSystem2D).resetSystem();
          this.bullet.active = true;
          this.tweenMove && this.tweenMove.stop();
          this.tweenMove = tween(this.bullet).to(0.3, {
            position: v3(position)
          }, {
            easing: 'sineInOut'
          }).delay(0.1).call(function () {
            callBack && callBack();

            _this2.reset();

            _this2.tweenMove = null;
          }).start();
        };

        _proto.reset = function reset() {
          this.bullet.getComponent(ParticleSystem2D).resetSystem();
          this.bullet.getComponent(ParticleSystem2D).stopSystem();
        };

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Player.js.map