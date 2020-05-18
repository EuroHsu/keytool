# keytool

簡單生成`Bitcoin`、`Ethereum`跟`EOS`的私鑰

## 需要環境

1. NodeJS

## 安裝

```bash
npm install
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
$ node getBtcAddress.js --key L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
1DTKdoBJcwYiRFR5u9mzbXyw98QGwoikuG
```

testnet

```bash
$ node getBtcAddress --test --key cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
mvhZ6uTiBbaQ15S2q12asT47XAwtqMzhUm
```

### Bitcoin P2SH Address

mainnet

```bash
$ node getBtcAddress.js --p2sh --key L1ifct6bkazBWLJ8QKarA1icASL8z7gq38r63BJAjyqMge2Z4J4y
39P2r6hvCDMMRidM9zEeWQ5MVwmbtzMjJ9
```

testnet

```bash
$ node getBtcAddress --test --p2sh --key cV53vn1FmaAAXHHWExQJQtdKrHMP6vBtmaLMSYib6QP2oU8ch78g
2N2JKLJS7Y9A4dJMb4LUFVi5sWsEPCUFdJ6
```

### Ethereum Address

```bash
$ node getEthAddress.js --key 0x86b299c405b2254d95104dd0b8565a4a432d06ebcde39e7596d8fcded9a99913
0xf9ecE109C4aCd8918088191f9476a493D224Ed85
```
