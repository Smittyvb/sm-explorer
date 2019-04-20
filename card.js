class Card {
  constructor(id) {
    this.id = id;
    const dataReq = fetch("https://api.steemmonsters.io/cards/find?ids=" + id);
    let resolve;
    this.ready = new Promise(r => resolve = r);
    var that = this;
    (async function () {
      //this gets run in the background
      const json = await (await dataReq).json();
      if (json[0].error) return console.error("Couldn't fetch card data for", id);
      that.cardData = json[0];
      resolve();
    })();
  }
  async toHTML() {
    await this.ready;
    return (this.cardData.gold ? "gold " : "") + this.cardData.details.name;
  }
  async toExpandedHTML() {
    await this.ready;
  }
  async toPageHTML() {
    await this.ready;
  }
}
