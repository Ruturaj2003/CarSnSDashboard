import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ isOpen, onClose, onSave, inputFields }) => {
  // Create an initial state object with empty values for each form field
  const initialState = Object.fromEntries(
    inputFields.map((field) => [field, ''])
  );

  // Use state hook to manage the form data
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field, value) => {
    // Update the form data state based on the previous stat
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const saveEntry = () => {
    axios
      .post('your_api_endpoint', formData)
      .then((response) => {
        console.log(response.data);
        onClose(); // Close the modal after successful save
        onSave(); //perform additional actions after save if needed
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  return (
    <div
      className={`modal ${isOpen ? 'block' : 'hidden'}  h-[600px] my-[160px]`}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Create Entry</h4>
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
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
                    className="mt-1 p-2 border rounded-md w-full"
                    id={field}
                    value={formData[field]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    required
                  />
                </div>
              ))}
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={saveEntry}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
