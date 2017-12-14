<template>
  <section>
    <!-- Right Column -->
      <div class="right-column">
        <!-- Header -->
        <header class="dark-bg">
          <ul class="social-links">
            <li>
              <a :href="socials.facebook.url" class="tooltipped" data-position="bottom" data-delay="20" :data-tooltip="socials.facebook.name"><i :class="'fa ' + socials.facebook.icon"></i></a>
            </li>
            <li>
              <a :href="socials.linkedin.url" class="tooltipped" data-position="bottom" data-delay="20" :data-tooltip="socials.linkedin.name"><i :class="'fa ' + socials.linkedin.icon"></i></a>
            </li>
          </ul>
          <div class="user_name-title">
            <h2>{{ generals.name }}</h2>
            <p>{{ generals.title }}</p>
          </div>
        </header>
        <!-- # Header End # -->
        <!-- Personal Information -->
        <div class="user-wrapper">
          <!-- Profile Image -->
          <div class="profile-image"> <img :src="generals.imagesUrl +  'Profile_Image.jpg'" :alt="generals.name + ' photo'" class="responsive-img"> </div>
          <!-- # Profile Image End # -->
          <div class="user-content">
            <ul class="collection">
              <!-- <li class="collection-item">
                <span class="bolder">Freelance Work Status</span>
                <div class="switch right">
                  <label>
                    <input disabled type="checkbox" checked>
                    <span class="lever"></span>ON</label>
                </div>
              </li>-->
              <li class="collection-item">
                <span class="bolder">My name is {{generals.name}}...</span>
                <br>
                <br> 
                <div v-html="generals.personalDesc"></div>
                
              </li>
              <li class="collection-item">
                <a :href="generals.docsUrl + 'MarcoPavanResume.pdf'" target="_blank" class="btn waves-effect waves-light dark-bg">DOWNLOAD CV<i class="material-icons">file_download</i></a>
                <a :href="'mailto:' + generals.email" class="btn waves-effect waves-light light-bg">CONTACT ME!<i class="material-icons">email</i></a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
        <!-- # Personal Information End # -->
      </div>
      <!-- # Right Column End # -->
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: ['generals', 'socials']
  }
</script>


<style scoped>

</style>