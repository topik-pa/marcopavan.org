<template>
  <div id="app">

    <div class="wrapper">
      <right-column :generals="generals" :socials="socials"></right-column>
      <left-column :generals="generals" :education="education" :work="work" :skills="skills"></left-column>
    </div>

    <loader></loader>

    <portfolio></portfolio>
      
  </div>
</template>

<script>

  import RightColumn from './components/RightColumn'
  import LeftColumn from './components/LeftColumn'
  import Loader from './components/Loader'
  import Portfolio from './components/Portfolio'  

window.data = {
  generals: {
    siteName: 'Marco Pavan personal site',
    name: 'Marco Pavan',
    email: 'marcopavan.mp@gmail.com',
    tel: '+39 329 5698985',
    skype: 'marco.pavan_80',
    address: 'via Tagliamento, 10 <br/> 33100 Udine <br/> Italy',
    title: 'Professional Web Developer',
    shortDesc: 'I love <strong>Programming</strong>, <strong>Photografy</strong> and <strong>Mountain bike</strong>',
    personalDesc: '...I\'m a <i class="text-color">Front end Web Developer</i> from <i>Udine</i>, Italy. <br/>I have a technical and scientific studies background and a good experience in medium- large companies with an international profile. During my previous jobs I learned what it means to work in team and what kind of effort is needed to manage large projects. During 2016 I choose to undertake the study of the Russian language and culture to broaden my education in an area less technical and more humanistic. I hope to find an activity that lets me to combine and to learn more about these two life aspects. ',  
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
      icon: 'uniud_logo.png'
    },
    second: {
      id: '2',
      where: 'Liceo Scientifico Niccol&ograve; Copernico - Science High School',
      what: 'Science oriented high school',
      icon: 'copernico_logo.png'
    }
  },

  work: {
    first: {
      id: '1',
      where: 'Neticon',
      what: 'Senior Front end Web Developer',
      howLong: '2016 - ongoing',
      icon: 'neticon_logo.png'
    },
    second: {
      id: '2',
      where: 'YOOX Group',
      what: 'Front end Web Developer',
      howLong: '2012 - 2015',
      icon: 'yoox_logo.png'
    },
    third: {
      id: '3',
      where: 'Usablenet, Inc.',
      what: 'Front end Web Developer',
      howLong: '2010 - 2012',
      role: 'Team Leader',
      icon: 'usablenet_logo.png'
    },
    fourth: {
      id: '4',
      where: 'Italian Army',
      what: 'Professional Volunteer private',
      howLong: '2000 - 2001',
      icon: 'novara_logo.png'
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
  data () {
    return window.data
  }
}
</script>

<style scoped>
#app {
  
}
</style>