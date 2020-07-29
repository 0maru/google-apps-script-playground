function setUpQuery(url, strategy) {
  const apiEndpoint = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  const param = JSON.stringify({
    url: encodeURIComponent(url),
    strategy: strategy,
    local: local,
    category: 'performance', // category を複数用意したら複数の結果が返ってくる（accessibility/seo/pwa/performance/best-practices）
  });
  return `${apiEndpoint}?${QueryString(param)}`;
}

function QueryString(obj) {
  return Object.keys(obj).forEach(key => `${key}=${obj[key]}`);
}

setUpQuery('https://www.sukima.me', 'mobile');