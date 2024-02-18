<template>
  <q-responsive :ratio="16 / 9" class="col">
    <q-img src="/assets/images/Company_3_1.jpg" />
    <div class="row text-center">
      <div class="overlay-r col-6 bg-warning gt-xs q-pa-md">
        <div class="text-h3">Our Founders</div>
        <p class="q-pt-md">
          Young Living has been pioneering the modern essential oils movement for more than a
          quarter century, but Founder D. Gary Young`s journey started long before.
        </p>
        <q-btn outline label="Discover our Story"></q-btn>
      </div>
    </div>
  </q-responsive>
  <q-responsive :ratio="16 / 9" class="col">
    <q-img src="/assets/images/Company_4.jpg" />
    <div class="row text-center">
      <div class="overlay-l col-6 bg-warning gt-xs q-pa-md">
        <div class="text-h3">Our Community</div>
        <p class="q-pt-md">
          Our global community is made up of purpose-driven people who live to empower others and
          care for our planet. Ready to join our movement?
        </p>
        <q-btn outline label="Join us"></q-btn>
      </div>
    </div>
  </q-responsive>
  <q-responsive :ratio="16 / 9" class="col">
    <q-img src="/assets/images/Company_2.jpg" />
    <div class="row text-center">
      <div class="overlay-r col-6 bg-warning gt-xs q-pa-md">
        <div class="text-h3">Our Farms</div>
        <p class="q-pt-md">
          Our exclusive sourcing with corporate-owned farms and hand-selected partners ensures that
          you`re getting the best of nature.
        </p>
        <q-btn outline label="Discover our Story"></q-btn>
      </div>
    </div>
  </q-responsive>
</template>

<style lang="sass">
.overlay-l
  position: absolute
  top: 50px
  left: 50px
  background: white
  padding-left: 20px
  padding-right: 20px
  border-radius: 20px
.overlay-r
  position: absolute
  top: 50px
  right: 50px
  background: white
  padding-left: 20px
  padding-right: 20px
  border-radius: 20px
</style>
