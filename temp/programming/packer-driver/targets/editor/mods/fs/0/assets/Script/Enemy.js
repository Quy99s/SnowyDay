System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Contact2DType, ParticleSystem2D, BoxCollider2D, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Enemy;

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
      Contact2DType = _cc.Contact2DType;
      ParticleSystem2D = _cc.ParticleSystem2D;
      BoxCollider2D = _cc.BoxCollider2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65a49MbRy1EfYdFpbxPGSWd", "Enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "backGround", _descriptor, this);

          _initializerDefineProperty(this, "particle", _descriptor2, this);
        }

        onLoad() {
          this.node.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(contact, selfCollider, otherCollider) {
          if (selfCollider.node.getComponent('Bullet') || selfCollider.node.getComponent('Skill')) {
            if (this.backGround.active) {
              this.backGround.active = false;

              if (this.particle) {
                this.particle.active = true;
                this.particle.getComponent(ParticleSystem2D).resetSystem();
                this.scheduleOnce(() => {
                  this.particle.getComponent(ParticleSystem2D).resetSystem();
                  this.particle.getComponent(ParticleSystem2D).stopSystem();
                  this.particle.active = false;
                }, 0.3);
              }
            }
          }
        }

        reset() {
          this.backGround.active = true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backGround", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "particle", [_dec3], {
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
//# sourceMappingURL=Enemy.js.map