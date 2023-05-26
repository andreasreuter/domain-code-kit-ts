import { UniqueEntityID } from "./UniqueEntityID"

abstract class Entity<T> {
  protected readonly _id: UniqueEntityID
  readonly props: T

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id ? id : new UniqueEntityID()
    this.props = props
  }

  isEntity = (entity: any): entity is Entity<T> => {
    return (entity instanceof Entity)
  }

  equals(entity?: Entity<T>): boolean {
    if (entity == null || entity == undefined) {
      return (false)
    }

    if (this === entity) {
      return (true)
    }

    if (!this.isEntity(entity)) {
      return (false)
    }

    return (true)
  }
}

export { Entity }
