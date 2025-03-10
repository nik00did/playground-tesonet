import { UseForm } from "./types"

import { FormEvent, useState } from "react";

const useForm: UseForm = ({ onSubmit }) => {
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
        
      onSubmit(formData);
    };
  
    const resetForm = () => {
      setFormErrors({});
    };
  
    return { errors: formErrors, onSubmit: handleSubmit, resetForm };
}

export default useForm