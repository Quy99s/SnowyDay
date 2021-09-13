
import { _decorator, Component, Node, AudioClip, AudioSource, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('CustomAudioClip')
export class CustomAudioClip {
    @property
    isMusic: boolean = false;
    @property
    isEffect: boolean = false;
    @property
    soundId = ''
    @property({ type: AudioClip })
    audioFile: AudioClip = null;

    @property({ type: AudioSource, visible: false })
    audioSource: AudioSource = null;
}
@ccclass('SoundPlayer')
export class SoundPlayer extends Component {
    @property({ type: CustomAudioClip })
    sfxList = [];
    musicAudioSource: any;
    isEnableBGM: any;
    currentMusic: any;
    private sfxMap: object = {};

    onLoad() {
        Debug: { globalThis['sound'] = this };
        if (!this.musicAudioSource) this.musicAudioSource = this.node.addComponent(AudioSource);
        this.sfxList.forEach((soundObj: CustomAudioClip) => {
            this.sfxMap[soundObj.soundId] = soundObj;
        });
        this.node.on('PLAY', this.playSfx, this);
    }
    playSfx(id: string, loop = false, volume?: number): CustomAudioClip | null {
        if (this.sfxMap.hasOwnProperty(id)) {
            let soundObj: CustomAudioClip = this.sfxMap[id];
            if (soundObj) {
                if (!soundObj.audioSource) {
                    const sfxNode = new Node("SFX_" + soundObj.soundId);
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
            console.warn(`SOUND playSfx, do not have sfx: ${id}`);
            return null;
        }
    }
}



