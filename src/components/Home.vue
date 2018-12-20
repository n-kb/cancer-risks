<template>
  <div>
    <navbar></navbar>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-2 is-offset-10">
            <shareitem :title="$t('Cancer Risks')" :shareText="$t('Share')" :description="$t('lede', {risks:risks_number})"></shareitem>
          </div>
        </div>
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="content">
              <h1 class="title is-1 has-text-centered is-size-3-mobile">{{ $t('Cancer Risks') }}</h1>
              <div class="columns">
                <div class="column has-text-centered">
                  <p v-if="$i18n.locale != 'de'">
                    <a @click="changeLocale('de')">Auf Deutsch lesen: Krebsrisiko</a>
                  </p>
                  <p v-if="$i18n.locale != 'en'">
                    <a @click="changeLocale('en')">Read in English: Cancer Risks</a>
                  </p>
                  <p v-if="$i18n.locale != 'fr'">
                    <a @click="changeLocale('fr')">Lire en français: Cancers et risques</a>
                  </p>
                </div>
              </div>
              <div class="columns">
                <div class="column has-text-centered">
                  <p class="byline">{{ $t("An interactive database by") }} <strong><a href="https://blog.nkb.fr" class="byline--link">Nicolas Kayser-Bril</a></strong></p>
                </div>
                <div class="column byline has-text-centered">
                  <p class="byline">{{ $t("20 December 2018") }}</p>
                </div>
              </div>
              <div class="article-content">
                <p class="lede">{{ $t("lede", {risks:risks_number}) }}</p>
                <hr/>
                <div v-html="$t('copy.main')"></div>
              </div>
            </div>
          </div>
        </div>

        <comparator v-on:loaded="updateVars($event)"/>

        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="content">  
              <div class="article-content">
                <div v-html="$t('copy.limitations')"></div>
                <hr/>
                <article class='message is-link' id='newsletter'>
                  <div class='message-header'>
                    <p>{{ $t("Newsletter") }}</p>
                  </div>
                  <div class='message-body'>
                    <p>{{ $t("newsletter1") }}</p>
                    <form style='padding:3px;' action='https://tinyletter.com/nkb' method='post' target='popupwindow' onsubmit="window.open('https://tinyletter.com/nkb', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                      <p>
                        <input type='text' style='width:300px' :placeholder='$t("Your e-mail address here")' name='email' id='tlemail' class='input'/>
                      </p>
                      <input type='hidden' value='1' name='embed'/>
                      <input type='submit' :value='$t("Submit")' class='button is-link' />
                    </form>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import navbar from './Navbar.vue'
  import shareitem from './shareItem.vue'
  import comparator from './Comparator.vue'
  export default {
    name: 'Home',
    data () {
      return {
        headful: {
          title: "",
          description: "",
          image: "",
          head: {
            'meta[charset]': { charset: 'utf-8' },
          }
        },
        risks_number: 0
      }
    },
    components: {
      navbar,
      shareitem,
      comparator
    },
    created () {
      // Gets current lang
      var current_url = window.location.href
      var lang = "en"
      if (current_url.match(/\/[a-z]{2}\//)) {
        lang = current_url.match(/\/[a-z]{2}\//)[0].replace("/", "").replace("/", "")
      }
      this.changeLocale(lang)
    },
    methods: {
      updateVars(data) {
        this.risks_number = data.risks_number
      },
      changeLocale(lang) {
        this.$i18n.locale = lang
        document.title = this.$t('Cancer Risks')
        this.headful.title = this.$t('Cancer Risks')
        this.headful.description = this.$t('share_text')
        this.headful.image = `http://blog.nkb.fr/cancer-risks/share_${lang}.png`
        var original_location = window.location.origin
        if (process.env.NODE_ENV === 'production') { original_location += "/cancer-risks" }
        window.history.pushState({}, "", original_location + "/" + lang + "/");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import "colors.sass"
$family-primary: "Arial"
$title-size: 2.5em
$weight-semibold: 200
$body-family: "Arial"
$primary: $nkb-purple
$info: $nkb-lightblue
$link: $nkb-darkblue

@import "~bulma/bulma"

h1
  font-weight: 200

.lede
  font-weight: bold

.article-content
  font-size: 1.2rem
  line-height: 2rem
  font-family: Georgia

.byline
  font-variant: small-caps
  font-size: .8rem
  font-family: Georgia
</style>
