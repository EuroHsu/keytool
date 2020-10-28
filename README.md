# keytool

簡單生成`Bitcoin`跟`Ethereum`的私鑰

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
```

含有 mainnet 地址資訊

```bash
$ node genMnemonic.js --info
Mnemonic: umbrella desert resemble wrestle census chief hidden cheap void cluster forum lawn
BTC 普通地址
Path: "m/44'/0'/0'/0/0"
{ 'Private Key': 'L3RV6KjiCeMFfMxJaLqhUTjfdNXsXL9PceS5FhDhrXfvnxQ3vyhf',
  'Public Key': '02fbef8e5ce6d0b0b8d45ea8e6e2de818439610e415fae0e53bb0564ae2b29475b',
  Address: '1Q4VJJGSVZkCUDjmcCyUuoGyYbDQYcN6yH' }
BTC 隔離見證(兼容)地址
Path: "m/49'/0'/0'/0/0"
{ 'Private Key': 'L16cd9AcxpTwSJFEcFZbEUZmufyLUtKw6HPA9iwfDJk8ru6yiiTV',
  'Public Key': '034625502510b5ac75bf2dbf2c05e6da7e397d10f1e172b980ef22e8629c3de126',
  'Redeem script': '00146c2210be2bef56fb65598789c1a82cc79d63c828',
  Address: '3Cau4QSJY3LqfcwaDPUmouATPT3er2zNnD' }
BTC 隔離見證(原生)地址
Path: "m/84'/0'/0'/0/0"
{ 'Private Key': 'L1P9hWB9dsVGu7p474pvghjEidgWZYyunFRhs5kZ1s1fKUprNkUv',
  'Public Key': '035bf57d78d22aeb1fa442ccca00e7bee360059a9e0ee6037b13147cbc66f0fcd2',
  Address: 'bc1q6jgvkh76mwey8gr3t8q28vxwzptlfmzrk666ey' }
ETH 普通地址
Path: "m/44'/60'/0'/0/0"
{ 'Private Key': '0x8581dbc77b9addf6058e56521197e3834f9694ed1f11f96d0691d9a588098b34',
  'Public Key': '0x02f4baca2232eae7bc4f9bf0feff18dac51f4952a694b6d55712470b1d1f2e39ac',
  Address: '0xecC6868649494C31BC4503C04C9C9B5c8Aa74CbE' }
```

含有 testnet 地址資訊

```bash
$ node genMnemonic.js --info --test
BTC 普通地址
Path: "m/44'/0'/0'/0/0"
{ 'Private Key': 'cTnUZEjZdi3WpoRZxkepqnEjFbqHBnF5ggaYN7gDMeKw3hQqa6Hg',
  'Public Key': '02fbef8e5ce6d0b0b8d45ea8e6e2de818439610e415fae0e53bb0564ae2b29475b',
  Address: 'n4aSbMMRJbBTFLDPKmwrjiVJQap7Sk1j3P' }
BTC 隔離見證(兼容)地址
Path: "m/49'/0'/0'/0/0"
{ 'Private Key': 'cRTc64AUPtACbjiVzfNibo4qXuGk9LRdAKXdG9QAiRQ97eCrXXFm',
  'Public Key': '034625502510b5ac75bf2dbf2c05e6da7e397d10f1e172b980ef22e8629c3de126',
  'Redeem script': '00146c2210be2bef56fb65598789c1a82cc79d63c828',
  Address: '2N49789NL9VrBsQa7tX6eRr9iboFpfL4foz' }
BTC 隔離見證(原生)地址
Path: "m/84'/0'/0'/0/0"
{ 'Private Key': 'cRk9ARB14wBY4ZHKVUe442EJLryvE15brHaAyWD4WyffaDsYvTAP',
  'Public Key': '035bf57d78d22aeb1fa442ccca00e7bee360059a9e0ee6037b13147cbc66f0fcd2',
  Address: 'tb1q6jgvkh76mwey8gr3t8q28vxwzptlfmzruupfzh' }
ETH 普通地址
Path: "m/44'/60'/0'/0/0"
{ 'Private Key': '0x8581dbc77b9addf6058e56521197e3834f9694ed1f11f96d0691d9a588098b34',
  'Public Key': '0x02f4baca2232eae7bc4f9bf0feff18dac51f4952a694b6d55712470b1d1f2e39ac',
  Address: '0xecC6868649494C31BC4503C04C9C9B5c8Aa74CbE' }
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

### Bitcoin Bech32 Address

mainnet

```bash
node getBtcAddress.js --bech32
請輸入私鑰: L1P9hWB9dsVGu7p474pvghjEidgWZYyunFRhs5kZ1s1fKUprNkUv
bc1q6jgvkh76mwey8gr3t8q28vxwzptlfmzrk666ey

node getBtcAddress.js --bech32 --key L1P9hWB9dsVGu7p474pvghjEidgWZYyunFRhs5kZ1s1fKUprNkUv
bc1q6jgvkh76mwey8gr3t8q28vxwzptlfmzrk666ey
```

testnet

```bash
node getBtcAddress.js --bech32 --test
請輸入私鑰: cRk9ARB14wBY4ZHKVUe442EJLryvE15brHaAyWD4WyffaDsYvTAP
tb1q6jgvkh76mwey8gr3t8q28vxwzptlfmzruupfzh

node getBtcAddress.js --bech32 --test --key cRk9ARB14wBY4ZHKVUe442EJLryvE15brHaAyWD4WyffaDsYvTAP
tb1q6jgvkh76mwey8gr3t8q28vxwzptlfmzruupfzh
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

### Ethereum Contract Address

```bash
$ node getEthContractAddress.js
以太坊合約的地址是根據創建者(sender)的地址以及創建者發送過的交易數量(nonce)來計算的
將 sender 和 nonce 進行 RLP 編碼，然後用 Keccak-256 進行 hash 計算
請輸入sender: 0xB72FB3250268222E01A57b19B02db6268884BBDe
請輸入nonce: 2
合約地址: 0xA7254e5aF10793B520b4d4ad7F717b1b65aCeb4c

$ node getEthContractAddress.js --sender 0xB72FB3250268222E01A57b19B02db6268884BBDe --nonce 2
0xA7254e5aF10793B520b4d4ad7F717b1b65aCeb4c
```
