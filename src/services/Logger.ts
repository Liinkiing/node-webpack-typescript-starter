export class Logger {
  constructor() {
    console.log('Logger imported with an alias constructed!')
  }

  public logSuperSecret = (): void => {
    console.log(process.env.MY_SUPER_SECRET_TOKEN)
  }
}
