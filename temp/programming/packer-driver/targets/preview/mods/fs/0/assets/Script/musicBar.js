System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, tween, v3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, MusicBar;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "29b11zbHbdNZ5KE+VCaOqea", "MusicBar", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MusicBar", MusicBar = (_dec = ccclass('MusicBar'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MusicBar, _Component);

        function MusicBar() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "line", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "mainGame", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "soundPlayer", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "tweenMove", void 0);

          _defineProperty(_assertThisInitialized(_this), "numNode", void 0);

          _defineProperty(_assertThisInitialized(_this), "listNode", void 0);

          _defineProperty(_assertThisInitialized(_this), "indexNode", void 0);

          _defineProperty(_assertThisInitialized(_this), "isCheck", true);

          _defineProperty(_assertThisInitialized(_this), "nodePosX", void 0);

          return _this;
        }

        var _proto = MusicBar.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.numNode = 0;
          this.indexNode = -1;
          this.tweenMove && this.tweenMove.stop();
          this.tweenMove = this.tweenMove = tween(this.line).to(50, {
            position: v3(-10000, 0, 0)
          }).call(function () {
            _this2.tweenMove = null;
          }).start();
          this.listNode = this.line.children;
          this.updateNodePos();
        };

        _proto.update = function update(deltaTime) {
          var linePosX = this.line.position.x;
          var checkingNode = this.listNode[this.indexNode];

          if (checkingNode) {
            checkingNode.isChecking = true;
            if (linePosX <= this.nodePosX + 5) this.checking(checkingNode);
          }
        };

        _proto.checking = function checking(checkingNode) {
          if (checkingNode.isChecking) {
            if (checkingNode.position.y == 22) {
              this.mainGame.emit('FIRE', 2);
              this.soundPlayer.emit("PLAY", 'High');
            }

            if (checkingNode.position.y == -22) {
              this.mainGame.emit('FIRE', 1);
              this.soundPlayer.emit("PLAY", 'Low');
            }

            checkingNode.isChecking = false;
            this.updateNodePos();
          }
        };

        _proto.updateNodePos = function updateNodePos() {
          if (this.indexNode < this.listNode.length) {
            this.indexNode++;
            this.nodePosX = -this.listNode[this.indexNode].position.x - 100;
          }
        };

        return MusicBar;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "line", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainGame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "soundPlayer", [_dec4], {
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
//# sourceMappingURL=MusicBar.js.map