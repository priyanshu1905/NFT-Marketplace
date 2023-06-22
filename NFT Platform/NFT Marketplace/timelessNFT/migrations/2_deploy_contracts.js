/* eslint-disable no-undef */
const TimelessNFT = artifacts.require('TimelessNFT')
// const TimelessNFT = artifacts.require('adulamNFT')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(TimelessNFT, 'Timeless NFTs', 'TNT', 10, accounts[1])
}
