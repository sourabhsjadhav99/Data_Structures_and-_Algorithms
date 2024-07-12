class CustomHashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }
    // Hash function
    hash_fun(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    // Insert function
    set(key, value) {
        let index = this.hash_fun(key);
        let arr_2d = this.table[index];
        if (arr_2d == undefined) {
            // table[index] is empty, so create a new 2D array and put
            // [k,v] in this temp array and put this temp array at index in 
            // table
            let temp_arr_2d = [];
            temp_arr_2d.push([key, value]);
            this.table[index] = temp_arr_2d;
            this.size++;
            return;
        }

        for (let i = 0; i < arr_2d.length; i++) {
            let entry = arr_2d[i];
            if (entry[0] == key) {
                // key matched, so replace the value and don't increase the size
                entry[1] = value;
                return;
            }
        }
        // key was not present already
        arr_2d.push([key, value]);
        this.size++;
    }
    // Get function
    get(key) {
        let index = this.hash_fun(key);
        let arr_2d = this.table[index];
        if (arr_2d == undefined) {
            return undefined;
        }
        for (let i = 0; i < arr_2d.length; i++) {
            let entry = arr_2d[i];
            if (entry[0] == key) {
                return entry[1];
            }
        }
        return undefined;
    }
    // has : Homework
    // clear : Homework
    delete(key) {
        let index = this.hash_fun(key);
        let arr_2d = this.table[index];
        if (arr_2d == undefined) {
            // Key does not exists
            return false;
        }
        for (let i = 0; i < arr_2d.length; i++) {
            let entry = arr_2d[i];
            if (entry[0] == key) {
                arr_2d.splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }
    toString() {
        console.log(`CustomHashTable(${this.size}) {`);
        for (let entries of this.table) {
            if (entries != undefined) {
                for (let entry of entries) {
                    console.log(entry);
                }
            }
        }
        console.log(`}`);
    }
}
let my_hash_table = new CustomHashTable();
my_hash_table.set("A", "Sourabh");
my_hash_table.set("B", "Sourabh");
console.log("size = " + my_hash_table.size);
console.log("A => " + my_hash_table.get("A"));

// my_hash_table.set("CB", "Prajwal");
// console.log("size = " + my_hash_table.size);
// console.log("CB => " + my_hash_table.get("CB"));
// my_hash_table.set("CZ", "Prashant");
// console.log("size = " + my_hash_table.size);
// console.log("CZ => " + my_hash_table.get("CZ"));
// console.log("After delete------------");
// my_hash_table.delete("CB");
// console.log("size = " + my_hash_table.size);
// console.log("CB => " + my_hash_table.get("CB"));
// console.log("" + my_hash_table);