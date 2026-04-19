import { Resolver } from '@nestjs/graphql';
import { Product } from '@mes/db';


@Resolver(() => Product)
export class ProductResolver {}
