<template>
  <div>
    <div class="d-flex justify-content-between mt-2 mb-2">
    <h6>Void Report</h6>
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
          type="search"
          label="Search"
          Append-icon="mdi-view-dashboard"
        ></v-text-field>
      </div>
    </div>
     <v-data-table
      v-model="selected"
      :items="items"
      item-value="name"
      show-select
    ></v-data-table>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
      items: [
         {
          Check_No: " 3566",
          Date: "11-03-2023",
          Outlet: "30 Service room",
          Misc:"21,538",
          Total_Amount:"21,538",

        },
        {
          Check_No: " 5466",
          Date: "24-03-2023",
          Outlet: "40 Service room",
          Misc:"21,538",
          Total_Amount:"21,538",

        },
        {
          Check_No: " 4566",
          Date: "19-03-2023",
          Outlet: "70 Service room",
          Misc:"21,538",
          Total_Amount:"21,538",

        },
        {
          Check_No: " 4563",
          Date: "01-03-2023",
          Outlet: "32 Service room",
          Misc:"21,538",
          Total_Amount:"21,538",

        },
        {
          Check_No: " 4566",
          Date: "19-03-2023",
          Outlet: "70 Service room",
          Misc:"21,538",
          Total_Amount:"21,538",
          
        },
        {
          Check_No: " 4563",
          Date: "01-03-2023",
          Outlet: "32 Service room",
          Misc:"21,538",
          Total_Amount:"21,538",
          
        },
      ],
    };
  },
};
</script>
<style >
/* .table-div {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #eeeeee;
}
.v-btn {
  background-color: #e23744;
  color: white;
}
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td,
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
  border-bottom: none !important;
} */
</style>

