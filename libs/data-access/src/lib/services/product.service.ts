import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable() export class ProductService {
  private apollo = inject(Apollo);


}
