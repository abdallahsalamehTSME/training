const props = {
  userName: String,
  userEmail: String,
  hasSaveCancel: { type: Boolean, default: true }
}

export { props }

type TUserFrom = typeof props
export type { TUserFrom }
