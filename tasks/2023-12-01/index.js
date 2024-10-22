"use strict";
// Tutaj skopiuj kod zadania
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftRegistry = void 0;
var GiftRegistry = /** @class */ (function () {
    function GiftRegistry() {
        this.registry = {};
    }
    GiftRegistry.prototype.addGift = function (childID, gift) {
        if (!this.registry[childID]) {
            this.registry[childID] = [];
        }
        this.registry[childID].push(gift);
    };
    GiftRegistry.prototype.getGiftsForChild = function (childID) {
        return this.registry[childID] || [];
    };
    GiftRegistry.prototype.removeGift = function (childID, gift) {
        var gifts = this.registry[childID];
        if (!gifts || !gifts.includes(gift)) {
            throw new Error("Gift not found");
        }
        this.registry[childID] = gifts.filter(function (item) { return item !== gift; });
    };
    return GiftRegistry;
}());
exports.GiftRegistry = GiftRegistry;
