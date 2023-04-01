export interface IMessageProvider {
  message: string;
  onChange(handler: (message: string) => void): void;
}
