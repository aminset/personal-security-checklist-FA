# چک‌لیست امنیت دیجیتال | خلاصه [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)[![Contributors](https://img.shields.io/github/contributors/hamid-k/personal-security-checklist-FA?color=%23ffa900&style=flat-square)](/ATTRIBUTIONS.md#contributors-)

#### فهرست مطالب
- [چک‌لیست امنیت شخصی](#چک‌لیست-امنیت-شخصی)
- [نرم‌افزارهای حریم‌محور](#نرم‌افزارهای-متن‌باز-و-حریم-محور)
- [سخت‌افزارهای امنیتی](#سخت‌افزارهای-امنیتی)

## چک‌لیست امنیت شخصی

> این چک‌لیست خلاصه‌شده‌ی [چک‌لیست امنیت شخصی کامل](https://github.com/hamid-k/personal-security-checklist-FA/blob/master/README.md) است که ضروری‌ترین اقدامات برای محافظت از زندگی دیجیتال شما را فهرست می‌کند.

### احراز هویت
- برای هر حساب، گذرواژه‌ای بلند، قوی و یکتا انتخاب کنید (مثلاً [HowSecureIsMyPassword.net](https://howsecureismypassword.net)).
- از یک [مدیر گذرواژه امن](https://awesome-privacy.xyz#password-managers) مانند [BitWarden](https://bitwarden.com) یا [KeePass/KeePassXC](https://keepass.info) برای رمزنگاری، ذخیره و پر کردن اطلاعات ورود کمک بگیرید.
- احراز هویت چندمرحله‌ای را فعال کنید و از اپلیکیشن‌های احرازکننده یا کلیدهای سخت‌افزاری ([FIDO/U2F](/6_Privacy_and-Security_Gadgets.md#fido-u2f-keys)) استفاده کنید.
- کدهای پشتیبان 2FA را روی کاغذ یا در فایلی رمزنگاری‌شده بیرون از شبکه نگه دارید تا در صورت گم‌شدن یا خراب‌شدن دستگاه به آنها دسترسی داشته باشید.
- در سرویس‌هایی مثل [Firefox Monitor](https://monitor.firefox.com) یا [HaveIBeenPwned](https://haveibeenpwned.com) ثبت‌نام کنید و گذرواژه حساب‌هایی را که لو رفته‌اند بازنشانی نمایید.

### مرور وب
- از مرورگرهای حریم‌محور مانند [Brave](https://brave.com) یا [Firefox](https://www.mozilla.org/en-US/exp/firefox/new) استفاده کنید و موتور جست‌وجوی پیش‌فرض را به گزینه‌ای مانند [DuckDuckGo](https://duckduckgo.com) تغییر دهید.
- هیچ اطلاعاتی را در سایت‌های بدون HTTPS وارد نکنید؛ به نماد قفل توجه کنید و اگر شک دارید، به [راهنمای HTTPS Everywhere](https://www.eff.org/deeplinks/2021/09/https-actually-everywhere) مراجعه کنید.
- با استفاده از افزونه‌هایی مثل [Privacy Badger](https://privacybadger.org) یا [uBlock](https://github.com/gorhill/uBlock)، ردگیری‌کننده‌های شخص ثالث را مسدود کنید.
- مرورگر را همیشه به‌روز نگه دارید، افزونه‌های غیرضروری را حذف کنید و برای فعالیت‌های مختلف از محتوا یا پروفایل‌های جداگانه استفاده نمایید.
- قابلیت ذخیره‌سازی خودکار گذرواژه و اطلاعات شخصی مرورگر را خاموش کنید و به‌جای آن از مدیر گذرواژه استفاده کنید، همچنین autofill مرورگر را غیر فعال نمایید ([کامپیوتر هوپ](https://www.computerhope.com/issues/ch001377.htm)).
- کوکی‌ها، کش و داده‌های نشست را مرتب پاک کنید؛ ابزارهایی مانند [Cookie-Auto-Delete](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete) کمک می‌کنند.
- از وارد شدن به مرورگرهای دارای حساب کاربری اجتناب کنید تا داده‌های اضافی به شما لینک نشود؛ به‌جای آن از برنامه‌های همگام‌سازی متن‌باز استفاده کنید.
- [Decentraleyes](https://decentraleyes.org) را نصب کنید تا درخواست‌های CDN کمتری ردیابی شوند.
- مرورگر خود را با ابزارهایی مانند [Panopticlick](https://panopticlick.eff.org)، [BrowserLeaks](https://browserleaks.com) یا [Am I Unique](https://amiunique.org/fp) بررسی کنید تا مقدار اطلاعاتی که افشا می‌کنید را ببینید.
- برای مرور ناشناس، از [Tor Browser](https://www.torproject.org/) استفاده کرده و به حساب‌های شخصی وارد نشوید.

### تلفن همراه
- از PIN یا passcode بلند استفاده نمایید و اگر لازم است، از اثر انگشت بهره ببرید، ولی از باز شدن با صورت پرهیز کنید.
- حافظه دستگاه را رمزنگاری کنید (اندروید: `Settings → Security → Encryption`، iOS: `Settings → Touch ID & Passcode → Data Protection`).
- سیستم‌عامل و برنامه‌ها را به‌روز نگه دارید تا وصله‌های امنیتی اعمال شوند.
- مجوزهای اپ‌ها را مرور کرده و فقط دسترسی‌های ضروری را فعال کنید، برای اندروید از [Bouncer](https://play.google.com/store/apps/details?id=com.samruston.permission&hl=en_US) برای مجوز موقت استفاده کنید.
- امکانات ارتباطی غیرضروری مثل بلوتوث را خاموش کرده و شبکه‌های WiFi قدیمی را فراموش کنید.
- ردیابی موقعیت را غیرفعال کنید، چه از طریق GPS، چه از طریق WiFi یا بلوتوث.
- از فایروال اپ مانند [NetGuard](https://www.netguard.me) یا [Lockdown](https://apps.apple.com/in/app/lockdown-apps/id1469783711) استفاده کنید تا دسترسی اپ‌ها به اینترنت محدود گردد.
- بدانید بسیاری از اپ‌ها ردگیری می‌کنند؛ در اندروید از [Exodus](https://exodus-privacy.eu.org/en/page/what/) برای دیدن ردگیری‌ها بهره ببرید.

### ایمیل
- ایمیل را با گذرواژه‌ای بلند و ۲FA ایمن کنید تا امکان بازیابی حساب‌های دیگر توسط مهاجم کاهش یابد.
- اگر ممکن است، به سرویس‌های امنی مانند [ProtonMail](https://protonmail.com) یا [Tutanota](https://tutanota.com) مهاجرت کنید.
- برای حفاظت از آدرس اصلی، از سرویس‌هایی مانند [Anonaddy](https://anonaddy.com) یا [SimpleLogin](https://simplelogin.io/?slref=bridsqrgvrnavso) برای ایجاد آدرس‌های جایگزین استفاده نمایید.
- بارگذاری خودکار محتواهای دوردست (مثل تصاویر در ایمیل) را غیرفعال کنید تا از رهگیری‌های دقیق جلوگیری شود.
- داشتن دامنه اختصاصی باعث می‌شود حتی اگر سرویس ایمیل فعلی‌تان بسته شود، همچنان به آدرس ایمیل دسترسی داشته باشید؛ پیام‌ها را با یک کلاینت امن مثل [Thunderbird](https://www.thunderbird.net) پشتیبان بگیرید.

### پیام‌رسانی امن
- از اپلیکیشن‌هایی مثل [Signal](https://www.signal.org)، [Matrix](https://matrix.org)، [Session](https://getsession.org/) یا [Briar](https://briarproject.org/) استفاده کنید که رمزنگاری سرتاسری و forward secrecy دارند.
- مطمئن باشید دستگاه‌های ارسال و دریافت هر دو امن، رمزنگاری‌شده و فاقد بدافزار هستند.
- همگام‌سازی ابری و بکاپ‌های ناامن را غیرفعال کنید و Metadata را پیش از ارسال پاک نمایید.
- از SMS خودداری کنید، ولی اگر مجبور شدید، از اپ‌هایی مانند [Silence](https://silence.im/) استفاده کنید.
- پلتفرم‌هایی که مدل درآمدی شفاف دارند و توسط توسعه‌دهندگان معتبر عرضه می‌شوند را انتخاب کنید.

### شبکه
- برای محافظت از IP از VPN ایمن مانند [ProtonVPN](https://protonvpn.com) یا [Mullvad](https://mullvad.net) استفاده کنید، اما معایبشان را نیز بشناسید.
- رمز عبور روتر را تغییر دهید، از WPA2 استفاده کنید و از افرادی که به شبکه شما دسترسی دارند مطمئن شوید.
- DNS امن مانند [1.1.1.1](https://1.1.1.1/dns/) را روی روتر یا هر دستگاهی که می‌شود تنظیم کنید.

**📜 فهرست کامل**: [چک‌لیست امنیت شخصی کامل](https://github.com/hamid-k/personal-security-checklist-FA/blob/master/README.md)

----

## نرم‌افزارهای متن‌باز و حریم‌محور
از ابزارهای جایگزین استفاده کنید که داده‌ها را جمع‌آوری یا رهگیری نمی‌کنند.

#### امنیت
- مدیر گذرواژه: [BitWarden] | [1Password] *(مالکیتی)* | [KeePassXC] *(آفلاین)* | [LessPass]
- احراز هویت ۲ مرحله‌ای: [Aegis] | [Authenticator] | [AndOTP]
- رمزنگاری فایل: [VeraCrypt] | [Cryptomator]
- پیام‌رسان رمزنگاری‌شده: [Signal] | [KeyBase]
- ایمیل رمزنگاری‌شده: [ProtonMail] | [MailFence] | [Tutanota] | [33Mail] | [anonaddy]
- مرورگر خصوصی: [Brave] | [Firefox] | [Tor]
- موتور جست‌وجو: [DuckDuckGo] | [StartPage] | [SearX] | [Qwant]
- VPN: [Mullvad] | [ProtonVPN] | [Windscribe] | [IVPN]
- فایروال اپ: [NetGuard] | [Lockdown] | [OpenSnitch] | [LuLu]

#### افزونه‌های مرورگر
- [Privacy Badger]
- [HTTPS Everywhere]
- [uBlock Origin]
- [ScriptSafe]
- [WebRTC Leak Prevent]
- [Vanilla Cookie Manager]
- [Privacy Essentials]

#### اپلیکیشن‌های موبایل
- [Exodus]
- [Orbot]
- [Island]
- [Bouncer]
- [Greenify]
- [1.1.1.1]
- [Fing App]

#### ابزارهای آنلاین
- [εxodus]
- [';--have i been pwned?]
- [EXIF Remover]
- [Redirect Detective]
- [Virus Total]
- [Panopticlick]، [Browser Leak Test]، [IP Leak Test]

#### بهره‌وری
- ذخیره‌سازی: [NextCloud]
- سینک فایل: [Syncthing]
- اشتراک فایل: [FilePizza]
- یادداشت: [Standard Notes]، [Cryptee]، [Joplin]
- بلاگ: [Write Freely]
- تقویم/تماس: [ETE Sync]

📜 **بیشتر**: [لیست نرم‌افزارهای حریم‌محور](https://awesome-privacy.xyz)

----

## سخت‌افزار امنیتی
(متن اصلی در این بخش را می‌توانید از [لیست گجت‌ها](/6_Privacy_and-Security_Gadgets.md#ریچ-ابزارهای-دستی) دنبال کنید.)

