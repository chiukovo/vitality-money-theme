<template>
  <div>
    <!-- preloader start -->
    <div class="preloader">
      <img src="/dt/images/preloader.gif" alt="preloader">
    </div>
    <!-- preloader end -->
    <!-- navigation -->
    <header>
      <!-- top header -->
      <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="list-inline text-lg-right text-center">
                <li class="list-inline-item">
                  全新高效能H5, 穩定且安全的系統架構
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- nav bar -->
      <div class="navigation">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#" onclick="return false;">
            <img src="/dt/images/logo.png" alt="logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown active"><a class="nav-link" href="#" onclick="return false;">首頁</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#" data-toggle="modal" data-target="#modal-dt">
                    好神期交易系統
                  </a>
                </li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="return false;">關於我們</a></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="return false;">語言選擇</a></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="return false;">意見調查</a></li>
                <li class="nav-item"><a class="nav-link" href="#" onclick="return false;" data-toggle="modal" data-target="#modal">註冊</a></li>
                <li class="nav-item">
                  <a class="nav-link btn btn-primary btn-sm" href="#" onclick="return false;" data-toggle="modal" data-target="#modal">登入</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!-- Search Form -->
    <div class="search-form">
      <a href="#" onclick="return false;" class="close" id="searchClose">
      <i class="ti-close"></i>
      </a>
      <div class="container">
        <form action="#" class="row">
          <div class="col-lg-10 mx-auto">
            <h3>Search Here</h3>
            <div class="input-wrapper">
              <input type="text" class="form-control" name="search" id="search" placeholder="Enter Keywords..." required>
              <button>
              <i class="ti-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- /navigation -->
    <section>
      <div class="hero-slider position-relative">
        <div class="hero-slider-item py-160" style="background-image: url(/dt/images/banner/banner-1.jpg);" data-icon="ti-comments" data-text="讓獲利更簡單">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="hero-content">
                  <h4 class="text-uppercase mb-1" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".1">創新，安全，專業</h4>
                  <h1 class="font-weight-bold mb-3" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".5">讓獲利更簡單</h1>
                  <p class="text-dark mb-50" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".9">
                    數百萬人使用 金融家系統
                    <br>
                    進行世界最受歡迎的市場交易，探索無限交易選擇。我們提供數千種金融工具、免費即時行情和全天候線上支持。
                  </p>
                  <a data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in="1.3" href="#" onclick="return false;" class="btn btn-outline text-uppercase" data-toggle="modal" data-target="#modal">立即登入</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-slider-item py-160" style="background-image: url(/dt/images/banner/banner-2.jpg);" data-icon="ti-bar-chart" data-text="專業數據分析">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="hero-content">
                  <h4 class="text-uppercase mb-1" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".1">通過我們強大的平台進入市場</h4>
                  <h1 class="font-weight-bold mb-3" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".5">專業數據分析</h1>
                  <p class="text-dark mb-50" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".9">
                    交易及投資頂尖金融工具
                    <br>
                    享受幾近即時的市場訂單執行流程，進行世界最受歡迎的市場交易。在簡單直覺的交易平台上投資各種市場。
                  </p>
                  <a data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in="1.3" href="#" onclick="return false;" class="btn btn-outline text-uppercase" data-toggle="modal" data-target="#modal">立即登入</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-slider-item py-160" style="background-image: url(/dt/images/banner/banner-3.jpg);" data-icon="ti-money" data-text="全新H5智能分析">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="hero-content">
                  <h4 class="text-uppercase mb-1" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".1">拒絕被淘汰</h4>
                  <h1 class="font-weight-bold mb-3" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".5">全新H5 智能分析</h1>
                  <p class="text-dark mb-50" data-duration-in=".5" data-animation-in="fadeInLeft" data-delay-in=".9">
                    簡單操作 適合所有族群
                    <br>
                    每次最小交易手數低至0.01手，低保證金即可開倉。交易非常有競爭力、透明的低價差，低隔夜利息，讓您盡享低成本的交易
                  </p>
                  <a data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in="1.3" href="#" onclick="return false;" class="btn btn-outline text-uppercase" data-toggle="modal" data-target="#modal">立即登入</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-slider-item py-160" style="background-image: url(/dt/images/banner/banner-4.jpg);" data-icon="ti-package" data-text="安全的系統架構">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="hero-content">
                  <h4 class="text-uppercase mb-1" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".1">穩定且安全的系統架構</h4>
                  <h1 class="font-weight-bold mb-3" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".5">選擇喜歡的交易系統</h1>
                  <p class="text-dark mb-50" data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in=".9">
                    交易行為固定 簡單化、模式化
                    <br>
                    即時且詳細的報價 讓您永遠比別人早一步掌握市場價格
                  </p>
                  <a data-duration-in=".5" data-animation-in="fadeInDown" data-delay-in="1.3" href="#" onclick="return false;" class="btn btn-outline text-uppercase" data-toggle="modal" data-target="#modal">立即登入</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- skill -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h5 class="section-title-sm">Best Service</h5>
            <h2 class="section-title section-title-border-half">好神期 網頁版交易的優勢</h2>
          </div>
          <div class="col-lg-7">
            <div class="mb-40">
              <p class="text-dark">
                好神期 可以使您從任何流覽器和任何作業系統，包括Windows，Mac和Linux，開始進行外匯，股票，期貨市場的交易。您可以在網站直接訪問好神期交易平台提供的豐富功能，這意味著您可以分析報價和交易，而無需下載或安裝任何應用程式。簡單地敲擊幾次，您就可以訪問您的帳戶並開始交易。網路平臺的交易非常安全，傳播的任何資訊都是被安全加密的
                <p>網頁平臺的操作無需任何額外的軟體或流覽器擴展 網頁版交易的所有優勢現在都能提供給您。現在就打開您的網路流覽器開始交易！</p>
              </p>
            </div>
            <!-- fun-fact -->
            <div class="mb-md-50">
              <div class="row">
                <div class="col-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center">
                    <i class="round-icon mr-sm-3 ti-server"></i>
                    <div class="text-center text-sm-left">
                      <h2 class="count mb-0" data-count="30">0</h2>
                      <p class="mb-0">數據分析</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center">
                    <i class="round-icon mr-sm-3 ti-face-smile"></i>
                    <div class="text-center text-sm-left">
                      <h2 class="count mb-0" data-count="102">0</h2>
                      <p class="mb-0">歷史資料</p>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex flex-column flex-sm-row align-items-center">
                    <i class="round-icon mr-sm-3 ti-thumb-up"></i>
                    <div class="text-center text-sm-left">
                      <h2 class="count mb-0" data-count="60">0</h2>
                      <p class="mb-0">K線走勢</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- progressbar -->
          <div class="col-lg-4 offset-lg-1">
            <div class="progressbar">
              <h5 class="progressbar-title">分析物件</h5>
              <div class="progress" data-percent="85%">
                <div class="progress-bar progress-bar-striped" style="width: 85%;">
                  <div class="progress-bar-value">85%</div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <h5 class="progressbar-title">時間週期</h5>
              <div class="progress" data-percent="90%">
                <div class="progress-bar progress-bar-striped" style="width: 90%;">
                  <div class="progress-bar-value">90%</div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <h5 class="progressbar-title">走勢分析</h5>
              <div class="progress" data-percent="75%">
                <div class="progress-bar progress-bar-striped" style="width: 75%;">
                  <div class="progress-bar-value">75%</div>
                </div>
              </div>
            </div>
            <div class="progressbar">
              <h5 class="progressbar-title">安全防護</h5>
              <div class="progress" data-percent="95%">
                <div class="progress-bar progress-bar-striped" style="width: 95%;">
                  <div class="progress-bar-value">95%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /skill -->
    <section class="about section-sm" style="background-image: url(/dt/images/background/about-bg.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ml-auto">
            <div class="rounded p-sm-5 px-3 py-5 bg-secondary">
              <h3 class="section-title section-title-border-half text-white">ABOUT US</h3>
              <p class="text-white mb-40">
                好神期 網頁版交易 即時穩定的報價與最齊全的商品 為避免報價誤差與延遲，好神期平台與國外知名報價廠商合作透過精密演算法呈現出與國外同步且精準的報價
無論何時何地，您都可以在好神期網頁版上查看最精準穩定的報價與最齊全的商品，對全球期貨指數做出理性的交易決策 預測您喜歡金融交易品種的價格動向，通過技術分析，您可以 “窺視未來” 並通過這個優勢來獲得成功！
              </p>
              <div>
                <ul class="d-inline-block pl-0">
                  <li class="font-secondary mb-10 text-white float-sm-left mr-sm-5">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>專業技術分析
                  </li>
                  <li class="font-secondary mb-10 text-white">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>即時穩定的報價
                  </li>
                  <li class="font-secondary mb-10 text-white">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>最齊全的商品
                  </li>
                </ul>
                <ul class="d-inline-block pl-0">
                  <li class="font-secondary mb-10 text-white">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>自定義平台視圖
                  </li>
                  <li class="font-secondary mb-10 text-white">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>安全的系統架構
                  </li>
                  <li class="font-secondary mb-10 text-white">
                    <i class="text-primary mr-2 ti-arrow-circle-right"></i>24在線客服
                  </li>
                </ul>
              </div>
              <a href="#" onclick="return false;" class="btn btn-primary mt-4" data-toggle="modal" data-target="#modal">立即登入</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- testimonial -->
    <section class="section pb-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h5 class="section-title-sm">What client Say</h5>
            <h2 class="section-title section-title-border"> 體驗至上 活躍用戶都讚不絕口 </h2>
          </div>
          <div class="col-lg-5 col-md-5 pr-0 align-self-center">
            <img class="img-fluid w-100" src="/dt/images/client.png" alt="clients-image">
          </div>
          <div class="col-lg-7 col-md-7 align-self-center pl-0">
            <div class="testimonial-slider p-5">
              <!-- slider item -->
              <div class="outline-0">
                <i class="testimonial-icon ti-quote-left"></i>
                <p class="text-dark">在眾多的交易系統中 自從用了好神期交易平台 讓我有了被動收入
                  <br>謝謝好神期!</p>
                <h4 class="font-weight-normal">陳先生</h4>
                <h6 class="font-secondary text-color">台中 北屯區</h6>
              </div>
              <!-- slider item -->
              <div class="outline-0">
                <i class="testimonial-icon ti-quote-left"></i>
                <p class="text-dark">好神期交易系統，不但安全、可靠，數據非常及時，還能設定停損，是個非常好用的系統，非常推薦給大家使用!
                </p>
                <h4 class="font-weight-normal">吳小姐</h4>
                <h6 class="font-secondary text-color">台北 信義區</h6>
              </div>
              <!-- slider item -->
              <div class="outline-0">
                <i class="testimonial-icon ti-quote-left"></i>
                <p class="text-dark">數據分析真的好神期，非常完整，用了就回不去了，真的很推薦，試一次就知道了！
                </p>
                <h4 class="font-weight-normal">王先生</h4>
                <h6 class="font-secondary text-color">高雄 三民區</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /testimonial -->

    <!-- promo-video -->
    <section class="promo-video overlay section" style="background-image: url(/dt/images/background/promo-video.jpg);">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="text-white mb-20 font-weight-normal">LOGIN</h1>
            <div class="d-flex">
              <a class="play-icon mr-4" href="#" onclick="return false;" data-toggle="modal" data-target="#modal">
              <i class="ti-control-play"></i>
              </a>
              <p class="text-white align-self-center h4">現在就打開您的網路流覽器
                <br>
                開始交易！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /promo-video -->

    <section class="cta overlay-primary py-50 text-center text-lg-left" style="background-image: url(/dt/images/background/cta.jpg);">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-6">
            <h3 class="text-white">今天，好神期讓您體驗不同</h3>
          </div>
          <div class="col-lg-6 text-lg-right align-self-center">
            <a href="#" onclick="return false;" class="btn btn-light" data-toggle="modal" data-target="#modal">立即免費試用</a>
          </div>
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="bg-secondary">
      <!-- copyright -->
      <div class="pt-4 pb-3 position-relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-5">
              <p class="text-white text-center text-md-left">
                Copyright &copy; <span class="text-primary">好神期</span> Right Reserved
              </p>
            </div>
          </div>
        </div>
        <!-- back to top -->
        <button class="back-to-top">
        <i class="ti-angle-up"></i>
        </button>
      </div>
    </footer>
    <!-- /footer -->

    <div class="modal login fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">登入系統</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
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
                  <span class="icon ti-angle-down"></span>
                  <select v-model='type'>
                    <option value="d">好神期交易系統</option>
                  </select>
                </div>
              </div>
              <div class="form-group form-button">
                <button type="button" class="btn btn-primary btn-block" @click.prevent="doLogin">登入</button>
              </div>
              <div class="form-group d-flex justify-content-between">
                <div class="form-group-col">
                  <input type="checkbox" id="save_account" v-model="rememberMe">
                  <label for="save_account">記住帳號</label>
                </div>
                <div class="form-group-col text-right">
                  <a href="#" onclick="return false;">忘記密碼</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal modal-info fade" id="modal-horse" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">金融家交易系統</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="pc">
              <div class="modal-theme-img">
                <img src="/dt/images/modalinfo/horse-1.png">
              </div>
            </div>
            <div class="mobile">
              <div class="modal-theme-group">
                <div class="modal-theme-img">
                  <img src="/dt/images/modalinfo/horse-m1.png">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal modal-info fade" id="modal-dt" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">好神期交易系統</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="pc">
              <div class="modal-theme-img">
                <img src="/dt/images/modalinfo/dt-1.png">
              </div>
            </div>
            <div class="mobile">
              <div class="modal-theme-group">
                <div class="modal-theme-img">
                  <img src="/dt/images/modalinfo/dt-m1.png">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '@/assets/dt/style.scss'
  import axios from 'axios'
  import qs from 'qs'
  import { isMobile } from 'mobile-device-detect';

  export default {
    head() {
      return {
        htmlAttrs: {
            class: ''
        },
        meta: [{
            charset: 'utf-8'
        }, {
            name: 'viewport',
            content: 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        }, ],
        script: [{
            src: '/dt/plugins/bootstrap/bootstrap.min.js',
            body: true
        }, {
            src: '/dt/plugins/magnific-popup/jquery.magnific.popup.min.js',
            body: true
        }, {
            src: '/dt/plugins/slick/slick.min.js',
            body: true
        }, {
            src: '/dt/plugins/mixitup/mixitup.min.js',
            body: true
        }, {
            src: '/dt/plugins/syotimer/jquery.syotimer.js',
            body: true
        }, {
            src: '/dt/plugins/aos/aos.js',
            body: true
        }, {
            src: '/dt/js/script.js',
            body: true
        }, ],
        link: [{
            rel: 'stylesheet',
            href: '/dt/plugins/bootstrap/bootstrap.min.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/plugins/magnific-popup/magnific-popup.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/plugins/slick/slick.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/plugins/slick/slick-theme.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/plugins/themify-icons/themify-icons.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/plugins/animate/animate.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/plugins/aos/aos.css'
        }, {
            rel: 'stylesheet',
            href: '/dt/css/style.css'
        } ]
      }
    },
    data () {
      return {
        loading: true,
        account: '',
        password: '',
        rememberMe: '',
        type: 'd',
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

          if (result["Code"] == 2) {
            sessionStorage.setItem("UserAccount", result["UserAccount"]);
            sessionStorage.setItem("UserID", result["UserId"]);
            sessionStorage.setItem("ChooseID", result["ChooseId"]);
            sessionStorage.setItem("UserToken", result["Token"]);

            if (!isMobile) {
                window.location.href = "/agent/index.php"
            } else {
                window.location.href = "/agent/mobi/index.php"
            }
            return
          }

          //記住我
          _this.$store.commit('setRemember', {
            me: _this.rememberMe,
            account: _this.account,
            password: _this.password,
          })


          let redir_url = window.location.href.replace('https://', '')
          redir_url = window.location.href.replace('http://', '')
        
          if (!isMobile) {
            if (_this.type == 'b') {
              const params = 'go?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document.URL
              location.href = `http://${_this.horse_url}.${redir_url}${params}`;
            } else  if (_this.type == 'd') {
              const params = 'go?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document.URL
              location.href = `http://${_this.dt_url}.${redir_url}${params}`;
            } else {
              const params = 'market.php?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document
                .URL
              location.href = `http://${_this.tt2_url}.${redir_url}${params}`;
            }
          } else {
            if (_this.type == 'b') {
              const params = 'mobile/go?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document.URL
              location.href = `http://${_this.horse_url}.${redir_url}${params}`;
            } else  if (_this.type == 'd') {
              const params = 'mobile/go?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document.URL
              location.href = `http://${_this.dt_url}.${redir_url}${params}`;
            } else {
              const params = 'mobi/?UserID=' + result.UserId + '&UserToken=' + result.Token + '&ReturnURL=' + document
                .URL
              location.href = `http://${_this.tt2_url}.${redir_url}${params}`;
            }
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