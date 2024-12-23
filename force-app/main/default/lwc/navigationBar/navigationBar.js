import { LightningElement, api } from 'lwc';

export default class NavigationBar extends LightningElement {
    @api cartNumber = 0; // Property to receive the cart count from the parent
}