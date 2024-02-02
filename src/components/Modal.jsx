import axios from 'axios';
import { useState } from 'react';

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
      className={`modal ${isOpen ? 'block' : 'hidden'}`}
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
                <div className="form-group" key={field}>
                  <label htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                  </label>
                  <input
                    type="text"
                    className="form-control"
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
              className="btn btn-success"
              onClick={saveEntry}
            >
              Save
            </button>
            <button type="button" className="btn btn-danger" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
