import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { getErrorMessage } from 'src/utils';

export const handleGenericSubmit = (
  validationFunction,
  serviceFunction,
  successMessage,
  errorMessage,
  navigationAction,
  formValues,
  setFormValues,
  setIsLoading,
  values,
  id
) => {
  if (validationFunction()) {
    setIsLoading(true);

    const servicePromise = id ? serviceFunction(id, values) : serviceFunction(values);

    servicePromise
      .then(() => {
        setIsLoading(false);
        toast.success(successMessage);
        navigationAction();
        setFormValues(formValues);
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          title: 'Error',
          text: getErrorMessage(err),
          icon: 'error',
        });
      });
  }
};
