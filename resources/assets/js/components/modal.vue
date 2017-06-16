<template>
  <div v-if="state.active" class="base-modal">
    <div v-bind:class="[ 'modal', { 'modal--active': state.active }]" >
      <!--modal button-->
      <div @click="closeModal" class="modal__close">
        <svg viewBox="0 0 24 24">
          <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
        </svg>
      </div>
      <!--product content-->
      <product :product="state.data" appearance="modal"></product>
    </div>
  </div>
</template>

<script>
  import product from './product.vue'

  export default {
    computed: {
      state: function () {
        return this.$store.state.modal
      }
    },
    methods: {
      closeModal() {
        this.$store.dispatch('callModal', {
          active: false,
          product: {}
        })
      },
      addCart() {

      }
    },
    components: {
      product
    }
  }
</script>

<style lang="sass" scoped>
  @import "~_sass/_vars.scss";
  .base-modal {
    position: fixed;
    top: 0;
    left: 50%;
    max-height: 100vh;
    padding: 50px 25px;
    margin: 0;
    z-index: 6;
    transform: translate(-50%);
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    .modal {
      background-color: white;
      position: relative;
      box-shadow: 3px 4px 16px -5px;
      display: none;
      width: 550px;
      padding: 10px;
      opacity: 0;
      transition: opacity .3s ease-out;

      @media screen and(max-width: $screen-md) {
        width: 450px;
      }

      @media screen and(max-width: $screen-sm) {
        width: 350px;
      }

      @media screen and(max-width: $screen-mc) {
        padding: 15px;
      }

      &--active {
        display: block;
        opacity: 1;
      }

      &__close {
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 5px;

        svg {
          height: 15px;
          width: 20px;

          &:hover {
            background: $color-gray--light;
          }
        }
      }
    }
  }
</style>