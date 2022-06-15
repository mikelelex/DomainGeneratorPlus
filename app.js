let domainname = function() {
  var pronoun = ["the", "our", "their"];
  var adj = ["great", "big", "nice"];
  var noun = ["jogger", "raccon", "duck"];

  for (let pro of pronoun) {
    for (let adje of adj) {
      for (let nou of noun) {
        gendom(pro, adje, nou);
      }
    }
  }
};

let gendom = function(pronoun, adj, noun) {
  console.log(`${pronoun}${adj}${noun}.com`);
};

domainname();
