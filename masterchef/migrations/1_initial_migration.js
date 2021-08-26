const MasterChef = artifacts.require("MasterChef");

module.exports = function (deployer) {
  deployer.deploy(MasterChef, "0xF6b0dfed4c14Fdd597e1F80290D92e28dB3F4132", '189789');
};
