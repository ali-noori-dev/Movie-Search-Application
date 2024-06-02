export interface IToastService {
  success(msg: string, id?: string): void;
  error(msg: string, id?: string): void;
}
