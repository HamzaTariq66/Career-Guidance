import { toast } from 'react-toastify';

export const createNotification = (type, params) => {
    switch (type) {
        case 'info':
            toast.info(params, {               
                pauseOnFocusLoss: false,
            });
            break;
        case 'success':
            toast.success(params, {               
                pauseOnFocusLoss: false,
            });

            break;
        case 'warning':
            toast.warn(params, {             
                pauseOnFocusLoss: false,
            });
            break;
        case 'error':
            toast.error(params, {              
                pauseOnFocusLoss: false,
            });
            break;
    }
}