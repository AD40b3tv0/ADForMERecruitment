import { Routes } from '@angular/router';

function titleSuffix(pageTitle: string) {
  return `ADForMERecruitment | ${pageTitle}`;
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then((m) => m.ProductListComponent),
    title: titleSuffix('Produkty')
  },
  {
    path: 'products/create', loadComponent: () => 
      import('./components/product-form/product-form.component').then((m) => m.ProductFormComponent), 
    title: titleSuffix('Dodaj produkt')
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component').then((m) => m.PageNotFoundComponent),
    title: titleSuffix('404')
  }
];
