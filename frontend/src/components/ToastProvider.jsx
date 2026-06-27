import { Toaster } from 'react-hot-toast'

export default function ToastProvider({ children }) {
  return (
    <>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid #333',
            borderRadius: '8px',
            fontSize: '0.9rem',
          },
          success: {
            iconTheme: {
              primary: '#a78bfa',
              secondary: '#fff',
            },
          },
        }}
      />
    </>
  )
}
