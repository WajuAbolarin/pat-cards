<template>
  <article class="card__wrapper">
    <div class="card__top">
      <img alt="Patricia logo" title="Patricia" src="../assets/patricia-logo.svg" />
      <button @click="toggle" :aria-controls="`${card.id}Number ${card.id}Cvv`" aria-label="toggle card number">
        <svg viewBox="0 0 26 24" xmlns="http://www.w3.org/2000/svg" width="26" height="24" fill="currentColor">
          <path
            v-if="!show"
            fill-rule="evenodd"
            d="M22.509 19.732l1.663 1.663a1.278 1.278 0 11-1.809 1.81L18.9 19.74l-.75-.75-1.72-1.721-.089-.089-3.201-3.201a1.922 1.922 0 01-2.023-2.023l-4.12-4.12-2.24-2.24L1.89 2.732c-.5-.5-.5-1.31 0-1.81S3.2.422 3.7.922l2.192 2.192L7.766 4.99l5.158 5.158.107-.003a1.922 1.922 0 011.917 2.026l5.01 5.011 2.551 2.55zM8.672 4.084l3.579 3.58c.254-.046.513-.079.78-.079a4.483 4.483 0 014.479 4.479c0 .267-.034.525-.079.78l3.432 3.433 1.067 1.067a19.99 19.99 0 003.728-4.645c.225-.394.225-.879 0-1.273-.817-1.422-5.326-8.555-12.972-8.315-1.515.04-2.887.366-4.13.858l.116.115zm6.852 14.092l1.721 1.72.262.262a11.94 11.94 0 01-4.444.862c-7.501 0-11.852-6.916-12.658-8.32a1.284 1.284 0 010-1.274 20.017 20.017 0 013.727-4.643l1.96 1.96 2.54 2.54c-.046.255-.079.513-.079.78a4.483 4.483 0 004.478 4.479c.268 0 .526-.034.781-.08l1.624 1.624.088.09z"
            clip-rule="evenodd"
          />

          <path
            v-else
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8346 7.42526C11.7765 7.42526 10.9154 8.28638 10.9154 9.34455C10.9154 10.4027 11.7765 11.2638 12.8346 11.2638C13.8928 11.2638 14.7539 10.4027 14.7539 9.34455C14.7539 8.28638 13.8928 7.42526 12.8346 7.42526M12.8346 13.8229C10.3652 13.8229 8.3563 11.814 8.3563 9.34455C8.3563 6.87506 10.3652 4.8662 12.8346 4.8662C15.3041 4.8662 17.313 6.87506 17.313 9.34455C17.313 11.814 15.3041 13.8229 12.8346 13.8229M25.461 8.70737C24.6434 7.28453 20.1356 0.152444 12.4879 0.391716C5.41594 0.572129 1.30098 6.80343 0.208265 8.70737C-0.0169315 9.10274 -0.0169315 9.5864 0.208265 9.98177C1.01437 11.3854 5.36476 18.3013 12.8666 18.3013C12.9703 18.3013 13.0752 18.3 13.1814 18.2974C20.2533 18.117 24.3683 11.8857 25.461 9.98177C25.6862 9.5864 25.6862 9.10274 25.461 8.70737"
          />
        </svg>
      </button>
    </div>

    <h4 aria-label="card number" :aria-hidden="!show" :id="`${card.id}Number`" class="card__number text-regular">
      <template v-if="show">
        <span v-for="(sequence, index) in cardSequence.match(/[\d|\.]{4,4}/g)" :key="index">{{ sequence }}</span>
      </template>
      <template v-else>
        <svg
          width="52"
          height="9"
          viewBox="0 0 52 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          v-for="i in 3"
          :key="i"
        >
          <path
            d="M3.89464 8.22707C6.03864 8.22707 7.60664 6.56307 7.60664 4.51507C7.60664 2.46707 6.03864 0.803067 3.89464 0.803067C1.78264 0.803067 0.182642 2.46707 0.182642 4.51507C0.182642 6.56307 1.78264 8.22707 3.89464 8.22707ZM18.6796 8.22707C20.8236 8.22707 22.3916 6.56307 22.3916 4.51507C22.3916 2.46707 20.8236 0.803067 18.6796 0.803067C16.5676 0.803067 14.9676 2.46707 14.9676 4.51507C14.9676 6.56307 16.5676 8.22707 18.6796 8.22707ZM33.4646 8.22707C35.6086 8.22707 37.1766 6.56307 37.1766 4.51507C37.1766 2.46707 35.6086 0.803067 33.4646 0.803067C31.3526 0.803067 29.7526 2.46707 29.7526 4.51507C29.7526 6.56307 31.3526 8.22707 33.4646 8.22707ZM48.2496 8.22707C50.3936 8.22707 51.9616 6.56307 51.9616 4.51507C51.9616 2.46707 50.3936 0.803067 48.2496 0.803067C46.1376 0.803067 44.5376 2.46707 44.5376 4.51507C44.5376 6.56307 46.1376 8.22707 48.2496 8.22707Z"
            fill="#D3DCE6"
          />
        </svg>

        <span>{{ card.cardNo.slice(card.cardNo.length - 4) }}</span>
      </template>
    </h4>

    <div class="card__bottom">
      <h4 class="card__holder text-regular">{{ card.cardHolder }}</h4>

      <div class="card__pair">
        <span class="card__label text-regular">
          Valid <br />
          Thru
        </span>
        <p class="card__value text-regular">
          {{ card.expires }}
        </p>
      </div>

      <div class="card__pair cvv">
        <p class="card__label text-regular">CVV</p>
        <p
          aria-label="card cvv"
          :id="`${card.id}Cvv`"
          v-if="show"
          :aria-hidden="!show"
          class="card__value text-regular"
        >
          {{ card.cvv }}
        </p>
        <p aria-label="card cvv" :id="`${card.id}Cvv`" v-else :aria-hidden="!show" class="card__value text-regular">
          <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.70846 4.32409C3.91446 4.32409 4.79646 3.38809 4.79646 2.23609C4.79646 1.08409 3.91446 0.148094 2.70846 0.148094C1.52046 0.148094 0.620459 1.08409 0.620459 2.23609C0.620459 3.38809 1.52046 4.32409 2.70846 4.32409ZM9.22502 4.32409C10.431 4.32409 11.313 3.38809 11.313 2.23609C11.313 1.08409 10.431 0.148094 9.22502 0.148094C8.03702 0.148094 7.13702 1.08409 7.13702 2.23609C7.13702 3.38809 8.03702 4.32409 9.22502 4.32409ZM15.7416 4.32409C16.9476 4.32409 17.8296 3.38809 17.8296 2.23609C17.8296 1.08409 16.9476 0.148094 15.7416 0.148094C14.5536 0.148094 13.6536 1.08409 13.6536 2.23609C13.6536 3.38809 14.5536 4.32409 15.7416 4.32409Z"
              fill="#D3DCE6"
            />
          </svg>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
export default {
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const show = ref(false)
    const toggle = () => (show.value = !show.value)
    const cardSequence = computed(() =>
      show.value ? props.card.cardNo : props.card.cardNo.replace(/\d{12,12}/, '.'.repeat(12))
    )

    return { show, toggle, card: props.card, cardSequence }
  },
}
</script>

<style scoped>
.card__wrapper {
  background: url('../assets/patricia-icon.svg') left top no-repeat;
  background-size: 80%;
  background-color: var(--black);
  color: var(--smoke-200);
  border-radius: var(--card-radius);
  width: var(--card-width);
  height: var(--card-height);
  padding: var(--card-spacing);
  display: flex;
  flex-direction: column;
}
.card__top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
button {
  display: inline-block;
  appearance: none;
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: var(--grey);
  transition: color 0.3s linear;
  cursor: pointer;
}
button:hover,
button:focus,
button:active {
  color: var(--smoke-200);
}
.card__number {
  flex: 1;
  justify-self: center;
  display: grid;
  align-items: center;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  font-size: var(--font-lg);
  letter-spacing: 2px;
}
.card__holder {
  font-size: var(--font-sm);
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
.card__bottom {
  display: grid;
  grid-template-columns: 1fr 20% 20%;
  align-items: flex-end;
  width: 100%;
}
.card__pair {
  display: flex;
  align-items: flex-end;
  text-align: right;
}
.card__pair.cvv {
  justify-content: flex-end;
}
.card__label {
  font-size: var(--font-xs);
  text-transform: uppercase;
  color: var(--smoke-dark);
}
.card__value {
  display: inline-block;
  margin-left: 0.7em;
  font-size: var(--font-md);
  color: var(--smoke-200);
}

@media (min-width: 720px) {
  .card__bottom {
    width: 93%;
    grid-template-columns: 1fr 20% 20%;
  }
}
</style>
