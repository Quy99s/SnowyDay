
import { _decorator, Component, Node, BoxCollider2D, Contact2DType, ParticleSystem2D, sp, Event } from 'cc';
const { ccclass, property } = _decorator;
@ccclass('Gift')
export class Gift extends Component {
    @property(Node)
    anim: Node;
    @property(Node)
    player: Node;
    sentGiftEvent: any;

    onLoad() {
        this.node.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }

    onBeginContact(contact, selfCollider, otherCollider) {
        if (selfCollider.node.getComponent('Bullet')) {
            if (this.anim.active) {
                this.anim.getComponent(sp.Skeleton).setAnimation(0, 'Open', false);
                this.scheduleOnce(() => {
                    this.anim.active = false;
                    this.player.emit('SENT_GIFT')
                }, 1)
            }
        }
    }
    reset() {
        this.anim.active = true;
    }
}

