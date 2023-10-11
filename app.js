const app = new Vue({
    el: '#app',
    data: {
        isLoggedIn: false,
        selectedCategory: 'all',
        pageNo:1,
        fileList:['hi'],
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
        },
        fileData: {
            selectedCategory: 'all',
            pageNo: 1,
            pageSize: 10,
            fileList: []
          }
    },
    methods: {
        loginUser() {
            const loginEndpoint = 'http://localhost:7090/api/login';
            
            const requestData = {
                email: this.login.email,
                password: this.login.password
            };
  
            fetch(loginEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Login response:', data);
                this.response = data;
                if (data.status === 'success') {
                    this.isLoggedIn = true;
                    this.userData = { nickname: "Varshith" };
                } else {
                    this.isLoggedIn = false;
                    this.userData = null;
                }
            })
            .catch(error => console.error('Error:', error));
        },
  
        registerUser() {
            const registerEndpoint = 'http://localhost:7090/api/register';
  
            const requestData = {
                email: this.register.email,
                nickname: this.register.nickname,
                password: this.register.password
            };
  
            fetch(registerEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Registration response:', data);
                this.response = data;
            })
            .catch(error => console.error('Error:', error));
        },
  
        logout() {
            const logoutEndpoint = 'http://localhost:7090/api/logout';
  
            fetch(logoutEndpoint, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Logout response:', data);
                this.isLoggedIn = false;
                this.userData = null;
            })
            .catch(error => console.error('Error:', error));
  
      },


      submitRequest() {
        alert('Password reset request submitted for email: ' + this.emailForPasswordReset + '. If this email address is registered, you will receive a link to reset your password.');
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
      },
      loadFileList() {
        const pageNo = this.fileData.pageNo;  // Ensure pageNo is correctly accessed
        const apiUrl = `http://localhost:7090/api/file/loadDataList?category=${this.fileData.selectedCategory}&pageNo=${pageNo}&pageSize=${this.fileData.pageSize}`;
        
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            this.fileData.fileList = data; // Update the file list
          })
          .catch(error => console.error('Error:', error));
    },
      
    nextPage() {
        this.pageNo++;
        console.log('Next page:', this.pageNo);
        this.loadFileList();
    },

    prevPage() {
        if (this.pageNo > 1) {
            this.pageNo--;
            console.log('Previous page:', this.pageNo);
            this.loadFileList();
        }
    }
      
}

});
