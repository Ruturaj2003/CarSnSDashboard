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
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

const style = {
  position: 'fixed',
  top: '50%',
  transform: 'translate(-0%, -50%)',
  width: 420,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Service() {

  const [values, setValues] = useState({
    title: '',
    description: '',
    category: '',
    price: ''
  })

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('price', values.price);

    try {
      await axios.post('http://localhost:8081/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added successfully');

    } catch (error) {
      console.error('Error adding product:', error);

    }
  };


  return (
    <>
      <UserNavbar />
      <div style={{ display: 'flex' }}>
        <section style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: '70%' }}>
          </div>
          <div className='content' style={{ flex: '30%' }}>
          <Box sx={style}>
              <DialogTitle id="modal-modal-title" sx={{ textAlign: 'center' }}>Book Service</DialogTitle>
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="title"
                      label="Product Title"
                      name="title"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="description"
                      label="Product Description"
                      name="description"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="category"
                      label="Product Category"
                      name="category"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="price"
                      label="Product Price"
                      name="price"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>

                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained"
                      sx={{
                        mt: 3, width: '100%',
                        padding: 1.5,
                        backgroundColor: '#002FFE',
                        '&:hover': { backgroundColor: '#4D6FFE' }
                      }}>
                      Service
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

        </div>

      </div>
      <Footer />
    </>
  )
}

export default Service;
