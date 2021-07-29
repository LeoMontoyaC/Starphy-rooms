<template>
    <page-layout>
        <section class="py-4 bg-teal-dark">
      <div class="container">
        <form class="form">
          <div class="form__field relative">
            <i class="input-icon material-icons absolute text-grey-darker">search</i>
            <input
              class="input__search"
              id="where"
              type="text"
              placeholder="Mexico City, Mexico">
          </div>
        </form>
      </div>
    </section>
    <section class="section__create py-6">
        <h1 class="text-3xl">Publicar tu media agua XDXD</h1>
        <div class="container">
            <form action="">
            <div class="mb-4">
                    <label class="input__label">Title</label>
                    <input v-model="publication.title" class="input__field"  type="text" placeholder="puta la wea kjfngd">
                </div>
                <div class="mb-4">
                    <label class="input__label">Description</label>
                    <textarea v-model="publication.description" class="input__field" rows="10" type="text" placeholder="puta la wea kjfngd"></textarea>
                </div>
                <div class="mb-4">
                    <label class="input__label">Feature Image</label>
                    <input v-model="publication.featuredImage" class="input__field" rows="10" type="text" placeholder="https://images.unsplash.com/photo-1598284820644-b26305e70e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80">
                </div>
                <div class="mb-4 text-right">
                    <button @click.prevent="save" class="w-full bg-yellow-dark text-yellow-darker font-semibold py-3 px-6 rounded">Publicar</button>
                </div>
            </form>
        </div>
    </section>
    </page-layout>
</template>

<script>

import PageLayout from '../../layouts/PageLayout.vue'




export default {
  components: { PageLayout },
    name: 'CreateHousePage',
    data() {
      return {
        publication: {
          title:'',
          description:'',
          featuredImage:'',
        },
      };
    },
    methods: {
      save() {
        const {title, description, featuredImage} = this.publication;
        const room = {
          title,
          description,
          feature_image: featuredImage,
          publishedAt: Date.now(),
        }

        this.$store.dispatch('CREATE_ROOM', room).then(() =>{
          this.$router.push({name: 'SearchPage'});
        });
      },
    },
    component: {
        PageLayout,
    },
};
</script>