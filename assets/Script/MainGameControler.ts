import { Component, _decorator, Node, UITransform, EventTouch, Vec3, CCString } from "cc";

const { ccclass, property } = _decorator;

@ccclass('MainGameControler')
export class MainGameControler extends Component {

    @property(Node)
    gameArea: Node;

    @property(Node)
    player: Node;

    @property(Node)
    panel: Node;

    @property(Node)
    touchPoint: Node;
    
    @property(CCString)
    bulletForce: String='500';

    onLoad() {
        this.panel.active = false;
        this.bindClickEvent();
    }

    update(deltaTime: number) {
        if (!this.isInGameArea(this.player.getPosition())) {
            this.panel.active = true;
        }
    }
    bindClickEvent() {
        if (this.gameArea) {
            this.gameArea.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.gameArea.on(Node.EventType.TOUCH_END, this.onTouchCancel.bind(this));
            this.gameArea.on(Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this));
            this.gameArea.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel.bind(this));
        }
    }
    onTouchStart(event: EventTouch) {
       // console.warn("onTouchStart", event);
    }
    onTouchCancel(event: EventTouch) {
        const location = event.getLocation();
        const touchPos = new Vec3(location.x - 480, location.y - 320);
        this.touchPoint.setPosition(touchPos);
        this.scheduleOnce(() => {
            this.player.emit('FIRE_TO_POS', this.touchPoint.getPosition(),this.bulletForce);
        }, 0)
       // console.warn("onTouchCancel", event);
    }
    onTouchMove(event: EventTouch) {
        const location = event.getLocation();
        const touchPos = new Vec3(location.x - 480, location.y - 320);
        this.touchPoint.setPosition(touchPos);

       // console.warn("onTouchMove", event);
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


