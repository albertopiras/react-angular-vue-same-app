<script>
  export default {
    name: "AddFriend",
    props: ["list"],
    methods: {},
    data() {
      return {
        msg: "FriendList"
      };
    }
  };
</script>

<template>
  <div>
    <a id="plusButton" class="btn-floating btn-large waves-effect waves-light red btn modal-trigger" href="javacsript:void(0)">
      <i class="material-icons">add</i>
    </a>
    <!-- Modal Structure -->
    <div id="modalAddFriend" class="modal">
      <div class="modal-content">
        <div class="row no-margin">
          <h4>Add new friend</h4>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="form-control no-margin" minlength="3" id="first_name" required name="name" >
                <label for="first_name">*First Name</label>
              </div>
            </div>
            <div class="row">
              <div class="col s12">
                <div id="genderSelect" class="input-field">
                  <label for="gender">Gender</label>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
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

.no-margin{
  margin:  0 !important;
}

.modal-content h4{
  text-transform: uppercase;
}

.alert-danger{
  color: #f21a1a;
}

#modalAddFriend h4{
  font-weight: bold;
  padding: 0 .75rem;
  /* border-bottom: 1px solid gray; */
}
</style>
