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
L53oV8JxkatsnHuoG2UtiBQSgPUDPFFn5xwtKtDtNP5YGasSFstS

$ node genBtcKey.js --info
Private Key: L53oV8JxkatsnHuoG2UtiBQSgPUDPFFn5xwtKtDtNP5YGasSFstS
Public Key: 02fec69a1c23e90670ca413008a3760c3f519c737affd8c34f0035860ecf4ddb12
Address: 1EMSUgyMqMHnM2SxHBiu2Eb4XwPqtj2r9t
```

testnet

```bash
$ node genBtcKey.js --test
cPRxVwwj2NLr1fnXPAdB3UdEunzEvqVYDg6XcVeJYmHW5MQkUPx4

$ node genBtcKey.js --test --info
Private Key: cPRxVwwj2NLr1fnXPAdB3UdEunzEvqVYDg6XcVeJYmHW5MQkUPx4
Public Key: 037accc938f9763d7231c0912d3046d0758aa1ede2560dc98faaf2ff224e3ffddc
Address: n2YLxayvMsCXV9NUamR2tcb7FxwJKidju6
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

### Bitcoin

mainnet

```bash
$ node getBtcAddress.js --key L53oV8JxkatsnHuoG2UtiBQSgPUDPFFn5xwtKtDtNP5YGasSFstS
1EMSUgyMqMHnM2SxHBiu2Eb4XwPqtj2r9t
```

testnet

```bash
$ node getBtcAddress --test --key cPRxVwwj2NLr1fnXPAdB3UdEunzEvqVYDg6XcVeJYmHW5MQkUPx4
n2YLxayvMsCXV9NUamR2tcb7FxwJKidju6
```

### Ethereum

```bash
$ node getEthAddress.js --key 0x86b299c405b2254d95104dd0b8565a4a432d06ebcde39e7596d8fcded9a99913
0xf9ecE109C4aCd8918088191f9476a493D224Ed85
```
