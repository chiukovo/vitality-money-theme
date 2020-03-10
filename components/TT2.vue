<template>
  <div>
    <div class="page-wrapper">
      <!-- Preloader -->
      <div class="loader-wrap">
        <div class="preloader">
          <div class="preloader-close">preloadering</div>
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
                  <div class="logo"><a href="/"><img src="/tt2/images/logo.png" alt=""></a></div>
                </div>
              </div>

              <div class="top-right">
                <a :href="tt2_url" class="theme-btn btn-style-two"><span class="btn-title">登入</span></a>
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
                      <li><a href="/">首頁</a></li>
                      <li><a href="#">交易平台</a></li>
                      <li><a href="#">多國語言</a></li>
                      <li><a href="#">意見調查</a></li>
                      <li><a :href="tt2_url">註冊</a></li>
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
              <a href="/" title=""><img src="/tt2/images/logo.png" alt="" title=""></a>
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
            <div class="nav-logo"><a href="/"><img src="/tt2/images/logo.png" alt="" title=""></a></div>
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
            <form method="post" action="/">
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
                <!-- <h3>TT2</h3> -->
                <h2>TT2</h2>
                <div class="text">下位金融鉅子換你當</div>
                <div class="btn-box"><a :href="tt2_url" class="theme-btn btn-style-one"><span class="btn-title">-- 註冊
                      --</span></a><a :href="tt2_url" class="theme-btn btn-style-two"><span class="btn-title">-- 登入
                      --</span></a></div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/5.jpg')"></div>

            <div class="auto-container">
              <div class="content-box">
                <!-- <h3>TT2</h3> -->
                <h2>TT2</h2>
                <div class="text">全球期貨大亨強勢登場！</div>
                <div class="btn-box"><a :href="tt2_url" class="theme-btn btn-style-one"><span class="btn-title">-- 註冊
                      --</span></a><a :href="tt2_url" class="theme-btn btn-style-two"><span class="btn-title">-- 登入
                      --</span></a></div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/5.jpg')"></div>

            <div class="auto-container">
              <div class="content-box">
                <!-- <h3>TT2</h3> -->
                <h2>TT2</h2>
                <div class="text">免費試玩帳號提供中</div>
                <div class="btn-box"><a :href="tt2_url" class="theme-btn btn-style-one"><span class="btn-title">-- 註冊
                      --</span></a><a :href="tt2_url" class="theme-btn btn-style-two"><span class="btn-title">-- 登入
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
                  <h2>技術分析軟體</h2>
                  <div class="text">技術分析軟體的本質就是使用技術指標和分析工具研究金融工具圖表
                  TT2 提供了一整套的分析方式。
                  </div>
                </div>
              </div>
              <!-- Welcome Block One -->
              <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box" style="background-image: url(/tt2/images/resource/image-1.jpg);">
                  <div class="icon-box"><span class="flaticon-tax"></span></div>
                  <h2>讓獲利更簡單</h2>
                  <div class="text">已有數百萬人使用 TT2系統。探索無限交易選擇。我們提供數千種金融工具、免費即時行情和全天候線上支持。</div>
                </div>
              </div>
              <!-- Welcome Block One -->
              <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="inner-box">
                  <div class="icon-box"><span class="flaticon-work-1"></span></div>
                  <h2>友好的用戶介面</h2>
                  <div class="text">使用最新H5技術，不論是桌面版或移動裝置都可自行選擇習慣的版面與顏色，並提供多種版面選擇</div>
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
                  <!-- <div class="caption">F.</div> -->
                  <div class="image-outer"><img class="lazy-image owl-lazy"
                      src="/tt2/images/resource/image-spacer-for-validation.png"
                      data-src="/tt2/images/resource/image-3.png" alt=""></div>
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
                  <h2>TopTrader 2技術分析</h2>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="icon"><img src="/tt2/images/icons/icon-3.png" alt=""></div>
                  <h2>技術分析</h2>
                  <div class="text">指標是最重要的技術分析工具
設置這種指標可以自動操作，以便檢測全球期貨交易品種價格動態的不同風格形態
根據這個資訊，交易者可以預測未來的價格動向並及時調整他們的策略。</div>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="icon"><img src="/tt2/images/icons/icon-4.png" alt=""></div>
                  <h2>即時穩定的報價與最齊全的商品</h2>
                  <div class="text">為避免報價誤差與延遲TT2平台與國外知名報價廠商合作
 透過精密演算法呈現出與國外同步且精準的報價
無論何時何地，您都可以在TT5網頁版上查看最精準穩定的報價與最齊全的商品，對全球期貨指數做出理性的交易決策</div>
                </div>
                <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                  <div class="icon"><img src="/tt2/images/icons/icon-5.png" alt=""></div>
                  <h2>預測您喜歡金融交易品種的價格動向</h2>
                  <div class="text">技術分析是成功進行全球期貨，交易不可或缺的一部分
它有助於識別各種交易品種的趨勢，定義支持/阻力位的水準，預測價格動向等等
換句話說，通過技術分析，您可以“窺視未來”，並通過這個優勢來獲得成功</div>
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
                          <span class="count-text" data-speed="3000" data-stop="88">0</span><span>種</span>
                        </div>
                        <div class="counter-title">技術分析</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-7.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="102">0</span><span>種</span>
                        </div>
                        <div class="counter-title">分析物件</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-8.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="21">0</span><span>種</span>
                        </div>
                        <div class="counter-title">時間週期</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-9.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="60">0</span><span>種</span>
                        </div>
                        <div class="counter-title">K線走勢</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-10.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="30">0</span><span>種</span>
                        </div>
                        <div class="counter-title">數據分析</div>
                      </div>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="column counter-column col-md-6">
                    <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                      <div class="content">
                        <div class="icon"><img src="/tt2/images/icons/icon-11.png" alt=""></div>
                        <div class="count-outer count-box">
                          <span class="count-text" data-speed="3000" data-stop="60">0</span><span>秒</span>
                        </div>
                        <div class="counter-title">歷史資料</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="author-box" style="background-image: url(/tt2/images/background/image-1.jpg);">
                <!-- <div class="author-info">
                  <div class="author-thumb"><img src="/tt2/images/resource/author-1.jpg" alt=""></div>
                  <h2>Rosalina D. William</h2>
                  <div class="designation">Founder</div>
                  <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                </div> -->
                <!-- <div class="signature"><img src="/tt2/images/logo.png" alt=""></div> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery Section -->
      <section class="about-section-two">
        <div class="auto-container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="image-wrapper">
                        <div class="image-one">
                            <img class="lazy-image owl-lazy loaded" src="/tt2/images/resource/image-10.png" data-src="/tt2/images/resource/image-10.png" alt="" data-was-processed="true">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="content-box">
                        <div class="sec-title">
                            <div class="sub-title">About Us</div>
                            <h2>友好的用戶介面</h2>
                            <div class="text">不論是桌面版或移動裝置都可自行選擇習慣的版面與顏色，並提供多種版面選擇</div>
                        </div>
                        <div class="author-info">
                          <!-- <div class="wrapper-box">
                              <h2>Rosalina D. William</h2>
                              <div class="designation">Founder</div>
                              <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                          </div>
                          <div class="signature"><img src="/tt2/images/resource/signature.png" alt=""></div> -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="video-section" style="background-image: url(/tt2/images/background/image-5.jpg);">
        <div class="auto-container">
          <div class="default-video-box text-center wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms">
            <a href="http://t1789.cc/" class="overlay-link ripple" target="_blank"><span class="fas fa-play"></span></a>
          </div>
          <div class="sec-title light text-center">
            <div class="sub-title">Start now</div>
            <h2>立即開始</h2>
          </div>
        </div>
      </section>

      <!-- More Chinese words Section -->
      <section class="why-chooseus-section">
        <div class="auto-container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="content-box">
                <div class="sec-title" style="text-align: center;">
                  <div class="sub-title">More Chinese words</div>
                  <h3>支援多國語言</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="image-wrapper">
                <div class="image-one"><img class="lazy-image owl-lazy"
                    src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/image-11.jpg" alt=""></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Footer -->
      <footer class="main-footer">

        <!-- Footer Bottom -->
        <div class="auto-container">
          <div class="footer-bottom">
            <div class="copyright">copyright © TT2</div>
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
        tt2_url: '',
      }
    },
    mounted() {
      this.loading = false
      this.dt_url = process.env.NUXT_ENV_DT_URL
      this.horse_url = process.env.NUXT_ENV_HORSE_URL
      this.tt2_url = process.env.NUXT_ENV_TT2_URL

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