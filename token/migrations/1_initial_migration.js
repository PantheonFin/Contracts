const IterableMapping = artifacts.require("IterableMapping");
const $DRACHMA = artifacts.require("$DRACHMA");

module.exports = function (deployer) {
   deployer.deploy(IterableMapping);
   deployer.link(IterableMapping, $DRACHMA);
   deployer.deploy($DRACHMA, process.env.WALLET_0, process.env.WALLET_1);
};
