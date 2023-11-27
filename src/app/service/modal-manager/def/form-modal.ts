import { PropType } from 'vue'

const props = {
  isDrawer: Boolean,
  isStatic: Boolean,
  isCentered: Boolean,
  isVisible: Boolean,
  i18n: Object as PropType<{ header?: string; body?: string }>,
  yes: {
    type: Function as PropType<() => Promise<any>>,
    default() {
      return () => Promise.resolve()
    }
  },
  cancel: {
    type: Function as PropType<() => Promise<any>>,
    default() {
      return () => Promise.resolve()
    }
  },
  userName: String
}

const defaultFormModalDelegateProps = {
  isDrawer: false,
  isCentered: true,
  isStatic: true,
  isVisible: false,
  i18n: {},
  userName: ''
}

type TDefaultFormModalDelegateProps = Partial<typeof defaultFormModalDelegateProps>
type TDefaultFormModalProps = typeof props

export { props, defaultFormModalDelegateProps }
export type { TDefaultFormModalProps, TDefaultFormModalDelegateProps }