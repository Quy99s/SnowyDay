
import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScoreGame')
export class ScoreGame extends Component {
    @property(Node)
    scoreNode = null;

    score: number = 0;
    onLoad() {
        this.scheduleOnce(() => {
            this.testTime();
        }, 1);

    }

    testTime() {
        this.score += 1;
        this.scheduleOnce(() => {
            (this.scoreNode as any).getComponent(Label).string = this.score + '';
            this.testTime();
        }, 1);
    }
}


