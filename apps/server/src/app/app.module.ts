import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TestResolver } from './resolver';


@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      // autoSchemaFile: join(__dirname, '..', 'schema.gql'),
      autoSchemaFile: join(process.cwd(), 'apps/server/src/schema.gql'),
      sortSchema: true,
      playground: true,
    })

  ],
  controllers: [AppController],
  providers: [AppService, TestResolver],
})
export class AppModule {}
