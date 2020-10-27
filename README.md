# keytool

簡單生成`Bitcoin`、`Ethereum`跟`EOS`的私鑰

## 需要環境

1. NodeJS

## 安裝

```bash
npm install
```

## 生成註記詞

```bash
$ node genMnemonic.js
umbrella desert resemble wrestle census chief hidden cheap void cluster forum lawn

$ node genMnemonic.js --info
Mnemonic: umbrella desert resemble wrestle census chief hidden cheap void cluster forum lawn
BTC { 'Private Key': 'L3RV6KjiCeMFfMxJaLqhUTjfdNXsXL9PceS5FhDhrXfvnxQ3vyhf',
  'Public Key': '02fbef8e5ce6d0b0b8d45ea8e6e2de818439610e415fae0e53bb0564ae2b29475b',
  'P2PKH Address': '1Q4VJJGSVZkCUDjmcCyUuoGyYbDQYcN6yH',
  'Redeem script': '0014fcf3c359e0035a466728e1e10c2211ba50582a5c',
  'P2SH Address': '35ZmVc8wy9dnbtLkWzgecV1Sfgnbi1irQT' }
ETH { 'Private Key': '0x8581dbc77b9addf6058e56521197e3834f9694ed1f11f96d0691d9a588098b34',
  'Public Key': '0x02f4baca2232eae7bc4f9bf0feff18dac51f4952a694b6d55712470b1d1f2e39ac',
  Address: '0xecC6868649494C31BC4503C04C9C9B5c8Aa74CbE' }
EOS { 'Private Key': '5Jojx7poMEtiWKLoQMcZRA6KDUb3vBPxQiyUq4HwBScYM6QPFv7',
  'Public Key': 'EOS5wM6PEAYfR48kGKwd8twDFEHyyestZwQKwzv1eSdDuPnrLEpaG' }

$ node genMnemonic.js --info --test
Mnemonic: umbrella desert resemble wrestle census chief hidden cheap void cluster forum lawn
BTC { 'Private Key': 'cTnUZEjZdi3WpoRZxkepqnEjFbqHBnF5ggaYN7gDMeKw3hQqa6Hg',
  'Public Key': '02fbef8e5ce6d0b0b8d45ea8e6e2de818439610e415fae0e53bb0564ae2b29475b',
  'P2PKH Address': 'n4aSbMMRJbBTFLDPKmwrjiVJQap7Sk1j3P',
  'Redeem script': '0014fcf3c359e0035a466728e1e10c2211ba50582a5c',
  'P2SH Address': '2Mw7yZM4yac98ofyJC8JXERzht2zmZZkk13' }
ETH { 'Private Key': '0x8581dbc77b9addf6058e56521197e3834f9694ed1f11f96d0691d9a588098b34',
  'Public Key': '0x02f4baca2232eae7bc4f9bf0feff18dac51f4952a694b6d55712470b1d1f2e39ac',
  Address: '0xecC6868649494C31BC4503C04C9C9B5c8Aa74CbE' }
EOS { 'Private Key': '5Jojx7poMEtiWKLoQMcZRA6KDUb3vBPxQiyUq4HwBScYM6QPFv7',
  'Public Key': 'EOS5wM6PEAYfR48kGKwd8twDFEHyyestZwQKwzv1eSdDuPnrLEpaG' }
```

## 生成私鑰

### Bitcoin

mainnet

```bash
$ node genBtcKey.js
L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y

$ node genBtcKey.js --info
Private Key: L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
Public Key: 0279edd7cabc898ccea6da73d20c08746d3f4f36c1692317d24dfd8a4b1e4fe7a5
P2PKH Address: 1DTKdoBJcwYiRFR5u9mzbXyw98QGwoikuG
Redeem script: 0014889be1300e556cd9370f03065ad45a2becd57871
P2SH Address: 39P2r6hvCDMMRidM9zEeWQ5MVwmbtzMjJ9
```

testnet

```bash
$ node genBtcKey.js --test
cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g

$ node genBtcKey.js --test --info
Private Key: cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
Public Key: 02da3b5f8dc6031422b85e2d905478510e91c5888117027f15206b1f4e090db5cf
P2PKH Address: mvhZ6uTiBbaQ15S2q12asT47XAwtqMzhUm
Redeem script: 0014a68b1a39f2e4b94b0975c5bf33f6d01d847f75f5
P2SH Address: 2N2JKLJS7Y9A4dJMb4LUFVi5sWsEPCUFdJ6
```

### Ethereum

```bash
$ node genEthKey.js
0x86b299c405b2254d95104dd0b8565a4a432d06ebcde39e7596d8fcded9a99913

$ node genEthKey.js --info
Private Key: 0x86b299c405b2254d95104dd0b8565a4a432d06ebcde39e7596d8fcded9a99913
Address: 0xf9ecE109C4aCd8918088191f9476a493D224Ed85
```

### EOS

```bash
$ node genEosKey.js
5KKbQ56KwFTUU54cd8r9xtE1NB152iHstmqshb7k3qDJZVtCsiw

$ node genEosKey.js --info
Private Key: 5KKbQ56KwFTUU54cd8r9xtE1NB152iHstmqshb7k3qDJZVtCsiw
Public Key: EOS8SzqgK9agCgHMUyACcpAbEnFD5fCrwKGWdPDnJtfMoB4f7cT3P
```

## 私鑰轉地址

### Bitcoin P2PKH Address

mainnet

```bash
$ node getBtcAddress.js
請輸入私鑰: L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
1DTKdoBJcwYiRFR5u9mzbXyw98QGwoikuG

$ node getBtcAddress.js --key L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
1DTKdoBJcwYiRFR5u9mzbXyw98QGwoikuG
```

testnet

```bash
$ node getBtcAddress --test
請輸入私鑰: cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
mvhZ6uTiBbaQ15S2q12asT47XAwtqMzhUm

$ node getBtcAddress --test --key cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
mvhZ6uTiBbaQ15S2q12asT47XAwtqMzhUm
```

### Bitcoin P2SH Address

mainnet

```bash
$ node getBtcAddress.js --p2sh
請輸入私鑰: L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
39P2r6hvCDMMRidM9zEeWQ5MVwmbtzMjJ9

$ node getBtcAddress.js --p2sh --key L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
39P2r6hvCDMMRidM9zEeWQ5MVwmbtzMjJ9
```

testnet

```bash
$ node getBtcAddress --test --p2sh
請輸入私鑰: cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
2N2JKLJS7Y9A4dJMb4LUFVi5sWsEPCUFdJ6

$ node getBtcAddress --test --p2sh --key cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
2N2JKLJS7Y9A4dJMb4LUFVi5sWsEPCUFdJ6
```

### Ethereum Address

```bash
$ node getEthAddress.js
請輸入私鑰: 0x86b299c405b2254d95104dd0b8565a4a432d06ebcde39e7596d8fcded9a99913
0xf9ecE109C4aCd8918088191f9476a493D224Ed85

$ node getEthAddress.js --key 0x86b299c405b2254d95104dd0b8565a4a432d06ebcde39e7596d8fcded9a99913
0xf9ecE109C4aCd8918088191f9476a493D224Ed85
```

## 其他

### 計算以太坊合約地址

```bash
$ node getEthContractAddress.js --info
以太坊合約的地址是根據創建者(sender)的地址以及創建者發送過的交易數量(nonce)來計算的
sender 和 nonce 進行 RLP 編碼，然後用 Keccak-256 進行 hash 計算
請輸入sender: 0xB72FB3250268222E01A57b19B02db6268884BBDe
請輸入nonce: 2
合約地址: 0xA7254e5aF10793B520b4d4ad7F717b1b65aCeb4c

$ node getEthContractAddress.js --sender 0xB72FB3250268222E01A57b19B02db6268884BBDe --nonce 2
0xA7254e5aF10793B520b4d4ad7F717b1b65aCeb4c
```
