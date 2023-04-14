<template>
  <div>
    <baseHeader USE_SEARCH="true"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fds-section">
        <div class="fds-section__bd">
          <div class="fds-m-t--s fds-m-b--m">
            
              <h1>KC Journey [Logo]</h1>
              <p class="fds-text--lead fds-m-t--l">The start to your <strong>career in UX</strong> is just a few clicks away!</p>
              <div class="fds-grid">
                <div class="fds-grid__1/1 fds-grid__1/1@m fds-grid__1/2@l">
                  <h3>Program Details:</h3>
                  <p class="fds-m-t--m">
                    To participate in the UX Journey program, you must review the Level 1 and Level 2 learning modules, and pass the corresponding exams. Passing each exam is required to be certificed and participate in the Level 2 and Level 3 Apprenticeship program. The project tasks you will work on directly correlate to the materials learned in both Level 1 and Level 2 learning modules.
                  </p>
                  <p class="fds-m-t--l">
                    Good Luck!
                  </p>

                  <div class="fds-level fds-level--auto-between fds-m-t--xl">
              
                    <button @click="goto('/learning/level-1/step-1')" class="fds-btn fds-btn--secondary">
                      {{isLevel1Completed ? 'Review' : 'Start'}} Level 1
                    </button> 
                    
                    <button v-if="isLevel1Completed" @click="goto('/learning/level-2/step-1')" class="fds-btn fds-btn--secondary">
                      {{isLevel2Completed ? 'Review' : 'Start'}} Level 2
                    </button>
        
                  </div>


                  <div class="fds-grid fds-m-t--xl">
                    <div class="fds-grid__1/1 fds-grid__1/1@l fds-grid__1/2@xl">
                    
                      <div v-if="isLevel1Completed" class="fds-box">
                        <span class="fds-m-b--l">
                          <p class="fds-text-size--4">[Certificate 1 Graphic]</p>
                        </span>
                        <button @click="goto('/learning/level-1/certificate')" class="fds-btn fds-btn--secondary fds-btn--small@m">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                          View Level 1 Certificate
                        </button>
                      </div>
                    </div>
                    <div class="fds-grid__1/1 fds-grid__1/1@l fds-grid__1/2@xl fds-m-t--l fds-m-t--none@xl ">
                      
                      <div v-if="isLevel2Completed" class="fds-box">
                        <span class="fds-m-b--l">
                          <p class="fds-text-size--4">[Certificate 2 Graphic]</p>
                        </span>
                        <button @click="goto('/learning/level-2/certificate')" class="fds-btn fds-btn--secondary fds-btn--small@m">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
                          View Level 2 Certificate
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="fds-grid__1/1 fds-grid__1/1@m fds-grid__1/2@l">
                  
                  <div class="fds-p-l--l">
                    <h3>How it works:</h3>

                    <div class="fds-timeline">
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                          </svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Learn about the UX Journey program
                        </div>
                      </div>
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>
                        </div>
                        <div class="fds-timeline__hd">
                          <strong><a href="#" @click.prevent="goto('/learning/level-1/step-1')">Start Level 1</a></strong> learning module
                        </div>
                      </div>
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Complete Level 1 learning module
                        </div>
                      </div>
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Pass Level 1 Exam
                        </div>
                      </div>
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                        </div>
                        <div v-if="isLevel1Completed" class="fds-timeline__hd">
                          Receive <a href="#" @click.prevent="goto('/learning/level-1/certificate')">Level 1 Certification</a>
                        </div>
                        <div v-if="!isLevel1Completed" class="fds-timeline__hd">
                          Receive Level 1 Certification
                        </div>
                      </div>

                      
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>
                        </div>
                        <div v-if="isLevel1Completed" class="fds-timeline__hd">
                          <strong><a href="#" @click.prevent="goto('/learning/level-2/step-1')">Start Level 2</a></strong> learning module
                        </div>
                        <div v-if="!isLevel1Completed" class="fds-timeline__hd">
                          Start Level 2 learning module
                        </div>
                      </div>
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Complete Level 2 learning module
                        </div>
                      </div>
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Pass Level 2 Exam
                        </div>
                      </div>

                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"></path></svg>
                        </div>
                        <div v-if="isLevel2Completed" class="fds-timeline__hd">
                          Receive <a href="#" @click.prevent="goto('/learning/level-2/certificate')">Level 2 Certification</a>
                        </div>
                        <div v-if="!isLevel2Completed" class="fds-timeline__hd">
                          Receive Level 2 Certification
                        </div>
                      </div>
                      

                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                          </svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Contacted within 48 hours 
                        </div>
                      </div>
                      
                      <div class="fds-timeline__item fds-timeline__item--system">
                        <div class="fds-timeline__icon">
                          <svg class="fds-icon fds-icon--size-1" aria-hidden="true" focusable="false" role="img" fill="#494440" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path>
                          </svg>
                        </div>
                        <div class="fds-timeline__hd">
                          Within <span class="fds-badge fds-badge--neutral">4</span> weeks assigned to a project
                        </div>
                      </div>
                      
                    </div>
                  </div>


                </div>
              </div>
              
                
            </div>

        </div>
      </div>

    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";

//import { v4 as uuidv4 } from "uuid";

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

    const isLevel1Completed = computed(() => {
      let data = store.getters["learning/getLevel1Completed"];
      if(data) return data;
      else return null;
    });

    const isLevel2Completed = computed(() => {
      let data = store.getters["learning/getLevel2Completed"];
      if(data) return data;
      else return null;
    });

    onMounted(()=>{
      //store.dispatch("videos/setVideos");
    });

    return {
      goto,
      isLevel1Completed,
      isLevel2Completed
    };
  }
};
</script>