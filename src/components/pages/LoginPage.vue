<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="mx-auto" width="300">
    <label>Email</label>
    <Field type="text" name="Email" class="form-control" placeholder="Enter Email" />
    <ErrorMessage name="Email"/><br>
    <label>Password</label>
    <Field type="text" name="password" class="form-control" placeholder="Enter password" />
    <ErrorMessage name="password" /><br>
    <v-btn to="/MainMenu" type="submit">Sign in</v-btn>
  </Form>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  Email:yup.string().required().email(),
  password:yup.string().required()
})

function onSubmit(value){
  localStorage.setItem("LoginData", JSON.stringify(value))
  console.log("LoginData" ,value);
}
</script>
<style scoped>
span {
  color: red !important;
}

form {
  border: 1px solid rgb(168, 166, 166);
  width: 25%;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
}
</style>