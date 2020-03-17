<template>
  <div>
    <div class="page-wrapper">
      <div class="real-mneu">
        <div class="scroll-out">
          <div class="scroll-div">
            <div v-for="data in com_detail_array">
              <div class="item" :class="[data.classCheck, data.color]">
                <div class="item-header">
                  <div class="item-name">{{ data.comName }}<b>•</b></div>
                  <div class="item-price">{{ data.close }}</div>
                </div>
                <div class="item-body">
                  <div class="updown-percent">{{ data.percent }}%</div>
                  <div class="updown-price">{{ data.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Main Header -->
      <header class="main-header">
        <!-- Header Upper -->
        <div class="header-upper">
          <div class="auto-container">
            <div class="inner-container">
              <!--Nav Box-->
              <div class="nav-outer clearfix">
                <!--Mobile Navigation Toggler-->
                <div class="logo"><a href="/"><img src="/tt2/images/logo.png" alt=""></a></div>
                <div class="mobile-nav-toggler"><span class="icon fal fa-bars"></span></div>

                <!-- Main Menu -->
                <nav class="main-menu navbar-expand-md navbar-light">
                  <div class="collapse navbar-collapse show clearfix">
                    <ul class="navigation clearfix">
                      <li><a href="/">首頁</a></li>
                      <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='stockq'">國際指數</a></li>
                      <li class="dropdown"><a href="#">經濟數據</a>
                        <ul>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='worldstats'">經濟總覽</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='calendar'">經濟指標</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='rate'">全球利率</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='gdp'">生產GDP</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='treasury'">美國公債</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='bondrate'">各國公債</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='reserve'">外匯存底</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='aaiisurvey'">多空調查</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a href="#">期貨報告</a>
                        <ul>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='futContractsDate'">三大法人</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='largeTraderFutQry'">大額交易</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='djiax5'">道瓊工業</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='nasdaq100mini'">納斯達克</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='sp500'">S&P500</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='nikkei'">日經</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='gold'">黃金</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='silver'">銀</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='euro'">歐元</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='vix'">恐慌指數</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a href="#">市場動態</a>
                        <ul>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='return'">股市排行</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='lowmarket'">相對低檔</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='highmarket'">相對高檔</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='indexfuture'">國際指數</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='commodity'">原物料</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='bondindex'">債卷指數</a></li>
                        </ul>
                      </li>
                      <li><a href="#" data-toggle="modal" data-target=".modal-file" @click="getApiFileData('news')">新聞</a></li>
                      <li><a href="#" data-toggle="modal" data-target=".modal-menu" @click="menu_type='currency'">匯率</a></li>
                      <li><a href="#" data-toggle="modal" data-target=".modal-file" @click="getApiFileData('hcalendar')">行事曆</a></li>
                      <!-- <li><a href="#" data-toggle="modal" data-target=".modal-info">平台介紹</a></li> -->
                      <li class="dropdown"><a href="#">交易平台</a>
                        <ul>
                          <li><a href="#" data-toggle="modal" data-target=".modal-info-tt2">TT2交易平台</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-info-horse">金融家交易平台</a></li>
                          <li><a href="#" data-toggle="modal" data-target=".modal-info-dt">好神期交易平台</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a href="#">下載</a>
                        <ul>
                            <li><a href="https://anydesk.com/zhs" target="_blank">AnyDesk</a></li>
                            <li><a href="https://www.teamviewer.com/tw/download/windows/" target="_blank">TeamViewer</a></li>
                        </ul>
                      </li>
                      <li><a href="#">語言切換</a></li>
                      <li><a href="#">意見調查</a></li>
                      <li><a :href="tt2_url">註冊</a></li>
                      <li><a class="button-login" data-toggle="modal" data-target=".modal-login">
                        <span>登入</span>
                        </a></li>
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
                <h2>Professional platform</h2>
                <div class="text">通往全球市場的專業平台</div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/2.jpg')"></div>
            <div class="auto-container">
              <div class="content-box">
                <!-- <h3>TT2</h3> -->
                <h2>Simple transaction</h2>
                <div class="text">科技讓交易變得簡單<br>優質的交易體驗</div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/3.jpg')"></div>
            <div class="auto-container">
              <div class="content-box">
                <!-- <h3>TT2</h3> -->
                <h2>Powerful and Secure</h2>
                <div class="text">強大的圖表分析<br>穩定且安全的系統架構</div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/4.jpg')"></div>
            <div class="auto-container">
              <div class="content-box">
                <!-- <h3>TT2</h3> -->
                <h2>High performance 「H5」</h2>
                <div class="text">全新高效能H5<br>跨平台網頁交易系統</div>
              </div>
            </div>
          </div>

          <!-- Slide Item -->
          <div class="slide-item">
            <div class="image-layer lazy-image" data-bg="url('/tt2/images/main-slider/5.jpg')"></div>
            <div class="auto-container">
              <div class="content-box">
                <!-- <h3>TT2</h3> -->
                <h2>Instant and detailed quote</h2>
                <div class="text">即時且詳細的報價<br>讓您永遠比別人早一步掌握市場價格</div>
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

      <!-- Gallery Section -->
      <section class="about-section-two">
        <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-12">
                  <div class="content-box">
                      <div class="sec-title text-center">
                          <div class="sub-title">About Us</div>
                          <h2>友好的用戶介面</h2>
                          <div>不論是桌面版或移動裝置都可自行選擇習慣的版面與顏色，並提供多種版面選擇</div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-12">
                  <div class="image-wrapper">
                      <div class="image-one">
                        <div id="about-img" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img class="d-block w-100" src="/tt2/images/resource/theme1.png" alt="First slide">
                            </div>
                            <div class="carousel-item">
                              <img class="d-block w-100" src="/tt2/images/resource/theme2.png" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                              <img class="d-block w-100" src="/tt2/images/resource/theme3.png" alt="Third slide">
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#about-img"" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#about-img"" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
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

      <!-- About Section -->
      <section class="about-section">
        <div class="auto-container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="image-wrapper">
                <div class="image-one">
                  <img class="lazy-image owl-lazy" src="/tt2/images/resource/image-spacer-for-validation.png"
                    data-src="/tt2/images/resource/image-2.png" alt="">
                </div>
                <div class="image-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms" style="max-width: 190px;">
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



      <!-- Video Section -->
      <section class="video-section" style="background-image: url(/tt2/images/background/image-5.jpg);">
        <div class="auto-container">
          <div class="default-video-box text-center wow zoomIn" data-wow-delay="200ms" data-wow-duration="1200ms">
            <a data-toggle="modal" data-target=".modal-login"><span class="fas fa-play"></span></a>
          </div>
          <div class="sec-title light text-center">
            <div class="sub-title">Start now</div>
            <h2>立即開始</h2>
          </div>
        </div>
      </section>

      <!-- More Chinese words Section -->
      <!-- <section class="why-chooseus-section">
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
      </section> -->

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
    <!--file-->
    <div class="modal modal-file fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal-file" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <div class="modal1">
              <!--news-->
              <div v-if="news.length > 0">
                <table class="item-table">
                  <tbody>
                    <tr v-for="list in news">
                      <td>{{ list.time }} ({{ list.source }})</td>
                      <td>{{ list.content }}</td>
                      <td>
                        <img :src="list.img" alt="">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--calendar-->
              <div v-if="calendar.length > 0">
                <table class="item-table">
                  <thead>
                    <tr>
                      <th v-for="header in calendar[0].header">{{ header }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="list in calendar[0].body">
                      <td>{{ list[0] }}</td>
                      <td>{{ list[1] }}</td>
                      <td>{{ list[2] }}</td>
                      <td>{{ list[3] }}</td>
                      <td>{{ list[4] }}</td>
                      <td>{{ list[5] }}</td>
                      <td>{{ list[6] }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--file end-->
    <!--End pagewrapper-->
    <Modal :menu_type="menu_type"></Modal>
    <!--Scroll to top-->
    <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fal fa-arrow-circle-up"></span></div>
    <!-- Modal Login/Register-->
    <div class="modal modal-login login fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal-login-register-label" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="font-weight-bold modal-title" id="modal-login-register-label">登入系統</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <div class="group-sm modal-form">
              <div class="form-group">
                <label for="" class="form-input-label">帳號</label>
                <input type="text" class="form-input2" placeholder="請輸入帳號" v-model='account'>
              </div>
              <div class="form-group">
                <label for="" class="form-input-label">密碼</label>
                <input type="password" class="form-input2" placeholder="請輸入密碼" v-model='password'>
              </div>
              <div class="form-group">
                <div class="form-select">
                  <select v-model='type'>
                    <option value="">TT2交易系統</option>
                    <option value="b">金融家交易系統</option>
                    <option value="d">好神期交易系統</option>
                  </select>
                </div>
              </div>
              <div class="form-group form-button">
                <button type='primary' native-type="submit" @click.prevent="doLogin">登入</button>
              </div>
              <div class="form-group group-justify">
                <div class="form-group-col">
                  <input type="checkbox" id="save_account" v-model="rememberMe">
                  <label for="save_account">記住帳號</label>
                </div>
                <div class="form-group-col text-right">
                  <a href="#">忘記密碼</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-info-tt2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="font-weight-bold modal-title" id="modal-login-register-label">TT2 交易平台介紹</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="pc">
              <div class="modal-theme-title">自訂買賣訊號</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-1.png">
              </div>
              <div class="modal-theme-title">2套專業技術指標</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-2.png">
              </div>
              <div class="modal-theme-title">可選周期即時壓力支撐</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-3.png">
              </div>
              <div class="modal-theme-title">K線型態分析</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-4.png">
              </div>
              <div class="modal-theme-title">即時價差資訊</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-5.png">
              </div>
              <div class="modal-theme-title">停損利可選擇點位與行情輸入</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-6.png">
              </div>
              <div class="modal-theme-title">外資法人未平倉指標  與 價差指標</div>
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/tt2-7.png">
              </div>
            </div>
            <div class="mobile">
              <div class="modal-theme-group">
                <div class="modal-theme-title">好用的捷徑  讓您交易更方便</div>
                <div class="modal-theme-img">
                  <img src="/tt2/images/modalinfo/tt2-m1.png">
                </div>
              </div>
              <div class="modal-theme-group">
                <div class="modal-theme-title">隱藏清單裡 隨時都可知道損益<br>設定同損利 改價等功能</div>
                <div class="modal-theme-img">
                  <img src="/tt2/images/modalinfo/tt2-m2.png">
                </div>
              </div>
              <div class="modal-theme-group">
                <div class="modal-theme-title">隨時監控總損益</div>
                <div class="modal-theme-img">
                  <img src="/tt2/images/modalinfo/tt2-m3.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-info-horse" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="font-weight-bold modal-title" id="modal-login-register-label">金融家 交易平台介紹</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="pc">
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/horse-1.png">
              </div>
            </div>
            <div class="mobile">
              <div class="modal-theme-group">
                <div class="modal-theme-img">
                  <img src="/tt2/images/modalinfo/horse-m1.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade modal-info-dt" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="font-weight-bold modal-title" id="modal-login-register-label">金融家 交易平台介紹</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="pc">
              <div class="modal-theme-img">
                <img src="/tt2/images/modalinfo/dt-1.png">
              </div>
            </div>
            <div class="mobile">
              <div class="modal-theme-group">
                <div class="modal-theme-img">
                  <img src="/tt2/images/modalinfo/dt-m1.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/tt2/style.scss'
  import Modal from "~/components/TT2/Modal"
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
        menu_type: '',
        com_array: [],
        com_detail_array: [],
        news: [],
        calendar: [],
      }
    },
    components: {
      Modal
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

      //get query_cominfo
      this.getCominInfo()
      window.setInterval(( () => this.getCominInfoDetail() ), 10000)
    },
    methods: {
      getApiFileData(type) {
        const _this = this
        this.news = []
        this.calendar = []
        let target = type

        if (target == 'news') {
          let tzoffset = (new Date()).getTimezoneOffset() * 60000;
          let today = (new Date(Date.now() - tzoffset))
          const nowDate = today.toISOString().substring(0, 10).split('-').join('')

          target = target + nowDate
        }

        axios.post(process.env.NUXT_ENV_API_URL + "/get_file", qs.stringify({
          file: target,
        }))
        .then(response => {
          if (type == 'news') {
            _this.news = response.data
          } else {
            _this.calendar = response.data
          }
        })
      },
      getCominInfo() {
        const _this = this

        axios.post(process.env.NUXT_ENV_API_URL + "/query_cominfo")
        .then(response => {
          _this.com_array = response.data.ComArray
          _this.getCominInfoDetail()
        })
      },
      getCominInfoDetail() {
        const _this = this

        axios.post(process.env.NUXT_ENV_API_URL + "/query_cominfo_detail")
        .then(response => {
          _this.mergeDetail(_this.com_array, response.data.ComDetailArray)
        })
      },
      mergeDetail(comInfo, comInfoDetail) {
        const _this = this

        _this.com_detail_array = []

        comInfo.forEach(function(info) {
          comInfoDetail.forEach(function(detail) {
            if (info.comId == detail.id) {
              _this.com_detail_array.push(Object.assign(info, detail))
            }
          })
        })

        _this.formatData()
      },
      formatData() {
        const _this = this

        this.com_detail_array.forEach(function(detail) {
          const standard = detail.reference
          const up_down = Math.round((detail.close - standard) * 1000) / 1000
          let up_down_ratio = 0
          if(standard > 0) {
              up_down_ratio = Math.abs(Math.round(up_down / standard * 10000) / 100)
          }
          else {
              up_down_ratio = 0;
          }

          detail.price = up_down
          detail.percent = up_down_ratio
          detail.color = _this.getColor(0, up_down)
          detail.classCheck = detail.comOpened ? 'online' : 'offline'

          return detail
        })
      },
      getColor(target, value) {
        if(value == 0)
            return ""
        return value > target ? "win" : value < target ? "loss" : ""
      },
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