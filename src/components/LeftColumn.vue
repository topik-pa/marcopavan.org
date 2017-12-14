<template>
  <section>
    
    <!-- Left Column -->
    <div class="left-column">
    <header id="header">
      <!-- Navigation -->
      <div id="navbar" class="navbar-fixed">
        <nav class="main-navigation light-bg">
          <div class="nav-wrapper">
            <ul>
              <li>
                <a href="#page-top" class="waves-effect">Hello</a>
              </li>
              <li>
                <a href="#page-top" class="waves-effect">Education</a>
              </li>
              <li>
                <a href="#works" class="waves-effect">Work Experience</a>
              </li>
              <li>
                <a href="#skills" class="waves-effect">Skills</a>
              </li>
              <li>
                <a href="#contact" class="waves-effect">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <!-- # Navigation End # -->
      <!-- Mobile Navigation -->
      <div class="fixed-action-btn vertical click-to-toggle mobile-menu">
        <a class="btn btn-floating btn-large light-bg"> <i class="large mdi-navigation-menu"></i> </a>
        <ul>
          <li>
            <a class="btn-floating" href="#page-top"><i class="material-icons">home</i></a>
          </li>
          <li>
            <a class="btn-floating white" href="#education"><i class="material-icons cyan-text text-darken-2">account_balance</i></a>
          </li>
          <li>
            <a class="btn-floating light-green darken-3" href="#works"><i class="material-icons">work</i></a>
          </li>
          <li>
            <a class="btn-floating deep-orange accent-3" href="#skills"><i class="material-icons">assessment</i></a>
          </li>
          <li>
            <a class="btn-floating lime darken-2" href="#contact"><i class="material-icons">mail_outline</i></a>
          </li>
        </ul>
      </div>
      <!-- # Mobile Navigation End # -->
      <!-- Header Content -->
      <div class="light-bg header-wrap">
        <div class="header-content">
          <h1>My name is <strong>{{generals.name}}</strong> |</h1>
          <span class="sub-text" v-html="generals.shortDesc"></span>
        </div>
      </div>
      <!-- # Header Content End # -->
      </header>
      <!-- Education -->
      <section id="education" class="section scrollspy">
        <!-- Icon -->
        <span class="icon btn-floating btn-large white"><i class="material-icons cyan-text text-darken-2">account_balance</i></span>
        <!-- # Icon End # -->
        <!-- Title -->
        <h2 class="cyan-text text-darken-2">Education</h2>
        <!-- # Title End # -->
        <!-- Table -->
        <table class="highlight section-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Education Department</th>
              <!--<th>Date</th>-->
            </tr>
          </thead>
          <tbody>
            <study-component v-for="item in education" v-bind:key="item.id" :item="item" :generals="generals"></study-component> 
          </tbody>
        </table>
        <!-- #  Table End # -->
      </section>
      <!-- # Education End # -->
      <!-- Works -->
      <section id="works" class="section scrollspy">
        <!-- Icon -->
        <span class="icon btn-floating btn-large light-green darken-3"><i class="material-icons">work</i></span>
        <!-- # Icon End # -->
        <!-- Title -->
        <h2 class="light-green-text text-darken-3">Work experience</h2>
        <!-- # Title End # -->
        <!-- Table -->
        <table class="highlight section-table">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Business Name / Department</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>   
            <work-component v-for="item in work" v-bind:key="item.id" :item="item" :generals="generals"></work-component>                      
          </tbody>
          <!-- # Table End # -->
        </table>
      </section>
      <!-- #  Works End # -->
      <!-- Professional Skills -->
      <section id="skills" class="section scrollspy">
        <!-- Icon -->
        <span class="icon btn-floating btn-large deep-orange accent-3"><i class="material-icons">assessment</i></span>
        <!-- # Icon End # -->
        <!-- Title -->
        <h2 class="deep-orange-text text-accent-3">Professional skills</h2>
        <!-- # Title End # -->
        <div class="skills">
          <skill-component v-for="item in skills" v-bind:key="item.id" :item="item" :generals="generals"></skill-component>
          <div class="clearfix"></div>
        </div>
      </section>
      <!-- # Professional Skills End # -->     
      <!-- Portfolio -->
      <!--<section id="portfolio" class="section scrollspy">-->
        <!-- Icon -->
        <!--<span class="icon btn-floating btn-large light-green darken-3"><i class="material-icons">queue_play_next</i></span>-->
        <!-- # Icon End # -->
        <!-- Title -->
        <!--<h2 class="light-green-text text-darken-3">Portfolio</h2>-->
        <!-- # Title End # -->
        <!--<div id="Portfolio_Carousel" class="owl-carousel">-->
          
          <!--Section in  progress-->
          <!-- Portfolio Item -->
          <!--<div class="item portfolio-item">
            <a href="#Portfolio_Detail" class="modal-trigger">
              <h6 class="portfolio-name">French Cooking</h6>
              <img src="http://placekitten.com/g/200/200" class="responsive-img" alt="French Cooking">
              <span class="portfolio-categories">Category,
                <span class="light-green-text text-darken-3">Digital Art</span>
              </span>
            </a>
          </div>-->
          <!-- # Portfolio Item End # -->
          <!-- Portfolio Item -->
          <!--<div class="item portfolio-item">
            <a href="#Portfolio_Detail" class="modal-trigger">
              <h6 class="portfolio-name">Verso – Digital Magazine</h6>
              <img src="http://placekitten.com/g/200/200" class="responsive-img" alt="Verso – Digital Magazine">
              <span class="portfolio-categories">Category,
                <span class="light-green-text text-darken-3">Digital Magazine Design</span>
              </span>
            </a>
          </div>-->
          <!-- # Portfolio Item End # -->
          <!-- Portfolio Item -->
          <!--<div class="item portfolio-item">
            <a href="#Portfolio_Detail" class="modal-trigger">
              <h6 class="portfolio-name">LVC // Branding</h6>
              <img src="http://placekitten.com/g/200/200" class="responsive-img" alt="LVC // Branding">
              <span class="portfolio-categories">Category,
                <span class="light-green-text text-darken-3">Branding, Graphic Design</span>
              </span>
            </a>
          </div>-->
          <!-- # Portfolio Item End # -->
          <!-- Portfolio Item -->
          <!-- <div class="item portfolio-item">
            <a href="#Portfolio_Detail" class="modal-trigger">
              <h6 class="portfolio-name">French Cooking</h6>
              <img src="http://placekitten.com/g/200/200" class="responsive-img" alt="French Cooking">
              <span class="portfolio-categories">Category,
                <span class="light-green-text text-darken-3">Digital Art</span>
              </span>
            </a>
          </div>-->
          <!-- # Portfolio Item End # -->
          <!-- Portfolio Item -->
          <!--<div class="item portfolio-item">
            <a href="#Portfolio_Detail" class="modal-trigger">
              <h6 class="portfolio-name">Verso – Digital Magazine</h6>
              <img src="http://placekitten.com/g/200/200" class="responsive-img" alt="Verso – Digital Magazine">
              <span class="portfolio-categories">Category,
                <span class="light-green-text text-darken-3">Digital Magazine Design</span>
              </span>
            </a>
          </div>-->
          <!-- # Portfolio Item End # -->
          <!-- Portfolio Item -->
          <!--<div class="item portfolio-item">
            <a href="#Portfolio_Detail" class="modal-trigger">
              <h6 class="portfolio-name">LVC // Branding</h6>
              <img src="http://placekitten.com/g/200/200" class="responsive-img" alt="LVC // Branding">
              <span class="portfolio-categories">Category,
                <span class="light-green-text text-darken-3">Branding, Graphic Design</span>
              </span>
            </a>
          </div>-->
          <!-- # Portfolio Item End # -->
        <!--</div>-->
      <!--</section>-->
      <!-- # Portfolio End # -->      
      <!-- Contact Me -->
      <section id="contact" class="section scrollspy">
        <!-- Icon -->
        <span class="icon btn-floating btn-large lime darken-2"><i class="material-icons">mail_outline</i></span>
        <!-- # Icon End # -->
        <!-- Title -->
        <h2 class="lime-text text-darken-2">Contact Me</h2>
        <!-- # Title End # -->
        <!-- Contact Information -->
        <div class="contact-information">
          <div class="row">
            <!-- Mail -->
            <div class="col s6 l3">
              <div class="icon"><i class="material-icons">email</i></div>
              <p><a :href="'mailto:' + generals.email">{{generals.email}}</a></p>
            </div>
            <!-- # Mail End # -->
            <!-- Mobile -->
            <div class="col s6 l3">
              <div class="icon"><i class="material-icons">phone_iphone</i></div>
              <p>{{generals.tel}}</p>
            </div>
            <!-- # Mobile End # -->
            <!-- Skype -->
            <div class="col s6 l3">
              <div class="icon"><i class="fa fa-skype"></i></div>
              <p>Skype / {{generals.skype}}</p>
            </div>
            <!-- # Skype End # -->
            <!-- Location -->
            <div class="col s6 l3">
              <div class="icon"><i class="material-icons">location_on</i></div>
              <div v-html="generals.address"></div>
            </div>
            <!-- # Location End # -->
            <div class="clearfix"></div>
          </div>
        </div>
        <!-- # Contact Information End # -->
      </section>
    </div>
    <!-- # Left Column End # -->

  </section>
</template>

<script>
  import WorkComponent from './WorkComponent'
  import StudyComponent from './StudyComponent'
  import SkillComponent from './SkillComponent'

  export default {
    props: ['generals', 'education', 'work', 'skills'],
    components: {
      WorkComponent,
      StudyComponent,
      SkillComponent
    }
  }
</script>


<style scoped>

</style>