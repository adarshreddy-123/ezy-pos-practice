<template>
  <div>
    <div class="d-flex justify-content-between mt-2 mb-2">
    <h6>OC-ENT Report</h6>
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
        <v-select
          class="input-date"
          label="Select"
          :items="['California', 'Colorado', 'Florida']"
        ></v-select>
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
          name: " Apple",
          location: "Washington",
          height: "0.1",
          base: "0.07",
          volume: "0.0001",
        },
        {
          name: " Banana",
          location: "Ecuador",
          height: "0.2",
          base: "0.05",
          volume: "0.0002",
        },
        {
          name: "Grapes",
          location: "Italy",
          height: "0.02",
          base: "0.02",
          volume: "0.00001",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* .v-btn {
  background-color: #e23744 ;
  color: white ;
}
.table-div {
  background-color: white;
  border-radius: 10px;
  border: 1px solid #eeeeee;
}
.v-data-table-footer {
    display: none !important;
}
.v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > td, .v-table .v-table__wrapper > table > tbody > tr:not(:last-child) > th {
    border-bottom: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
} */
</style>