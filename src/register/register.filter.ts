import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class RegisterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
