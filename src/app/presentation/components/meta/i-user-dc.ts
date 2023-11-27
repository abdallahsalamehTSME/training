import { TIdentifieable, TSerializable } from 'cubes'

interface IUserDc extends TSerializable<TIdentifieable<{ userEmail: string }, 'userEmail'>> {
  userName: string
  userEmail: string
}
export type { IUserDc }
