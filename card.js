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
  static getImageUrl(card) {
		var details = card.details;
		
		if (!details)
			return null;
    
    let betaCardUrl = "https://s3.amazonaws.com/steemmonsters/cards_beta/";
    let otherCardUrl = "https://s3.amazonaws.com/steemmonsters/cards_v2.2/";

		return ((card.edition == 1 || card.edition == 3) ? betaCardUrl : Config.otherCardUrl) + details.name + (card.gold ? '_gold' : '') + '.png';
	}
  async cardHTML() {
    return `
<div style="cursor: default;" id="card_${this.cardData.id}">
  <img src="<%= Card.getImageUrl({ card_detail_id: data.id, gold: data.gold, edition: data.edition }) %>" class="card-img" card_detail_id="<%= data.id %>"/>
  <% var level_info = SM.GetCardLevelInfo(data); %>
  <div class="relative-position">
    <div class="card-level <%= data.gold ? 'gold' : '' %>">
      <div class="card-level-progress" style="width: <%= ((level_info.xp_needed > 0) ? level_info.xp_to_next_level / level_info.xp_needed * 100 : 100).toFixed(0) %>%;"></div>
    </div>
  </div>
  <%= SM.ShowComponent('stats', data) %>		
  <%= SM.ShowComponent('card_name', data) %>
</div>
    `;
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
