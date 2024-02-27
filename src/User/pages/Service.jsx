import './styles.css';
import Footer from '../../components/Footer';
import UserNavbar from '../UserNavbar';
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import {FormControl, InputLabel, Select, MenuItem,} from '@mui/material';
import Modal from '@mui/material/Modal';

const style = {
  position: 'fixed',
  top: '50%',
  transform: 'translate(-8%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pr: 6,
  pl: 6,
  pt: 6,
  pb: 3
};

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 6,
};

function Service() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = useState({
    serviceType: '',
    phone: ''
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [form, setform] = useState({
    regNo: '',
    name: '',
    phone: '',
    serviceType: ''
  })

  const handleFormChange = (event) => {
    setform({ ...form, [event.target.name]: [event.target.value] })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleOpen();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const arrivalDate = new Date().toISOString();

    const data = {
      regNo: form.regNo,
      name: form.name,
      phone: form.phone,
      serviceType: form.serviceType,
      arrivalDate: arrivalDate

    };

    try {
      await axios.post('http://localhost:8081/booking', data);
  console.log('Product added successfully');
  handleClose();

} catch (error) {
  console.error('Error adding product:', error.response?.data || error.message);
}

  };



  return (
    <>

    {/* Modal box */}

    <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styles}>
            <Typography variant='h4' sx={{fontWeight: 'bold', fontFamily: 'Calibri', mb: 5, textAlign: 'center'}}>
              BOOK SERVICE</Typography>
              <form noValidate onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="regNo"
                      label="Registration Number"
                      name="regNo"
                      fullWidth
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      label="Name"
                      name="name"
                      fullWidth
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="phone"
                      label="Selected Phone Number"
                      name="phone"
                      fullWidth
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="serviceType"
                      label="Selected Service Type"
                      name="serviceType"
                      fullWidth
                      onChange={handleFormChange}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{mt: 2}}>
                  <Grid item xs={6}>
                    <Button onClick={handleClose} variant="contained"
                      sx={{
                        mt: 2, width: '100%',
                        p: 1,
                        backgroundColor: theme => theme.palette.error.main,
                        '&:hover': { backgroundColor: '#ff0000' }
                      }}>
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button type="submit" variant="contained"
                      sx={{
                        mt: 2, width: '100%',
                        p: 1,
                        backgroundColor: theme => theme.palette.success.main,
                        '&:hover': { backgroundColor: '#00cc00' }
                      }}>
                      Book
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>

      <UserNavbar />
      <div style={{ display: 'flex' }}>
        <section style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: '70%' }}>
          </div>
          <div className='content' style={{ flex: '30%' }}>
          <Box sx={style}>
              <Typography variant='h4' sx={{fontWeight: 'bold', fontFamily: 'Calibri', mb: 5}}>Experiance The Best<br/>
              Car Service In<br/>Belgaum</Typography>
              <Typography sx={{ fontSize: 18}}>Get instant qoutes for your car service</Typography>
              <form noValidate onSubmit={handleSubmit} style={{marginTop: '15px'}}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="Service-label">Choose Service Type</InputLabel>
                      <Select
                        labelId="Service-label"
                        label="Choose Service Type"
                        id="serviceType"
                        name="serviceType"
                        fullWidth
                        onChange={handleChange}
                      >
                          <MenuItem value="General">General</MenuItem>
                          <MenuItem value="Additional">Additional</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="phone"
                      label="Enter Phone Number"
                      name="phone"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained"
                      sx={{
                        mt: 3, mb: 2,
                        width: '100%',
                        padding: 1.5,
                        backgroundColor: '#1426CA',
                        '&:hover': { backgroundColor: '#192FFD' }
                      }}>
                      Book Your Service Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </div>
        </section>
      </div>

      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flex: '60%', marginLeft: '4%', display: 'flex', flexDirection: 'column' }}>

          <Divider variant="li" sx={{ width: '8%', marginTop: '40px', marginBottom: '25px', borderWidth: '1.5px', borderColor: 'red' }} />
          <Typography variant='h4' sx={{fontWeight: 'bold'}} >Car Services Available In Belgaum</Typography>
          <Typography variant='body' sx={{fontWeight: 'bold', color: '#555555', marginTop: 2}} >
          Get discounted and professional periodic car service, car repair, wheel care services,
          cashless insurance claim and <br/> much more in Belguam.
          </Typography>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px', marginTop: '40px' }}>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1  }}>
              <img src="/images/1.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Periodic</Typography>
              <Typography>Services</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/5.png" alt="Periodic Services" className='serviceImages' />
              <Typography>AC Service &</Typography>
              <Typography>Repair</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/8.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Detailing</Typography>
              <Typography>Services</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/Car-Inspection.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Car</Typography>
              <Typography>Inspections</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/10.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Windshields &</Typography>
              <Typography>Lights</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/Clutch-_-Bumpers.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Clutch & Body</Typography>
              <Typography>Parts</Typography>
            </Box>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px'}}>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1  }}>
              <img src="/images/4.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Car Spa &</Typography>
              <Typography>Cleaning</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/5.png" alt="Periodic Services" className='serviceImages' />
              <Typography>AC Service &</Typography>
              <Typography>Repair</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/insurance-v3.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Insurance</Typography>
              <Typography>Claim</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/Clutch-_-Bumpers.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Clutch & Body</Typography>
              <Typography>Parts</Typography>
            </Box>
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/tyre-v3.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Tyres & Wheel</Typography>
              <Typography>Care</Typography>
            </Box> 
            <Box className="service-box" sx={{ bgcolor: 'background.paper', padding: 3, textAlign: 'center', backgroundColor: '#ECECEC', borderRadius: 1   }}>
              <img src="/images/Suspension-_-Fitments.png" alt="Periodic Services" className='serviceImages' />
              <Typography>Sospension &</Typography>
              <Typography>Fitment</Typography>
            </Box>  
          </div>

          <Divider variant="li" sx={{ width: '8%', marginBottom: '25px', borderWidth: '1.5px', borderColor: 'red' }} />

          <img src="/images/miles.png" alt="miles" style={{height: '200px', width: '200px', marginBottom: '40px'}} />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Service;
