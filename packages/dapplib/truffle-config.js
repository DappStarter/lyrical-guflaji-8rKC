require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth oven proud hockey area olympic giggle'; 
let testAccounts = [
"0xa7c50df235cddf60cfa86b3e823bee0ad8ebcf111c52ca7448db8529fb339443",
"0xee8661edb8ba315bd5df16899cb6b73c4b9b151a30c440425b6c4fcd8be607f8",
"0x2f3ffda0606f91905c10354edd47d135dc39c6e37d31277c5afda4e1ca9f04da",
"0x3fc084c3a8e7f41b82d93982b95fc8a78c1321fc05c4d59ab9905a5b6c183bea",
"0xd1523b558733db84137230a02e71bb155402cb4aad0470cb9b03688ee254b31b",
"0x881ee50abbe2a1f9eeac3375251d836cababf6e40584cc96f79cc07a0ee457e7",
"0x32211765a45605f270a41c91099f714012da20ef02e25d0c721acd461bfa8b2d",
"0x5d6c8428b05869c0fed67ae439c8be231ada82bd8cb84952ffacea6cef4bbc9a",
"0x9dea505d612776fa47c1bc9fb6537f2d98c144081b7183b5287d6adc94f22dac",
"0xbea0b7b79db07a14c014306f1948a39cdb095f7a1103003a468f5d67bade0086"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

