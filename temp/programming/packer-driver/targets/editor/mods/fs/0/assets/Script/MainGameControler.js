System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, _decorator, Node, UITransform, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, MainGameControler;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9faeaIOcdFJfpiERVMeKmsf", "MainGameControler", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainGameControler", MainGameControler = (_dec = ccclass('MainGameControler'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp = class MainGameControler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "gameArea", _descriptor, this);

          _initializerDefineProperty(this, "player", _descriptor2, this);

          _initializerDefineProperty(this, "panel", _descriptor3, this);

          _initializerDefineProperty(this, "touchPoint", _descriptor4, this);
        }

        onLoad() {
          this.panel.active = false;
          this.bindClickEvent();
        }

        update(deltaTime) {
          if (!this.isInGameArea(this.player.getPosition())) {// this.panel.active = true;
          }
        }

        bindClickEvent() {
          if (this.gameArea) {
            this.gameArea.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.gameArea.on(Node.EventType.TOUCH_END, this.onTouchCancel.bind(this));
            this.gameArea.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
            this.gameArea.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel.bind(this));
          }
        }

        onTouchStart(event) {// console.warn("onTouchStart", event);
        }

        onTouchCancel(event) {
          const location = event.getLocation();
          const touchPos = new Vec3(location.x - 480, location.y - 320);
          this.touchPoint.setPosition(touchPos);
          this.scheduleOnce(() => {
            this.player.emit('FIRE_TO_POS', this.touchPoint.getPosition());
          }, 0); // console.warn("onTouchCancel", event);
        }

        onTouchMove(event) {
          const location = event.getLocation();
          const touchPos = new Vec3(location.x - 480, location.y - 320);
          this.touchPoint.setPosition(touchPos); // console.warn("onTouchMove", event);
        }

        isInGameArea(pos) {
          let szBg = this.gameArea.getComponent(UITransform).contentSize;

          if (pos.x <= -szBg.width / 2) {
            return false;
          }

          if (pos.x >= szBg.width / 2) {
            return false;
          }

          if (pos.y <= -szBg.height / 2) {
            return false;
          }

          if (pos.y >= szBg.height / 2) {
            return false;
          }

          return true;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameArea", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "panel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "touchPoint", [_dec5], {
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
//# sourceMappingURL=MainGameControler.js.map