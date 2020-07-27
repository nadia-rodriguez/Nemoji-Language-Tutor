function hashStringToInt(s,tableSize) {
    let hash = 17;

    for (i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
    return hash;
}

class HashTable {

    table =  new Array(100);

    insert = (key, value) => {
        const index = hashStringToInt(key, this.table.length);
        if (this.table[index]) {
            this.table[index].push([key,value]);
        }
        else {
           this.table[index] = [[key, value]]; 
        }
        
    };

    search = key => {
        const index = hashStringToInt(key, this.table.length);
        return this.table[index].find(x => x[0] === key)[1];
    };
}

const chineseHash = new HashTable();
chineseHash.insert('😢', 'sad');
chineseHash.search('😢');

chineseHash.insert('😀', 'happy');
chineseHash.search('😀');

console.log(chineseHash.search('😢'));
console.log(chineseHash.search('😀'));