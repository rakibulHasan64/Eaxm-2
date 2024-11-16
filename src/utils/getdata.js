function getdata(url) {
  return new URL(url, import.meta.url).href;
}

export { getdata };