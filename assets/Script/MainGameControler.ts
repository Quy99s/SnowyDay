import { Component, _decorator, Node, UITransform } from "cc";

const { ccclass, property } = _decorator;

@ccclass('MainGameControler')
export class MainGameControler extends Component {

    @property(Node)
    gameArea: Node;

    @property(Node)
    player: Node;

    @property(Node)
    panel: Node;

    onLoad() {
        this.panel.active = false;
    }

    update(deltaTime: number) {
        if (!this.isInGameArea(this.player.getPosition())) {
            this.panel.active = true;
        }
    }

    isInGameArea(pos: any) {
        let szBg = this.gameArea.getComponent(UITransform).contentSize;
        if (pos.x <= -szBg.width / 2) {
            return false;
        }
        if (pos.x >= szBg.width / 2) {
            return false;
        }
        if (pos.y <= -szBg.height / 2) {
            return false;
        }
        if (pos.y >= szBg.height / 2) {
            return false;
        }
        return true;
    }
}


