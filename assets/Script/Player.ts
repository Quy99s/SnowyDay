
import { _decorator, Component, Node, tween, v3, Vec3, ParticleSystem2D, RigidBody2D, Vec2, UITransform, BoxCollider2D, Contact2DType, CircleCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Node)
    bullet: Node;
    @property(Node)
    bullet2: Node;
    @property(Node)
    skill: Node;
    tweenMove: any;
    rigidBody: RigidBody2D;

    onLoad() {
        this.node.on("FIRE_TO_POS", this.fireToPosition, this);
        this.node.on('SENT_GIFT', this.runSkill, this);
        this.bullet.getComponent(CircleCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    onBeginContact(contact, selfCollider, otherCollider) {
        if (selfCollider.node.getComponent('Enemy')) {
           this.reset()
        }
    }

    fireToPosition(position, force, kine) {
        this.fireBullet(position, kine);
        this.applyForceToTarget(this.node, position, force)
    }

    fireBullet(position, kine, callBack = null) {
        if (kine === 2) {
            this.bullet.setPosition(this.node.getPosition());
            this.bullet.getComponent(ParticleSystem2D).resetSystem();
            this.bullet.active = true;
            this.applyForceToTarget(this.bullet, position, -1);
        } else {
            this.bullet2.setPosition(this.node.getPosition());
            this.bullet2.getComponent(ParticleSystem2D).resetSystem();
            this.bullet2.active = true;
            this.bullet2.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
            this.scheduleOnce(() => {
                this.reset2();
                this.bullet2.active = false;
            }, 0.3)
        }


    }
    reset() {
        this.bullet.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
        this.bullet.getComponent(ParticleSystem2D).resetSystem();
        this.bullet.getComponent(ParticleSystem2D).stopSystem();
        this.bullet.setPosition(this.node.getPosition());
    }

    reset2() {
        this.bullet2.getComponent(ParticleSystem2D).resetSystem();
        this.bullet2.getComponent(ParticleSystem2D).stopSystem();
    }

    applyForceToTarget(target, position, force) {
        const nodePos = this.node.getPosition();
        const currentPos = new Vec2(nodePos.x - position.x, nodePos.y - position.y);
        const currentAngle = Math.atan2(currentPos.y, currentPos.x) * 180 / Math.PI;
        const x = force * Math.cos((currentAngle * Math.PI) / 180);
        const y = force * Math.sin((currentAngle * Math.PI) / 180);

        target.getComponent(RigidBody2D).linearVelocity = new Vec2(0, 0);
        target.getComponent(RigidBody2D).applyForceToCenter(new Vec2(x, y), true);
    }

    runSkill(event) {
        this.skill.emit('ATTACK');
    }
}
