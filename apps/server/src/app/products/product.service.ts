import { Injectable } from '@nestjs/common';
import { PrismaService, ProductModel } from '@mes/db';



@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<ProductModel[]> {
    return this.prisma.product.findMany()

  }
}
