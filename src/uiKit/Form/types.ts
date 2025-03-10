import { FormEvent } from "react"

export type Props = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  title?: string
}
