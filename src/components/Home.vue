<template>
  <div >
    <Header/>
    <Tabs/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Tabs from './Tabs'
import Footer from './Footer'

export default {
  name: 'Home',
  components:{
    Header,
    Tabs,
    Footer
  },
  data(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
