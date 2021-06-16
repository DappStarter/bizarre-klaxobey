require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note pumpkin method journey kitchen off verify'; 
let testAccounts = [
"0x5b5a7a7570958f1ea8cb008f2545e9a007b915b4383e99dfaa44b8d095a4dd13",
"0xc7a18389cfdea4820df3cf229c09c9b474d21b4c0d388d3f8a5a7aeec1c12d5b",
"0xbb6e338a6c24412550c7a15ffb6db019f18b3e2932e99da42b5d3a95a4bfbd66",
"0x26c287210149877c0f4c8562f2898c8c909340adf09fe105d6ad36ede7cb83f4",
"0x7f91f96d1d61205f9f210638d6a47eabdc70ab4c7d0d013878effefc1174ba97",
"0xabd0cfe07ad515652c7d07688dfa0b43c8657edbc5cc007887d0f788af83d673",
"0x17bfcf785970d2fbcfd369d1bde28def1cad595ea99c29216c9c634017159bc3",
"0x9421fa29a8829ab82328eba68120af45ff1562334f75bbbf297e3733c3986ba9",
"0x6f03dfe0991cf179fb2cf8d9a753f4ab49660630738dca9d39a70ae0c5268bdf",
"0xc98dff256dabfb1509bdd1a38c9ddd05c3d7c40f9d5b33143024fec7a1681f5c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

