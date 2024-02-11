import { useState } from 'react';

const DModal = ({ isOpen, formTitle, inputFields, setModal, setOverlay }) => {
  const initialState = Object.fromEntries(
    inputFields.map((field) => [field, ''])
  );
  // Use state hook to manage the form data
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field, value) => {
    // Update the form data state based on the previous state
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    // Form Data
    //     {
    //     "Customer Id": "123",
    //     "Name": "Ray",
    //     "Phone": "123",
    //     "E-mail": "we3",
    //     "LIC Num": "1244"
    // }
    try {
      // Perform validation
      const response = await axios.post('/your-api-endpoint', formData);
      console.log('Save successful:', response.data);
      // Call Fetch Function
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
                className="mt-1 p-2 border rounded-md w-full"
                id={field}
                value={formData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                required
              />
            </div>
          ))}
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
            onClick={() => {
              setModal(false);
              setOverlay(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default DModal;
