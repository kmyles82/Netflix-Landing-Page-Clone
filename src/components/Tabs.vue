<template>
  <div>
    <section class="tabs">
      <div class="container">
          <tabs @clicked="tabClicked" @changed="tabChanged"  >
                <tab name="Cancel anytime">
                    <Cancel/>
            </tab>
                <tab name="Watch anywhere">
                    <Watch/>
            </tab>
                <tab name="Pick your price">
                     <Price/>
            </tab>
        </tabs>
        </div>
    </section>
  </div>
</template>

<script>
import Cancel from './Cancel'
import Watch from './Watch'
import Price from './Price'
import {Tabs, Tab} from 'vue-tabs-component'

export default {
  name: "Tabs",
  components: {
      Cancel,
      Watch,
      Price,
      tabs: Tabs,
      tab: Tab
  },
  data() {
    return {
      
    }
    
  },
  methods: {
        tabClicked (selectedTab) {
            console.log('Current tab re-clicked:' + selectedTab.tab.name);
        },
        tabChanged (selectedTab) {
            console.log('Tab changed to:' + selectedTab.tab.name);
        },
    }
};
</script>

<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  background: #000;
  color: #999;
}
ul {
  list-style: none;
}
h1,
h2,
h3,
h4 {
  color: #fff;
}
a {
  color: #fff;
  text-decoration: none;
}
p {
  margin: 0.5rem 0;
}
img {
  width: 100%;
}

.tabs {
  background: #141414;
  padding-top: 1rem;
  border-bottom: 3px solid #3d3d3d;
}
.tabs .container {
  align-items: center;
  justify-content: center;
  text-align: center;
}
.container {
  max-width: 70%;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}

.tabs .container > div:hover {
  color: #fff;
  cursor: pointer;
}

.tabs .container > div {
  color: #aaa;
  padding: 1.5rem 0;
}

.tabs-component{
    color: #999;
}

.tabs-component-tabs{
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    grid-gap: 1rem !important;
  list-style: none;
}

.tabs-component-tab{

}

.tabs-component-tab-a{
    color: #999 !important;
}

.tab-border {
  border-bottom: 4px solid #e50914;
}





/*

@media (max-width: 960px) {
  .hide-sm {
    display: none;
  }
  .text-xl {
    font-size: 1.5rem;
  }
  .text-lg {
    font-size: 1.3rem;
  }
  .text-md {
    font-size: 1rem;
  }
}
@media (max-width: 700px) {
  #tab-1-content .tab-1-content-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  #tab-2-content .tab-2-content-top {
    display: block;
    text-align: center;
  }
  #tab-2-content .tab-2-content-bottom {
    grid-template-columns: 1fr;
  }
} */
</style>