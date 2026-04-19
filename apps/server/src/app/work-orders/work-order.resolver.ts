import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WorkOrderService } from './work-order.service';
import { WorkOrder } from '@mes/db';

@Resolver(() => WorkOrder)
export class WorkOrderResolver {
  constructor(private workOrderService: WorkOrderService) {}
  @Query(() => [WorkOrder])
  async findAllWorkOrders() {
    return await this.workOrderService.findAll();
  }

  @Mutation(() => WorkOrder)
  async updateWorkOrderStatus(
    @Args('id') id: string,
    @Args('status') status: string,
  ) {
    return await this.workOrderService.updateStatus(id, status);
  }
}
