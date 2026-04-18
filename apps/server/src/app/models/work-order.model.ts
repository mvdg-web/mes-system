import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class WorkOrder {
  @Field(() => ID)
  id: string;

  @Field()
  orderNumber: string;

  @Field()
  productName: string;

  @Field(() => Int)
  targetQty: number;

  @Field(() => Int)
  producedQty: number;

  @Field()
  status: string; // We can upgrade this to an Enum later!
}
