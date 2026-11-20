// Keep VRChat Photon UDP traffic direct in Proton profiles.
function main(config, profileName) {
  var photonUdpRules = [
    "AND,((NETWORK,UDP),(DST-PORT,5055-5058)),DIRECT",
    "AND,((NETWORK,UDP),(DST-PORT,27000-27003)),DIRECT"
  ];
  if (!config.rules) config.rules = [];
  config.rules = photonUdpRules.concat(config.rules.filter(function(rule) {
    return photonUdpRules.indexOf(rule) === -1;
  }));
  return config;
}
