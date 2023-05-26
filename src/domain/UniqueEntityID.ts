import { v4 as uuidv4 } from "uuid"

class UniqueEntityID {
  private value: unknown

  constructor(id?: unknown) {
    this.value = id ? id : uuidv4()
  }

  equals(id?: UniqueEntityID): boolean {
    if (id == null || id == undefined) {
      return (false)
    }

    if (!(id instanceof UniqueEntityID)) {
      return (false)
    }

    return (id.toValue() === this.value)
  }

  toString(): string {
    return (String(this.value))
  }

  toValue(): unknown {
    return (this.value)
  }
}

export { UniqueEntityID }