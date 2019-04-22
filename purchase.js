class Purchase {
  constructor(id) {
    this.id = id;
    const dataReq = fetch("https://api.steemmonsters.io/purchases/status?id=" + id);
    let resolve;
    this.ready = new Promise(r => resolve = r);
    var that = this;
    (async function() {
      //this gets run in the background
      const json = await (await dataReq).json();
      if (json[0].error) return console.error("Couldn't fetch purchase data for", id);
      that.data = json[0];
      resolve();
    })();
  }
  _typeString() {
    const typeMap = {
      "booster_pack": "booster pack",
      "starter_pack": "starter pack"
    };
    return typeMap[this.data.type] ? typeMap[this.data.type] : "unknown purchase"
  }
  async toHTML() {
    await this.ready;
    return "purchase of " + this.data.quantity + (this.data.quantity === 1 ? "" : "s") + " for " + this.data.payment + " (" + this.data.amount_usd + " USD)";
  }
}
