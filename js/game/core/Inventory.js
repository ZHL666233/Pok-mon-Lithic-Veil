import { item as itemData } from '../data/item/itemData.js';

export class Inventory {
    constructor(main, inventoryData) {
        this.main = main;
        this.item = inventoryData.item || {};  
    }

    addItem = (item, quantity = 1) => {
        if (this.item[item.key]) {
            this.item[item.key].amount = Number(this.item[item.key].amount) + Number(quantity);
        } else {
            this.item[item.key] = {
                ...item, 
                amount: quantity          
            };
        }
    }

    removeItem = (item, q = 1) => {
        if (this.item[item.key].amount > q) {
            this.item[item.key].amount -= q;
        } else {
            delete this.item[item.key];
        }
    }   

    searchItem = (key) => {
        const item = Object.values(this.item).find(i => i.key === key);
        return item;
    }

    getSaveData() {
        return {
            item: this.item,
        };
    }
}
