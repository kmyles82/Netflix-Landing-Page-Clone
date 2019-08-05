<template>
     <div id="tab-2-content" class="tab-content-item">
          <div class="tab-2-content-top">
            <p class="text-lg">Watch TV shows and movies anytime, anywhere - personlized for you</p>
            <a href class="btn btn-lg">Watch Free For 30 Days</a>
          </div>
          <div class="tab-2-content-bottom">
            <div>
              <img src="../assets/tab-content-2-1.png" alt />
              <p class="text-md">Watch on your TV</p>
              <p
                class="text-dark"
              >Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
            </div>
            <div>
              <img src="../assets/tab-content-2-2.png" alt />
              <p class="text-md">Watch instantly or download later</p>
              <p class="text-dark">Available on phone and tablet, wherever you go.</p>
            </div>
            <div>
              <img src="../assets/tab-content-2-3.png" alt />
              <p class="text-md">Use on any computer</p>
              <p class="text-dark">Watch right on Netflix.com</p>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Watch',
    data(){
        return{
            active: false,
        }
    }
}
</script>

<style scoped>


#tab-2-content .tab-2-content-top{
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
}

#tab-2-content .tab-2-content-bottom {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn {
  display: inline-block;
  background: #e50914;
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  outline: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  border-radius: 2px;
}
.btn:hover {
  opacity: 0.9;
}
.btn-lg {
  font-size: 1rem;
  padding: 0.8rem 1.3rem;
  text-transform: uppercase;
}
.text-md {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  padding-top: 0.5rem;
}


.text-dark {
  color: #999;
}
</style>
