<template>
  <div>
    <section class="tabs">
      <div class="container">
        <div id="tab-1" class="tab-item tab-border">
          <i class="fas fa-door-open fa-3x" />
          <p class="hide-sm">Cancel anytime</p>
        </div>
        <div id="tab-2" class="tab-item">
          <i class="fas fa-tablet-alt fa-3x" />
          <p class="hide-sm">Watch anywhere</p>
        </div>
        <div id="tab-3" class="tab-item">
          <i class="fas fa-tags fa-3x" />
          <p class="hide-sm">Pick your price</p>
        </div>
      </div>
    </section>
    <section class="tab-content">
        <div class="container">
            <!-- Tab content 1 -->
            <!-- <div id="tab-1-content" class="tab-content-item show">
                <div class="tab-1-content-inner">
                    <div>
                        <p class="text-lg">
                            If you decide Netflix isn't for you - no problem. No commitment.
                            Cancel online anytime.
                        </p>
                        <a href="#" class="btn btn-lg">Watch Free For 30 Days</a>
                    </div>
                    <img src="../assets/tab-content-1.png" alt="">
                </div>
            </div> -->
            <!-- <div id="tab-2-content" class="tab-content-item">
                <div class="tab-2-content-top">
                    <p class="text-lg">Watch TV shows and movies anytime, anywhere - personlized for you</p>
                    <a href="" class="btn btn-lg">Watch Free For 30 Days</a>
                </div>
                <div class="tab-2-content-bottom">
                    <div>
                        <img src="../assets/tab-content-2-1.png" alt="">
                        <p class="text-md">Watch on your TV</p>
                        <p class="text-dark">Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more</p>
                    </div>
                    <div>
                        <img src="../assets/tab-content-2-2.png" alt="">
                        <p class="text-md">Watch instantly or download later</p>
                        <p class="text-dark">Available on phone and tablet, wherever you go.</p>
                    </div>
                    <div>
                        <img src="../assets/tab-content-2-3.png" alt="">
                        <p class="text-md">Use on any computer</p>
                        <p class="text-dark">Watch right on Netflix.com</p>
                    </div>
                </div>
            </div> -->
            <div id="tab-3-content" class="tab-content-item">
                <div class="text-center tab-3-content-top">
                    <p class="text-lg">Choose one plan and watch everything on Netflix</p>
                    <a href="" class="btn btn-lg">Watch Free For 30 Days</a>
                </div>
                <div class="tab-3-content-bottom">
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly price after free month ends on 9/4/2019</td>
                                <td>$8.99</td>
                                <td>$12.99</td>
                                <td>$15.99</td>
                            </tr>
                            <tr>
                                <td>HD Available</td>
                                <td><i class="fas fa-times"></i></td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Ultra HD Available</td>
                                <td><i class="fas fa-times"></i></td>
                                <td><i class="fas fa-times"></i></td>
                                <td><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Screens you can watch at the same time</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Watch on your laptop, TV, phone and tablet</td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and TV shows</td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>First month free</td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                                <td><i class="fas fa-check"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Tabs"
};
</script>

<style scoped>
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

p{
    margin: 0.5rem 0;
}

img{
    width: 100%;
}

.tabs {
  background: #141414;
  padding-top: 1rem;
  border-bottom: 3px solid #3d3d3d;
}

.tabs .container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
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

.tabs p {
  font-size: 1.2rem;
  padding-top: 0.5rem;
}

.tabs .container > div {
  color: #aaa;
  padding: 1.5rem 0;
}

.tabs .container > div:hover {
  color: #fff;
  cursor: pointer;
}

.tab-border {
  border-bottom: 4px solid #e50914;
}

.tab-content{
    background: #000;
    padding: 3rem 0;
    color: #fff;
}

#tab-1-content .tab-1-content-inner{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
}

#tab-2-content .tab-2-content-top,
#tab-3-content .tab-3-content-top{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
}

#tab-2-content .tab-2-content-bottom{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.btn{
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
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    border-radius: 2px;
}

.btn:hover{
    opacity: 0.9;
}

.btn-lg{
    font-size: 1rem;
    padding: 0.8rem 1.3rem;
    text-transform: uppercase;
}

.text-xl{
    font-size: 2rem;
    margin-bottom: 1rem;
}

.text-lg{
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.text-md{
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.text-center{
    text-align: center;
}

.text-dark{
    color: #999;
}
</style>
