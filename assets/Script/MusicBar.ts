
import { _decorator, Component, Node, tween, v3, BoxCollider2D, Contact2DType, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MusicBar')
export class MusicBar extends Component {

    @property(Node)
    line: Node;
    @property(Node)
    mainGame: Node;

    @property(Node)
    soundPlayer: Node;

    tweenMove: any;
    numNode: number;
    listNode: Node[];
    indexNode: number;
    isCheck: boolean = true;
    nodePosX: number;

    onLoad() {
        this.numNode = 0;
        this.indexNode = -1;
        this.tweenMove && this.tweenMove.stop();
        this.tweenMove = this.tweenMove = tween(this.line)
            .to(50, { position: v3(-10000, 0, 0) })
            .call(() => {
                this.tweenMove = null;
            })
            .start();

        this.listNode = this.line.children;
        this.updateNodePos();
    }

    update(deltaTime: number) {
        const linePosX = this.line.position.x;
        const checkingNode = this.listNode[this.indexNode] as any;
        if (checkingNode) {
            checkingNode.isChecking = true;
            if (linePosX <= (this.nodePosX + 5)) this.checking(checkingNode);
        }
    }

    checking(checkingNode) {
        if (checkingNode.isChecking) {

            if (checkingNode.position.y == 22) {
                this.mainGame.emit('FIRE',2);
                this.soundPlayer.emit("PLAY",'High')
            }
            if (checkingNode.position.y == -22) {
                this.mainGame.emit('FIRE',1);
                this.soundPlayer.emit("PLAY",'Low')
            }

            checkingNode.isChecking = false;
            this.updateNodePos();
        }

    }
    updateNodePos() {
        if (this.indexNode < this.listNode.length) {
            this.indexNode++;
            this.nodePosX = -(this.listNode[this.indexNode].position.x) - 100;
        }

    }
}
