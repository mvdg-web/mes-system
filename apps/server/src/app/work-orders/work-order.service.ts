import { Injectable } from '@nestjs/common';
import { PrismaService, WorkOrderModel } from '@mes/db';


@Injectable()
export class WorkOrderService {
  constructor(private prisma: PrismaService) {}

  async findAll():Promise<WorkOrderModel[]> {
    return this.prisma.workOrder.findMany({
      include: { product: true, assignedTo: true },
    });
  }

  async updateStatus(id: string, status: string): Promise<WorkOrderModel> {
    return this.prisma.workOrder.update({
      where: { id },
      data: { status },
    });
  }
}


