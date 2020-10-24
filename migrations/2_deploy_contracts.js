var MyContract = artifacts.require('./Rating.sol');

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
