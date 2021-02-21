<template>
  <section class ="searchArea">

      <div class="searchDiv"> 

        <input
          class="search"
          type="text"
          v-model="search"
          placeholder="Search for a event title here.."
          @input="filter()"
        />
       <i class="fas fa-search"></i>
      </div>
   
    <div  v-if="!filteredList || !filteredList.length" >
      <h2>No Events available</h2>
    </div>
    <div v-else>
      <AllEvents v-for="event in filteredList" :key="event.id" :event="event" />
    </div>
  </section>
</template>

<script>
import AllEvents from "./../components/AllEvents";
export default {
  props: {
    events: {},
  },
  data: () => ({
    search: "",
    filteredList: {},
  }),
  components: {
    AllEvents,
  },
  methods: {
    filter() {
      if (
        this.search == "undefined" ||
        this.search == null ||
        this.search == ""
      ) {
        this.filteredList = this.events;
      } else {
        this.filteredList = this.events.filter((event) => { 
          let titled = event.title.toLowerCase().includes(this.search.toLowerCase());
          console.log(titled);
          console.log(this.filteredList)
          return titled;
        });
      }
    },
  },
  beforeMount() {
     this.filter();
  },
};
</script>

<style>
.searchDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.fa-search {
  font-size: 20px;
    margin-left: 5px;
}

.search {
  font-size: 20px;
}
</style>
