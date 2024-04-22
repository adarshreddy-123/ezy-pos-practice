<template>
  <div>
    <h6>Form Validation</h6>
    <Form class="upload-form mx-auto" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
      <label>Name :</label>
      <Field type="text" name="Name" :class="{ 'is-invalid': errors.Name }" class="form-control"
        placeholder="Enter Name" />
      <ErrorMessage name="Name" />
      <br />
      <label>Email :</label>
      <Field type="text" name="Email" :class="{ 'is-invalid': errors.Email }" class="form-control"
        placeholder="Enter Email" />
      <ErrorMessage name="Email" />
      <br />
      <label>Mobile No :</label>
      <Field type="Number" name="Phone" :class="{ 'is-invalid': errors.Phone }" class="form-control"
        placeholder="Enter Phone Number" />
      <ErrorMessage name="Phone" />
      <br />
      <label>Age :</label>
      <Field type="Number" name="Age" :class="{ 'is-invalid': errors.Age }" class="form-control" placeholder="Enter Age" />
      <ErrorMessage name="Age" />
      <br />
      <v-btn type="submit">submit</v-btn>
    </Form>
  </div>
</template>
<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  Email: yup.string().required().email(),
  Name: yup.string().required().min(5),
  Phone: yup.string().required().matches(/^\d{10}$/, "Invalid Phone Number"),
  Age: yup.number().required().positive().min(18).max(30)
});

// const validateName=yup.string().required().min(5)
// const validateEmail=yup.string().required().email()

// function onSubmit(value) {
//   localStorage.setItem("storedData", JSON.stringify(value));
//   console.log("value", value);
// }

// function validateName(name) {
//   if (!name) {
//     return "This field must be a valid Name";
//   }
//   return true;
// }
// function validateEmail(mail) {
//   if (!mail) {
//     return "This field must be a valid Email";
//   }
//   return true;
// }
</script>
<style scoped>
span {
  color: red !important;
}

.is-invalid {
  border-color: red;
}

</style>