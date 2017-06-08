export default class Config {
  public port: number;
  constructor() {
    switch (process.env.NODE_ENV) {
      case 'development':
        this.port = 3000;

      case 'production':
        this.port = 3000;

      default:
        this.port = 3000;
    }
  }
}
