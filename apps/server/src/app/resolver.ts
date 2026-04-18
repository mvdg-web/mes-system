import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '@mes-system/database';
import { WorkOrder } from './models/work-order.model';

@Resolver(() => WorkOrder)
export class TestResolver {

  constructor(private readonly prisma: PrismaService) {}
  @Query(() => [WorkOrder])
  findAll() {
    return this.prisma.workOrder.findMany();
  }
}
