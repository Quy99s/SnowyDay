System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, tween, v3, Vec3, _dec, _class, _temp, _crd, ccclass, property, Skill;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Skill", Skill = (_dec = ccclass('Skill'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Skill, _Component);

        function Skill() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "tweenScale", void 0);

          return _this;
        }

        var _proto = Skill.prototype;

        _proto.onLoad = function onLoad() {
          this.node.on("ATTACK", this.runSkill, this);
        };

        _proto.runSkill = function runSkill() {
          var _this2 = this;

          this.node.active = true;
          this.tweenScale && this.tweenScale.stop();
          this.tweenScale = tween(this.node).to(1, {
            scale: v3(3, 3, 0)
          }, {
            easing: 'sineInOut'
          }) // .delay(0.1)
          .call(function () {
            _this2.reset();

            _this2.tweenScale = null;
          }).start();
        };

        _proto.reset = function reset() {
          this.node.active = false;
          this.node.setScale(new Vec3(0, 0, 0));
        };

        return Skill;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Skill.js.map