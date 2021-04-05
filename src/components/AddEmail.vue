<template>
  <div class="submit-form">
    <h2>Compose email</h2>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="receiver">Receiver</label>
        <input
          type="text"
          class="form-control"
          id="receiver"
          required
          v-model="email.receiver"
          name="receiver"
        />
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input
          type="text"
          class="form-control"
          id="subject"
          required
          v-model="email.subject"
          name="subject"
        />
      </div>

      <div class="form-group">
        <label for="content">Content</label>
        <textarea rows="8"
          class="form-control"
          id="content"
          required
          v-model="email.content"
          name="content"
        />
      </div>

      <button @click="saveEmail" class="btn btn-success">Send</button>

      <button class="m-3 btn btn-sm btn-danger">
        <router-link to="/" class="nav-link" :style="{ color: 'white'}">Go back home</router-link>
      </button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newEmail">Done</button>
    </div>

    
  </div>
  
</template>

<script>
import EmailDataService from "../services/EmailDataService";

export default {
  name: "add-email",
  data() {
    return {
      email: {
        id: null,
        receiver: "",
        subject: "",
        content: "",
        composeAt: "",
        sent: false
      },
      submitted: false
    };
  },
  methods: {
    saveEmail() {
      var today = new Date();
      var hh = String(today.getHours()).padStart(2, '0')
      var mn = String(today.getMinutes()).padStart(2, '0')
      var ss = String(today.getSeconds()).padStart(2, '0')
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = hh + ':' + mn + ':' + ss + ' ' + mm + '/' + dd + '/' + yyyy;

      var data = {
        receiver: this.email.receiver,
        subject: this.email.subject,
        content: this.email.content,
        composeAt: today
      };

      EmailDataService.create(data)
        .then(response => {
          this.email.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

        
    },
    
    newEmail() {
      this.submitted = false;
      this.email = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>