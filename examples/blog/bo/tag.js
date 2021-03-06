const Base = require('./base');

class Tag extends Base {
  static get tableName() {
    return 'tag';
  }

  static get sqlColumnsData() {
    return ['id', 'name', 'slug'];
  }
}

module.exports = Tag;
