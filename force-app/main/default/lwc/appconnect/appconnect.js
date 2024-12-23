import { LightningElement ,track } from 'lwc';

export default class Appconnect extends LightningElement {

    @track cartNumber = 0; // Track the cart number to update dynamically

    // Event handler for the 'cartupdate' event
    handleCartUpdate(event) {
        console.log('Cart update received in parent:', event.detail);
        this.cartNumber += event.detail; // Increment the cart number
    }
}