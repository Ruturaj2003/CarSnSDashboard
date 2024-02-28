import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateModal = ({
  url,
  isOpen,
  formTitle,
  inputFields,
  setModal,
  setOverlay,
  fetchFn,
}) => {
  console.log('Create Modal');
  const dispatch = useDispatch();

  const initialFormData = Object.fromEntries(
    inputFields.map((field) => [field, ''])
  );

  const [formData, setFormData] = useState(initialFormData);
  const [validationError, setValidationError] = useState('');

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setValidationError('');
  };

  const closeAll = () => {
    setModal(false);
    setOverlay(false);
  };

  const validateForm = () => {
    for (const field of Object.keys(formData)) {
      if (!formData[field]) {
        setValidationError(`Please fill in the ${field} field`);
        return false;
      }
    }
    return true;
  };

  const handleSave = async () => {
    try {
      if (!validateForm()) {
        console.error('Form validation failed');
        return;
      }

      const response = await axios.post(url, formData);
      console.log('Save successful:', response.data);

      dispatch(fetchFn(url));

      closeAll();
    } catch (error) {
      console.error('Error during save:', error);
    }
  };

  return (
    <div
      className={`fixed ${
        isOpen ? 'block' : 'hidden'
      } inset-0 h-screen w-screen flex items-center justify-center`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="absolute bg-white w-96 p-6 rounded shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-2xl font-bold">{formTitle}</h4>
        </div>
        <form>
          {inputFields.map((field) => (
            <div className="mb-4" key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type="text"
                className={`mt-1 p-2 border rounded-md w-full ${
                  validationError ? 'border-red-500' : ''
                }`}
                id={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                required
              />
            </div>
          ))}
          {validationError && (
            <p className="text-red-500 text-sm">{validationError}</p>
          )}
        </form>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={closeAll}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
