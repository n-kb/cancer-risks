<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-half has-text-centered">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">{{ $t('Risk factor') }}</label>
          </div>
          <div class="field-body">
            <div class="select control" >
              <select v-model="factors.active">
                <option v-for="(factor, factor_name) in factors.list" :key="factor_name" :value="factor_name"> {{ $t('factors.' + factor_name) }} </option>
              </select>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label"> {{ $t('Cancer site') }}</label>
          </div>
          <div class="field-body">
            <div class="select control" >
              <select v-model="cancers.active">
                <option v-for="(cancer, cancer_name) in factors.list[factors.active]" :key="cancer_name" :value="cancer_name"> {{ $t('cancers.' + cancer_name) }} </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered article-content is-hidden-mobile">
      <div class="column is-half">
        <p v-html="control.sentence">
        </p>
      </div>
      <div class="column is-half">
        <p v-html="risk.sentence">
        </p>
      </div>
    </div>
    <div class="columns is-centered article-content">
      <div class="column is-half">
        <p v-html="control.sentence" class="is-hidden-tablet">
        </p>
        <pictos :amount="control.amount" :marked="control.rate" :textAlignRight="true" :gender="this.active_gender"/>
        <p class="is-size-7" v-html="control.source"></p>
      </div>
      <div class="column is-half" >
        <p v-html="risk.sentence" class="is-hidden-tablet">
        </p>
        <pictos :amount="risk.amount" :marked="risk.rate" :textAlignRight="false" :gender="this.active_gender"/>
        <p class="is-size-7" v-html="risk.source"></p>
      </div>
    </div>
  </div>
</template>

<script>
import cancer_csv from '../assets/cancer.csv'
import baserate_csv from '../assets/baserate.csv'
import pictos from './Pictos.vue'

export default {
  name: 'comparator',
  components: {
    pictos
  },
  data () {
    return {
      factors: {
        list: {},
        active_gender: "all",
        active: "alcohol"
      },
      cancers: {
        list: {},
        active: "colorectum"
      }
    }
  },
  watch: {
    'factors.active': function () {
      if (!(this.cancers.active in this.factors.list[this.factors.active])) {
        // Chosen risk does not match the active cancer. Changes the active cancer.
        this.cancers.active = Object.keys(this.factors.list[this.factors.active])[0]
      }
    }
  },
  computed: {
    control () {
      // Percent if risk is more than 5%, per mille under 5%
      var rate = Math.round(Number(this.cancers.list[this.cancers.active].risk) * 10)
      var amount = 1000

      // Changes gender if need be
      this.active_gender = this.cancers.list[this.cancers.active].gender

      var cancer_type = this.$t('comparator.cancer_type', {cancer: this.$t('cancers.' + this.cancers.active).replace(/ /g, "-")}) 
      if (this.cancers.active == "all") { cancer_type = this.$t('comparator.a_cancer') }

      var persons = this.$t("comparator.persons")
      if (this.active_gender == "female") {
        persons = this.$t("comparator.females")
      } else if (this.active_gender == "male") {
        persons = this.$t("comparator.males")
      } else if (this.active_gender == "nonsmokers") {
        persons = this.$t("comparator.nonsmokers")
      }

      var source = this.cancers.list[this.cancers.active].source
      var source_url = this.cancers.list[this.cancers.active].source_url
      var source_sentence = this.$t('comparator.source', {source: source, source_url: source_url})

      var control = {
          rate: rate,
          amount: amount,
          sentence: this.$t('comparator.sentence_left', {amount: amount, persons: persons, rate: rate, cancer_type: cancer_type}),
          source: source_sentence
        } 
      return control
    },
    risk () {
      var rate = this.factors.list[this.factors.active][this.cancers.active].increase * this.control.rate
      rate = Math.round(rate)

      // No increased risk
      if (rate == 1) { rate = this.control.rate }

      var action = this.$t('actions.' + this.factors.list[this.factors.active][this.cancers.active].factor_detail)
      
      var cancer_type = this.$t('comparator.cancer_type', {cancer: this.$t('cancers.' + this.cancers.active).replace(/ /g, "-")}) 
      if (this.cancers.active == "all") { cancer_type = this.$t("comparator.a_cancer") }
      var persons = this.$t("comparator.persons")
      if (this.active_gender == "female") {
        persons = this.$t("comparator.females")
      } else if (this.active_gender == "male") {
        persons = this.$t("comparator.males")
      }

      var sentence = this.$t('comparator.sentence_right', {amount: this.control.amount, persons: persons, action: action, rate: rate, cancer_type: cancer_type})

      if (rate == this.control.rate ) {
        var disclaimer = this.$t('comparator.disclaimer')
        sentence = disclaimer + sentence
      }
      
      var source = this.factors.list[this.factors.active][this.cancers.active].source
      var source_url = this.factors.list[this.factors.active][this.cancers.active].source_url
      var source_sentence = this.$t('comparator.source', {source: source, source_url: source_url})

      var risk = {
        rate: rate,
        amount: this.control.amount,
        sentence: sentence,
        source: source_sentence
      }
      return risk
    }
  },
  created () {
    // Init of the factors
    for (var i = 0, len = cancer_csv.length; i < len; i++) {
      // Creates new factor if not exist
      if (cancer_csv[i].factor in this.factors.list === false) {
        this.factors.list[cancer_csv[i].factor] = {}
      }

      this.factors.list[cancer_csv[i].factor][cancer_csv[i].cancer] = cancer_csv[i]
    } 

    // Init of the baserates
    for (i = 0, len = baserate_csv.length; i < len; i++) {
      this.cancers.list[baserate_csv[i].cancer] = baserate_csv[i]
    }

    //Sends back some info to parent
    this.$emit("loaded", {risks_number: Object.keys(this.factors.list).length}) 
  }
}
</script>

<style lang="sass">

@import "colors.sass"

.big-number
  font-size: 1.5em
  border-bottom: $nkb-purple 6px solid

</style>
