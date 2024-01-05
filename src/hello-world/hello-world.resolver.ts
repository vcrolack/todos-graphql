import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: 'Hola mundo es lo que retorna',
    name: 'HelloPeru',
  })
  helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, {
    description: 'Retorna un número aleatorio',
    name: 'randomNumber',
  })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    description:
      'Retorna un número random desde 0 a un número personalizado, no incluyente. Default 6',
    name: 'randomFromZeroTo',
  })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true }) to = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
