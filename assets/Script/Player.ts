
import { _decorator, Component, Node, tween, v3, Vec3, ParticleSystem2D, RigidBody2D, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Node)
    bullet: Node;

    tweenMove: any;
    rigidBody: RigidBody2D;
    onLoad() {
        this.node.on("FIRE_TO_POS", this.fireToPosition, this);
        this.rigidBody = this.node.getComponent(RigidBody2D);
    }
    update(dt) {

    }

    fireToPosition(position) {
        const nodePos = this.node.getPosition();
        const currentPos = new Vec2(nodePos.x - position.x, nodePos.y - position.y);
        const currentAngle = Math.atan2(currentPos.y, currentPos.x) * 180 / Math.PI;
        const x = this.force * Math.cos((currentAngle * Math.PI) / 180);
        const y = this.force * Math.sin((currentAngle * Math.PI) / 180);

        this.fireBullet(position);
        this.rigidBody.linearVelocity = new Vec2(0, 0);
        this.rigidBody.applyForceToCenter(new Vec2(x, y), true);
    }

    fireBullet(position, callBack = null) {
        this.bullet.setPosition(this.node.getPosition());
        this.bullet.getComponent(ParticleSystem2D).resetSystem();
        this.bullet.active = true;
        this.tweenMove && this.tweenMove.stop();
        this.tweenMove = tween(this.bullet)
            .to(0.3, { position: v3(position) }, { easing: 'sineInOut' })
            .delay(0.1)
            .call(() => {
                callBack && callBack();
                this.reset();
                this.tweenMove = null;
            })
            .start();
    }
    reset() {
        this.bullet.getComponent(ParticleSystem2D).resetSystem();
        this.bullet.getComponent(ParticleSystem2D).stopSystem();
    }
}
