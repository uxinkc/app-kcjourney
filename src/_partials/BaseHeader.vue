<template>
  <header>
<!--    <globalNav-->
<!--      :NAV_DATA="navigationData"-->
<!--      EXTRA_CLASSES="fds-nav-global__list-item&#45;&#45;multi-column"-->
<!--      @emitSearch="submitSearch"-->
<!--      :USE_SEARCH="USE_SEARCH"-->
<!--    ></globalNav>-->


    
  </header>
</template>

<script>
import { onMounted, ref, computed, watch } from 'vue';

//import { navigationService } from '@/Shared/_services/navigation.service';
import { useStore } from 'vuex';
import { useNavigation } from "@/_composables/useNavigation";

import globalNav from '@/_components/global-nav/global-nav.vue';

export default {
  components: {
    globalNav
  },
  props: {
    USE_SEARCH: String
  },
  setup(props, {emit}){

    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const navigationData = computed(() => store.getters["navigation/getNavigation"]);

    const submitSearch = ( obj ) => {
      emit('emitSearch',obj)
      //console.log('NAV SEARCH BASEHEADER', obj)
      goto('/search/' + obj.phrase)
    };

    onMounted(()=>{
      console.log('USE_SEARCH', props.USE_SEARCH)
      store.dispatch("navigation/setNavigation");
    });

    return {
      baseUrl,
      navigationData,
      submitSearch
    }
  }  
}

</script>