import { inject, Injectable, signal } from '@angular/core';
import { CreateProductDto } from '../types/create-product-dto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ProductDto } from '../types/product-dto';
import { PagedResultDto } from '../types/paged-result-dto';
import { environment } from '../../environments/environment';
import { AllowedSortEnum } from '../types/allowed-sort.enum';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  products = signal<ProductDto[]>([]);
  totalPages = signal<number>(1);
  total = signal<number>(0);

  getProducts(page = 1, pageSize = 10, search?: string, 
    sortBy?: AllowedSortEnum, sortDesc = false): Observable<PagedResultDto<ProductDto>> {
    let params = new HttpParams()
      .set('page', String(page))
      .set('pageSize', String(pageSize))
      .set('sortDesc', String(sortDesc));

    if (search) params = params.set('search', search);
    if (sortBy) params = params.set('sortBy', sortBy);

    return this.httpClient.get<PagedResultDto<ProductDto>>(`${this.baseUrl}/Products`, { params }).pipe(
      tap((pagedResult) => {
        this.products.set(pagedResult.items); 
        this.totalPages.set(pagedResult.totalPages);
        this.total.set(pagedResult.total);}));
  }

  createProduct(product: CreateProductDto): Observable<ProductDto> {
    return this.httpClient.post<ProductDto>(`${this.baseUrl}/Products`, product).pipe(
      tap((createdProduct) => 
        console.log(`Added product with ID: ${createdProduct.id}`)));
  }
}
