import m from 'mithril'

module.exports = {
  Get: (path) => {
    return m.request({
      method: 'GET',
      url: `https://kbin.social/api/${path}`,
      headers: {
        'Accept': 'application/ld+json'
      }
    });
  }
}