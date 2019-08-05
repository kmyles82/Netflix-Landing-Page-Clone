<template>
    <section id="footer">
        <footer class="footer">
        <p class="text-dark">Questions? Call 1-866-579-7172</p>
        <div class="footer-cols">
            <ul>
                <li><a href="">FAQ</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Ways To Watch</a></li>
                <li><a href="">Corporate Information</a></li>
                <li><a href="">Netflix Originals</a></li>
            </ul>
            <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Terms Of Use</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="">Account</a></li>
                <li><a href="">Redeem Gift Cards</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href="">Media Center</a></li>
                <li><a href="">Buy Gift Cards</a></li>
                <li><a href="">Cookie Preferences</a></li>
                <li><a href="">Legal Notices</a></li>
            </ul>
        </div>
    </footer>
    </section>
</template>

<script>
export default {
    name: 'Footer'
}
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

a {
  color: #fff;
  text-decoration: none;
}

p{
    margin: 0.5rem 0;
}

#footer{
    background: #000;
    padding: 3rem 0;
    color: #fff;
}

.footer{
    max-width: 75%;
    margin: 1rem auto;
    overflow: auto;
}

.footer, .footer a{
    color: #999;
    font-size: 0.9rem;
}

.footer p{
    margin-bottom: 1.5rem;
}

.footer .footer-cols{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

}

.footer li{
    line-height: 1.9;
}

@media(max-width: 960px){
    .footer .footer-cols{
        grid-template-columns: repeat(2, 1fr);
    }
    
}    
    

</style>
