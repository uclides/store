import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
    moduleId: module.id,
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {
    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(public repository: OrderRepository,
                public order: Order) { }
    
    
}