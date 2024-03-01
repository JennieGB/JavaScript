const SHA256 = require('crypto-js/sha256');
const bulletproofs = require('bulletproofs');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.pendingTransactions = [];
    }

    createGenesisBlock() {
        return new Block(0, "28/02/2024", "Genesis Block", "0");
    }

    createBlock(data) {
        const previousBlock = this.chain[this.chain.length - 1];
        const newIndex = previousBlock.index + 1;
        const newTimestamp = new Date().toString();
        const newHash = this.calculateHash(newIndex, previousBlock.hash, newTimestamp, data);

        const newBlock = new Block(newIndex, newTimestamp, data, previousBlock.hash);
        newBlock.hash = newHash;

        this.chain.push(newBlock);
    }

    createTransaction(sender, recipient, amount) {
        const transaction = {
            sender: sender,
            recipient: recipient,
            amount: amount
        };

        // Проверка баланса отправителя
        const senderBalance = this.getBalance(sender);
        if (senderBalance < amount) {
            console.log("Недостаточно средств для проведения транзакции.");
            return;
        }

        // Создание доказательства Bulletproofs для транзакции
        const proof = bulletproofs.generateProof(transaction);

        // Добавление транзакции и ее доказательства в список ожидающих подтверждения
        this.pendingTransactions.push({ transaction, proof });
    }

    minePendingTransactions(minerRewardAddress) {
        const newBlock = new Block(Date.now(), this.pendingTransactions);
        newBlock.previousHash = this.chain[this.chain.length - 1].hash;
        newBlock.mineBlock();

        console.log("Блок успешно добыт.");
        this.chain.push(newBlock);

        // Отправка награды майнеру
        this.createTransaction("network", minerRewardAddress, miningReward);

        // Очистка списка ожидающих транзакций
        this.pendingTransactions = [];
    }

    getBalance(address) {
        let balance = 0;
        for (const block of this.chain) {
            for (const { transaction } of block.data) {
                if (transaction.sender === address) {
                    balance -= transaction.amount;
                }
                if (transaction.recipient === address) {
                    balance += transaction.amount;
                }
            }
        }
        return balance;
    }

    calculateHash(index, previousHash, timestamp, data) {
        return SHA256(index + previousHash + timestamp + JSON.stringify(data)).toString();
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

// Награда за майнинг
const miningReward = 100;

// Создание блокчейна
const myBlockchain = new Blockchain();

// Добавление транзакций
myBlockchain.createTransaction('address1', 'address2', 50);
myBlockchain.createTransaction('address2', 'address1', 20);

// Майнинг блока
myBlockchain.minePendingTransactions('my-address');

console.log("Баланс адреса1:", myBlockchain.getBalance('address1'));
console.log("Баланс адреса2:", myBlockchain.getBalance('address2'));
console.log("Баланс майнера:", myBlockchain.getBalance('my-address'));


