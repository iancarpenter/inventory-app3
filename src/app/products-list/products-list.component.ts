import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../product-model';

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  /**
   * @input productList - the Product[] passed to us
   */

   @Input() productList: Product[];
   /**
    * @output onProductSelected - outputs the current
    *         Product whenever a new Product is selected
    */
   // tslint:disable-next-line:no-output-on-prefix
   @Output() onProductSelected: EventEmitter<Product>;

  constructor() { }

}
