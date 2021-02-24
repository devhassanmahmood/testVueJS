<template>
  <b-container class="mt-4">
    <b-row>
      <b-col class="d-flex justify-content-center">
        <div>
          <h1 class="font-weight-bold">{{fixture.title}}</h1>
          <p>{{fixture.description}}</p>
        </div>
      </b-col>
      <b-col class="ml-5 mt-5">
        <b-row>
          <template v-for="(block, index) in blocks.slice(0, 2)">
            <b-col cols="4">
              <div
                :class="block.value == 0 ? 'grey' : 'purple'"
                @click="handlOnBlockClick(block)"
                class="d-flex justify-content-center align-items-center border border-dark"
              >
                <span>{{block.value}}</span>
              </div>
              <br />
            </b-col>
          </template>
        </b-row>
        <b-row>
          <template v-for="(block, index) in blocks.slice(2, 4)">
            <b-col cols="4">
              <div
                :class="block.value == 0 ? 'grey' : 'purple'"
                @click="handlOnBlockClick(block)"
                class="d-flex justify-content-center align-items-center border border-dark"
              >
                <span>{{block.value}}</span>
              </div>
              <br />
            </b-col>
          </template>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import fixture from '../fixtures/mock.json'
  import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Collection',
  data () {
    return {
      fixture: fixture,
    }
  },
  computed: {
    ...mapGetters(['blocks'])
  },
  methods: {
    ...mapActions(['setBlocks']),
    handlOnBlockClick(block) {
     if(block.value != 100) {
       const index = this.blocks.indexOf(this.blocks.find(x => x.id == block.id))
      this.$set(this.blocks, index, { value: 100, id: block.id })

      if (this.blocks.every((val, ind, arr) => val.value === 100)) {
        this.$swal('Good job on completing your collection!');
      }
     }
    }
  },
  mounted() {
    this.setBlocks(fixture.blocks)
  }
}
</script>
<style scoped>
.grey {
  background: #80808030;
  height: 100px;
}

.purple {
  background: #8000802e;
  height: 100px;
}
</style>
