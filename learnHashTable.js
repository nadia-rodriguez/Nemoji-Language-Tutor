// key is string, size is num
const hash = (key,size) => {
    let hashedKey = 0;

    for (i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }

    return hashedKey % size;
}

class HashTable {
    constructor() {
        this.size = 5;
        this.buckets = Array(this.size);

        for(let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }

    insert(key, value, payload) {
        let index = hash(key, this.size);
        this.buckets[index].set(key, value, payload);
    }

    remove(key) {
        let index = hash(key, this.size);
        let deleted = this.buckets[index].get(key,value);
        this.buckets[index].delete[key];
        
        return deleted;
    }

    search(key) {
        let index = hash(key, this.size);
        return this.buckets[index].get(key);
    }
}



// const chineseHash = new HashTable();
// chineseHash.insert('😃', 'happy');

const hashTables = new HashTable();
hashTables.insert('happy', 'feliz', 'hi');
hashTables.insert('sad', 'triste');
hashTables.insert('angry', 'enojada');
hashTables.insert('scared', 'asustada');
hashTables.insert('confused', 'confundida');

console.log(hashTables.search('happy'))

hashTables



