import data from "./assets/product_data.json";
import { initializeRouter } from "./clientRouter";

const routes = {
  "/": productList,
  "/product/:id": productPage,
  "/product/:id/comments": productComments,
  "/about": aboutPage,
  404: notFoundPage,
};

const container = document.querySelector("#content");
initializeRouter(routes, container);

function productList() {
  return `<div class="product-list">
            ${data
              .map(
                (product) => `
                <a class="product-card" data-href="/product/${product.id}">
                  <img src="${product.image}"/>
                  <span>${product.name}</span>
                </a>`
              )
              .join("")}
          </div>`;
}

function productPage({ id }) {
  const item = data.find((product) => product.id === id);
  if (!item) return on404();

  return `<div class="product-page">
            <h2>${item.name}</h2>
            <div>
              <a class="active" data-href="/product/${id}">معرفی محصول</a>
              <a data-href="/product/${id}/comments">کامنت ها</a>
            </div>
            <div class="details">
              <img src="${item.image}"/>
              <span>${item.description}</span>
            </div>
          </div>`;
}

function productComments({ id }) {
  const item = data.find((product) => product.id === id);
  if (!item) return on404();

  return `<div class="product-page">
            <h2>${item.name}</h2>
            <div>
              <a data-href="/product/${id}">معرفی محصول</a>
              <a class="active" data-href="/product/${id}/comments">کامنت ها</a>
            </div>
            <div class="details">
              <img src="${item.image}"/>
              <div class="comments-list">
                ${item.comments
                  .map((comment) => `<span>${comment}</span>`)
                  .join("")}
              </div>
            </div>
          </div>`;
}

function aboutPage() {
  const aboutText = `دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
  حتی زمانی که بین خرید کالاها برای شخصی مردد هستید می‌توانید با خرید کارت هدیه دیجی کالا، انتخاب را به سایرین بسپارید. این فروشگاه مثل یک ویترین پر زرق و برق است که با انواع و اقسام محصولاتی نظیر گوشی موبایل سامسونگ، ساعت هوشمند اپل، تلویزیون سامسونگ، لپ تاپ و الترابوک ایسوس، گوشی موبایل هواوی و همچنین محصولاتی که هر فرد در زندگی شخصی، تحصیلی و کاری خود به آنها احتیاج پیدا می‌کند، چیده شده است. اینجا مرجع متنوع‌ترین کالاهای مصرفی از گوشی موبایل موتورولا گرفته تا تبلت لنوو، اتو پاناسونیک، جارو شارژی بلک اند دکر، کولر آبی آبسال، اسپیکر (بلندگو) جی بی ال و حتی خرید لوازم جهیزیه می‌باشد. دیجی‌کالا همچنین یک بازار آنلاین برای خرید جدیدترین و ضروری‌ترین لوازم خانگی همانند سرخ کن فیلیپس، یخچال و فریزر امرسان، جاروبرقی پارس خزر، آبمیوه گیری بوش، سینمای خانگی و ساندبار سونی و انواع پخش کننده خانگی می‌باشد تا هر فرد بتواند مطابق با سلیقه شخصی خود، خانه رویاهایش را بسازد. حتی می‌توانید از مشهورترین برندهای داخلی و خارجی انواع مدل مانتو جدید، لباس خواب زنانه، پیراهن مردانه، پیراهن و لباس مجلسی زنانه، لباس بچه گانه، شومیز زنانه و دخترانه و انواع لباس زیر مردانه را به صورت آنلاین با کمک راهنمای سایز خریداری کنید. این فروشگاه اینترنتی حتی برای سرگرمی کودکان هم خرید محصولاتی مانند عروسک، مدل‌های اسباب بازی دخترانه و پسرانه و انواع لگو را فراهم کرده است. همچنین با سر زدن به محصولات آرایشی و بهداشتی زنانه و مردانه مانند عطر و ادکلن دیور، لالیک، جگوار، گرلن اصل، انواع دستگاه اصلاح موی صورت فیلیپس، موزر، پاناسونیک و حتی بهترین برندهای رنگ مو و ابرو می‌توانید تجربه‌ای جدید از خرید آنلاین کسب کنید. شما می توانید کلیه نیازهای خود را تنها با چند کلیک سفارش داده و در کمترین زمان ممکن درب منزل تحویل بگیرید. دیجی‌کالا مگ رسانه‌ی آنلاین دیجی‌کالا با موضوع فناوری، هنر و سینما و سبک زندگی مدرن است. در دیجی‌کالا مگ می‌توانید نقد و بررسی تخصصی محصولات دیجی‌کالا را بخوانید و ببینید. جدیدترین اخبار جشنواره فیلم فجر را در دیجی‌کالا مگ دنبال کنید.`;

  return `<div>
            <h1>فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین</h1>
            <p id="about-text">${aboutText}</p>
          </div>`;
}

function notFoundPage() {
  return `<div>404 - Page not found</div>`;
}

window.initializeRouter = initializeRouter;
