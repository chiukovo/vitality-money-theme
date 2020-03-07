<template>
  <div>
    <div class="page-wrapper">
      <!-- Preloader -->
      <div class="loader-wrap">
        <div class="preloader">
          <div class="preloader-close">Preloader Close</div>
        </div>
        <div class="layer layer-one"><span class="overlay"></span></div>
        <div class="layer layer-two"><span class="overlay"></span></div>
        <div class="layer layer-three"><span class="overlay"></span></div>
      </div>

      <!-- Main Header -->
      <header class="main-header">
        <!-- Header Top -->
        <div class="header-top">
          <div class="auto-container">
            <div class="inner">
              <div class="top-left">
                <!--Logo-->
                <div class="logo-box">
                  <div class="logo"><a href="index.html"><img src="/tt2/images/logo.png" alt=""></a></div>
                </div>
              </div>

              <div class="top-right">
                <a href="#" class="theme-btn btn-style-two"><span class="btn-title">登入</span></a>
              </div>
            </div>
          </div>
        </div>

        <!-- Header Upper -->
        <div class="header-upper">
          <div class="auto-container">
            <div class="inner-container">
              <!--Nav Box-->
              <div class="nav-outer clearfix">
                <!--Mobile Navigation Toggler-->
                <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>

                <!-- Main Menu -->
                <nav class="main-menu navbar-expand-md navbar-light">
                  <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                      <li><a href="#">首頁</a></li>
                      <li><a href="#">交易平台</a></li>
                      <li><a href="#">多國語言</a></li>
                      <li><a href="#">意見調查</a></li>
                      <li><a href="#">註冊</a></li>
                    </ul>
                  </div>
                </nav>
                <!-- Main Menu End-->
              </div>
            </div>
          </div>
        </div>
        <!--End Header Upper-->

        <!-- Sticky Header  -->
        <div class="sticky-header">
          <div class="auto-container clearfix">
            <!--Logo-->
            <div class="logo pull-left">
              <a href="index.html" title=""><img src="/tt2/images/logo.png" alt="" title=""></a>
            </div>
            <!--Right Col-->
            <div class="pull-right">
              <!-- Main Menu -->
              <nav class="main-menu clearfix">
                <!--Keep This Empty / Menu will come through Javascript-->
              </nav>
              <!-- Main Menu End-->
            </div>
          </div>
        </div>
        <!-- End Sticky Menu -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
          <div class="menu-backdrop"></div>
          <div class="close-btn"><span class="icon flaticon-cancel"></span></div>

          <nav class="menu-box">
            <div class="nav-logo"><a href="index.html"><img src="/tt2/images/logo.png" alt="" title=""></a></div>
            <div class="menu-outer">
              <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            </div>
            <!--Social Links-->
            <div class="social-links">
              <ul class="clearfix">
                <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                <li><a href="#"><span class="fab fa-youtube"></span></a></li>
              </ul>
            </div>
          </nav>
        </div>
        <!-- End Mobile Menu -->
      </header>
      <!-- End Main Header -->

      <!--Search Popup-->
      <div id="search-popup" class="search-popup">
        <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
        <div class="popup-inner">
          <div class="overlay-layer"></div>
          <div class="search-form">
            <form method="post" action="index.html">
              <div class="form-group">
                <fieldset>
                  <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here"
                    required>
                  <input type="submit" value="Search Now!" class="theme-btn">
                </fieldset>
              </div>
            </form>
            <br>
            <h3>TOP Trader 2</h3>
            <ul class="recent-searches">
              <li><a href="#">Finance</a></li>
              <li><a href="#">Idea</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Growth</a></li>
              <li><a href="#">Plan</a></li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Banner Section -->
      <section class="banner-section">
        <div class="banner-carousel theme_carousel owl-theme owl-carousel"
          data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 300, "responsive":{ "0" :{ "items": "1" }, "768" :{ "items" : "1" } , "1000":{ "items" : "1" }}}'>
          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/1.jpg')"></div>

            <div class="auto-container">
              <div class="content-box">
                <h3>Making Your Business Idea</h3>
                <h2>Finan<span>dox </span></h2>
                <div class="text">Our company is one of the world’s leading management <br>consulting firms. Get in
                  touch here asap.</div>
                <div class="btn-box"><a href="#" class="theme-btn btn-style-one"><span class="btn-title">-- Our Services
                      --</span></a><a href="#" class="theme-btn btn-style-two"><span class="btn-title">-- Learn More
                      --</span></a></div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/5.jpg')"></div>

            <div class="auto-container">
              <div class="content-box">
                <h3>Making Your Business Idea</h3>
                <h2>Finan<span>dox </span></h2>
                <div class="text">Our company is one of the world’s leading management <br>consulting firms. Get in
                  touch here asap.</div>
                <div class="btn-box"><a href="#" class="theme-btn btn-style-one"><span class="btn-title">-- Our Services
                      --</span></a><a href="#" class="theme-btn btn-style-two"><span class="btn-title">-- Learn More
                      --</span></a></div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <!--End Banner Section -->

      <!-- Welcome Setion -->
      <section class="welcome-section pt-0">
        <div class="auto-container">
          <div class="wrapper-box">
            <div class="row m-0">
              <!-- Welcome Block One -->
              <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box">
                  <div class="icon-box"><span class="flaticon-analysis"></span></div>
                  <h2>Business Analysis</h2>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore. </div>
                  <div class="read-more"><a href="#">Read More</a></div>
                </div>
              </div>
              <!-- Welcome Block One -->
              <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box" style="background-image: url(/tt2/images/resource/image-1.jpg);">
                  <div class="icon-box"><span class="flaticon-tax"></span></div>
                  <h2>Save Your Tax</h2>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore. </div>
                  <div class="read-more"><a href="#">Read More</a></div>
                </div>
              </div>
              <!-- Welcome Block One -->
              <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box">
                  <div class="icon-box"><span class="flaticon-work-1"></span></div>
                  <h2>Business Analysis</h2>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore. </div>
                  <div class="read-more"><a href="#">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section class="about-section">
        <div class="auto-container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="image-wrapper">
                <div class="image-one">
                  <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/image-2.jpg" alt="">
                </div>
                <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="caption">F.</div>
                  <div class="image-outer"><img class="lazy-image owl-lazy"
                      src="/tt2/images/resource/image-spacer-for-validation.png"
                      data-src="/tt2/images/resource/image-3.jpg" alt=""></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content-box">
                <div class="sec-title">
                  <div class="sub-title">TOP Trader 2</div>
                  <h3>交易全球期貨的最佳網頁版程式<br>帶給您最佳的交易體驗</h3>
                  <div class="text">
                    <p>TT2 是一個全球期貨交易平臺</p>
                    <p>它提供了用於全面價格分析的優良工具， 使用TT2網上交易平台WebTrader</p>
                    <p>它能從任何流覽器和作業系統(Windows, Mac, Linux)與任裝置隨時隨地在全球進行交易與豐富的交易功能</p>
                    <p>您只需要登錄平台頁面即可進行交易，省卻下載和安裝程式的繁瑣流程。享受便捷的圖形交易體驗</p>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <div class="auto-container">
          <div class="wrapper-box">
            <div class="left-column">
              <div class="services-content">
                <div class="sec-title light">
                  <div class="sub-title">Our Services</div>
                  <h2>What Actually We <br>Do Here.</h2>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="icon"><img src="/tt2/images/icons/icon-3.png" alt=""></div>
                  <h2>Capital Market</h2>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. </div>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="icon"><img src="/tt2/images/icons/icon-4.png" alt=""></div>
                  <h2>Insurance & Planning</h2>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. </div>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="icon"><img src="/tt2/images/icons/icon-5.png" alt=""></div>
                  <h2>Financial Strategy</h2>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. </div>
                </div>
              </div>
            </div>
            <div class="right-column">
              <!-- Fact Counter -->
              <div class="fact-counter">
                <div class="border-box">
                  <div class="border_top"></div>
                  <div class="border_bottom"></div>
                  <div class="border_middile"></div>
                </div>
                <div class="row">

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-6.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="90">0</span><span>%</span>
                        </div>
                        <div class="counter-title">Business Monitoring</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-7.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="71">0</span><span>%</span>
                        </div>
                        <div class="counter-title">Business Growth</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-8.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="33">0</span><span>%</span>
                        </div>
                        <div class="counter-title">Financial Plan</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-9.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="42">0</span><span>%</span>
                        </div>
                        <div class="counter-title">Finance Consulting</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-10.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="69">0</span><span>%</span>
                        </div>
                        <div class="counter-title">Data Analysis</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-11.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="10">0</span><span>%</span>
                        </div>
                        <div class="counter-title">business Strategy</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="author-box" style="background-image: url(/tt2/images/background/image-1.jpg);">
                <div class="author-info">
                  <div class="author-thumb"><img src="/tt2/images/resource/author-1.jpg" alt=""></div>
                  <h2>Rosalina D. William</h2>
                  <div class="designation">Founder</div>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                </div>
                <div class="signature"><img src="/tt2/images/resource/signature.png" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section class="gallery-section">
        <div class="sortable-masonry">

          <div class="auto-container">
            <div class="row m-0 justify-content-md-between align-items-center">
              <div class="sec-title">
                <div class="sub-title">Portfolio</div>
                <h2>Our Works</h2>
              </div>
              <!--Filter-->
              <div class="filters text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <ul class="filter-tabs filter-btns">
                  <li class="active filter" data-role="button" data-filter=".all"><span>Financial</span></li>
                  <li class="filter" data-role="button" data-filter=".category-1"><span>Banking</span></li>
                  <li class="filter" data-role="button" data-filter=".category-2"><span>Insurance </span></li>
                  <li class="filter" data-role="button" data-filter=".category-3"><span>Family</span></li>
                  <li class="filter" data-role="button" data-filter=".category-4"><span>Business</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="auto-container">
            <div class="items-container row">
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-10.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-10.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-4">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-11.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-11.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-1 category-4">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-12.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-12.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-13.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-13.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2 category-5">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-14.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-14.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-1 category-4">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-15.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-15.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-16.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-16.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- Gallery Block One -->
              <div class="col-lg-3 col-md-6 gallery-block-one all category-3 category-2 category-5">
                <div class="inner-box">
                  <div class="image">
                    <img src="/tt2/images/gallery/gallery-17.jpg" alt="">
                  </div>
                  <div class="caption-title">
                    <h5>Finance</h5>
                    <h3><a href="#">Miranda Hilix Bar</a></h3>
                    <div class="view-project"><a data-fancybox="example gallery"
                        href="/tt2/images/gallery/gallery-17.jpg" class="zoom-btn"><span>+</span></a></div>
                  </div>
                </div>
              </div>
              <!-- End block -->
            </div>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section" style="background-image: url(/tt2/images/background/image-2.jpg);">
        <div class="auto-container">
          <div class="default-video-box text-center wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms">
            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s"
              class="overlay-link lightbox-image video-fancybox ripple"><span class="fas fa-play"></span></a>
          </div>
          <div class="sec-title light text-center">
            <div class="sub-title">Intro Video</div>
            <h2>Our Latest Insights <br>& Overview.</h2>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="why-chooseus-section">
        <div class="auto-container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="content-box">
                <div class="sec-title">
                  <div class="sub-title">Why Choose Us</div>
                  <h3>即時穩定的報價與最齊全的商品</h3>
                </div>

                <!-- Tab panes -->
                <div class="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="tab-pane fadeInUp animated active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                    <div class="clearfix">
                      <div class="text">
                        <p>為避免報價誤差與延遲TT2平台與國外知名報價廠商合作</p>
                        <p>透過精密演算法呈現出與國外同步且精準的報價</p>
                        <p>無論何時何地，您都可以在TT5網頁版上查看最精準穩定的報價與最齊全的商品，對全球期貨指數做出理性的交易決策</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-wrapper">
                <div class="image-one"><img class="lazy-image owl-lazy"
                    src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/image-6.jpg" alt=""></div>
                <div class="image-two"><img class="lazy-image owl-lazy"
                    src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/image-5.jpg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section" style="background-image: url(/tt2/images/background/image-3.jpg);">
        <div class="auto-container">
          <div class="sec-title text-center">
            <div class="sub-title">Our Team</div>
            <h2>Leadership Team</h2>
          </div>
          <div class="row">
            <!-- Team Block One -->
            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
              <div class="inner-box">
                <div class="image"><img class="lazy-image owl-lazy"
                    src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/team-1.jpg" alt=""></div>
                <div class="content">
                  <div class="designation">Founder</div>
                  <h3>Rosalina D. William</h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.</div>
                </div>
              </div>
            </div>
            <!-- Team Block One -->
            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
              <div class="inner-box">
                <div class="image"><img class="lazy-image owl-lazy"
                    src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/team-2.jpg" alt=""></div>
                <div class="content">
                  <div class="designation">CEO</div>
                  <h3>Velavos H. DesuJa</h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.</div>
                </div>
              </div>
            </div>
            <!-- Team Block One -->
            <div class="col-lg-4 team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
              <div class="inner-box">
                <div class="image"><img class="lazy-image owl-lazy"
                    src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/team-3.jpg" alt=""></div>
                <div class="content">
                  <div class="designation">Developer</div>
                  <h3>Abdur Rahman J.</h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="auto-container">
          <div class="row">
            <div class="col-lg-6">
              <div class="sec-title">
                <div class="sub-title">Write Here</div>
                <h2>Get In Touch</h2>
              </div>
              <!-- Contact Form-->
              <div class="contact-form">
                <form method="post" action="sendemail.php" id="contact-form">
                  <div class="row clearfix">
                    <div class="col-md-12 form-group">
                      <label for="name">Enter your name</label>
                      <input type="text" name="username" id="name" placeholder="Enter name here......" required="">
                      <i class="fas fa-user"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <label for="email">Enter your email</label>
                      <input type="email" name="email" id="email" placeholder="Enter email here......" required="">
                      <i class="fas fa-envelope"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <label for="message">Enter your message</label>
                      <textarea name="message" id="message" placeholder="Enter message here......"></textarea>
                      <i class="fas fa-edit"></i>
                    </div>

                    <div class="col-md-12 form-group">
                      <button class="theme-btn btn-style-one" type="submit" name="submit-form"><span
                          class="btn-title">Get In Touch</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="sec-title">
                <div class="sub-title">Get Us Here</div>
                <h2>Contact Us</h2>
              </div>
              <div class="contact-info">
                <div class="border-box">
                  <div class="border_top"></div>
                  <div class="border_middile"></div>
                </div>
                <div class="row">
                  <div class="info-column col-md-6">
                    <div class="icon-box">
                      <div class="icon"><span class="flaticon-email-6"></span></div>
                      <h3>Email Address</h3>
                      <ul>
                        <li><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                        <li><a href="mailto:jobs@exampleco.com">jobs@exampleco.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-md-6">
                    <div class="icon-box">
                      <div class="icon"><span class="flaticon-call-1"></span></div>
                      <h3>Phone Number</h3>
                      <ul>
                        <li><a href="tel:+8976765654654">+897 676 5654 654</a></li>
                        <li><a href="tel:+908(097)56476576">+908(097) 564 765 76</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-md-6">
                    <div class="icon-box">
                      <div class="icon"><span class="flaticon-location"></span></div>
                      <h3>Office Address</h3>
                      <ul>
                        <li>12/A, Romania City Town Hall <br>New Joursey, UK</li>
                      </ul>
                    </div>
                  </div>
                  <div class="info-column col-md-6">
                    <div class="icon-box">
                      <div class="icon"><span class="flaticon-worldwide"></span></div>
                      <h3>Web Connect</h3>
                      <ul>
                        <li><a href="http://example.com/">example.com</a></li>
                        <li><a href="http://jobs.example.com/">jobs.example.com</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- News Section -->
      <section class="news-section">
        <div class="sec-bg" style="background-image: url(/tt2/images/background/image-4.jpg);"></div>
        <div class="auto-container">
          <div class="sec-title text-center light">
            <div class="sub-title">News</div>
            <h2>News From Resource</h2>
          </div>
          <div class="row">
            <!-- News Block One -->
            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
              <div class="inner-box">
                <div class="image"><a href="#"><img class="lazy-image owl-lazy"
                      src="/tt2/images/resource/image-spacer-for-validation.png"
                      data-src="/tt2/images/resource/news-1.jpg" alt=""></a></div>
                <div class="lower-content">
                  <div class="category">Business</div>
                  <ul class="post-meta">
                    <li><a href="#"><i class="far fa-calendar-alt"></i>24th March 2020</a></li>
                    <li><a href="#"><i class="far fa-user"></i>By Admin</a></li>
                  </ul>
                  <h3><a href="blog-details.html">UX is best solution for your <br>business & make noise.</a></h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or
                    incididunt ut labore et dolore</div>
                </div>
              </div>
            </div>
            <!-- News Block One -->
            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
              <div class="inner-box">
                <div class="image"><a href="#"><img class="lazy-image owl-lazy"
                      src="/tt2/images/resource/image-spacer-for-validation.png"
                      data-src="/tt2/images/resource/news-2.jpg" alt=""></a></div>
                <div class="lower-content">
                  <div class="category">Business</div>
                  <ul class="post-meta">
                    <li><a href="#"><i class="far fa-calendar-alt"></i>26th March 2020</a></li>
                    <li><a href="#"><i class="far fa-user"></i>By Admin</a></li>
                  </ul>
                  <h3><a href="blog-details.html">Business consultant is involved in the planning.</a></h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or
                    incididunt ut labore et dolore</div>
                </div>
              </div>
            </div>
            <!-- News Block One -->
            <div class="news-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
              <div class="inner-box">
                <div class="image"><a href="#"><img class="lazy-image owl-lazy"
                      src="/tt2/images/resource/image-spacer-for-validation.png"
                      data-src="/tt2/images/resource/news-3.jpg" alt=""></a></div>
                <div class="lower-content">
                  <div class="category">Business</div>
                  <ul class="post-meta">
                    <li><a href="#"><i class="far fa-calendar-alt"></i>28th March 2020</a></li>
                    <li><a href="#"><i class="far fa-user"></i>By Admin</a></li>
                  </ul>
                  <h3><a href="blog-details.html">Business consultant is a professional who analyzes.</a></h3>
                  <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or
                    incididunt ut labore et dolore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Award Section -->
      <section class="award-section pt-0">
        <div class="year">2020</div>
        <div class="auto-container">
          <div class="sec-title text-center">
            <div class="sub-title">Awards</div>
            <h2>Get Awards</h2>
          </div>
          <div class="award-image">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img
                    src="/tt2/images/resource/award-1.png" alt=""></div>
                <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img
                    src="/tt2/images/resource/award-2.png" alt=""></div>
              </div>
              <div class="col-lg-4 order-lg-2">
                <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img
                    src="/tt2/images/resource/award-3.png" alt=""></div>
                <div class="image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms"><img
                    src="/tt2/images/resource/award-4.png" alt=""></div>
              </div>
              <div class="col-lg-4 wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="image"><img src="/tt2/images/resource/award-5.png" alt=""></div>
              </div>

            </div>
          </div>
          <div class="feature-image">
            <div class="image-one"><img src="/tt2/images/resource/image-7.jpg" alt=""></div>
            <div class="image-two"><img src="/tt2/images/resource/image-8.jpg" alt=""></div>
            <div class="image-three"><img src="/tt2/images/resource/image-9.jpg" alt=""></div>
          </div>
        </div>
      </section>

      <!-- Main Footer -->
      <footer class="main-footer">
        <div class="auto-container">
          <!--Widgets Section-->
          <div class="widgets-section">
            <div class="row clearfix">

              <!--Column-->
              <div class="column col-lg-4">
                <div class="footer-widget logo-widget">
                  <div class="widget-content">
                    <div class="footer-logo">
                      <a href="index.html"><img class="lazy-image"
                          src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/footer-logo.png" alt="" /></a>
                    </div>
                    <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip.</div>
                    <ul class="social-links clearfix">
                      <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                      <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                      <li><a href="#"><span class="fab fa-vimeo-v"></span></a></li>
                      <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column col-lg-4">
                <div class="footer-widget links-widget">
                  <div class="widget-content">
                    <h3>Links</h3>
                    <div class="row">
                      <div class="col-md-6">
                        <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Services</a></li>
                          <li><a href="#">Portfolio</a></li>
                          <li><a href="#">Pricing</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </div>
                      <div class="col-md-6">
                        <ul>
                          <li><a href="#">News</a></li>
                          <li><a href="#">Press Release</a></li>
                          <li><a href="#">Case Study</a></li>
                          <li><a href="#">Terms</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column col-lg-4">
                <div class="footer-widget instagram-widget">
                  <h3>Photo Showcase</h3>
                  <div class="inner-box">
                    <div class="wrapper-box">
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-1.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-1.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-2.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-2.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-3.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-3.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-4.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-4.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-5.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-5.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-6.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-6.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-7.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-7.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-8.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-8.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                      <div class="image">
                        <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                          data-src="/tt2/images/gallery/gallery-9.jpg" alt="">
                        <div class="overlay-link"><a href="/tt2/images/gallery/gallery-9.jpg" class="lightbox-image"
                            data-fancybox="gallery"><span class="fa fa-plus"></span></a></div>
                      </div>
                    </div>
                    <!-- /.gallery-wrapper -->
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="auto-container">
          <div class="footer-bottom">
            <div class="copyright">Copyright By<a href="#">Template_path</a> - 2020</div>
          </div>
        </div>
      </footer>

    </div>
    <!--End pagewrapper-->

    <!--Scroll to top-->
    <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fal fa-arrow-circle-up"></span></div>
  </div>
</template>

<script>
  import '@/assets/tt2/style.scss'
  import axios from 'axios'
  import qs from 'qs'
  export default {
    head() {
      return {
        htmlAttrs: {
          class: ''
        },
        meta: [{
            charset: 'utf-8'
          },
          {
            name: 'viewport',
            content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
          },
        ],
        script: [{
            src: '/tt2/js/jquery.js'
          },
          {
            src: '/tt2/js/popper.min.js',
            body: true
          },
          {
            src: '/tt2/js/bootstrap.min.js',
            body: true
          },
          {
            src: '/tt2/js/bootstrap-select.min.js',
            body: true
          },
          {
            src: '/tt2/js/jquery.fancybox.js',
            body: true
          },
          {
            src: '/tt2/js/isotope.js',
            body: true
          },
          {
            src: '/tt2/js/owl.js',
            body: true
          },
          {
            src: '/tt2/js/appear.js',
            body: true
          },
          {
            src: '/tt2/js/wow.js',
            body: true
          },
          {
            src: '/tt2/js/lazyload.js',
            body: true
          },
          {
            src: '/tt2/js/scrollbar.js',
            body: true
          },
          {
            src: '/tt2/js/TweenMax.min.js',
            body: true
          },
          {
            src: '/tt2/js/script.js',
            body: true
          },
        ],
        link: [{
            rel: 'stylesheet',
            href: '/tt2/css/bootstrap.css'
          },
          {
            rel: 'stylesheet',
            href: '/tt2/css/style.css'
          },
          {
            rel: 'stylesheet',
            href: '/tt2/css/responsive.css'
          },
          {
            rel: 'stylesheet',
            href: '/tt2/css/color.css'
          },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet'
          },
        ]
      }
    },
    data() {
      return {
        loading: true,
        account: '',
        password: '',
        rememberMe: '',
        type: 'b',
        dt_url: '',
        horse_url: '',
      }
    },
    mounted() {
      this.loading = false
      this.dt_url = process.env.NUXT_ENV_DT_URL
      this.horse_url = process.env.NUXT_ENV_HORSE_URL
      //remember data
      const remember = this.$store.state.localStorage.remember
      this.rememberMe = remember.me
      if (this.rememberMe) {
        this.account = remember.account
        this.password = remember.password
      }
    },
    methods: {
      async doLogin() {
        let _this = this
        if (this.account == '' || this.password == '') {
          alert('帳號或密碼不得為空', '注意!')
          return
        }
        this.loading = true
        await axios.post(process.env.NUXT_ENV_API_URL + "/validation", qs.stringify({
            LoginAccount: this.account,
            LoginPassword: this.password,
            LoginMobile: 0,
          }))
          .then(response => {
            const result = response.data
            if (result['Code'] <= 0) {
              alert(result['ErrorMsg'], '注意!')
              _this.loading = false
              return
            }
            //記住我
            _this.$store.commit('setRemember', {
              me: _this.rememberMe,
              account: _this.account,
              password: _this.password,
            })
            const params = '/go?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document
              .URL
            if (_this.type == 'b') {
              location.href = _this.horse_url + params
            } else {
              location.href = _this.dt_url + params
            }
          })
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  #__nuxt {
    display: none
  }
</style>