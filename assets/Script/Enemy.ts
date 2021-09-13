
import { _decorator, Component, Node, CircleCollider2D, Contact2DType, PolygonCollider2D, ParticleSystem2D, BoxCollider2D, RigidBody2D, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Enemy')
export class Enemy extends Component {
    @property(Node)
    backGround: Node;
    @property(Node)
    particle: Node;
    


    onLoad() {
        this.node.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    onBeginContact(contact, selfCollider, otherCollider) {
        if (selfCollider.node.getComponent('Bullet') || selfCollider.node.getComponent('Skill')) {
            if (this.backGround.active) {
                this.backGround.active = false;
                if (this.particle) {
                    this.particle.active = true;
                    this.particle.getComponent(ParticleSystem2D).resetSystem();
                    this.scheduleOnce(() => {
                        this.particle.getComponent(ParticleSystem2D).resetSystem();
                        this.particle.getComponent(ParticleSystem2D).stopSystem();
                        this.particle.active = false;
                    }, 0.3)
                }

            }
        }
    }
    reset() {
        this.backGround.active = true;
    }
}

