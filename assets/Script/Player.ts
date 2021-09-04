
import { _decorator, Component, Node, tween, v3, Vec3, ParticleSystem2D, RigidBody2D, Vec2, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Node)
    bullet: Node;

    tweenMove: any;
    rigidBody: RigidBody2D;

    onLoad() {
        this.node.on("FIRE_TO_POS", this.fireToPosition, this);
    }

    fireToPosition(position, force) {
        this.fireBullet(position);
        this.applyForceToTarget(this.node, position, force)
    }

    fireBullet(position, callBack = null) {
        this.bullet.setPosition(this.node.getPosition());
        this.bullet.getComponent(ParticleSystem2D).resetSystem();
        this.bullet.active = true;
        this.applyForceToTarget(this.bullet, position, -1000);

    }
    reset() {
        this.bullet.getComponent(ParticleSystem2D).resetSystem();
        this.bullet.getComponent(ParticleSystem2D).stopSystem();
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

}
