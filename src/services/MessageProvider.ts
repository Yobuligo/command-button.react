import { IMessageProvider } from "./IMessageProvider";

class DefaultMessageProvider implements IMessageProvider {
  private _message: string = "";
  private handlers: ((message: string) => void)[] = [];

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
    console.log(this._message);
    this.handlers.forEach((handler) => handler(this._message));
  }

  onChange(handler: (message: string) => void): void {
    this.handlers.push(handler);
  }
}

export const MessageProvider = new DefaultMessageProvider();
