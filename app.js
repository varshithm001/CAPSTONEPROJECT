const app = new Vue({
  el: '#app',
  data: {
      isLoggedIn: false,
      login: {
          email: '',
          password: ''
      },
      register: {
          email: '',
          nickname: '',
          password: ''
      },
      emailForPasswordReset: '',
      response: null,
      userData: null,
      customerDetails: {
          email: '',
          password: '',
          phone: '',
          address: '',
          dob: ''
      }
  },
  methods: {
      loginUser() {
          // Simulate a response from the backend
          // For simplicity, let's assume the correct email is "test@example.com"
          const correctEmail = "test@example.com";

          if (this.login.email === correctEmail) {
              this.response = {
                  status: 'success',
                  code: 200,
                  info: 'Request Successful',
                  data: null
              };
              this.isLoggedIn = true;
              this.userData = { nickname: "Varshith" }; // Replace with actual user data if available
          } else {
              this.response = {
                  status: 'error',
                  code: 404,
                  info: "The email address you entered isn't connected to an account. Check you email address and log in.",
                  data: null
              };
              this.isLoggedIn = false;
              this.userData = null;
          }
      },
      registerUser() {
          // Simulate a response from the backend
          this.response = {
              status: 'success',
              code: 200,
              info: 'Request Successful',
              data: null
          };
      },
      submitRequest() {
          // Add your logic to handle the password reset request
          alert('Password reset request submitted for email: ' + this.emailForPasswordReset + '. If this email address is registered, you will receive a link to reset your password.');
      },
      logout() {
          this.isLoggedIn = false;
          this.userData = null;
      },
      submitCustomerDetails() {
          // Assuming you want to log the form data for now
          console.log('Customer Details Form submitted with the following data:');
          console.log('Email:', this.customerDetails.email);
          console.log('Password:', this.customerDetails.password);
          console.log('Phone:', this.customerDetails.phone);
          console.log('Address:', this.customerDetails.address);
          console.log('Date of Birth:', this.customerDetails.dob);
          alert('You have successfully submitted the form.');

          // You can perform other actions like sending the data to a server here
      }
  }
});
