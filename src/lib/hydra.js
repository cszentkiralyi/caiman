/* TODO: figure out wtf the "hydre:XXX" strings mean */
class HydraContent {
  constructor(jsonStr) {
    this.data = JSON.parse(jsonStr);
    this.context = this.data['@context'];
    this.id = this.data['@id'];
    this.item = {
      type: this.data['@type'],
      value: this.data['hydra:member']
    };
  }
}

module.exports = HydraContent;