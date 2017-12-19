<template>
  <div id="app">
    
    <div class="wrapper">
      <right-column :generals="generals" :socials="socials"></right-column>
      <left-column :generals="generals" :education="education" :work="work" :skills="skills" :portfolio="portfolio"></left-column>
    </div>

    <loader></loader>

    <portfolio :generals="generals" :portfolio="portfolio"></portfolio>
      
  </div>
</template>

<script>

  import RightColumn from './components/RightColumn'
  import LeftColumn from './components/LeftColumn'
  import Loader from './components/Loader'
  import Portfolio from './components/Portfolio'  
  import store from './vuex/store'

window.data = {
  generals: {
    siteName: 'Marco Pavan | Front-end developer',
    name: 'Marco Pavan',
    email: 'marcopavan.mp@gmail.com',
    tel: '+39 329 5698985',
    skype: 'marco.pavan_80',
    address: 'via Tagliamento, 10 <br/> 33100 Udine <br/> Italy',
    title: 'Front-end developer',
    shortDesc: 'Professional front-end dev based on Milan (Italy)',
    personalDesc: '<p>Scientific studies background and a good experience in medium-large companies with an international profile. I learned what it means to work in team and what kind of effort is needed to manage large projects.</p>',
    imagesUrl: '/src/assets/images/',
    docsUrl: '/src/assets/docs/'
  },
  
  socials: {
    facebook: {
      url: 'https://www.facebook.com/marco.zamolopavan',
      name: 'Facebook',
      icon: 'fa-facebook'
    },
    linkedin: {
      url: 'https://it.linkedin.com/in/markopavan',
      name: 'LinkedIn',
      icon: 'fa-linkedin'
    }
  },

  education: {
    first: {
      id: '1',
      where: 'Università degli Studi di Udine - Udine University (Italy)',
      what: 'Scienza Naturali Fisiche e Matematiche - Science (Information Technology)',
      icon: 'uniud_logo.png',
      url: 'https://www.uniud.it/'
    },
    second: {
      id: '2',
      where: 'Liceo Scientifico Niccolò Copernico - Science High School',
      what: 'Science-oriented high school',
      icon: 'copernico_logo.png',
      url: 'https://www.liceocopernico.gov.it/'
    }
  },

  work: {
    first: {
      id: '1',
      where: 'Neticon - Milano',
      what: 'Senior Front end Web Developer',
      howLong: '2016 - ongoing',
      icon: 'neticon_logo.png',
      url: 'http://www.neticon.it/home/',
      description: 'Web agency based in Milan. <br/>Main clients: Luxottica, Ray-Ban, Persol, Versace, Sunglass Hut.<br/> One project I used to work on: <a title="A projetc I worked on in Neticon" href="https://www.ray-ban.com/italy/personalizza">Ray-Ban Remix</a>'
    },
    second: {
      id: '2',
      where: 'YOOX Group - Bologna',
      what: 'Front end Web Developer',
      howLong: '2012 - 2015',
      icon: 'yoox_logo.png',
      url: 'https://www.yoox.com',
      description: 'Web interface building for fashion e-commerce sites: thecorner.com, shoescribe.com. <br/> Think, re-think, development and maintenance of front-end sensible site, where the user experience can give a real feedback and value for the company.'
    },
    third: {
      id: '3',
      where: 'Usablenet, Inc. - Udine',
      what: 'Front end Web Developer',
      howLong: '2010 - 2012',
      role: 'Team Leader',
      icon: 'usablenet_logo.png',
      url: 'https://usablenet.com/',
      description: 'Web mobile development. XSLT transformation and optimization from original (desktop) site to a brand new mobile site.'
    },
    fourth: {
      id: '4',
      where: 'Italian Army - Codroipo (Udine)',
      what: 'Professional Volunteer private',
      howLong: '2000 - 2001',
      icon: 'novara_logo.png',
      url: 'http://www.esercito.difesa.it/organizzazione/capo-di-sme/Comando-Forze-Operative-Nord/Divisione-Friuli/Brigata-Corazzata-Ariete/Reggimento-Lancieri-di-Novara-5',
      description: ''
    },
    five: {
      id: '5',
      where: 'Others',
      what: 'Professional Volunteer private',
      howLong: '1998 - 2008',
      url: '',
      description: 'HelpPhone: Telephone assistance to customers regarding the security of credit and debit cards. <br/> Autotrasporti Gregoris Marisa: Hauler'
    }
  },

  skills: {
    one: {
      id: '1',
      what: 'Client-side development',
      level: '90',
      icon: 'browser.png'
    },
    two: {
      id: '2',
      what: 'Server-side programming',
      level: '60',
      icon: 'server.png'
    },
    three: {
      id: '3',
      what: 'Object-oriented programming',
      level: '80',
      icon: 'java.png'
    },
    four: {
      id: '4',
      what: 'Agile programming',
      level: '70',
      icon: 'bolt.png'
    },
    five: {
      id: '5',
      what: 'Web Usability/Accessibility',
      level: '80',
      icon: 'teamwork.png'
    },
    six: {
      id: '6',
      what: 'Database',
      level: '50',
      icon: 'database.png'
    }
  },

  portfolio: {
    one: {
      id: 1,
      name: 'Trading Radar',
      icon: 'tradingradar.png',
      logo: 'tradingradar-logo.png',
      description: 'Trading Radar scouts the Web searching for data, news, suggestions about Italian FTSE MIB market stocks. It collects data and shows the user the a brief summary whit real-time press release, filters and detailed techinal infos. <br/>Registered user can also put their own analysis for each stock.'
    },
    two: {
      id: 2,
      name: 'Ray-Ban Lenses Prescription',
      icon: 'ray-ban-lenses-prescription.png',
      logo: 'ray-ban-logo.png',
      description: 'A promotional page to describe the new Prescription Lenses offer from Ray-Ban'
    } ,
    three: {
      id: 3,
      name: 'Il Giardiniere',
      icon: 'ilgiardiniere.png',
      logo: 'ilgiardiniere-logo.png',
      description: 'A simple Web page to support a local gardener service. Major effort was to achive the besto position on Google SERP page for some sensible keywords (try: "giardiniere a udine")'
    }   
  }

}

export default {
  name: 'app',
  components: {
    RightColumn,
    LeftColumn,
    Loader,
    Portfolio
  },
  store,
  data: function() {
    return window.data //as function to avoid scope-leak
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  $titleColor: #ff0000;
  #app {
    h1 {
      color: $titleColor;
    }
  }
</style>