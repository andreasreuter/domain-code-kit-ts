interface IUseCaseError {
  message: string
}

abstract class UseCaseError implements IUseCaseError {
  public readonly message: string

  constructor(message: string) {
    this.message = message
  }
}

export { UseCaseError }