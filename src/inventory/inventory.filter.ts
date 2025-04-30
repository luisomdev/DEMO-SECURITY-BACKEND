import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class InventoryFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
