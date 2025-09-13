import {toast} from 'react-hot-toast'

export function successToast(message?: string) {
  if (message)
    toast.success(message, {
      position: 'bottom-center',
      duration: 5000,
    });
}

export function errorToast(error?: string | any) {
  let message: string =
    typeof error == 'string' ? error : (error?.response?.data?.error?.message as string) || error?.message || 'Something went wrong';
  if (message)
    toast.error(message, {
      position: 'bottom-center',
      duration: 5000,
    });
}