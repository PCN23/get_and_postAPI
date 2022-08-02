const pool = require('../utils/pool');

class Quote {
  id;
  detail;
  character_id;
  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;
    this.character_id = row.character_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
    return Number(rows[0].count);
  }

  static async insert(quote) {
    // implement insert to add new quote
    const { rows } = await pool.query(
      'INSERT into quotes(detail,character_id, episode_id) values ($1, $2, $3) returning *;',
      [quote.detail, quote.character_id, quote.episode_id]);
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
