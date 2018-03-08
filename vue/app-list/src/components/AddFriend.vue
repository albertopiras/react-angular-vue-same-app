<script>
  export default {
    name: "AddFriend",
    props: ["list"],
    methods: {
      openModal: function() {
        $('#modalAddFriend').modal('open');
      },
      checkForm: function(e) {
        e.preventDefault();
        let gender = document.querySelector('#genderSelect input.select-dropdown');
        let newFriend = {};
        newFriend.name = this.firstName;
        newFriend.lastNane = this.lastName;
        newFriend.email = this.email;
        newFriend.gender = gender.value;
        newFriend.age = 31;
        this.list.push(newFriend);
        $('#modalAddFriend').modal('close');
      }
    },
    computed: {
      isFormValid() {
        return this.firstNameValid && this.lastNameValid && this.emailValid;
      }
    },
    data() {
      return {
        msg: "FriendList",
        firstName: "",
        firstNameError: "",
        firstNameValid: false,
        lastName: "",
        lastNameError: "",
        lastNameValid: false,
        email: "",
        emailError: "",
        emailValid: false,
        gender: "",
        genders: ['male', 'female']
      };
    },
    watch: {
      firstName: function() {
        this.firstNameValid = this.firstName.length >= 3;
        this.firstNameError = this.firstNameValid ? '' : 'First Name not valid';
      },
      lastName: function() {
        this.lastNameValid = this.lastName.length >= 3;
        this.lastNameError = this.lastNameValid ? '' : 'Last Name not valid';
      },
      email: function() {
        this.emailValid = this.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        this.emailError = this.emailValid ? '' : 'Email is invalid';
      },
    },
    mounted() {
      $('#modalAddFriend').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
          // console.log('Modal ready');
        },
        complete: function() {
          // console.log('Modal closed');
        }
      });
      // init Material select 
      $(document).ready(function() {
        $('select').material_select();
      });
    }
  };
</script>

<template>
  <div>
    <a id="plusButton" class="btn-floating btn-large waves-effect waves-light red btn modal-trigger" v-on:click="openModal()" href="javacsript:void(0)">
      <i class="material-icons">add</i>
    </a>
    <!-- Modal Structure -->
    <div id="modalAddFriend" class="modal">
      <div class="modal-content">
        <div class="row no-margin">
          <h4>Add new friend</h4>
          <form class="col s12" @submit="checkForm">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="form-control no-margin" minlength="3" id="first_name" required v-model="firstName" name="name" />
                <label for="first_name">*First Name</label>
                <div v-if="firstNameError.length>0" class="alert alert-danger">
                  {{firstNameError}}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" minlength="3" class="form-control no-margin" id="last_name" required v-model="lastName" name="lastName" />
                <label for="last_name">*Last Name</label>
                <div v-if="lastNameError.length>0" class="alert alert-danger">
                  {{lastNameError}}
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <div class="input-field">
                  <input id="email" type="email" required class="form-control no-margin" v-model="email" name="email">
                  <label for="email" data-error="wrong" data-success="right">*Email</label>
                  <div v-if="emailError.length>0" class="alert alert-danger">
                    {{emailError}}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <div id="genderSelect" class="input-field">
                  <select class="form-control" id="gender" v-model="gender" name="gender">
                              <option value="" disabled selected>Choose your option</option>
                              <option v-for="item in genders" :data-icon="'./assets/'+item + '.png'" >{{item}}</option>
                            </select>
                  <label for="gender">Gender</label>
                </div>
              </div>
            </div>
            <button type="submit" :disabled="!isFormValid" class="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #plusButton {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }
  
  .no-margin {
    margin: 0 !important;
  }
  
  .modal-content h4 {
    text-transform: uppercase;
  }
  
  .alert-danger {
    color: #f21a1a;
  }
  
  #modalAddFriend h4 {
    font-weight: bold;
    padding: 0 .75rem;
    /* border-bottom: 1px solid gray; */
  }
</style>
