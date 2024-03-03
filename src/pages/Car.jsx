import Footer from '../components/Footer';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  maxHeight: '85vh',
  overflow: 'auto',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#0066AD',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  [`& .add-icon:hover`]: {
    color: '#00cc00',
  },

  [`& .delete-icon:hover`]: {
    color: '#ff0000',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'white',
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
  '&:hover': {
    backgroundColor: 'rgb(219 234 254)',
  },
}));

const Car = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await axios.get('http://localhost:8081/car');
      setData(resp.data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const [values, setValues] = useState({
    modelname: '',
    type: '',
    chassisno: '',
    engineno: '',
    description: '',
    color: '',
    price: '',
    stock: '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('modelname', values.modelname);
    formData.append('type', values.type);
    formData.append('chassisno', values.chassisno);
    formData.append('engineno', values.engineno);
    formData.append('description', values.description);
    formData.append('color', values.color);
    formData.append('price', values.price);
    formData.append('stock', values.stock);
    formData.append('carimage', values.carimage);
    formData.append('sideview', values.sideview);
    formData.append('interior', values.interior);
    formData.append('rearview', values.rearview);

    try {
      const response = await axios.post('http://localhost:8081/car', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Car added successfully');
      toast.success('Car added successfully');
      handleClose();
      fetchData();
    } catch (error) {
      console.error('Error adding car:', error);
      toast.error('Error adding car!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/car/' + id);
      toast.success('car deleted successful');
      fetchData();
    } catch (err) {
      console.log(err);
      toast.error('Error deleting car !');
    }
  };

  const handleEditOpen = (product) => {
    setEditProduct(product);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditProduct(null);
    setEditOpen(false);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const updatedProduct = {
      modelname: values.modelname,
      type: values.type,
      chassisno: values.chassisno,
      engineno: values.engineno,
      description: values.description,
      color: values.color,
      price: values.price,
      stock: values.stock,
    };

    try {
      await axios.put(
        `http://localhost:8081/car/${editProduct.id}`,
        updatedProduct
      );

      console.log('Product updated successfully');
      toast.success('Product updated successfully');
      handleEditClose();
      fetchData();
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product!');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex" style={{backgroundColor: 'rgb(226 232 240)', height: '620px'}}>
        <div>
          <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3}}>
              <div className="buttonAdd" style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '20px'}}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{ backgroundColor: '#0066AD', padding: 1.5 }}
                  onClick={handleOpen}
                >
                  Add NEW CAR
                </Button>
              </div>

              {/* Add car modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <DialogTitle
                    id="modal-modal-title"
                    sx={{ textAlign: 'center' }}
                  >
                    Add Product
                  </DialogTitle>
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          id="modelname"
                          label="Car modelname"
                          name="modelname"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="type"
                          label="Car Type"
                          name="type"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="chassisno"
                          label="Chassis Number"
                          name="chassisno"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="engineno"
                          label="Engine Number"
                          name="engineno"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="description"
                          label="Car Description"
                          name="description"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="color"
                          label="Car Color"
                          name="color"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="price"
                          label="Car Price"
                          name="price"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="stock"
                          label="Car stock"
                          name="stock"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <label htmlFor="carimage">
                          <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            sx={{ width: '100%' }}
                          >
                            Car Image
                            <VisuallyHiddenInput
                              accept="image/*"
                              id="carimage"
                              name="carimage"
                              type="file"
                              onChange={(e) => handleFileChange(e, 'carimage')}
                            />
                          </Button>
                        </label>
                      </Grid>

                      <Grid item xs={12}>
                        <label htmlFor="sideview">
                          <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            sx={{ width: '100%' }}
                          >
                            Side View
                            <VisuallyHiddenInput
                              accept="image/*"
                              id="sideview"
                              name="sideview"
                              type="file"
                              onChange={(e) => handleFileChange(e, 'sideview')}
                            />
                          </Button>
                        </label>
                      </Grid>

                      <Grid item xs={12}>
                        <label htmlFor="interior">
                          <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            sx={{ width: '100%' }}
                          >
                            Car Interior
                            <VisuallyHiddenInput
                              accept="image/*"
                              id="interior"
                              name="interior"
                              type="file"
                              onChange={(e) => handleFileChange(e, 'interior')}
                            />
                          </Button>
                        </label>
                      </Grid>

                      <Grid item xs={12}>
                        <label htmlFor="rearview">
                          <Button
                            variant="contained"
                            component="label"
                            startIcon={<CloudUploadIcon />}
                            sx={{ width: '100%' }}
                          >
                            Rear View
                            <VisuallyHiddenInput
                              accept="image/*"
                              id="rearview"
                              name="rearview"
                              type="file"
                              onChange={(e) => handleFileChange(e, 'rearview')}
                            />
                          </Button>
                        </label>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          sx={{
                            mt: 2,
                            width: '100%',
                            backgroundColor: (theme) =>
                              theme.palette.error.main,
                            '&:hover': { backgroundColor: '#ff0000' },
                          }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            mt: 2,
                            width: '100%',
                            backgroundColor: (theme) =>
                              theme.palette.success.main,
                            '&:hover': { backgroundColor: '#00cc00' },
                          }}
                        >
                          Add Product
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Modal>

              {/* Edit Car modal */}
              <Modal
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <DialogTitle
                    id="modal-modal-title"
                    sx={{ textAlign: 'center' }}
                  >
                    Edit Car Details
                  </DialogTitle>
                  <form noValidate onSubmit={handleEditSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          id="modelname"
                          label="Car Modelname"
                          name="modelname"
                          fullWidth
                          defaultValue={
                            editProduct ? editProduct.modelname : ''
                          }
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="type"
                          label="Car Type"
                          name="type"
                          fullWidth
                          defaultValue={editProduct ? editProduct.type : ''}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="chassisno"
                          label="Chassis Number"
                          name="chassisno"
                          fullWidth
                          defaultValue={
                            editProduct ? editProduct.chassisno : ''
                          }
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="engineno"
                          label="Engine Number"
                          name="engineno"
                          fullWidth
                          defaultValue={editProduct ? editProduct.engineno : ''}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="description"
                          label="Car Description"
                          name="description"
                          fullWidth
                          defaultValue={
                            editProduct ? editProduct.description : ''
                          }
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="color"
                          label="Car Color"
                          name="color"
                          fullWidth
                          defaultValue={editProduct ? editProduct.color : ''}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="price"
                          label="Car Price"
                          name="price"
                          fullWidth
                          defaultValue={editProduct ? editProduct.price : ''}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="stock"
                          label="Car Price"
                          name="stock"
                          fullWidth
                          defaultValue={editProduct ? editProduct.stock : ''}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Button
                          onClick={handleEditClose}
                          variant="contained"
                          sx={{
                            mt: 3,
                            width: '100%',
                            backgroundColor: (theme) =>
                              theme.palette.error.main,
                            '&:hover': { backgroundColor: '#ff0000' },
                          }}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{
                            mt: 3,
                            width: '100%',
                            backgroundColor: (theme) =>
                              theme.palette.success.main,
                            '&:hover': { backgroundColor: '#00cc00' },
                          }}
                        >
                          Save Changes
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Modal>

              <div style={{display: 'flex', maxHeight: '600px', overflow: 'auto'}}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center">S.No</StyledTableCell>
                        <StyledTableCell align="center">Image</StyledTableCell>
                        <StyledTableCell align="center">
                          Model Name
                        </StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">
                          Chassis No
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Engine No
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Description
                        </StyledTableCell>
                        <StyledTableCell align="center">Color</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Stock</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((d, i) => (
                        <StyledTableRow key={i}>
                          <StyledTableCell align="center">
                            {i + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.carimage && (
                              <img
                                src={`http://localhost:8081/images/${d.carimage}`}
                                alt={d.modelname}
                                style={{ width: '50px', height: '50px' }}
                              />
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.modelname}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.type}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.chassisno}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.engineno}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.description}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.color}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            ₹{d.price}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {d.stock}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            <div style={{ display: 'flex', marginRight: '15px' }}>
                              <IconButton
                                aria-label="edit"
                                onClick={() => handleEditOpen(d)}
                              >
                                <EditIcon className="add-icon" />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                onClick={(e) => handleDelete(d.id)}
                              >
                                <DeleteIcon className="delete-icon" />
                              </IconButton>
                            </div>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Car;
