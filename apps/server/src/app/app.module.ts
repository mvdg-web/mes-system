import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TestResolver } from './resolver';
import { DatabaseModule, PrismaService } from '@mes-system/database';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(__dirname, '..', 'schema.gql'),
    //   sortSchema: true,
    //   playground: true,
    // }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, '..', 'schema.gql'),
      sortSchema: true,
      playground: false,
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [DatabaseModule, PrismaService, TestResolver],
})
export class AppModule {}
