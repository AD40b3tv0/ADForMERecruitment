import { Component, input } from '@angular/core';
import { ProductDto } from '../../types/product-dto';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  product = input.required<ProductDto>();
}
