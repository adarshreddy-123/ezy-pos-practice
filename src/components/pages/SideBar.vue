<template>
  <v-layout>
    <v-navigation-drawer permanent>
      <v-list density="compact" nav>
        <v-list-item
          to="/MainMenu/DashBoard"
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="Dashboard"
        ></v-list-item>
        <v-list-item
          to="/MainMenu/UploadPage"
          prepend-icon="mdi-upload"
          title="Uploads"
          value="Uploads"
        ></v-list-item>
        <v-list-item
          to="/MainMenu/DiscountReport"
          prepend-icon="mdi-sale"
          title="Discount Report"
          value="Discount Report"
        ></v-list-item
        ><v-list-item
          to="/MainMenu/OcReport"
          prepend-icon="mdi-bag-checked"
          title="OC-ENT Report"
          value="OC-ENT Report"
        ></v-list-item>
        <v-list-item
          to="/MainMenu/VoidReport"
          prepend-icon="mdi-forum"
          title="Void Report"
          value="Void Report"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-check-circle"
          title="Pos Checks"
          value="Pos Checks"
        ></v-list-item>
        <v-list-item>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title
                collapse-icon="mdi-minus"
                expand-icon="mdi-plus"
              >
                Settings
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list density="compact" nav>
                  <v-list-item
                    prepend-icon="mdi-cog"
                    title="Print Setting"
                    value="Print Setting"
                  ></v-list-item>
                  <v-list-item
                    prepend-icon="mdi-office-building-outline"
                    title="Outlets"
                    value="Outlets"
                  ></v-list-item>
                  <v-list-item
                    prepend-icon="mdi-printer"
                    title="Pos Printer"
                    value="Pos Printer"
                  ></v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>
<script>
</script>

<style>
/* .v-btn--icon.v-btn {
  background-color: #fde7d7;
  color: red;
  font-size: 14px;
}
.v-list-item {
  color: white;
}
.v-list-item__prepend {
  display: block !important;
  color: #e23744;
}

.v-list-item--active {
  background-color: #e23744 !important;
  color: white !important;
}
.v-navigation-drawer__content {
  flex: 0 1 auto;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
} */
</style>
