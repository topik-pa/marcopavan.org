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
              <li v-for="label in mainMenuLabels.desktop" v-bind:key="label[1]">
                <a :href="label[1]" class="waves-effect">{{ label[0] }}</a>
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
          <li v-for="label in mainMenuLabels.mobile" v-bind:key="label[1]">
            <a class="btn-floating" :href="label[1]"><i class="material-icons">{{ label[0] }}</i></a>
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
      <section id="portfolio" class="section scrollspy">
        <!-- Icon -->
        <span class="icon btn-floating btn-large light-green darken-3"><i class="material-icons">queue_play_next</i></span>
        
        <h2 class="light-green-text text-darken-3">Portfolio</h2>
         
        <div id="Portfolio_Carousel" class="owl-carousel">

          <portfolio-component v-for="item in portfolio" v-bind:key="item.id" :item="item" :generals="generals"></portfolio-component>
          
        </div>
      </section>
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
  import PortfolioComponent from './PortfolioComponent'

  export default {
    data: function() {
      return {
        mainMenuLabels: {
          desktop: {
            one: ['Hello', '#page-top'],
            two: ['Education', '#education'],
            three: ['Work Experience', '#works'],
            four: ['Skills', '#skills'],
            five: ['Contact', '#contact']
          },
          mobile: {
            one: ['home', '#page-top'],
            two: ['account_balance', '#education'],
            three: ['work', '#works'],
            four: ['assessment', '#skills'],
            five: ['mail_outline', '#contact']
          }
        }
      }
    },
    props: ['generals', 'education', 'work', 'skills', 'portfolio'],
    components: {
      WorkComponent,
      StudyComponent,
      SkillComponent,
      PortfolioComponent
    }
  }
</script>


<style lang="scss" scoped>
  $titleColor: #FFFFFF;
  h1 {
    color: $titleColor;
  }
</style>