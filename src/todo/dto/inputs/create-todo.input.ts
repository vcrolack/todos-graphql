import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'What need to be donde' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  description: string;
}
