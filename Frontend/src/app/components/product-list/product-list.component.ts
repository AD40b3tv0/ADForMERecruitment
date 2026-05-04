import { Component, effect, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { SortingOptions } from '../../types/sorting-options';
import { AllowedSortEnum } from '../../types/allowed-sort.enum';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, 
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelect,
    MatOption, 
    MatCard, 
    MatCardTitle, 
    MatCardSubtitle, 
    MatDivider, 
    MatList,
    MatListItem],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  private service = inject(ProductService);

  products = this.service.products;
  totalPages = this.service.totalPages;
  page = signal(1);
  pageSize = signal(10);
  total = this.service.total;
  sortBy = signal<AllowedSortEnum | null>(null);
  sortDesc = signal(false);
  search = signal('');

  readonly sortingOptions: SortingOptions[] = [
    { value: AllowedSortEnum.default, label: 'Domyślne' },
    { value: AllowedSortEnum.id, label: 'ID' },
    { value: AllowedSortEnum.code, label: 'Kod' },
    { value: AllowedSortEnum.name, label: 'Nazwa' },
    { value: AllowedSortEnum.price, label: 'Cena' },
  ];

  readonly pageSizes = [3, 5, 10, 25, 50];

  constructor() {
    effect(() => {
      this.load();
    });
  }

  onSort(by: AllowedSortEnum) { 
    this.sortBy.set(by || null); 
  }
  
  toggleDesc() { 
    this.sortDesc.update(v => !v);
  }

  prev() { 
    this.page.update(p => Math.max(1, p - 1)); 
  }

  next() { 
    this.page.update(p => p + 1); 
  }

  load() {
    this.service.getProducts(this.page(), this.pageSize(), this.search(), 
      this.sortBy() ?? undefined, this.sortDesc()).subscribe();
  }
}
