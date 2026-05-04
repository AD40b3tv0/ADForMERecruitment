import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { NotificationService } from '../../services/notification.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, 
    ReactiveFormsModule, 
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent {
  private router = inject(Router);
  private service = inject(ProductService);
  private formBuilder = inject(NonNullableFormBuilder);
  private notificationService = inject(NotificationService);
  private route = inject(ActivatedRoute);

  form = this.formBuilder.group({
    code: this.formBuilder.control('', {validators: [Validators.required]}),
    name: this.formBuilder.control('', {validators: [Validators.required]}),
    price: this.formBuilder.control(0, {validators: [Validators.required, Validators.min(0)]}),
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.notificationService.error('Popraw dane w formularzu!');
      return;
    }

    this.service.createProduct(this.form.getRawValue()).subscribe(() => {
      this.notificationService.info('Produkt został utworzony!');
      this.close();
    });
  }

  close() {
    this.router.navigateByUrl('/products');
  }
}
