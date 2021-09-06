
import { _decorator, Component, Node, tween, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Skill')
export class Skill extends Component {

    tweenScale: any;
    onLoad() {
        this.node.on("ATTACK", this.runSkill, this);
    }
    runSkill() {
        this.node.active = true;
        this.tweenScale && this.tweenScale.stop();
        this.tweenScale = tween(this.node)
            .to(1, { scale: v3(3, 3, 0) }, { easing: 'sineInOut' })
            // .delay(0.1)
            .call(() => {
                this.reset();
                this.tweenScale = null;
            })
            .start();
    }
    reset() {
        this.node.active = false;
        this.node.setScale(new Vec3(0, 0, 0))
    }
}
