class Card {
  constructor(id) {
    this.id = id;
    const dataReq = fetch("https://api.steemmonsters.io/cards/find?ids=" + id);
    this.dataReq = dataReq;
    (async function () {
      //this gets run in the background
      await dataReq;
      const json = await dataReq.json();
      if (json[0].error) return console.error("Couldn't fetch card data for", id);
      this.cardData = json[0];
    })();
  }
  async toHTML() {
    await this.dataReq;
    return (this.cardData.gold ? "gold " : "") + this.cardData.details.name;
  }
  async toExpandedHTML() {
    await this.dataReq;
  }
  async toPageHTML() {
    await this.dataReq;
  }
}
