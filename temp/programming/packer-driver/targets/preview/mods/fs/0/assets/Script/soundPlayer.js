System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, AudioClip, AudioSource, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _dec4, _dec5, _class4, _class5, _descriptor6, _temp2, _crd, ccclass, property, CustomAudioClip, SoundPlayer;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a13e7jNqc9M+Y5rADEVJCGD", "soundPlayer", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CustomAudioClip", CustomAudioClip = (_dec = ccclass('CustomAudioClip'), _dec2 = property({
        type: AudioClip
      }), _dec3 = property({
        type: AudioSource,
        visible: false
      }), _dec(_class = (_class2 = (_temp = function CustomAudioClip() {
        _initializerDefineProperty(this, "isMusic", _descriptor, this);

        _initializerDefineProperty(this, "isEffect", _descriptor2, this);

        _initializerDefineProperty(this, "soundId", _descriptor3, this);

        _initializerDefineProperty(this, "audioFile", _descriptor4, this);

        _initializerDefineProperty(this, "audioSource", _descriptor5, this);
      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isMusic", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isEffect", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "soundId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "audioFile", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _export("SoundPlayer", SoundPlayer = (_dec4 = ccclass('SoundPlayer'), _dec5 = property({
        type: CustomAudioClip
      }), _dec4(_class4 = (_class5 = (_temp2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SoundPlayer, _Component);

        function SoundPlayer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "sfxList", _descriptor6, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "musicAudioSource", void 0);

          _defineProperty(_assertThisInitialized(_this), "isEnableBGM", void 0);

          _defineProperty(_assertThisInitialized(_this), "currentMusic", void 0);

          _defineProperty(_assertThisInitialized(_this), "sfxMap", {});

          return _this;
        }

        var _proto = SoundPlayer.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          Debug: {
            globalThis['sound'] = this;
          }

          ;
          if (!this.musicAudioSource) this.musicAudioSource = this.node.addComponent(AudioSource);
          this.sfxList.forEach(function (soundObj) {
            _this2.sfxMap[soundObj.soundId] = soundObj;
          });
          this.node.on('PLAY', this.playSfx, this);
        };

        _proto.playSfx = function playSfx(id, loop, volume) {
          if (loop === void 0) {
            loop = false;
          }

          if (this.sfxMap.hasOwnProperty(id)) {
            var soundObj = this.sfxMap[id];

            if (soundObj) {
              if (!soundObj.audioSource) {
                var sfxNode = new Node("SFX_" + soundObj.soundId);
                sfxNode.parent = this.node;
                sfxNode.setPosition(new Vec3(0, 0, 0));
                soundObj.audioSource = sfxNode.addComponent(AudioSource);
              }

              if (!soundObj.audioSource.clip || soundObj.audioSource.clip !== soundObj.audioFile) soundObj.audioSource.clip = soundObj.audioFile;
              soundObj.audioSource.play();
              soundObj.audioSource.loop = loop;

              if (typeof volume !== "undefined") {
                soundObj.audioSource.volume = volume;
              }
            }

            console.log("%cSOUND playSfx", "color: blue", id);
            return soundObj;
          } else {
            console.warn("SOUND playSfx, do not have sfx: " + id);
            return null;
          }
        };

        return SoundPlayer;
      }(Component), _temp2), (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "sfxList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class5)) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=soundPlayer.js.map