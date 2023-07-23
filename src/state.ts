let isBuy = true;
let replyStage = 0;

export default {
    get isBuy() {
        return isBuy;
    },
    set isBuy(value) {
        isBuy = value;
    },
    get replyStage() {
        return replyStage;
    },
    set replyStage(value) {
        replyStage = value;
    }
};
