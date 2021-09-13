System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, ParticleSystem2D, RigidBody2D, Vec2, Contact2DType, CircleCollider2D, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, Player;

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
      ParticleSystem2D = _cc.ParticleSystem2D;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Contact2DType = _cc.Contact2DType;
      CircleCollider2D = _cc.CircleCollider2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36642fwz0pGC5MYmzgjHdXO", "Player", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Player, _Component);

        function Player() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "bullet", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bullet2", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "skill", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tweenMove", void 0);

          _defineProperty(_assertThisInitialized(_this), "rigidBody", void 0);

          return _this;
        }

        var _proto = Player.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on("FIRE_TO_POS", this.fireToPosition, this);
          this.node.on('SENT_GIFT', this.runSkill, this);
          this.bullet.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        };

        _proto.onBeginContact = function onBeginContact(contact, selfCollider, otherCollider) {
          if (selfCollider.node.getComponent('Enemy')) {
            this.reset();
          }
        };

        _proto.fireToPosition = function fireToPosition(position, force, kine) {
          this.fireBullet(position, kine);
          this.applyForceToTarget(this.node, position, force);
        };

        _proto.fireBullet = function fireBullet(position, kine, callBack) {
          var _this2 = this;

          if (callBack === void 0) {
            callBack = null;
          }

          if (kine === 2) {
            this.bullet.setPosition(this.node.getPosition());
            this.bullet.getComponent(ParticleSystem2D).resetSystem();
            this.bullet.active = true;
            this.applyForceToTarget(this.bullet, position, -1);
          } else {
            this.bullet2.setPosition(this.node.getPosition());
            this.bullet2.getComponent(ParticleSystem2D).resetSystem();
            this.bullet2.active = true;
            this.bullet2.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
            this.scheduleOnce(function () {
              _this2.reset2();

              _this2.bullet2.active = false;
            }, 0.3);
          }
        };

        _proto.reset = function reset() {
          this.bullet.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
          this.bullet.getComponent(ParticleSystem2D).resetSystem();
          this.bullet.getComponent(ParticleSystem2D).stopSystem();
          this.bullet.setPosition(this.node.getPosition());
        };

        _proto.reset2 = function reset2() {
          this.bullet2.getComponent(ParticleSystem2D).resetSystem();
          this.bullet2.getComponent(ParticleSystem2D).stopSystem();
        };

        _proto.applyForceToTarget = function applyForceToTarget(target, position, force) {
          var nodePos = this.node.getPosition();
          var currentPos = new Vec2(nodePos.x - position.x, nodePos.y - position.y);
          var currentAngle = Math.atan2(currentPos.y, currentPos.x) * 180 / Math.PI;
          var x = force * Math.cos(currentAngle * Math.PI / 180);
          var y = force * Math.sin(currentAngle * Math.PI / 180);
          target.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
          target.getComponent(RigidBody2D).applyForceToCenter(new Vec2(x, y), true);
        };

        _proto.runSkill = function runSkill(event) {
          this.skill.emit('ATTACK');
        };

        return Player;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bullet2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skill", [_dec4], {
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