import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request IP ', req.ip);
    console.log('Response Path', req.path);
    console.log('Response Header', req.headers);
    next();
  }
}
