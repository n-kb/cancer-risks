<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item is-size-4">
        <a href="https://blog.nkb.fr">
          <span class="has-text-dark ">
            nkb
          </span>
          <span class="project">
            •
          </span>
          <span class="training">
            •
          </span>
          <span class="article">
            •
          </span>
          <span class="interview">
            •
          </span>
          <span class="conference">
            •
          </span>
        </a>
      </div>
    </div>
    <div class="navbar-end navbar-group-social">
      <div class="navbar-item navbar-item-social">
        <span class="is-size-7 is-uppercase">Follow me:</span> 
        &nbsp;
        <a href="https://twitter.com/nicolaskb" target="_blank">
          <span class="icon">
            <i class="fab fa-twitter"></i>
          </span>
        </a>
        &nbsp;
        <a href="https://www.facebook.com/nicolas.kayserbril/" target="_blank">
          <span class="icon">
            <i class="fab fa-facebook"></i>
          </span>
        </a>
        &nbsp;
        <a href="https://blog.nkb.fr/atom.xml" target="_blank">
          <span class="icon">
            <i class="fas fa-rss"></i>
          </span>
        </a>
      </div>
      <div class="navbar-item navbar-item-newsletter">
        <a onClick="document.getElementById('newsletter').scrollIntoView();">
          <span class="is-size-7 is-uppercase">
            Get my next essay in your inbox
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'navbar'
}
</script>

<style lang="sass">

@import "colors.sass"

.navbar
  border-bottom: 2px #eee solid

.navbar-group-social
  flex-direction: column

.navbar-item-social
  padding-bottom: 0

.navbar-item-newsletter
  padding-top: 0
  margin-top: -1rem;

.project
  color: $nkb-lightblue
.interview
  color: $nkb-yellow
.article
  color: $nkb-red
.conference
  color: $nkb-darkblue
.training
  color: $nkb-purple
</style>
