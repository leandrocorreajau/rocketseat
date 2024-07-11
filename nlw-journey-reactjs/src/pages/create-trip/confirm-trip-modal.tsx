import { AtSign, User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerName,
  setOwnerEmail
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold font-lg">Confirmar criação de viagem</h2>
            <button>
              <X className="size-5 text-zinc-400" onClick={closeConfirmTripModal} />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para <strong className="font-semibold text-zinc-100">Jaú, Brasil</strong> nas datas de
            <strong className="font-semibold text-zinc-100">16 a 27 de agosto de 2024</strong> preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
              onChange={event => setOwnerName(event.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 px-4 border rounded-lg h-14 bg-zinc-950 border-zinc-800">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="flex-1 text-lg bg-transparent outline-none placeholder-zinc-400"
              onChange={event => setOwnerEmail(event.target.value)}
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmação da criação da viagem
          </Button>
        </form>
      </div>
    </div>
  )
}