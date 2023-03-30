
function toQuery(url) {
 return url.split('?')[1].split('&').reduce((obj, pair) => {
    let [key, value] = pair.split('=')
    return { ...obj, [key]: value }
 }, {})
}


module.exports = toQuery