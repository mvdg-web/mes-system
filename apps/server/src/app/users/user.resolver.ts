import { Resolver } from '@nestjs/graphql';
import { User } from '@mes/db';


@Resolver(() => User)
export class UserResolver {}
