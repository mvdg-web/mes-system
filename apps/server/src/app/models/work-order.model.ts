// apps/server/src/app/models/work-order.model.ts
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WorkOrder {
  @Field(() => ID)
  id: string;

  @Field()
  workOrderNumber: string;

  @Field(() => Int)
  quantity: number;

  @Field()
  status: string;

  @Field()
  productId: string;

  @Field({ nullable: true })
  userId?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
