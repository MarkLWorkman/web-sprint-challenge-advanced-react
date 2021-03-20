import { useState } from "react";

function useForm(props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(props);

  const handleChanges = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccessMessage(true);
  };

  return [showSuccessMessage, values, handleChanges, handleSubmit];
}

export default useForm;
