<template>
  <div>
  <div class="d-flex justify-content-between mt-2 mb-2">
    <h6>Dashboard Page</h6>
    <v-btn>Action</v-btn>
  </div>
  <div class="table-div">
    <div class="row text-field">
      <div class="col-2">
        <v-text-field
          hide-details="auto"
          class="input-date"
          type="date"
        ></v-text-field>
      </div>
      <div class="col-2">
        <v-text-field
          hide-details="auto"
          class="input-date"
          type="Search"
          label="Search"
          Append-icon="mdi-view-dashboard"
        ></v-text-field>
      </div>
    </div>
    <v-table density="comfortable" class="mt-2">
      <thead class="rounded-4">
        <tr>
          <th>employee_name</th>
          <th>employee_id</th>
          <th>employee_salary</th>
          <th>employee_age</th>
          <th>Mobile_number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Frozen Yogurt</td>
          <td>CR191</td>
          <td>320800</td>
          <td>31</td>
          <td>9123456789</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>CR191</td>
          <td>170750</td>
          <td>44</td>
          <td>9123456789</td>
        </tr>
        <tr>
          <td>Ashton Cox</td>
          <td>CR191</td>
          <td>86000</td>
          <td>45</td>
          <td>9123456789</td>
        </tr>
        <tr>
          <td>Frozen Yogurt</td>
          <td>CR191</td>
          <td>320800</td>
          <td>21</td>
          <td>9123456789</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>CR191</td>
          <td>170750</td>
          <td>44</td>
          <td>9123456789</td>
        </tr>
        <tr>
          <td>Ashton Cox</td>
          <td>CR191</td>
          <td>86000</td>
          <td>45</td>
          <td>9123456789</td>
        </tr>
      </tbody>
    </v-table>
    
  </div>

  <Transition name="bounce">
        <p v-if="show" style="text-align: center;">
          Hello here is some bouncy text!
        </p>
      </Transition>

  </div>
</template>
<script>
import axiosInstance from '@/components/Intercepters';

export default { 
  return:{
    data:[],
  },
  mounted(){
    this.getData()
  },
  methods: {
    getData() {
      axiosInstance.get('https://dummyjson.com/todos')
        .then(response => {
          console.log('Data:', response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>

