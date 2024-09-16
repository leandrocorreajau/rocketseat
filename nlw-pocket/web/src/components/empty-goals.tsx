import { Plus } from 'lucide-react'
import letStart from '../assets/lets-start-illustration.svg'
import logo from '../assets/logo-in-orbit.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="in.orbit" />
      <img src={letStart} alt="in.orbit - Let Start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenuma meta, que tal cadastrar uma agora mesmo?
      </p>


      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastar meta
        </Button>
      </DialogTrigger>
    </div>
  )
}