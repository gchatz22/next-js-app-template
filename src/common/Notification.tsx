import toast, { resolveValue, ToastBar, Toaster } from 'react-hot-toast'
import { VscClose } from 'react-icons/vsc'

interface INotifyArgs {
  message?: string
  description?: React.ReactNode
  type?: 'success' | 'error' | 'info' | 'warn'
}

export function notify({ message, description }: INotifyArgs): void {
  toast(
    <div className="flex flex-col gap-1 text-sm">
      <div className="font-medium">{message}</div>
      {description && <div style={{ opacity: '.5' }}>{description}</div>}
    </div>,
    { duration: 5000 }
  )
}

export function ToastContainer() {
  return (
    <Toaster position="top-right">
      {(t) => (
        <ToastBar
          toast={t}
          style={{ background: 'none', border: 'none', padding: '0px' }}
        >
          {() => (
            <div
              className={`relative flex w-full max-w-sm gap-4 rounded border border-border bg-dark-0 p-4 text-light-0 shadow ${
                t.visible ? 'animate-enter' : 'animate-leave'
              }`}
            >
              {resolveValue(t.message, t)}
              <button className={``} onClick={() => toast.dismiss(t.id)}>
                <VscClose />
              </button>
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}
