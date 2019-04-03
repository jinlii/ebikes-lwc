import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    // Marks a property as public for use in your template or other components.
    @api product;

    tileClick() {
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.product.fields.Id.value
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}
