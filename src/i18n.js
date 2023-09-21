import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug:true,
    fallbackLng: "ru",
    resources: {
        ru:{
            translation:{
                header: {
                    navLinksList:["Услуги", "Отзывы", "Блог", "Вакансии", "Контакты"],
                    buttonText:"Записаться на сервис"
                },
                hero: {
                    h1: ["Сертифицирован","ный ", "сервис “571”","  позаботится о вашей машине!" ],
                    p: "Услуги по ремонту и диагностике, тюнингу и комплексному обслуживанию автомобилей Opel, KIA, Peugeot, Jeep, Citroen, Chery, Chevrolet и других марок авто.",
                    animationText: ["Полировка", "Шиномонтаж", "Станция технического обслуживания"],
                    benefits: ["ДОВОЛЬНЫХ КЛИЕНТОВ", "ОПЫТНЫХ СПЕЦИАЛИСТОВ", "ЛЕТ КАЧЕСТВЕННО РАБОТАЕМ"],
                },
                services:{
                    h3:["571 Service"," — весь спектр услуг по ремонту и уходу за автомобилем под одной крышей"],
                    p: "Для вашего удобства и экономии времени предоставляем полный комплекс услуг, включающий в себя СТО, шиномонтажную станцию и автомойку.",
                    servicesUlText:["Полировка фар", "Станция технического обслуживания", "Шиномонтаж"],
                    carWashItem:["Химчистка", "Полировка автомобиля", "Удаление насекомых", "Чернение шин"],
                    carServiceItem:["КПП", "Ходовая часть автомобиля", "Кузовной ремонт", "Двигатель"],
                    tireServiceItem:["Рихтовка дисков", "Покраска дисков", "Ремонт шин", "Вулканизация"],
                },
                about:{
                    h2: "О компании",
                    h3:["профессионально ремонтируем автомобили"," и выполняем полный спектр услуг послегарантийного сервиса"],
                    p: "Наш автосервис может предложить к вашим услугам квалифицированных мастеров, имеющих опыт ремонта и обслуживания современных легковых автомобилей, внедорожников и микроавтобусов, включая среднюю и длинную базу.",
                  h4List:["Итальянское оборудование", "Комплексный подход"],
                  pList:["Наш автосервис оснащен современным оборудованием европейского качества марки MONDOLFO FERRO. Все станки проходит регулярную проверку и калибровку для поддержания должного функционального уровня.", "Над вашим авто работает целая команда специалистов разного профиля, что позволяет быстро и качественно диагностировать неисправность и устранить ее. Мы с ответственностью и совестью подходим к выполнению своих обязанностей, поэтому всегда ищем наиболее рациональное решение в плане вашего бюджета и времени."]
                },
                feedbacks:{
                    h3:["относимся к каждому нашему ","клиенту с уважением"],
                    p:"Поэтому делаем свою работу качественно.",
                    feedbacks:[ ["Отличное СТО", "Отличное СТО. Был первый раз. Наверное парни делают все. Ценник среднерынночный. Время исполнительных работ - пунктуальное. Если конечно не всплывёт еще что-то, что может затянуть по времени. Доволен вобщем. Спасибо за работу!", "Валентин"],
                    ["Довольна качеством обслуживания", "Обращаюсь уже второй раз. В первый раз по электрике, второй раз по ходовой. Выявили и устранили причину неисправности. Довольна качеством обслуживания. Рекомендую)", "Anna"],
                    ["Отличный СТО", "Доволен работой, работа выполнена качественно. Рекомендую)", "Антон"],
                    ["Сделали все быстро", "Заезжал на сто, бампер передний отреставрировали и сделали отлично. Провели в салон свет (противотуманки), отличный электрик - Женя и нашел утечку электроэнергии и свет в салоне починил и магнитолу переподключил. Сделали все быстро.", "Евгений"]],
                    buttonText:"Смотреть все отзывы →",
                },
                certifications:{
                    h2: "Сертификаты",
                    h3: ["являемся сертифицированной точкой реализации"," оригинальных масел и запчастей многих известных брендов"],
                    p: "Наша команда продолжает совершенствоваться, ведь главная цель для нас — предоставлять лучшее обслуживание автомобилей клиентов в Киеве!"
                },
                form: {
                    h2: "Запись",
                    h3: "Запишитесь прямо сейчас!",
                    labels:["Ваше имя", "Номер телефона"],
                    placeholderName:"Иван Иванов",
                    buttonSubmittedText:["Спасибо!","Ваши данные приняты — ожидайте звонок."],
                    checkboxText:"Я согласен на обработку персональных данных",
                    p: "Или просто позвоните"
                },
                blog:{
                    h3:["С компанией “571 Service” вы всегда будете"," в курсе всех новинок и полезных рекмендаций ","со всего мира"],
                    posts:[["Современное СТО с опытом — это правильный выбор","Ремонт машины можно доверять только опытным профессионалам, если хочется сохранить ее в оптимальном..."], ["Секреты профессиональной локальной покраски авто", "Автомобиль давно стал для многих чем-то большим, чем просто средство передвижения. Это преданный..."], ["Почему нельзя игнорировать развал-схождение", "Наверняка каждый владелец авто, даже начинающий, слышал о том, что такое развал-схождение. "]],
                    buttonText:"Все статьи →",
                },
                contacts:{
                    h3:["571 Service", " всегда на связи"],
                    actions:["Звоните", "Пишите", "Приезжайте"],
                    address: "г. Киев, ул. Народного Ополчения, 26а",
                },
                footer:{
                    time: "Время работы:",
                    navLinksTitles:["СТО", "Автомойка", "Шиномонтаж"],
                    carServiceList: ["Ремонт двигателя", "Ремонт КПП",
                    "Ремонт и обслуживание ходовой части",
                   " Ремонт электротехнической части",
                    "Кузовной ремонт",
                    "Различные дополнительные услуги"],
                    carWashServiceList:["Наружная мойка автомобиля",
                    "Химчистка салона",
                  " Полировка фар или отдельных деталей кузова",
                    "Чернение шин",
                   " Удаление насекомых",
                    "Химчистка ковров"],
                    tireServiceList:["Монтаж и демонтаж шин и колес",
                   " Ремонт шин и вулканизация",
                    "Обслуживание ходовой части автомобиля",
                    "Различные дополнительные услуги"],
                    confidance: "Политика конфиденциальности",
                    rights: "© 2023. Все права защищены"
                }, 
                carService:{
                    h1:["СТО 571 Service  — ", "полный спектр услуг по ремонту и диагностике"],
    p:"Наш автосервис может предложить к вашим услугам квалифицированных мастеров, имеющих опыт ремонта и обслуживания современных легковых автомобилей, внедорожников и микроавтобусов.",
    buttonText: "Записаться на сТО ",
    benefitsUl: ["ДОВОЛЬНЫХ КЛИЕНТОВ", "ОПЫТНЫХ СПЕЦИАЛИСТОВ", "ЛЕТ КАЧЕСТВЕННО РАБОТАЕМ"],
    h2: "Основные направления",
    h3: ["Технически исправна машина будет надежна и обеспечит ", "комфортное и безопасно управление"],
    pList:["Обслуживание своего автомобиля – является наиболее важным фактором владения и управления транспортным средством.", 
    "Ремонт и обслуживание автомобиля является достаточно сложным процессом, особенно, если речь идет об импортных машинах известных брендов. Чтобы упростить себе задачу, можно обратиться в наш автосервис 571 и качественно отремонтировать свой автомобиль. К основным направлением деятельности нашего СТО относятся:"],
    h4List:[ "Ремонт и обслуживание ходовой", "Дополнительные услуги"]
                },
                carWash:{
                    h1:["Полировка фар — ", "это важный этап ухода за автомобилем"],
                    p:"В процессе эксплуатации на них негативно влияют погодные условия и механические нагрузки. Это может привести к тому, что данный элемент автомобиля утратит свою эффективность.",
                    buttonText: "Записаться на полировку",
                    h3: ["Чистота и порядок ", "в машине создают комфортные условия", "для водителя"],
                    pList:"Уход за собственным автомобилем – важный аспект. Каждый автовладелец старается держать салон и кузов машины в чистоте и порядке. Это не только создаст комфортные условия передвижения, но и повысит имидж и авторитет водителя. Чтобы сделать процесс поддержания чистоты более комфортным, можно помыть машину на левом берегу на нашем автомойке.",
                },
                carTire:{
                    h1:["Шиномонтаж 571 Service —  ", " выгодно, удобно и надежно!"],
                    p:"Мы успешно работаем с резиной любых типов (RunFlat, низкопрофильная, шипованная и т.д.). Правильный и аккуратный зажим дисков позволяет минимизировать риск возможной поломки шпилек, болтов, гаек и других элементов.",
                    buttonText:"Записаться на Шиномонтаж",
                    h3:["Осуществлять обслуживание колес следует у", " профессионалов — 571 Service"],
                    pList:"Состояние автомобильных шин играет важную роль. Степень износа и цепляющие свойства позволяют продлить срок службы подвески, уверенней управлять автомобиль и снизить тормозной путь в экстренной ситуации. Осуществлять обслуживание колес следует у профессионалов, поэтому многие обращаются в наш шиномонтаж 571 на левом берегу."
                },
                engineRepair:{
                    p:"Двигун - це серце кожного автомобіля. І, за аналогією з людським тілом, при поганому серці страждає все тіло.",
                    paragraph:["ДВС - серце автомобіля, тому ремонт двигуна це важливий процес",
                    "Цей агрегат має безліч різних компонентів, тому перед ремонтом слід провести ретельну діагностику. Наша СТО на лівому березі має спеціальне професійне обладнання, що дозволяє переглядати записи бортового комп'ютера, а також визначати точну причину несправності.",
                    "До найпоширеніших проблем,"," які відносяться до двигуна включають:"],
                    list:["Двигун не запускається", "Зламаний ремінь ГРМ, генератор", "Стукіт металу під час роботи двигуна", "Скрип", "Скорочення нафти", "Поява емульсії в картері", "Витоки до прокладки", "Низька тяга та інші"],
                    paragraph2:["Фахівці нашого автосервісу оперативно проведуть діагностику і з'ясують причину несправності. Якщо двигун не запускається і не обертається, це може бути причиною несправного стартера. Заміна стартера в нашій СТО проводиться в найкоротші терміни. У каталозі великий вибір запчастин, а досвідчені фахівці володіють інформацією про спосіб заміни стартера в кожному автомобілі.",
                    "Щоб запобігти проблемі, рекомендується регулярно перевіряти двигун автомобіля. Діагностика автомобіля нашою службою проводиться за правилами. Також можливо створити запис у службовій книзі.",
                    "Регулярно відвідуючи наш сервіс технічного обслуговування, скоротить рік ремонту автомобіля. Адже своєчасна заміна застарілих деталей дозволить запобігти утворенню більш серйозної проблеми. Наприклад, заміна таймінгу в нашому сервісі надає можливість запобігти розриву ланцюга або ременя. В результаті поршнева група і клапани залишаться недоторканими, а довгий похід буде комфортним. Також СТО 571 забезпечує заміну масла в двигуні і коробці передач. У нас є підйомники, і ми використовуємо якісну нафту для їх заміни."],
                    h2:"Цены на работы по ремонту двигателя",
                    priceTitles:["Услуга", "Стоимость", "от", "уточняйте"],
                    priceList:["Замена сальника распредвала", "Замена сальника коленвала", "Замена гидрокомпенсатора", "Замена сальника клапанов", "Замена и установка поршневых колец", "Замена прокладки ГБЦ", "Замена прокладки клапанной крышки", "Замена прокладки впускного коллектора","Замена прокладки выпускного коллектора","Замер компресии бензинового двигателя без снятия коллектора", "Промывка двигателя", "Замена двигателя", "Замена масляного насоса", "Замена прокладки поддона картера", "Замена ГБЦ", "Регулировка клапанов двигателя", "Замена воздушного фильтра"]
                },
                gearboxRepair:{
                    p:"Коробка переключения передач – один из наиболее сложных узлов любого автомобиля, который предназначен для изменения скоростного режима.",
                    paragraph:["Коробка передач служит дольше всего в автомобиле, а её неисправность может стать серьезной проблемой. Однако обратившись в наше СТО на левом берегу, можно быть уверенным в скором ремонте КПП вашего автомобиля. Ремонт КПП осуществляется исключительно опытными специалистами.",
                    "Ремонт выполняется в специальном боксе, где имеется надежный подъемник. После демонтажа коробки, специалисты проведут диагностику и подберут соответствующие запчасти по VIN-номеру. Каждый клиент может быть уверен в высоком качестве предоставляемых услуг, так как все задачи по ремонту и подбору запчастей берет на себя сервис.",
                    "К проблемам КПП также относят обрыв сцепления или другие проблемы с данным модулем. Замена сцепления осуществляется аналогичным образом. Все действия документируются, а клиент по результату работы получит подробный отчет по выполненным работам. Стоит отметить, что мы осуществляем ремонт механической и автоматической КПП."],
                    h2:"Цены на работы по ремонту КПП",
                    priceList:["Ремонт МКПП", "Ремонт АКПП", "Замена МКПП", "Замена АКПП"]
            
                },
                chassisRepair:{
                    p:["Ходовая часть автомобиля чаще всего подвержена износу из-за высокой нагрузки на неё.",
                    "К частым проблемам ходовой части относят:"],
                    list:["Изнашивание втулок и сайлентблоков", "Износ рычагов и наконечников", "Проседания пружин амортизатора или их обрыв", "Выход со строя амортизатора", "Отказ ГУРа или ЭУРа", "«Съедание» резины и многое другое"],
                    paragraph:["Если вы обнаружили неприятный и нехарактерный звук от ходовой машины, следует как можно скорее обратиться в наш автосервис на левом берегу Киева. Наши специалисты проведут тщательную диагностику на специальном стенде и выявят причину неисправности. Благодаря наличию подъемника, мы также можем заменить выхлопную систему.",
                    "Ремонт рулевого управления является важной задачей. Ведь это предотвратит потерю управления на большой скорости. Основные признаки появления проблем с рулевым управлением – это постукивание во время поворота руля, а также неустойчивость автомобиля на ровной дороге. Диагностика авто в нашем сервисе позволит выявить проблемы и оперативно решить её.",
                    "Также нашим сервисом осуществляется замена рулевой рейки с приводом управлением, будь то гидравлическая система или электрическая. Благодаря подбору запчастей по Вин-коду нашим сервисом, можно будет точно и без обмена подобрать эту дорогостоящую деталь.",
                    "После ремонта рулевого управления, потребуется выполнить развал схождения. Это процесс, во время которого проверяется угол расхождения колес передних и задних осей. Если не выполнить данный процесс, то будет повышение трение резины передних колес, что приведет к «съеданию» резины.",
                    "Развал схождения - это ситуация, когда угол схождения колес автомобиля отклоняется от необходимого значения, что может привести к быстрому износу шин и плохой управляемости автомобиля.",
                    "Если у вас возникли проблемы с «развалом» в Киеве, вам следует обратиться в автосервис 571, где проведут диагностику и необходимые работы по настройке развал схождения.",
                    "Не забывайте также, что регулярная проверка и настройка схождения колес является важной профилактической мерой для сохранения состояния автомобиля и безопасности на дороге."],
                    h2:"Цены на ремонт ходовой",
                    priceList:["Замена сальника полуоси (со снятием полуоси)", "Замена сайлентблоков", "Снятие подрамника", "Замена шаровой опоры", "Замена рычага", "Замена пыльника ШРУСа", "Замена подшипника ступицы", "Замена подушек двигателя", "Замена втулок стабилизатора (2 шт.) со снятием подрамника", "Замена стоек стабилизатора", "Замена втулок стабилизатора (2 шт.)", "Замена амортизатора в пружине", "Замена амортизатора без пружины", "Замена ШРУСа (гранаты)", "Ремонт карданного вала (кардана)"]

                }
            }
        },
        ua:{
            translation:{
                header: {
                    navLinksList:["Послуги", "Відгуки", "Блог", "Вакансії", "Контакти"],
                    buttonText:"Записатися на сервіс"
                },
                hero: {
                    h1: ["Сертифікований ", "", "сервіс “571”","  подбає про ваш автомобіль!" ],
                    p: "Послуги з ремонту та діагностики, тюнінгу та комплексного обслуговування автомобілів Opel, KIA, Peugeot, Jeep, Citroen, Chery, Chevrolet та інших автомобільних марок.",
                    animationText: ["Полірування", "Шиномонтаж", "Станція технічного обслуговування"],
                    benefits: ["ЗАДОВОЛЕНИХ КЛІЄНТІВ", "ДОСВІДЧЕНИХ ФАХІВЦІВ", "РОКІВ ЯКІСНОЇ РОБОТИ"],
                },
                services:{
                    h3:["571 Service"," — повний спектр послуг з ремонту та догляду за автомобілем під одним дахом"],
                    p: "Для вашої зручності та економії часу ми надаємо повний спектр послуг, включаючи СТО, шиномонтажну станцію та автомийку.",
                    servicesUlText:["Полірування фар", "Станція технічного обслуговування", "Шиномонтаж"],
                    carWashItem:["Хімчистка", "Полірування автомобілів", "Видалення комах", "Розмивання шин"],
                    carServiceItem:["КПП", "Ходова частина автомобіля", "Кузовной ремонт", "Двигун"],
                    tireServiceItem:["Випрямлення дисків", "Фарбування дисків", "Ремонт шин", "Вулканізація"],
                },
                about:{
                    h2: "Про компанію",
                    h3:["професійно ремонтуємо автомобілі"," і надаємо повний спектр післягарантійних послуг"],
                    p: "Наш автосервіс може запропонувати Вам кваліфікованих майстрів з досвідом ремонту і обслуговування сучасних автомобілів, позашляховиків і мікроавтобусів, включаючи середню і довгу базу.",
                  h4List:["Італійське обладнання", "Комплексний підхід"],
                  pList:["Наш автосервіс оснащений сучасним обладнанням бренду європейської якості MONDOLFO FERRO. Всі машини регулярно перевіряються і калібруються для підтримки їх функціонального рівня ", "Над вашим автомобілем працює ціла команда фахівців різного профілю, що дозволяє швидко і якісно діагностувати несправність і усунути її. Ми підходимо до своєї відповідальності з відповідальністю і совістю, тому завжди шукаємо найбільш раціональне рішення з точки зору вашого бюджету і часу."]
                },
                feedbacks:{
                    h3:["ставимося до кожного нашого ","клієнту з повагою"],
                    p:"Тому ми робимо свою роботу якісно.",
                    feedbacks:[ ["Чудове СТО", "Чудове СТО. Це було вперше. Напевно, хлопці роблять все. Цінник середньоринковий. Час виконання є пунктуальним. Якщо, звичайно, щось інше не прийде, що може зайняти деякий час. Я задоволений. Дякуємо за роботу!", "Валентин"],
                    ["Задоволена якістю обслуговування", "Це вже вдруге. Вперше в електротехніці, вдруге в бігу. Причину несправності було виявлено та ліквідовано. Задоволені якістю обслуговування. Рекомендуємо)", "Anna"],
                    ["Чудове СТО", "Задоволений роботою, робота виконана якісно. Рекомендуємо)", "Антон"],
                    ["Зробили все швидко", "Я був на СТО, і передній бампер  відновили, і  зробили чудово. Провели до кабіни світло (туманні заглушки), відмінний електрик - Женя і виявив витік електрики і світло в салоні відремонтував і знову підключили магніт. Зробили все швидко.", "Євгеній"]],
                    buttonText:"Дивитись всі відгуки →",
                },
                certifications:{
                    h2: "Сертифікати",
                    h3: ["є сертифікованим пунктом продажу"," оригінальних масел і запчастин багатьох відомих брендів"],
                    p: "Наша команда продовжує вдосконалюватися, адже головна мета для нас - надати кращий сервіс клієнтам в Києві!"
                },
                form: {
                    h2: "Запис",
                    h3: "Запишіться прямо зараз!",
                    labels:["Ваше ім'я", "Номер телефону"],
                    placeholderName:"Іван Іванов",
                    buttonSubmittedText:["Дякую!","Ваші дані приймаються - чекайте дзвінка."],
                    checkboxText:"Я згоден на обробку персональних даних",
                    p: "Або просто зателефонуйте"
                },
                blog:{
                    h3:["З компанією “571 Service” ви завжди будете"," в ході всіх новин і корисних рекомендацій ","з усього світу"],
                    posts:[["Сучасна СТО з досвідом - це правильний вибір","Ремонт автомобіля можна довіряти тільки досвідченим професіоналам, якщо ви хочете зберегти його в оптимальному..."], ["Секрети професійного місцевого фарбування автомобілів", "Автомобіль давно став для багатьох чимось більшим, ніж просто засобом пересування. Це вірний..."], ["Чому ми не можемо ігнорувати колапс", "Я впевнений, що кожен власник автомобіля, навіть новачок, чув про розвалення, колапс. "]],
                    buttonText:"Усі статті →",
                },
                contacts:{
                    h3:["571 Service", " завжди на зв'язку"],
                    actions:["Дзвоніть", "Пишіть", "Приїжджайте"],
                    address: "м. Киев, вул. Святослава Хороброго, 26а",
                },
                footer:{
                    time: "Час роботи:",
                    navLinksTitles:["СТО", "Автомийка", "Шиномонтаж"],
                    carServiceList: ["Ремонт двигуна", "Ремонт КПП",
                    "Ремонт і технічне обслуговування ходової частини",
                   "Ремонт електротехнічної частини",
                    "Кузовной ремонт",
                    "Різні додаткові послуги"],
                    carWashServiceList:["Автомийка",
                    "Хімчистка салону",
                  " Полірування фар або частин кузова",
                    "Розмивання шин",
                   " Видалення комах",
                    "Хімчистка килимів"],
                    tireServiceList:["Монтаж і демонтаж шин і коліс",
                   " Ремонт і вулканізація шин",
                    "Обслуговування ходової частини",
                    "Різні додаткові послуги"],
                    confidance: "Політика конфіденційності",
                    rights: "© 2023. Всі права захищені"
                },
                carService:{
                    h1:["СТО 571 Service  — ", "повний комплекс послуг з ремонту та діагностики"],
    p:"Наш автосервіс може запропонувати Вам кваліфікованих майстрів з досвідом ремонту та обслуговування сучасних автомобілів, позашляховиків і мікроавтобусів.",
    buttonText: "Записатися на сТО ",
    h2: "Основні напрями",
    h3: ["Технічно справна машина буде надійною і забезпечить ", "комфортну та безпечну експлуатацію"],
    pList:["Обслуговування вашого автомобіля є найважливішим фактором володіння і водіння транспортного засобу.", 
    "Ремонт і обслуговування автомобіля - досить складний процес, особливо коли мова йде про імпортні автомобілі відомих марок. Щоб спростити ваше завдання, ви можете звернутися в наш автосервіс 571 і оновити свій автомобіль. Основними напрямками діяльності наших СТО є:"],
    h4List:[ "Ремонт і обслуговування ходової", "Додаткові послуги"]
                },
                carWash:{
                    h1:["Полірування фар — ", "це важливий етап догляду за автомобілем"],
                    p:"Під час експлуатації на них негативно впливають погодні умови та механічні напруження. Це може призвести до того, що цей елемент автомобіля втратить свою ефективність.",
                    buttonText: "Записатися на полірування",
                    h3: ["Чистота й порядок ", "створюють комфортні умови в автомобілі", "для водія"],
                    pList:"Догляд за власним автомобілем - важливий аспект. Кожен автовласник намагається зберегти салон і кузов автомобіля в чистоті і порядку. Це дозволить не тільки створити комфортні умови проїзду, але і поліпшити імідж і авторитет водія. Щоб процес прибирання став більш комфортним, можна помити машину на лівому березі нашої автомийки.",
                },
                carTire:{
                    h1:["Шиномонтаж 571 Service —  ", " вигідно, зручно і надійно!"],
                    p:"Ми успішно працюємо з будь-яким типом гуми (RunFlat, низький профіль, шипована тощо). Правильний і точний зажим для дисків мінімізує ризик можливої поломки шпильок, болтів, гайок та інших елементів.",
                    buttonText:"Записатися на Шиномонтаж",
                    h3:["Здійснювати обслуговування коліс слід у", " професіоналів — 571 Service"],
                    pList:"Стан автомобільних шин відіграє важливу роль. Властивості зношування та зчеплення подовжують термін служби підвіски, покращують контроль транспортного засобу та зменшують відстань зупинки в аварійній ситуації. Обслуговування коліс здійснюється професіоналами, тому багато хто звертається в наш шинний магазин 571 на лівому березі."
                },
                engineRepair:{
                    p:"Двигун - це серце кожного автомобіля. І, за аналогією з людським тілом, при поганому серці страждає все тіло.",
                    paragraph:["ДВС - серце автомобіля, тому ремонт двигуна це важливий процес",
                    "Цей агрегат має безліч різних компонентів, тому перед ремонтом слід провести ретельну діагностику. Наша СТО на лівому березі має спеціальне професійне обладнання, що дозволяє переглядати записи бортового комп'ютера, а також визначати точну причину несправності.",
                    "До найпоширеніших проблем,"," які відносяться до двигуна включають:"],
                    list:["Двигун не запускається", "Зламаний ремінь ГРМ, генератор", "Стукіт металу під час роботи двигуна", "Скрип", "Скорочення нафти", "Поява емульсії в картері", "Витоки до прокладки", "Низька тяга та інші"],
                    paragraph2:["Фахівці нашого автосервісу оперативно проведуть діагностику і з'ясують причину несправності. Якщо двигун не запускається і не обертається, це може бути причиною несправного стартера. Заміна стартера в нашій СТО проводиться в найкоротші терміни. У каталозі великий вибір запчастин, а досвідчені фахівці володіють інформацією про спосіб заміни стартера в кожному автомобілі.",
                    "Щоб запобігти проблемі, рекомендується регулярно перевіряти двигун автомобіля. Діагностика автомобіля нашою службою проводиться за правилами. Також можливо створити запис у службовій книзі.",
                    "Регулярно відвідуючи наш сервіс технічного обслуговування, скоротить рік ремонту автомобіля. Адже своєчасна заміна застарілих деталей дозволить запобігти утворенню більш серйозної проблеми. Наприклад, заміна таймінгу в нашому сервісі надає можливість запобігти розриву ланцюга або ременя. В результаті поршнева група і клапани залишаться недоторканими, а довгий похід буде комфортним. Також СТО 571 забезпечує заміну масла в двигуні і коробці передач. У нас є підйомники, і ми використовуємо якісну нафту для їх заміни."],
                    h2:"Ціни на ремонт двигунів",
                    priceTitles:["Послуга", "Вартість", "від","уточняйте"],
                    priceList:["Заміна розподільного валу", "Заміна жиру колінчастим валом", "Заміна гідрокомпенсатора", "Заміна клапана жиру", "Заміна і установка поршневих кілець", "Заміна прокладки ГБЦ", "Заміна клапанної кришки", "Заміна прокладки впускного колектора","Заміна випускного колектора","Вимірювання стиснення бензинового двигуна без зняття колектора", "Промивання двигуна", "Заміна двигуна", "Заміна масляного насоса", "Заміна лотка картера", "Заміна ГБЦ", "Регулювання клапана двигуна", "Заміна повітряного фільтра"]
                },
                gearboxRepair:{
                    p:"Коробка перемикання передач є одним з найскладніших компонентів будь-якого автомобіля, який призначений для зміни швидкості.",
                    paragraph:["Трансмісія триває найдовше в автомобілі, і її відмова може стати серйозною проблемою. Однак, звернувшись до нашого СТО на лівому березі, ви можете бути впевнені в ранньому ремонті КПП вашого автомобіля. Ремонт КПП здійснюють тільки досвідчені фахівці.",
                    "Ремонт проводиться в спеціальному боксі, де є надійний підйомник. Після демонтажу коробки фахівці проведуть діагностику та заберуть відповідні запчастини за VIN-номером. Кожен клієнт може бути впевнений у високій якості наданих послуг, оскільки всі завдання з ремонту та підбору запчастин беруть на себе сервіс.",
                    "Ланцюг або інші проблеми з цим модулем також вважаються проблемою КПП. Заміна ланцюга робиться аналогічно. Всі дії задокументовані, і клієнт отримає детальний звіт про виконану роботу. Варто відзначити, що ми проводимо ремонт механічних і автоматичних коробок передач."],
                    h2:"Ціни на ремонт КПП",
                    priceList:["Ремонт МКПП", "Ремонт АКПП", "Заміна МКПП", "Заміна АКПП"]
                },
                chassisRepair:{
                    p:["Ходова частина автомобіля швидше за все зношується через високе навантаження на нього.",
                    "До частих проблем ходовой частини відносяться:"],
                    list:["Знос втулок і глушників", "Знос важелів і наконечників", "Демпфування або розривання пружин амортизаторів", "Відмова амортизатора", "Відмова ГУРа або ЭУРа", "«З'їдання» гуми і багато іншого"],
                    paragraph:["Якщо ви виявили неприємний і нехарактерний звук від ходового автомобіля, вам слід якомога швидше звернутися в наш автосервіс на лівому березі Києва. Наші фахівці проведуть ретельну діагностику на спеціальному стенді і виявлять причину несправності. Завдяки підйомнику ми також можемо замінити вихлопну систему.",
                    "Ремонт рульового управління - важливе завдання. Адже це дозволить запобігти втраті контролю на великій швидкості. Основними ознаками проблем з рульовим управлінням є постукування під час рульового управління, а також нестабільність автомобіля на рівній дорозі. Діагностика автомобілів в нашому сервісі дозволить виявити проблеми і швидко їх вирішити.",
                    "Наш сервіс також забезпечує заміну рульової стійки на привід, будь то гідравлічний або електричний. Завдяки підбору частинами Vin-коду нашим сервісом можна буде підібрати цю дорогу деталь точно і без обміну.",
                    "Після ремонту рульового управління необхідно буде виконати сходження розпаду. Це процес, за допомогою якого перевіряється кут розбіжності коліс передньої і задньої осей. Якщо цей процес не зробити, відбудеться збільшення тертя передніх шин, що призведе до «поїдання» гуми.",
                    "Розпад конвергенції - це ситуація, коли кут зближення автомобільних коліс відхиляється від необхідного значення, що може призвести до швидкого зносу шин і поганої керованості автомобіля.",
                    "Якщо у вас виникли проблеми з «розвалом» в Києві, слід звернутися в автосервіс 571, де вони проведуть діагностику і необхідні роботи з налагодження конвергенції розпаду.",
                    "Не забувайте також, що регулярна перевірка та регулювання сходження коліс є важливим запобіжним заходом для збереження стану та безпеки автомобіля на дорозі."],
                    h2:"Ціни на ремонт ходовоЇ",
                    priceList:["Заміна сальника півосі (зі зняттям снятием півосі)", "Заміна безшумного блоку", "Вилучення підрамника", "Заміна кульової підтримки", "Зміна важеля", "Заміна пильника ШРУСа", "Заміна підшипника маточини", "Заміна подушки двигуна", "Заміна втулок стабілізатора (2 шт.) з видаленням підрамника", "Заміна стабілізатора", "Заміна втулок стабілізатора (2 шт.)", "Заміна амортизатора в пружині", "Заміна амортизатора без пружини", "Заміна ШРУСа (гранати)", "Ремонт карданного валу (кардана)"]

                }

            }
        },
    
    }
})