let settings = {
  "steem_price": 0.43171,
  "sbd_price": 1.00156,
  "trx_price": 0.026166128157419595,
  "starter_pack_price": 10,
  "starter_pack_price_account_create": 10,
  "booster_pack_price": 2,
  "market_fee": 500,
  "paypal_acct": "matt@steemmonsters.com",
  "paypal_sandbox": false,
  "usd_enabled": true,
  "blocktrades_enabled": true,
  "coinpayments_currencies": ["BTC", "ETH", "LTC", "BNB"],
  "maintenance_mode": false,
  "account": "steemmonsters",
  "stats": true,
  "xp_levels": [
    [20, 60, 160, 360, 760, 1560, 2560, 4560, 7560],
    [100, 300, 700, 1500, 2500, 4500, 8500],
    [250, 750, 1750, 3750, 7750],
    [1000, 3000, 7000]
  ],
  "alpha_xp": [20, 100, 250, 1000],
  "gold_xp": [250, 500, 1000, 2500],
  "beta_xp": [15, 75, 175, 750],
  "beta_gold_xp": [200, 400, 800, 2000],
  "battles": {
    "asset_url": "https://s3.amazonaws.com/steemmonsters/website/battle/",
    "default_expiration_seconds": 180,
    "reveal_blocks": 20,
    "win_streak_wins": 3,
    "win_streak_max": 9999,
    "rulesets": [{
      "active": true,
      "name": "Standard",
      "description": "No modification to the standard gameplay rules and mechanics."
    }, {
      "active": true,
      "name": "Lost Legendaries",
      "description": "Legendary Monsters may not be used in battles."
    }, {
      "active": true,
      "name": "Back to Basics",
      "description": "Monsters lose all abilities."
    }, {
      "active": true,
      "name": "Melee Mayhem",
      "description": "Melee attack Monsters can attack from any position."
    }, {
      "active": true,
      "name": "Taking Sides",
      "description": "Neutral Monsters may not be used in battles."
    }, {
      "active": true,
      "name": "Silenced Summoners",
      "description": "Summoners do not give any stat buffs or debuffs."
    }, {
      "active": true,
      "name": "Rise of the Commons",
      "description": "Only Common and Rare Monsters may be used in battles."
    }, {
      "active": true,
      "name": "Aim True",
      "description": "Melee and Ranged attacks always hit their target."
    }, {
      "active": true,
      "name": "Super Sneak",
      "description": "All Melee attack Monsters have the Sneak ability."
    }, {
      "active": true,
      "name": "Weak Magic",
      "description": "Magic attacks hit Armor before reducing Health."
    }, {
      "active": true,
      "name": "Unprotected",
      "description": "Monsters do not have any armor and do not get armor from Abilities or Summoner Buffs."
    }, {
      "active": true,
      "name": "Target Practice",
      "description": "All Ranged and Magic attack Monsters have the Snipe ability."
    }, {
      "active": true,
      "name": "Up Close & Personal",
      "description": "Only Melee attack Monsters may be used in battles."
    }, {
      "active": true,
      "name": "Reverse Speed",
      "description": "Monsters with the lowest Speed attack first and have the highest chance of evading attacks."
    }, {
      "active": true,
      "name": "Broken Arrows",
      "description": "Ranged attack Monsters may not be used in battles."
    }, {
      "active": true,
      "name": "Fog of War",
      "description": "Monsters lose the Sneak and Snipe abilities."
    }, {
      "active": true,
      "name": "Little League",
      "description": "Only Monsters & Summoners that cost 4 Mana or less may be used in battles."
    }]
  },
  "ssc": {
    "rpc_url": "https://api.steem-engine.com/rpc",
    "chain_id": "ssc-mainnet1",
    "alpha_token": "ALPHA",
    "beta_token": "BETA",
    "pack_holding_account": "sm-packs"
  },
  "supported_currencies": [{
    "currency": "STEEM",
    "type": "steem",
    "tournament_enabled": true
  }, {
    "currency": "TRX",
    "type": "tron",
    "tournament_enabled": false
  }, {
    "currency": "SBD",
    "type": "steem",
    "tournament_enabled": true
  }],
  "season": {
    "id": 13,
    "name": "Tournament Season 4",
    "ends": "2019-05-01T02:00:00.000Z",
    "reward_packs": ["0", "5", "7", "9", "12", "15", "18", "22", "26", "30", "40", "50", "60", "80", "120", "150"],
    "reset_block_num": null
  },
  "quests": [{
    "name": "Lyanna's Call",
    "active": true,
    "type": "daily",
    "description": "The kingdom of Anumun has been invaded! Take a team of your best Earth monsters, and repel the enemy forces.",
    "objective": "Win 5 ranked battles with the Earth Splinter.",
    "item_total": 5,
    "reward_qty": 1,
    "reward_qty_by_league": [1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20],
    "data": {
      "color": "Green",
      "action": "win"
    }
  }, {
    "name": "Rising Dead",
    "active": true,
    "type": "daily",
    "description": "The dead are rising up to claim the Splinterlands for themselves, assemble your best Death team and join the fray!",
    "objective": "Win 5 ranked battles with the Death Splinter.",
    "item_total": 5,
    "reward_qty": 1,
    "reward_qty_by_league": [1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20],
    "data": {
      "color": "Black",
      "action": "win"
    }
  }, {
    "name": "Defend the Borders",
    "active": true,
    "type": "daily",
    "description": "Chaos seems to be erupting all across the Splinterlands and yet Khymeria is stable. Don't let wretches from other Splinters ruin the sacred and protected homeland. Form a patrol and keep undesirables out of our home.",
    "objective": "Win 5 ranked battles with the Life Splinter.",
    "item_total": 5,
    "reward_qty": 1,
    "reward_qty_by_league": [1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20],
    "data": {
      "color": "White",
      "action": "win"
    }
  }, {
    "name": "Pirate Attacks",
    "active": true,
    "type": "daily",
    "description": "The waters of Azmare have been calm, but nothing like a ship catching fire in the night to spur action. Someone has been sinking ships using magic explosives. Head out and capture potential enemies for interrogation. We'll find out who is responsible!",
    "objective": "Win 5 ranked battles with the Water Splinter.",
    "item_total": 5,
    "reward_qty": 1,
    "reward_qty_by_league": [1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20],
    "data": {
      "color": "Blue",
      "action": "win"
    }
  }, {
    "name": "Stir the Volcano",
    "active": true,
    "type": "daily",
    "description": "The volcano in the Burning Lands which gives power to the Ferexians magic, has been dormant for too long. Assemble a team to venture out and rekindle the flame. Destroy anyone who gets in your way!",
    "objective": "Win 5 ranked battles with the Fire Splinter.",
    "item_total": 5,
    "reward_qty": 1,
    "reward_qty_by_league": [1, 1, 1, 1, 2, 3, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20],
    "data": {
      "color": "Red",
      "action": "win"
    }
  }],
  "transfer_cooldown_blocks": 201600,
  "last_block": 32208273,
  "timestamp": 1555760209078,
  "rewards_edition_date": "2018-12-11 2:00:00Z",
  "version": "0.5.2.1"
};
class Card {
  constructor(id) {
    this.id = id;
    const dataReq = fetch("https://api.steemmonsters.io/cards/find?ids=" + id);
    let resolve;
    this.ready = new Promise(r => resolve = r);
    var that = this;
    (async function() {
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

    return ((card.edition == 1 || card.edition == 3) ? betaCardUrl : otherCardUrl) + details.name + (card.gold ? '_gold' : '') + '.png';
  }
  static getCardLevelInfo(card) {
    var details = card.details;
    var levels = settings.xp_levels[details.rarity - 1];
    var level = 0;

    if (!card.xp || isNaN(card.xp)) card.xp = 0;

    for (var i = 0; i < levels.length; i++) {
      if (card.xp < levels[i]) {
        level = i + 1;
        break;
      }
    }
    if (level == 0) level = levels.length + 1;
    var xp_to_next_level = level > levels.length ?
      card.xp - levels[levels.length - 1] :
      card.xp - (level == 1 ? 0 : levels[level - 2]);

    var xp_needed = level > levels.length ?
      -1 :
      level == 1 ?
      levels[level - 1] :
      levels[level - 1] - levels[level - 2];

    var xp_array = (card.edition == 1 || card.edition == 3) ? (card.gold ? 'beta_gold_xp' : 'beta_xp') : (card.gold ? 'gold_xp' : 'alpha_xp');
    var xp_per_card = settings[xp_array][details.rarity - 1];
    var cards_needed = Math.ceil(xp_needed / xp_per_card);
    var cards_to_next_level = cards_needed - Math.ceil((xp_needed - xp_to_next_level) / xp_per_card);

    return {
      level: level,
      xp_to_next_level: xp_to_next_level,
      cards_to_next_level: cards_to_next_level,
      xp_needed: xp_needed,
      cards_needed: cards_needed
    };
  }

  static getCardStats(card) {
    var level = Card.getCardLevelInfo(card).level;
    var details = card.details;
    var stats = details.stats;

    if (!stats)
      return {
        mana: 0,
        attack: 0,
        magic: 0,
        armor: 0,
        health: 0,
        speed: 0,
        abilities: [],
        level: 1,
      };

    if (details.type == 'Summoner')
      return Object.assign({
        abilities: [],
        level: level
      }, stats);

    var abilities = [];
    for (var i = 0; i < level; i++) stats.abilities[i].filter(a => a != '').forEach(a => abilities.push(a));

    return {
      mana: stats.mana[level - 1],
      attack: stats.attack[level - 1],
      ranged: stats.ranged ? stats.ranged[level - 1] : 0,
      magic: stats.magic[level - 1],
      armor: stats.armor[level - 1],
      health: stats.health[level - 1],
      speed: stats.speed[level - 1],
      abilities: abilities,
      level: level,
    };
  }

  async cardHTML() {
    var level_info = Card.getCardLevelInfo(this.cardData);
    var stats = Card.getCardStats(this.cardData);
    var details = this.cardData.details;
    this.cardData.id = this.cardData.card_detail_id;
    details.card_detail_id = this.cardData.card_detail_id;
    let abilities = "";
    for (var i = 0; i <
      stats.abilities.length; i++) {
      abilities += `<img class="ability-${i}" src="https://s3.amazonaws.com/steemmonsters/website/abilities/ability_${stats.abilities[i].toLowerCase().replace(' ', '-')}.png" data-toggle="tooltip" data-placement="bottom" title="${stats.abilities[i]}" />`;
    }
    return `
    <div style="cursor: default;display: inline-block;" id="card_${this.cardData.id}">
      <img src="${Card.getImageUrl(this.cardData)}" class="card-img" card_detail_id="${this.cardData.id}" />
      <div class="relative-position">
        <div class="card-level ${this.cardData.gold ? 'gold' : '' }">
          <div class="card-level-progress" style="width: ${((level_info.xp_needed > 0) ? level_info.xp_to_next_level / level_info.xp_needed * 100 : 100).toFixed(0)}%;"></div>
        </div>
      </div>
      <div class="relative-position">
        <div class="stat-mana">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/stat_bg_mana.png">
          <div class="stat-text-mana">${stats.mana}</div>
        </div>

        ${ details.type == 'Monster' ? `
        ${stats.attack > 0 ? `
        <div class="stat-attack">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/melee-attack.png">
          <div class="stat-text">${stats.attack}</div>
        </div>
        ` : ""}

        ${stats.ranged > 0 ? `
        <div class="stat-ranged ${stats.attack > 0 ? 'second' : ''}">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/ranged-attack.png">
          <div class="stat-text">${stats.ranged}</div>
        </div>
        ` : ""}

        ${stats.magic > 0 ? `
        <div class="stat-magic ${stats.attack > 0 || stats.ranged > 0 ? 'second' : ''}">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/magic-attack.png">
          <div class="stat-text">${stats.magic}</div>
        </div>
        ` : ""}

        <div class="stat-speed">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/speed.png">
          <div class="stat-text">${stats.speed}</div>
        </div>

        ${stats.armor > 0 ? `
        <div class="stat-armor">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/defense.png">
          <div class="stat-text">${stats.armor}</div>
        </div>
        ` : ""}

        <div class="stat-health">
          <img src="https://s3.amazonaws.com/steemmonsters/website/stats/health.png">
          <div class="stat-text">${stats.health}</div>
        </div>

        <div class="abilities ability-count-${stats.abilities.length}">${abilities}</div>
        ` : ""} ${ details.type == 'Summoner' ? `
        <div class="summoner-stats">
          ${stats.attack != 0 ? `
          <div class="stat-attack-summoner">
            <img src="https://s3.amazonaws.com/steemmonsters/website/stats/melee-attack.png">
            <div class="stat-text" data-toggle="tooltip" data-placement="bottom" title="${(stats.attack > 0) ? 'All friendly Melee Attack Monsters have +' + stats.attack + ' Melee Attack' : 'All enemy Melee Attack Monsters have ' + stats.attack + ' Melee Attack'}">
              ${(stats.attack > 0 ? '+' : '') + stats.attack}
            </div>
          </div>
          ` : ""}

          ${stats.ranged != 0 ? `
          <div class="stat-ranged-summoner">
            <img src="https://s3.amazonaws.com/steemmonsters/website/stats/ranged-attack.png">
            <div class="stat-text" data-toggle="tooltip" data-placement="bottom" title="${(stats.ranged > 0) ? 'All friendly Ranged Attack Monsters have +' + stats.ranged + ' Ranged Attack' : 'All enemy Ranged Attack Monsters have ' + stats.ranged + ' Ranged Attack'}">
              ${(stats.ranged > 0 ? '+' : '') + stats.ranged}
            </div>
          </div>
          ` : ""}

          ${stats.magic != 0 ? `
          <div class="stat-magic-summoner">
            <img src="https://s3.amazonaws.com/steemmonsters/website/stats/magic-attack.svg">
            <div class="stat-text" data-toggle="tooltip" data-placement="bottom" title="${(stats.magic > 0) ? 'All friendly Magic Attack Monsters have +' + stats.magic + ' Magic Attack' : 'All enemy Magic Attack Monsters have ' + stats.magic + ' Magic Attack'}">
              ${(stats.magic > 0 ? '+' : '') + stats.magic}
            </div>
          </div>
          ` : ""}

          ${stats.speed != 0 ? `
          <div class="stat-speed-summoner">
            <img src="https://s3.amazonaws.com/steemmonsters/website/stats/speed.png">
            <div class="stat-text" data-toggle="tooltip" data-placement="bottom" title="${(stats.speed > 0) ? 'All friendly Monsters have +' + stats.speed + ' Speed' : 'All enemy Monsters have ' + stats.speed + ' Speed'}">
              ${(stats.speed > 0 ? '+' : '') + stats.speed}
            </div>
          </div>
          ` : ""}

          ${stats.armor != 0 ? `
          <div class="stat-armor-summoner">
            <img src="https://s3.amazonaws.com/steemmonsters/website/stats/defense.png">
            <div class="stat-text" data-toggle="tooltip" data-placement="bottom" title="${(stats.armor > 0) ? 'All friendly Monsters have +' + stats.armor + ' Armor' : 'All enemy Monsters have ' + stats.armor + ' Armor'}">
              ${(stats.armor > 0 ? '+' : '') + stats.armor}
            </div>
          </div>
          ` : ""}

          ${stats.health != 0 ? `
          <div class="stat-health-summoner">
            <img src="https://s3.amazonaws.com/steemmonsters/website/stats/health.png">
            <div class="stat-text" data-toggle="tooltip" data-placement="bottom" title="${(stats.health > 0) ? 'All friendly Monsters have +' + stats.health + ' Health' : 'All enemy Monsters have ' + stats.health + ' Health'}">
              ${(stats.health > 0 ? '+' : '') + stats.health}
            </div>
          </div>
          ` : "" }
          ` : "" }
        </div>
      <div class="relative-position">
        <div class="card-name ${this.cardData.gold ? 'foil' : details.color.toLowerCase()}">
          ${ this.cardData.gold && (this.cardData.edition == 0 || this.cardData.edition == 2) ? `
            <img src="https://s3.amazonaws.com/steemmonsters/website/gold_name_bg.png" />
          ` : ""}
        </div>
        <div class="card-name-text ${this.cardData.gold ? 'foil' : ''}">
          <div class="card-name-name ${(details.name.length >= 19) ? 'xxs' : ((details.name.length >= 17) ? 'xs' : ((details.name.length >= 15) ? 'sm' : ''))}">${details.name}</div>
          <div class="card-name-level" style="${(level_info.level >= 10) ? 'font-size: 90%' : ''}">&#x2605 ${level_info.level}</div>
        </div>
      </div>
</div>
    </div>
    `;
  }
  async toHTML() {
    await this.ready;
    return (this.cardData.gold ? "gold " : "") + this.cardData.details.name;
  }
  async toExpandedHTML() {
    await this.ready;
    return await this.cardHTML();
  }
  async toPageHTML() {
    await this.ready;
    let marketString = this.cardData.market_id ? (" Currently" + linkify(this.cardData.market_id, "for sale") + ". ") : "";
    let delegationString = this.cardData.delegated_to ? ("Currently " + linkify(this.cardData.delegation_tx, "delegated") + " to <span class='username'>" + linkify(this.cardData.delegated_to) + "</span>. ") : "";
    return (this.cardData.gold ? "gold " : "") + this.cardData.details.name + ", owned by  <span class='username'>" + linkify(this.cardData.player) + "</span>. " + marketString + delegationString + "<br><br>" + await this.cardHTML();
  }
}
