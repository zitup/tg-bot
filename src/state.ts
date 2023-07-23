let isBuy = true;
let replyStage = 0;
let name = "";
let address = "";

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
    },
    get name() {
        return name;
    },
    set name(value) {
        name = value;
    },
    get address() {
        return address;
    },
    set address(value) {
        address = value;
    }
};
