import m from 'mithril'

export default {
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