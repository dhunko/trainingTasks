let smth = async function(url, mode = {mode: 'no-cors'}) {
  const resp = await fetch(url, mode);
  return new Promise((resolve, reject) => {
      (resp.status < 400) ? resolve(resp/*.text()*/) : reject('Failed');
  });
};
let callWrap = function(url) {
  smth(url).then(data => console.log(data)).catch(error => console.log(error));
}
callWrap('https://learn.javascript.ru/fetch');
callWrap('https://learn.javascript.ru/aaaa');