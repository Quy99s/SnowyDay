System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, v3, Vec3, _dec, _class, _temp, _crd, ccclass, property, Skill;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2cd97a/PotMwrfiYh8FNEnG", "Skill", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Skill", Skill = (_dec = ccclass('Skill'), _dec(_class = (_temp = class Skill extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "tweenScale", void 0);
        }

        onLoad() {
          this.node.on("ATTACK", this.runSkill, this);
        }

        runSkill() {
          this.node.active = true;
          this.tweenScale && this.tweenScale.stop();
          this.tweenScale = tween(this.node).to(1, {
            scale: v3(3, 3, 0)
          }, {
            easing: 'sineInOut'
          }) // .delay(0.1)
          .call(() => {
            this.reset();
            this.tweenScale = null;
          }).start();
        }

        reset() {
          this.node.active = false;
          this.node.setScale(new Vec3(0, 0, 0));
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Skill.js.map