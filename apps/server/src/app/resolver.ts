import { Resolver, Query } from '@nestjs/graphql';
import { WorkOrder } from './models/work-order.model';

@Resolver(() => WorkOrder)
export class TestResolver {
  @Query(() => [WorkOrder])
  async getWorkOrders(): Promise<WorkOrder[]> {
    return [];
  }
}
