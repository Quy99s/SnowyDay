System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Contact2DType, CircleCollider2D, _dec, _class, _crd, ccclass, property, Bullet;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      CircleCollider2D = _cc.CircleCollider2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1bb569k5vtHUaov/TH+/cV8", "Bullet", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = class Bullet extends Component {
        onLoad() {
          this.node.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(contact, selfCollider, otherCollider) {// if (selfCollider.node.getComponent('Enemy')) {
          //     console.warn(selfCollider.node);
          // }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Bullet.js.map