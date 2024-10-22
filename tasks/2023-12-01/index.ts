// Tutaj skopiuj kod zadania

export class GiftRegistry {
  private registry: Record<number, string[]> = {};
  addGift(childID: number, gift: string) {
    if (!this.registry[childID]) {
      this.registry[childID] = [];
    }
    this.registry[childID].push(gift);
  }
  getGiftsForChild(childID: number): string[] {
    return this.registry[childID] || [];
  }

  removeGift(childID: number, gift: string) {
    const gifts = this.registry[childID];
    if (!gifts || !gifts.includes(gift)) {
      throw new Error("Gift not found");
    }
    this.registry[childID] = gifts.filter((item) => item !== gift);
  }
}
