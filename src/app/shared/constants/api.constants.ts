export const ApiConstant = {
  mapProvider: '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  // dont forget &origin=* to get around CORS
  wikiImageUrl: 'https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&origin=*&format=json&pithumbsize=400&titles=',
  wikiSummaryUrl: 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&redirects=1&titles=',
  wikiRandomUrl: 'https://en.wikipedia.org/api/rest_v1/page/random/summary?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&redirects=1&titles=',
};
