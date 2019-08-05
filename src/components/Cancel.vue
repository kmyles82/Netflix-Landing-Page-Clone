<template>
    <!-- Tab content 1 -->
        <div id="tab-1-content" class="tab-content-item " :class="{'show': active}">
          <div class="tab-1-content-inner">
            <div>
              <p class="text-lg">
                If you decide Netflix isn't for you - no problem. No commitment.
                Cancel online anytime.
              </p>
              <a href="#" class="btn btn-lg">Watch Free For 30 Days</a>
            </div>
            <img src="../assets/tab-content-1.png" alt />
          </div>
        </div>
</template>

<script>
export default {
    name: 'Cancel',
    data(){
        return{
            
            active: false,
        }
    }
}
</script>

<style scoped>


p {
  font-size: 1.2rem;
  padding-top: 0.5rem;
}
#tab-1-content .tab-1-content-inner {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  align-items: center;
  justify-content: center;
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

.text-lg {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

</style>
