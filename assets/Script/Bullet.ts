
import { _decorator, Component, Node, BoxCollider2D, Collider2D, IPhysics2DContact, Contact2DType, CircleCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bullet')
export class Bullet extends Component {
    onLoad() {
        this.node.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    onBeginContact(contact, selfCollider, otherCollider) {
        // if (selfCollider.node.getComponent('Enemy')) {
        //     console.warn(selfCollider.node);
        // }
    }
}
