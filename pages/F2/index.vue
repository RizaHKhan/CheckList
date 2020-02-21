<template>
  <v-container fluid>
    <v-card class="top">
      <v-card-title>DEPOSIT</v-card-title>
      <img src="https://via.placeholder.com/296" />
      <span class="body-1">0xC55EdDadEeB47fcDE0B3B6f25BD47D745BA7E7fa</span>
    </v-card>
    <v-card>
      <v-card-title>WITHDRAW</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <span>Avaialble: $123454.12</span>
          </v-col>
        </v-row>
        <v-form>
          <v-text-field dense type="number" outlined label="$" min="1" />
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

export default {

  data () {
    return {
      dep_qr: null,
      dep_addr: null
    }
  }
}
</script>
