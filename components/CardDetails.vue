<template>
  <section>
    <div class="options">
      <card-options
        :card-index="cardIndex"
        :card-name="card ? card.name : ''"
        :card-number="card ? card.fullNumber : null"
        :frozen="card ? card.frozen : false"
      />
    </div>
    <div class="transactions-wrapper">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header
            v-b-toggle.accordion-1
            header-tag="header"
            class="p-1"
            role="tab"
          >
            <div>
              <img src="~assets/icons/Carddetails.svg" alt="Card details" />
              Card details
            </div>
            <img
              v-if="visible"
              src="~assets/icons/UpArrow.svg"
              alt="up arrow"
            />
            <img v-else src="~assets/icons/DownArrow.svg" alt="down arrow" />
          </b-card-header>
          <b-collapse
            id="accordion-1"
            v-model="visible"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <!-- {{card}} -->
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header
            v-b-toggle.accordion-2
            header-tag="header"
            class="p-1"
            role="tab"
          >
            <div>
              <img
                src="~assets/icons/RecentTracks.svg"
                alt="Recent transactions"
              />
              Recent transactions
            </div>
            <img
              v-if="visible"
              src="~assets/icons/UpArrow.svg"
              alt="up arrow"
            />
            <img v-else src="~assets/icons/DownArrow.svg" alt="down arrow" />
          </b-card-header>
          <b-collapse
            id="accordion-2"
            v-model="visible2"
            accordion="my-accordion"
            role="tabpanel"
          >
            <card-transactions :transactions="card.transactions" />
          </b-collapse>
        </b-card>
      </div>
    </div>
  </section>
</template>

<script>
import CardOptions from '@/components/CardOptions'
import CardTransactions from '@/components/CardTransactions'
export default {
  name: 'CardDetails',
  components: {
    CardOptions,
    CardTransactions,
  },
  props: {
    cardIndex: {
      type: Number,
      default: () => 0,
    },
    card: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      visible: false,
      visible2: true,
    }
  },
}
</script>
<style lang="scss">
section {
  position: absolute;
  width: 100%;
  left: 0;
  top: 490px;
  z-index: 2;
  background: #ffffff;
  color: #000000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 72px;
  .options {
    padding: 20px;
    background-color: $light-blue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .transactions-wrapper {
    padding: $standard;
    .card {
      margin: 24px auto;
      border: 1px solid $gray !important;
      box-shadow: 0px 0px 8px $shadow-black;
      max-width: 366px;
      border-radius: 10px !important;
      header {
        padding: 0 $standard !important;
        font-size: 14px;
        background: $white;
        border: 0;
        color: $dark-blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $light-white;
        height: 72px;
      }
    }
  }
}
</style>
