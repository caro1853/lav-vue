<template>
  <div>
    <h1>Update User Page</h1>
    <!-- Add a form to update a user -->
    <form @submit.prevent="updateUser">
      <input type="text" v-model="myForm.username" placeholder="Email" />
      <input type="password" v-model="myForm.password" placeholder="Password" />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script lang="ts" src="./UpdateUserPage.ts"></script>
