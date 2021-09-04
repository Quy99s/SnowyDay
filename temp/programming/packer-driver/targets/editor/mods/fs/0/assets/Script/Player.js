System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, ParticleSystem2D, RigidBody2D, Vec2, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36642fwz0pGC5MYmzgjHdXO", "Player", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bullet", _descriptor, this);

          _defineProperty(this, "tweenMove", void 0);

          _defineProperty(this, "rigidBody", void 0);
        }

        onLoad() {
          this.node.on("FIRE_TO_POS", this.fireToPosition, this);
        }

        fireToPosition(position, force) {
          this.fireBullet(position);
          this.applyForceToTarget(this.node, position, force);
        }

        fireBullet(position, callBack = null) {
          this.bullet.setPosition(this.node.getPosition());
          this.bullet.getComponent(ParticleSystem2D).resetSystem();
          this.bullet.active = true;
          this.applyForceToTarget(this.bullet, position, -1000);
        }

        reset() {
          this.bullet.getComponent(ParticleSystem2D).resetSystem();
          this.bullet.getComponent(ParticleSystem2D).stopSystem();
        }

        applyForceToTarget(target, position, force) {
          const nodePos = this.node.getPosition();
          const currentPos = new Vec2(nodePos.x - position.x, nodePos.y - position.y);
          const currentAngle = Math.atan2(currentPos.y, currentPos.x) * 180 / Math.PI;
          const x = force * Math.cos(currentAngle * Math.PI / 180);
          const y = force * Math.sin(currentAngle * Math.PI / 180);
          target.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
          target.getComponent(RigidBody2D).applyForceToCenter(new Vec2(x, y), true);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
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