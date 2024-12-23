import { LightningElement, track, wire } from 'lwc';
import getAllMobiles from '@salesforce/apex/Mobiles.getAllMobiles';

export default class Mobiles extends LightningElement {
    @track MobileInfo;

    @wire(getAllMobiles)
    mobiles({ error, data }) {
        if (data) {
            this.MobileInfo = data;
        } else if (error) {
            console.error('Error fetching mobiles:', error);
        }
    }

    handleAddToCart() {
        const cartEvent = new CustomEvent('cartupdate', { detail: 1 });
        this.dispatchEvent(cartEvent); // Dispatch event to parent
        console.log('Cart update event dispatched:', cartEvent);
    }
}