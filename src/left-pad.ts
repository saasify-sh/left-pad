import { Controller, Get, Query, Route } from 'tsoa'

@Route('')
export class LeftPadController extends Controller {
  @Get('/')
  public async leftPad(
    @Query() string: string,
    @Query() length: number,
    @Query() pad: string = ' '
  ): Promise<string> {
    return string.padStart(length, pad)
  }
}
