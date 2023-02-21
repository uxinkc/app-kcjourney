<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>Learning - Level 1 Exam</h1>
                
            </div>

        </div>
      </div>

      <div class="fds-section">
        <div class="fds-section__bd">

          <div class="fds-level fds-level--none@s fds-level--full@m fds-level--grow-even fds-level--align-top fds-level--gutter-l">
            

            <article class="ds-article">
              <p class="fds-text-size--4 fds-m-b--l">Select all of the Menu Examples below that correctly follow the principles of Miller's Law.</p>

              <div class="fds-field fds-field--fill">
                <ul class="fds-form-list" aria-describedby="millers-help" aria-labelledby="s">
                  <li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0">
                    <p>
                      <input class="fds-checkbox" id="m2-1" type="checkbox" name="millers">
                      <label for="m2-1">Select Example 1</label>
                    </p>
                    <p class="">
                      <img src="/img/example1.png"/>
                    </p>
                  </li>
                  <li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0">
                    <p>
                      <input class="fds-checkbox" id="m2-2" type="checkbox" name="millers">
                      <label for="m2-2">Select Example 2</label>
                    </p>
                    <p class="">
                      <img src="/img/example2.png"/>
                    </p>
                  </li>
                  <li class="fds-level fds-level--none fds-m-b--s fds-box fds-box--bg-0">
                    <p>
                      <input class="fds-checkbox" id="m2-3" type="checkbox" name="millers">
                      <label for="m2-3">Select Example 3</label>
                    </p>
                    <p class="">
                      <img src="/img/example3.png"/>
                    </p>
                  </li>
                </ul>
                <span class="fds-field__help" id="millers-help">Select all that apply</span>
              </div>

              <div class="fds-field fds-m-t--xl">
                <p>
                  <button @click="submit" class="fds-btn fds-btn--primary">Submit Test</button>
                </p>
              </div>

            </article>

          </div>

        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
import { useGrowlControls } from "@/_composables/useGrowlControls";

import { v4 as uuidv4 } from "uuid";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const baseFooter = defineAsyncComponent(() => import("@/_partials/BaseFooter.vue"));

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const { 
      showSuccessGrowl,
      showErrorGrowl,
      showWhiteout,
      setOrigin
    } = useGrowlControls();

    onMounted(()=>{
      //store.dispatch("videos/setVideos");
    });

    const submit = () => {
      let r1 = document.getElementById("m2-1");
      let r2 = document.getElementById("m2-2");
      let r3 = document.getElementById("m2-3");

      if((r1.checked && r3.checked) && (!r2.checked)){
        goto('/learning/level-1/certificate');

        showSuccessGrowl(
          {
            "title": "Correct",
            "useIcon": 'true',
            "msg": "Great, you are now certified as Level 1."
          }
        );

      } else {
        goto('/learning/level-1/step-1');
        showErrorGrowl(
          {
            "title": "Incorrect",
            "useIcon": 'true',
            "msg": "Oh no! It looks like you need to review the content again."
          }
        )
      }
      clearTest();
    }

    const clearTest = () => {
      let r1 = document.getElementById("m2-1");
      let r2 = document.getElementById("m2-2");
      let r3 = document.getElementById("m2-3");

      r1.checked = false;
      r2.checked = false;
      r3.checked = false;
    }

    return {
      goto,
      submit
    };
  }
};
</script>