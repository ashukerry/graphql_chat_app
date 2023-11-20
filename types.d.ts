declare namespace Express {
  import { Request } from 'express';
  export interface Request {
    user?: {
      username: string;
      sub: number;
    };
  }
}
