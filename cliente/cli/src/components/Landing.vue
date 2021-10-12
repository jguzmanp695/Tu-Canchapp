<template>
    <div>
        <!-- ======= Navbar ======= -->
        <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
            <div class="container py-2 py-md-5">
            <div class="row align-items-start">
                <div class="col-md-2">
                <ul class="custom-menu">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="works.html">Works</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                </div>
                <div class="col-md-6 d-none d-md-block  mr-auto">
                <div class="tweet d-flex">
                    <span class="bi bi-twitter text-white mt-2 mr-3"></span>
                    <div>
                    <p><em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore. <br> <a href="#">t.co/v82jsk</a></em></p>
                    </div>
                </div>
                </div>
                <div class="col-md-4 d-none d-md-block">
                <h3>Hire Me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiisexplicabo inventore. <br> <a href="#">myemail@gmail.com</a></p>
                </div>
            </div>

            </div>
        </div>

        <nav class="navbar navbar-light custom-navbar">
            <div class="container">
            <a class="navbar-brand" href="index.html">Tu-Canchapp.</a>
            <a href="#" class="burger" data-bs-toggle="collapse" data-bs-target="#main-navbar">
                <span></span>
            </a>
            </div>
        </nav>

        <main id="main">

            <!-- ======= Works Section ======= -->
            <section class="section site-portfolio">
            <div class="container">
                <div class="row mb-5 align-items-center">
                <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                    <h2>Bienvenido a tu aplicación deportiva</h2>
                    <p class="mb-0">Siéntete como en casa, apuesta &amp; gana</p>
                </div>
                <div class="col-md-12 col-lg-6 text-start text-lg-end" data-aos="fade-up" data-aos-delay="100">
                    <div id="filters" class="filters">
                    <a href="#" data-filter="*" class="active">Inicio</a>
                    <a href="#" data-filter=".web">Sedes</a>
                    <a href="#" data-filter=".design">Apuesta</a>
                    <a href="#" data-filter=".branding">Contacto</a>
                    <a href="#" data-filter=".photography">Regístrate</a>
                    </div>
                </div>
                </div>
                <div id="portfolio-grid" class="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                <div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" class="item-wrap fancybox">
                    <div class="work-info">
                        <h3>Sede Mosquera</h3>
                        <span>Web</span>
                    </div>
                    <img class="img-fluid" src="@/assets/img/cancha_1.jpg">
                    </a>
                </div>
                <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" class="item-wrap fancybox">
                    <div class="work-info">
                        <h3>Build Indoo</h3>
                        <span>Photography</span>
                    </div>
                    <img class="img-fluid" src="@/assets/img/img_2.jpg">
                    </a>
                </div>
                <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" class="item-wrap fancybox">
                    <div class="work-info">
                        <h3>Cocooil</h3>
                        <span>Branding</span>
                    </div>
                    <img class="img-fluid" src="@/assets/img/img_3.jpg">
                    </a>
                </div>
                <div class="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" class="item-wrap fancybox">
                    <div class="work-info">
                        <h3>Nike Shoe</h3>
                        <span>Design</span>
                    </div>
                    <img class="img-fluid" src="@/assets/img/img_4.jpg">
                    </a>
                </div>
                <div class="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" class="item-wrap fancybox">
                    <div class="work-info">
                        <h3>Kitchen Sink</h3>
                        <span>Photography</span>
                    </div>
                    <img class="img-fluid" src="@/assets/img/img_5.jpg">
                    </a>
                </div>
                <div class="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <a href="work-single.html" class="item-wrap fancybox">
                    <div class="work-info">
                        <h3>Amazon</h3>
                        <span>brandingn</span>
                    </div>
                    <img class="img-fluid" src="@/assets/img/img_6.jpg">
                    </a>
                </div>
                </div>
            </div>
            </section><!-- End  Works Section -->

            <!-- ======= Clients Section ======= -->
            <section class="section">
            <div class="container">
                <div class="row justify-content-center text-center mb-4">
                <div class="col-5">
                    <h3 class="h3 heading">My Clients</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                </div>
                </div>
                <div class="row">
                <div class="col-4 col-sm-4 col-md-2">
                    <a href="#" class="client-logo"><img src="@/assets/img/logo-adobe.png" alt="Image" class="img-fluid"></a>
                </div>
                <div class="col-4 col-sm-4 col-md-2">
                    <a href="#" class="client-logo"><img src="@/assets/img/logo-uber.png" alt="Image" class="img-fluid"></a>
                </div>
                <div class="col-4 col-sm-4 col-md-2">
                    <a href="#" class="client-logo"><img src="@/assets/img/logo-apple.png" alt="Image" class="img-fluid"></a>
                </div>
                <div class="col-4 col-sm-4 col-md-2">
                    <a href="#" class="client-logo"><img src="@/assets/img/logo-netflix.png" alt="Image" class="img-fluid"></a>
                </div>
                <div class="col-4 col-sm-4 col-md-2">
                    <a href="#" class="client-logo"><img src="@/assets/img/logo-nike.png" alt="Image" class="img-fluid"></a>
                </div>
                <div class="col-4 col-sm-4 col-md-2">
                    <a href="#" class="client-logo"><img src="@/assets/img/logo-google.png" alt="Image" class="img-fluid"></a>
                </div>

                </div>
            </div>
            </section><!-- End Clients Section -->

            <!-- ======= Services Section ======= -->
            <section class="section services">
            <div class="container">
                <div class="row justify-content-center text-center mb-4">
                <div class="col-5">
                    <h3 class="h3 heading">My Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                </div>
                </div>
                <div class="row">

                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <i class="bi bi-card-checklist"></i>
                    <h4 class="h4 mb-2">Web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul class="list-unstyled list-line">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                    <li>Non pariatur nisi</li>
                    <li>Magnam soluta quod</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Cumque quae aliquam</li>
                    </ul>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <i class="bi bi-binoculars"></i>
                    <h4 class="h4 mb-2">Mobile Applications</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul class="list-unstyled list-line">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                    <li>Non pariatur nisi</li>
                    <li>Magnam soluta quod</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Cumque quae aliquam</li>
                    </ul>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <i class="bi bi-brightness-high"></i>
                    <h4 class="h4 mb-2">Graphic Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul class="list-unstyled list-line">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                    <li>Non pariatur nisi</li>
                    <li>Magnam soluta quod</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Cumque quae aliquam</li>
                    </ul>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <i class="bi bi-calendar4-week"></i>
                    <h4 class="h4 mb-2">SEO</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit explicabo inventore.</p>
                    <ul class="list-unstyled list-line">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing</li>
                    <li>Non pariatur nisi</li>
                    <li>Magnam soluta quod</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Cumque quae aliquam</li>
                    </ul>
                </div>
                </div>
            </div>
            </section><!-- End Services Section -->

            <!-- ======= Testimonials Section ======= -->
            <section class="section pt-0">
            <div class="container">

                <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                    <div class="testimonial-wrap">
                        <div class="testimonial">
                        <img src="@/assets/img/person_1.jpg" alt="Image" class="img-fluid">
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                            explicabo inventore.</p>
                        </blockquote>
                        <p>&mdash; Jean Hicks</p>
                        </div>
                    </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                    <div class="testimonial-wrap">
                        <div class="testimonial">
                        <img src="@/assets/img/person_2.jpg" alt="Image" class="img-fluid">
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis
                            explicabo inventore.</p>
                        </blockquote>
                        <p>&mdash; Chris Stanworth</p>
                        </div>
                    </div>
                    </div><!-- End testimonial item -->

                </div>
                <div class="swiper-pagination"></div>
                </div>

            </div>
            </section><!-- End Testimonials Section -->

        </main><!-- End #main -->

        <!-- ======= Footer ======= -->
        <app-footer></app-footer>

        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
    components:{
        AppFooter
    }
}
</script>
