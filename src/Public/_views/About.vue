<template>
  <main id="main-content" tabindex="-1">
    <div class="fds-section">
      <div class="fds-section__bd">

        <h1>There is lots to learn!</h1>

        <p>Lots of motivational stuff here. IDK, maybe <button @click="goto('/login')" class="fds-btn fds-btn--flat">Login</button> or something.</p>


      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { useNavigation } from "@/_composables/useNavigation";


export default {

  setup(props) {
    const { goto } = useNavigation();

    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );


    onMounted(()=>{

    });
    
    return {
      basePath,
      goto
    }
  }
}
</script>