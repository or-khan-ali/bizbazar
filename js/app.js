// BizBazar — shared utilities
// i18n, formatting, data loading, header setup
// Approximate exchange rate AZN -> USD
const AZN_TO_USD = 0.59;

const STRINGS = {
  az: {
    brand: "BizBazar",
    nav_home: "Ana səhifə",
    nav_browse: "Biznesə bax",
    nav_services: "Xidmətlər",
    nav_sell: "Biznes sat",
    nav_about: "Haqqımızda",
    cta_signin: "Daxil ol",
    cta_list: "Biznesini yerləşdir",
    hero_title: "Biznes alış-satışı — indi daha sadə",
    hero_sub: "Azərbaycanın ilk peşəkar biznes bazarı. Yoxlanmış elanlar, qiymətləndirmə, hüquqi və vergi xidmətləri — hamısı bir yerdə.",
    hero_find: "Biznes tap",
    search_cat: "Bütün kateqoriyalar",
    search_city: "Bütün şəhərlər",
    search_price: "Qiymət (maks AZN)",
    stat_listings: "Aktiv elan",
    stat_cities: "Şəhər",
    stat_pros: "Peşəkar",
    stat_closed: "Bağlanmış sövdələşmə",
    cat_title: "Kateqoriyalar",
    cat_sub: "İstədiyin biznes növünü seç",
    featured_title: "Seçilmiş bizneslər",
    featured_sub: "Yoxlanmış, aktiv satışda olan bizneslər",
    view_all: "Hamısına bax",
    how_title: "Necə işləyir",
    how_sub: "Alıcı və satıcı üçün aydın, nəzarətli proses",
    step1_t: "Elanı incələ",
    step1_d: "Yoxlanmış biznes elanlarına bax, filtrlərlə tap.",
    step2_t: "NDA imzala",
    step2_d: "İstədiyin biznes üçün məxfilik müqaviləsini imzala və tam məlumatı al.",
    step3_t: "Peşəkar dəstək",
    step3_d: "Qiymətləndirmə, hüquqi və vergi xidmətlərini bir yerdən götür.",
    step4_t: "Sövdələşməni bağla",
    step4_d: "Escrow və rəsmi müqavilə ilə təhlükəsiz keçid.",
    services_title: "Peşəkar xidmətlər",
    services_sub: "Hər sövdələşmə üçün lazım olan bütün xidmətlər — bir yerdə",
    cta_band_title: "Biznesini satmaq istəyirsən?",
    cta_band_sub: "Elanını yerləşdir, alıcılarla bağlan, peşəkar dəstək al.",
    cta_band_btn: "Satmağa başla",
    footer_about: "Azərbaycanda biznes alış-satışı üçün peşəkar platforma. Satıcı və alıcını birləşdirir, onlara lazım olan bütün peşəkar xidmətləri təmin edir.",
    footer_platform: "Platforma",
    footer_legal: "Hüquqi",
    footer_support: "Dəstək",
    footer_terms: "İstifadə şərtləri",
    footer_privacy: "Məxfilik siyasəti",
    footer_nda: "NDA şablonu",
    footer_contact: "Əlaqə",
    footer_faq: "FAQ",
    footer_help: "Kömək",
    filters: "Filtrlər",
    f_cat: "Kateqoriya",
    f_city: "Şəhər",
    f_price: "Qiymət (AZN)",
    f_min: "Min",
    f_max: "Maks",
    f_revenue: "Aylıq gəlir (AZN)",
    f_years: "Fəaliyyət müddəti",
    f_any_years: "İstənilən",
    f_2plus: "2+ il",
    f_5plus: "5+ il",
    f_apply: "Tətbiq et",
    f_reset: "Sıfırla",
    sort_by: "Sırala",
    sort_newest: "Ən yeni",
    sort_price_low: "Qiymət (aşağı)",
    sort_price_high: "Qiymət (yuxarı)",
    sort_revenue: "Gəlir (yuxarı)",
    results_count: "nəticə",
    no_results: "Heç bir nəticə tapılmadı. Filtrləri dəyişin.",
    listing_meta_area: "m²",
    listing_meta_staff: "işçi",
    listing_meta_years: "il",
    price_per_m2: "AZN/m²",
    detail_overview: "Biznes haqqında",
    detail_specs: "Əsas göstəricilər",
    detail_revenue: "Aylıq gəlir",
    detail_profit: "Aylıq mənfəət",
    detail_rent: "Aylıq kirayə",
    detail_staff: "İşçi sayı",
    detail_area: "Sahə",
    detail_years: "Fəaliyyət müddəti",
    detail_reason: "Satış səbəbi",
    detail_equipment: "Avadanlıq daxildir",
    detail_license: "Lisenziya daxildir",
    detail_yes: "Bəli",
    detail_no: "Xeyr",
    detail_contact: "Satıcı ilə əlaqə",
    detail_nda: "NDA imzala və məlumat al",
    detail_save: "Saxla",
    detail_owner: "Birbaşa sahib",
    detail_broker: "Broker",
    detail_agency: "Agentlik",
    detail_posted: "Yerləşdirilib",
    detail_services_title: "Bu sövdələşmə üçün tövsiyə edirik",
    detail_services_sub: "Valuasiya, due diligence, hüquqi və vergi dəstəyi — bir yerdən.",
    detail_services_btn: "Xidmətlərə bax",
    sell_title: "Biznesini sat",
    sell_sub: "Yoxlanmış alıcı bazası. Peşəkar dəstək. Məxfilik qorunur.",
    sell_step1_t: "Elan yarat",
    sell_step1_d: "Biznesin haqqında məlumatları doldur. 10 dəqiqə çəkir.",
    sell_step2_t: "Yoxlama",
    sell_step2_d: "Komandamız sənədləri yoxlayır, elanı təsdiqləyir.",
    sell_step3_t: "Alıcılarla bağlan",
    sell_step3_d: "NDA imzalayan ciddi alıcıları qəbul et.",
    sell_step4_t: "Sövdələşməni bağla",
    sell_step4_d: "Peşəkar dəstəklə təhlükəsiz keçid.",
    form_title: "Elan məlumatları",
    form_name: "Biznesin adı",
    form_cat: "Kateqoriya",
    form_city: "Şəhər",
    form_district: "Rayon",
    form_price: "Qiymət (AZN)",
    form_area: "Sahə (m²)",
    form_revenue: "Aylıq gəlir (AZN)",
    form_staff: "İşçi sayı",
    form_years: "Fəaliyyət illəri",
    form_desc: "Təsvir",
    form_email: "E-poçt",
    form_phone: "Telefon",
    form_submit: "Elanı göndər",
    form_note: "Elanınız 24 saat ərzində yoxlanılır və təsdiqdən sonra yayımlanır. Məxfilik qorunur — əlaqə məlumatlarınız yalnız NDA imzalayan alıcılara göstərilir.",
    form_sent: "Təşəkkürlər! Elanınız qəbul edildi. Komandamız tezliklə sizinlə əlaqə saxlayacaq.",
    services_page_title: "Peşəkar xidmətlər",
    services_page_sub: "Biznes alış-satışının hər addımında sənə lazım olan ekspertlər.",
    services_providers: "Yoxlanmış provayderlər",
    service_book: "Müraciət et",
    service_from: "başlayan qiymət",
    service_duration: "müddət",
    badge_featured: "SEÇİLMİŞ",
    lang_label: "Dil",
    verified: "Yoxlanmış",
    nav_favorites: "Saxlanmış",
    nav_map: "Xəritə",
    nav_valuation: "Qiymətləndirmə",
    afford_title: "Büdcəmə uyğun nə var?",
    save_listing: "Saxla",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Mənfəət marjası",
    payback_period: "Geri ödəmə müddəti",
    recent_title: "Son baxdıqlarınız",
    testimonials_title: "Müştəri rəyləri",
    deals_closed_label: "Bağlanmış sövdələşmə",
    total_volume_label: "Ümumi həcm",
    avg_close_days_label: "Orta bağlanma müddəti",
    buyer_satisfaction_label: "Alıcı məmnuniyyəti",
    avg_close_days_unit: "gün",
    buyer_satisfaction_unit: "%",
    calc_title: "Biznesinizin dəyərini öyrənin",
    valuation_title: "Pulsuz qiymətləndirmə",
    sort_best_value: "Ən yaxşı dəyər",
    compare_bar_btn: "Müqayisə et",
    payback_label: "Geri qaytarma müddəti",
    payback_unit: "ay",
    margin_label: "Mənfəət marjası",
    similar_listings: "Oxşar bizneslər",
    broker_verified: "Yoxlanmış broker",
    broker_profile_link: "Broker profili",
    broker_deals: "sövdələşmə",
    pricing_title: "Tariflər",
    plan_free_price: "Pulsuz",
    plan_cta: "Seçin",
    benchmarks_link: "Bençmarklar",
    map_link: "Xəritə"
  },
  en: {
    brand: "BizBazar",
    nav_home: "Home",
    nav_browse: "Browse",
    nav_services: "Services",
    nav_sell: "Sell a business",
    nav_about: "About",
    cta_signin: "Sign in",
    cta_list: "List your business",
    hero_title: "Buy or sell a business — made simple",
    hero_sub: "Azerbaijan's first professional business marketplace. Verified listings, valuation, legal and tax services — all in one place.",
    hero_find: "Find a business",
    search_cat: "All categories",
    search_city: "All cities",
    search_price: "Price (max AZN)",
    stat_listings: "Active listings",
    stat_cities: "Cities",
    stat_pros: "Professionals",
    stat_closed: "Deals closed",
    cat_title: "Categories",
    cat_sub: "Pick the business type you're interested in",
    featured_title: "Featured businesses",
    featured_sub: "Verified, actively-for-sale businesses",
    view_all: "View all",
    how_title: "How it works",
    how_sub: "A clear, managed process for buyers and sellers",
    step1_t: "Browse",
    step1_d: "Explore verified listings, filter by your criteria.",
    step2_t: "Sign an NDA",
    step2_d: "Sign the confidentiality agreement and unlock full information.",
    step3_t: "Get professional help",
    step3_d: "Valuation, legal and tax services — all from one place.",
    step4_t: "Close the deal",
    step4_d: "Escrow and formal contract for a safe handover.",
    services_title: "Professional services",
    services_sub: "Every service you need for a deal — in one place",
    cta_band_title: "Selling your business?",
    cta_band_sub: "List it, connect with buyers, get professional support.",
    cta_band_btn: "Start selling",
    footer_about: "A professional marketplace for buying and selling businesses in Azerbaijan. Connecting sellers and buyers and providing the professional services they need.",
    footer_platform: "Platform",
    footer_legal: "Legal",
    footer_support: "Support",
    footer_terms: "Terms of service",
    footer_privacy: "Privacy policy",
    footer_nda: "NDA template",
    footer_contact: "Contact",
    footer_faq: "FAQ",
    footer_help: "Help",
    filters: "Filters",
    f_cat: "Category",
    f_city: "City",
    f_price: "Price (AZN)",
    f_min: "Min",
    f_max: "Max",
    f_revenue: "Monthly revenue (AZN)",
    f_years: "Years in operation",
    f_any_years: "Any",
    f_2plus: "2+ years",
    f_5plus: "5+ years",
    f_apply: "Apply",
    f_reset: "Reset",
    sort_by: "Sort",
    sort_newest: "Newest",
    sort_price_low: "Price (low)",
    sort_price_high: "Price (high)",
    sort_revenue: "Revenue (high)",
    results_count: "results",
    no_results: "No results. Try changing the filters.",
    listing_meta_area: "m²",
    listing_meta_staff: "staff",
    listing_meta_years: "yrs",
    price_per_m2: "AZN/m²",
    detail_overview: "About the business",
    detail_specs: "Key metrics",
    detail_revenue: "Monthly revenue",
    detail_profit: "Monthly profit",
    detail_rent: "Monthly rent",
    detail_staff: "Staff",
    detail_area: "Floor area",
    detail_years: "Years in operation",
    detail_reason: "Reason for sale",
    detail_equipment: "Equipment included",
    detail_license: "License included",
    detail_yes: "Yes",
    detail_no: "No",
    detail_contact: "Contact seller",
    detail_nda: "Sign NDA & get details",
    detail_save: "Save",
    detail_owner: "Direct from owner",
    detail_broker: "Broker",
    detail_agency: "Agency",
    detail_posted: "Posted",
    detail_services_title: "Recommended for this deal",
    detail_services_sub: "Valuation, due diligence, legal and tax support — from one place.",
    detail_services_btn: "Browse services",
    sell_title: "Sell your business",
    sell_sub: "Verified buyer base. Professional support. Confidentiality protected.",
    sell_step1_t: "Create listing",
    sell_step1_d: "Fill in your business info. Takes 10 minutes.",
    sell_step2_t: "Verification",
    sell_step2_d: "Our team verifies your documents and approves the listing.",
    sell_step3_t: "Connect with buyers",
    sell_step3_d: "Receive serious buyers who have signed NDAs.",
    sell_step4_t: "Close the deal",
    sell_step4_d: "Safe transfer with professional support.",
    form_title: "Listing details",
    form_name: "Business name",
    form_cat: "Category",
    form_city: "City",
    form_district: "District",
    form_price: "Price (AZN)",
    form_area: "Area (m²)",
    form_revenue: "Monthly revenue (AZN)",
    form_staff: "Staff count",
    form_years: "Years in operation",
    form_desc: "Description",
    form_email: "Email",
    form_phone: "Phone",
    form_submit: "Submit listing",
    form_note: "Your listing is reviewed within 24 hours and published after approval. Confidentiality protected — your contact info is only shown to buyers who sign an NDA.",
    form_sent: "Thank you! Your listing was received. Our team will contact you shortly.",
    services_page_title: "Professional services",
    services_page_sub: "Experts you need at every step of buying or selling a business.",
    services_providers: "Verified providers",
    service_book: "Get started",
    service_from: "from",
    service_duration: "duration",
    badge_featured: "FEATURED",
    lang_label: "Language",
    verified: "Verified",
    nav_favorites: "Saved",
    nav_map: "Map",
    nav_valuation: "Valuation",
    afford_title: "What can I afford?",
    save_listing: "Save",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Profit margin",
    payback_period: "Payback period",
    recent_title: "Recently viewed",
    testimonials_title: "Customer reviews",
    deals_closed_label: "Deals closed",
    total_volume_label: "Total volume",
    avg_close_days_label: "Avg. closing time",
    buyer_satisfaction_label: "Buyer satisfaction",
    avg_close_days_unit: "days",
    buyer_satisfaction_unit: "%",
    calc_title: "Find out what your business is worth",
    valuation_title: "Free valuation",
    sort_best_value: "Best value",
    compare_bar_btn: "Compare",
    payback_label: "Payback period",
    payback_unit: "months",
    margin_label: "Profit margin",
    similar_listings: "Similar businesses",
    broker_verified: "Verified broker",
    broker_profile_link: "Broker profile",
    broker_deals: "deals",
    pricing_title: "Pricing",
    plan_free_price: "Free",
    plan_cta: "Choose",
    benchmarks_link: "Benchmarks",
    map_link: "Map",
    verified: "Verified",
    nav_favorites: "Saved",
    nav_map: "Map",
    nav_valuation: "Valuation",
    afford_title: "What can I afford?",
    save_listing: "Save",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Profit margin",
    payback_period: "Payback period"
  },
  ru: {
    brand: "BizBazar",
    nav_home: "Главная",
    nav_browse: "Каталог",
    nav_services: "Услуги",
    nav_sell: "Продать бизнес",
    nav_about: "О нас",
    cta_signin: "Войти",
    cta_list: "Разместить объявление",
    hero_title: "Купля-продажа бизнеса — просто",
    hero_sub: "Первая профессиональная площадка для бизнеса в Азербайджане. Проверенные объявления, оценка, юридические и налоговые услуги — всё в одном месте.",
    hero_find: "Найти бизнес",
    search_cat: "Все категории",
    search_city: "Все города",
    search_price: "Цена (макс AZN)",
    stat_listings: "Активных объявлений",
    stat_cities: "Городов",
    stat_pros: "Специалистов",
    stat_closed: "Сделок закрыто",
    cat_title: "Категории",
    cat_sub: "Выберите интересующий тип бизнеса",
    featured_title: "Избранные бизнесы",
    featured_sub: "Проверенные, активно продающиеся бизнесы",
    view_all: "Смотреть все",
    how_title: "Как это работает",
    how_sub: "Чёткий управляемый процесс для покупателей и продавцов",
    step1_t: "Просматривайте",
    step1_d: "Изучайте проверенные объявления, фильтруйте по критериям.",
    step2_t: "Подпишите NDA",
    step2_d: "Подпишите соглашение о конфиденциальности и получите полную информацию.",
    step3_t: "Получите профессиональную помощь",
    step3_d: "Оценка, юридические и налоговые услуги — в одном месте.",
    step4_t: "Закройте сделку",
    step4_d: "Эскроу и официальный договор для безопасной передачи.",
    services_title: "Профессиональные услуги",
    services_sub: "Все услуги для сделки — в одном месте",
    cta_band_title: "Продаёте бизнес?",
    cta_band_sub: "Разместите объявление, найдите покупателей, получите поддержку.",
    cta_band_btn: "Начать продажу",
    footer_about: "Профессиональная площадка для покупки и продажи бизнеса в Азербайджане.",
    footer_platform: "Платформа",
    footer_legal: "Правовая информация",
    footer_support: "Поддержка",
    footer_terms: "Условия использования",
    footer_privacy: "Политика конфиденциальности",
    footer_nda: "Шаблон NDA",
    footer_contact: "Контакты",
    footer_faq: "FAQ",
    footer_help: "Помощь",
    filters: "Фильтры",
    f_cat: "Категория",
    f_city: "Город",
    f_price: "Цена (AZN)",
    f_min: "Мин",
    f_max: "Макс",
    f_revenue: "Ежемесячная выручка (AZN)",
    f_years: "Лет работы",
    f_any_years: "Любой",
    f_2plus: "2+ лет",
    f_5plus: "5+ лет",
    f_apply: "Применить",
    f_reset: "Сбросить",
    sort_by: "Сортировка",
    sort_newest: "Новые",
    sort_price_low: "Цена (возрастание)",
    sort_price_high: "Цена (убывание)",
    sort_revenue: "Выручка (убывание)",
    sort_best_value: "Лучшая ценность",
    results_count: "результатов",
    no_results: "Ничего не найдено. Измените фильтры.",
    listing_meta_area: "м²",
    listing_meta_staff: "сотрудников",
    listing_meta_years: "лет",
    price_per_m2: "AZN/м²",
    detail_overview: "О бизнесе",
    detail_specs: "Ключевые показатели",
    detail_revenue: "Ежемесячная выручка",
    detail_profit: "Ежемесячная прибыль",
    detail_rent: "Ежемесячная аренда",
    detail_staff: "Сотрудников",
    detail_area: "Площадь",
    detail_years: "Лет работы",
    detail_reason: "Причина продажи",
    detail_equipment: "Оборудование включено",
    detail_license: "Лицензия включена",
    detail_yes: "Да",
    detail_no: "Нет",
    detail_contact: "Связаться с продавцом",
    detail_nda: "Подписать NDA и получить детали",
    detail_save: "Сохранить",
    detail_owner: "Напрямую от владельца",
    detail_broker: "Брокер",
    detail_agency: "Агентство",
    detail_posted: "Опубликовано",
    detail_services_title: "Рекомендуем для этой сделки",
    detail_services_sub: "Оценка, due diligence, юридическая и налоговая поддержка — в одном месте.",
    detail_services_btn: "Смотреть услуги",
    sell_title: "Продайте свой бизнес",
    sell_sub: "Проверенная база покупателей. Профессиональная поддержка. Конфиденциальность гарантирована.",
    sell_step1_t: "Создать объявление",
    sell_step1_d: "Заполните информацию о бизнесе. Займёт 10 минут.",
    sell_step2_t: "Проверка",
    sell_step2_d: "Наша команда проверяет документы и одобряет объявление.",
    sell_step3_t: "Найдите покупателей",
    sell_step3_d: "Получайте серьёзных покупателей, подписавших NDA.",
    sell_step4_t: "Закройте сделку",
    sell_step4_d: "Безопасная передача с профессиональной поддержкой.",
    form_title: "Данные объявления",
    form_name: "Название бизнеса",
    form_cat: "Категория",
    form_city: "Город",
    form_district: "Район",
    form_price: "Цена (AZN)",
    form_area: "Площадь (м²)",
    form_revenue: "Ежемесячная выручка (AZN)",
    form_staff: "Количество сотрудников",
    form_years: "Лет работы",
    form_desc: "Описание",
    form_email: "Email",
    form_phone: "Телефон",
    form_submit: "Отправить объявление",
    form_note: "Объявление проверяется в течение 24 часов и публикуется после одобрения. Конфиденциальность защищена — контактные данные видны только покупателям, подписавшим NDA.",
    form_sent: "Спасибо! Ваше объявление получено. Наша команда свяжется с вами в ближайшее время.",
    services_page_title: "Профессиональные услуги",
    services_page_sub: "Эксперты для каждого этапа покупки или продажи бизнеса.",
    services_providers: "Проверенные провайдеры",
    service_book: "Начать",
    service_from: "от",
    service_duration: "срок",
    badge_featured: "FEATURED",
    lang_label: "Язык",
    recent_title: "Недавно просмотренные",
    testimonials_title: "Отзывы клиентов",
    deals_closed_label: "Сделок закрыто",
    total_volume_label: "Общий объём",
    avg_close_days_label: "Среднее время закрытия",
    buyer_satisfaction_label: "Удовлетворённость покупателей",
    avg_close_days_unit: "дней",
    buyer_satisfaction_unit: "%",
    calc_title: "Узнайте стоимость вашего бизнеса",
    valuation_title: "Бесплатная оценка",
    compare_bar_btn: "Сравнить",
    payback_label: "Срок окупаемости",
    payback_unit: "мес",
    margin_label: "Маржа прибыли",
    similar_listings: "Похожие бизнесы",
    broker_verified: "Проверенный брокер",
    broker_profile_link: "Профиль брокера",
    broker_deals: "сделок",
    pricing_title: "Тарифы",
    plan_free_price: "Бесплатно",
    plan_cta: "Выбрать",
    benchmarks_link: "Показатели рынка",
    map_link: "Карта",
    verified: "Проверено",
    nav_favorites: "Избранное",
    nav_map: "Карта",
    nav_valuation: "Оценка",
    afford_title: "Что я могу купить?",
    save_listing: "Сохранить",
    whatsapp_contact: "WhatsApp",
    telegram_contact: "Telegram",
    profit_margin: "Маржа прибыли",
    payback_period: "Срок окупаемости"
  }
};

const CATEGORY_ICONS = {
  cafe_restaurant: "🍽️",
  beauty_salon: "💅",
  auto_service: "🚗",
  retail_shop: "🛒",
  fitness_sport: "💪",
  production: "🏭",
  education: "🎓",
  medical: "🩺",
  hotel_hostel: "🛏️",
  entertainment: "🎤",
  services: "🔧",
  pharmacy: "💊"
};

const SERVICE_ICONS = {
  valuation: "📈",
  legal: "⚖️",
  tax: "🧮",
  consulting: "💼",
  due_diligence: "🔍",
  financing: "🏦"
};

/* ============ Language handling ============ */
function getLang() {
  return localStorage.getItem("bb_lang") || "az";
}
function setLang(lang) {
  localStorage.setItem("bb_lang", lang);
  document.documentElement.lang = lang;
  applyI18n();
  // let pages hook in
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}
function t(key) {
  const lang = getLang();
  return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.az[key] || key;
}
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // set active on language buttons
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === getLang());
  });
}

/* ============ Formatting ============ */
function fmtAZN(n) {
  if (n == null || n === 0) return "—";
  return new Intl.NumberFormat("en-US").format(n) + " AZN";
}
function fmtUSD(n) {
  if (n == null || n === 0) return "";
  return "≈ $" + new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(n * AZN_TO_USD));
}
function fmtNum(n) {
  if (n == null) return "—";
  return new Intl.NumberFormat("en-US").format(n);
}
function fmtDate(s) {
  if (!s) return "";
  const d = new Date(s);
  const locales = { az: "az-AZ", en: "en-GB", ru: "ru-RU" };
  return d.toLocaleDateString(locales[getLang()] || "az-AZ", { day: "2-digit", month: "short", year: "numeric" });
}

/* ============ Data loading ============ */
async function loadJSON(path) {
  const resp = await fetch(path);
  if (!resp.ok) throw new Error("Failed to load " + path);
  return resp.json();
}

async function loadListings() {
  return loadJSON("data/listings.json");
}
async function loadCategories() {
  return loadJSON("data/categories.json");
}
async function loadServices() {
  return loadJSON("data/services.json");
}
async function loadTestimonials() {
  return loadJSON("data/testimonials.json");
}
async function loadPlans() {
  return loadJSON("data/plans.json");
}
async function loadBrokers() {
  return loadJSON("data/brokers.json");
}

/* ============ Localization helpers on records ============ */
function locField(rec, base) {
  const lang = getLang();
  return rec[`${base}_${lang}`] || rec[`${base}_az`] || rec[base] || "";
}
function catLabel(catObj) {
  const lang = getLang();
  return catObj ? (catObj[`label_${lang}`] || catObj.label_az) : "";
}

/* ============ Shared UI: header / footer ============ */
function renderHeader(activePage) {
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html">
        <span class="logo-mark">B</span>
        <span>BizBazar<span style="color: var(--accent)">.az</span></span>
      </a>
      <nav class="nav">
        <a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home"></a>
        <a href="listings.html" class="${activePage === 'listings' ? 'active' : ''}" data-i18n="nav_browse"></a>
        <a href="services.html" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav_services"></a>
        <a href="sell.html" class="${activePage === 'sell' ? 'active' : ''}" data-i18n="nav_sell"></a>
        <a href="map.html" class="${activePage === 'map' ? 'active' : ''}" data-i18n="nav_map"></a>
        <a href="valuation.html" class="${activePage === 'valuation' ? 'active' : ''}" data-i18n="nav_valuation"></a>
        <a href="favorites.html" class="${activePage === 'favorites' ? 'active' : ''}">♥ <span data-i18n="nav_favorites"></span>${getFavorites().length > 0 ? ` <span class="fav-count">${getFavorites().length}</span>` : ''}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-switch">
          <button data-lang="az">AZ</button>
          <button data-lang="en">EN</button>
          <button data-lang="ru">RU</button>
        </div>
        <a href="sell.html" class="btn btn-primary" data-i18n="cta_list"></a>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="logo" style="color: white; margin-bottom: 14px;">
            <span class="logo-mark">B</span>
            <span>BizBazar<span style="color: var(--accent)">.az</span></span>
          </div>
          <p style="color: #94a3b8; font-size: 14px; margin: 0; max-width: 320px;" data-i18n="footer_about"></p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_platform"></h4>
          <a href="listings.html" data-i18n="nav_browse"></a>
          <a href="services.html" data-i18n="nav_services"></a>
          <a href="sell.html" data-i18n="nav_sell"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_legal"></h4>
          <a href="#" data-i18n="footer_terms"></a>
          <a href="#" data-i18n="footer_privacy"></a>
          <a href="#" data-i18n="footer_nda"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer_support"></h4>
          <a href="#" data-i18n="footer_contact"></a>
          <a href="#" data-i18n="footer_faq"></a>
          <a href="#" data-i18n="footer_help"></a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 BizBazar.az</span>
        <span>Bakı, Azərbaycan</span>
      </div>
    </div>
  </footer>`;
}

function mountLayout(activePage) {
  const headerMount = document.getElementById("header-mount");
  const footerMount = document.getElementById("footer-mount");
  if (headerMount) headerMount.innerHTML = renderHeader(activePage);
  if (footerMount) footerMount.innerHTML = renderFooter();
  // wire language switcher
  document.querySelectorAll(".lang-switch button").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });
  document.documentElement.lang = getLang();
  applyI18n();
}

/* ============ Favorites (localStorage) ============ */
function getFavorites() {
  try { return JSON.parse(localStorage.getItem("bb_favorites") || "[]"); } catch(e) { return []; }
}
function isFavorite(id) {
  return getFavorites().includes(id);
}
function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) { favs = favs.filter(x => x !== id); }
  else { favs.push(id); }
  localStorage.setItem("bb_favorites", JSON.stringify(favs));
  return favs.includes(id);
}

/* ============ Recently viewed (localStorage) ============ */
function getRecentlyViewed() {
  try { return JSON.parse(localStorage.getItem("bb_recent") || "[]"); } catch(e) { return []; }
}
function addRecentlyViewed(id) {
  let recent = getRecentlyViewed().filter(x => x !== id);
  recent.unshift(id);
  if (recent.length > 10) recent = recent.slice(0, 10);
  localStorage.setItem("bb_recent", JSON.stringify(recent));
}

/* ============ Listing photos ============ */
function getListingPhotos(listing) {
  // returns array of at least 3 photo URLs (placeholder images keyed by category)
  const CAT_IMGS = {
    cafe_restaurant: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800","https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400","https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400"],
    beauty_salon:    ["https://images.unsplash.com/photo-1560066984-138daaa4b0f5?w=800","https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400","https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400"],
    auto_service:    ["https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800","https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400","https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400"],
    retail_shop:     ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800","https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400","https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400"],
    fitness_sport:   ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800","https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400","https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400"],
    production:      ["https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400","https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400"],
    education:       ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400","https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400"],
    medical:         ["https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800","https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400","https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400"],
    hotel_hostel:    ["https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800","https://images.unsplash.com/photo-1455587734955-081b22074882?w=400","https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400"],
    entertainment:   ["https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800","https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400","https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400"],
    services:        ["https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400","https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"],
    pharmacy:        ["https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800","https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400","https://images.unsplash.com/photo-1576671081837-49000212a370?w=400"]
  };
  const fallback = ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800","https://images.unsplash.com/photo-1497366216548-37526070297c?w=400","https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400"];
  return (listing && CAT_IMGS[listing.category]) || fallback;
}
function getListingThumb(listing) {
  return getListingPhotos(listing)[0];
}

/* ============ Skeleton card ============ */
function skeletonCardHTML() {
  return `<div class="listing-card skeleton-card" aria-hidden="true">
    <div class="listing-image skeleton-block" style="height:140px;"></div>
    <div class="listing-body">
      <div class="skeleton-line" style="width:40%;height:12px;margin-bottom:8px;"></div>
      <div class="skeleton-line" style="width:80%;height:18px;margin-bottom:6px;"></div>
      <div class="skeleton-line" style="width:60%;height:12px;margin-bottom:12px;"></div>
      <div class="skeleton-line" style="width:50%;height:22px;"></div>
    </div>
  </div>`;
}

/* ============ Listing card ============ */
function listingCardHTML(l, categoriesById) {
  const cat = categoriesById[l.category];
  const icon = CATEGORY_ICONS[l.category] || "🏢";
  const featuredBadge = l.featured ? `<div class="listing-badge">${t("badge_featured")}</div>` : "";
  const verifiedBadge = l.verified ? `<div class="verified-badge">✓ ${t("verified")}</div>` : "";
  const thumb = getListingThumb(l);
  const saved = isFavorite(l.id);
  const waBtn = l.whatsapp && l.phone
    ? `<a class="wa-btn wa-btn-sm" href="https://wa.me/994502009088" target="_blank" onclick="event.stopPropagation()">WhatsApp</a>`
    : "";
  return `
  <a class="listing-card" href="listing.html?id=${l.id}">
    <div class="listing-image">
      <img src="${thumb}" alt="${locField(l,'title')}" loading="lazy">
      ${featuredBadge}
      <span class="cat-overlay">${icon}</span>
      <button class="save-btn${saved ? ' saved' : ''}" data-id="${l.id}" onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('saved');toggleFavorite('${l.id}')">♥</button>
      <label class="compare-checkbox-wrap" onclick="event.stopPropagation()"><input type="checkbox" class="compare-cb" data-id="${l.id}" data-title="${locField(l,'title').replace(/"/g,'&quot;')}"></label>
    </div>
    <div class="listing-body">
      ${verifiedBadge}
      <div class="listing-cat">${catLabel(cat)}</div>
      <h3 class="listing-title">${locField(l, "title")}</h3>
      <div class="listing-loc">📍 ${l.district}, ${l.city}</div>
      <div class="listing-meta">
        <span>📐 ${fmtNum(l.area_m2)} m²</span>
        <span>👥 ${l.staff_count}</span>
        <span>📅 ${l.operating_years} ${t("listing_meta_years")}</span>
      </div>
      <div class="listing-price">${fmtAZN(l.price_azn)}<span class="listing-price-sub">${fmtUSD(l.price_azn)}</span></div>
      ${waBtn}
    </div>
  </a>`;
}
