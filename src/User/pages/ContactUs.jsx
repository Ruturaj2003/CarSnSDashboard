import Footer from '../../components/Footer';
import BlackNavBar from '../BlackNavBar';
import bgImg from '../assets/contactpic.jpg';

const ContactUs = () => {
  return (
    <>
      <BlackNavBar></BlackNavBar>
      <div className="section">
        <div className="bg-img">
          <img src={bgImg} alt="Background Image" />
        </div>
        <div className="title">
          <h1>A Smarter Way to Connect</h1>
          <p>
            Your complete satisfaction is of primary importance to us. Should
            you ever have questions or comments about your BMW vehicle, we
            suggest you follow these steps so your concerns can be addressed as
            quickly and efficiently as possible.
          </p>
        </div>
        <div className="contact">
          <div className="card">
            <h2>Call Us</h2>
            <p>
              For a quick response, we request you to be ready with your vehicle
              registration number or VIN number.
              <br />
              Call us for enquiry / feedback at <br />
              <strong>
                1800114645
                <br />
                9873564645
              </strong>
            </p>
          </div>
          <div className="card">
            <h2>Email us</h2>
            <p>
              If for any reason, you are not able to register your
              enquiry/feedback, please write to us on the following email:{' '}
              <br />
              <strong>crsales@hmil.net </strong>
              <br />
              <strong>crservice@hmil.net</strong>
            </p>
          </div>
          <div className="card">
            <h2>WhatsApp Us</h2>
            <p>
              Send “Hi” to the below-mentioned WhatsApp number to explore BMW
              Cars, book a test-drive, book a service, raise a complaint, find a
              Dealer and much more! <br />
              <strong>8447228019</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ContactUs;
