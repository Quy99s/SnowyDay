System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Contact2DType, CircleCollider2D, _dec, _class, _crd, ccclass, property, Bullet;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bullet, _Component);

        function Bullet() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = Bullet.prototype;

        _proto.start = function start() {
          this.node.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        };

        _proto.onBeginContact = function onBeginContact(contact, selfCollider, otherCollider) {
          console.warn(otherCollider);
        };

        return Bullet;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Bullet.js.map