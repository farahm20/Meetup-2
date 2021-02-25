<template>
  <section class="wrapper">
    <div class="search-wrapper">
      <input
        class="search"
        type="text"
        v-model="search"
        placeholder="Search for a event title here.."
        @input="filter()"
      />
      <i class="fas fa-search"></i>
    </div>

    <div v-if="!filteredList || !filteredList.length">
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
          let titled = event.title
            .toLowerCase()
            .includes(this.search.toLowerCase());
          console.log(titled);
          console.log(this.filteredList);
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
.wrapper {
  display: flex;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  color: #3d2f27;
}

.wrapper .search-wrapper {
  position: absolute;
  width: 20%;
}
.search-wrapper {
  display: flex;
  flex-direction: column;
}
.wrapper .search-wrapper input {
  padding: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  display: flex;
  border-radius: 5px;
}
.search {
  display: flex;
}
.search-wrapper {
  flex-direction: row;
}
.fa-search {
  font-size: 20px;
  margin-left: 5px;
}
</style>
