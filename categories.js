const categoriesData = {
    categories: [
        { category_id: "491", products: [{ products_id: "26972" }, { products_id: "26971" }, { products_id: "26966" }, { products_id: "26965" }, { products_id: "26958" }, { products_id: "26957" }, { products_id: "26956" }, { products_id: "26955" }, { products_id: "26954" }, { products_id: "26953" }, { products_id: "26952" }, { products_id: "26951" }, { products_id: "26950" }, { products_id: "26949" }, { products_id: "26948" }, { products_id: "26947" }, { products_id: "26946" }, { products_id: "26945" }, { products_id: "26944" }, { products_id: "26936" }] },
        // 491 - NOWOŚCI DLA DZIECI I MŁODZIEŻY
        { category_id: "492", products: [{ products_id: "26943" }, { products_id: "26941" }, { products_id: "26940" }, { products_id: "26939" }, { products_id: "26938" }, { products_id: "26937" }, { products_id: "26934" }, { products_id: "26917" }, { products_id: "26911" }, { products_id: "26903" }, { products_id: "26880" }, { products_id: "26879" }, { products_id: "26874" }, { products_id: "26868" }, { products_id: "26867" }, { products_id: "26866" }, { products_id: "26865" }, { products_id: "26864" }, { products_id: "26860" }, { products_id: "26858" }] },
        // 492 - NOWOŚCI BELETRYSTYKA
        { category_id: "494", products: [{ products_id: "26970" }, { products_id: "26969" }, { products_id: "26968" }, { products_id: "26967" }, { products_id: "26963" }, { products_id: "26962" }, { products_id: "26961" }, { products_id: "26960" }, { products_id: "26959" }, { products_id: "26942" }, { products_id: "26921" }, { products_id: "26920" }, { products_id: "26919" }, { products_id: "26918" }, { products_id: "26913" }, { products_id: "26910" }, { products_id: "26902" }, { products_id: "26901" }, { products_id: "26899" }, { products_id: "26898" }] },
        // 494 - NOWOŚCI KSIĄŻKA NIEBELETRYSTYCZNA
        { category_id: "272", products: [{ products_id: "26937" }, { products_id: "26917" }, { products_id: "26868" }, { products_id: "26850" }, { products_id: "26823" }, { products_id: "26803" }, { products_id: "26716" }, { products_id: "26657" }, { products_id: "26655" }, { products_id: "26644" }, { products_id: "26643" }, { products_id: "26592" }, { products_id: "26591" }, { products_id: "26585" }, { products_id: "26561" }, { products_id: "26539" }, { products_id: "26496" }, { products_id: "26434" }, { products_id: "26414" }, { products_id: "26388" }] },
        // 272 - FANTASTYKA
        { category_id: "278", products: [{ products_id: "26941" }, { products_id: "26879" }, { products_id: "26874" }, { products_id: "26808" }, { products_id: "26787" }, { products_id: "26784" }, { products_id: "26714" }, { products_id: "26565" }, { products_id: "26436" }, { products_id: "26390" }, { products_id: "26369" }, { products_id: "26367" }, { products_id: "26365" }, { products_id: "26349" }, { products_id: "26348" }, { products_id: "26264" }, { products_id: "26263" }, { products_id: "26260" }, { products_id: "25687" }, { products_id: "25667" }] },
        // 278 - HISTORYCZNA I PRZYGODOWA
        { category_id: "276", products: [{ products_id: "25397" }, { products_id: "25291" }, { products_id: "23372" }, { products_id: "21812" }, { products_id: "21636" }, { products_id: "21170" }, { products_id: "21168" }, { products_id: "20060" }, { products_id: "20053" }, { products_id: "19448" }, { products_id: "19143" }, { products_id: "19051" }, { products_id: "19034" }, { products_id: "18588" }, { products_id: "18539" }, { products_id: "18531" }, { products_id: "17286" }, { products_id: "17270" }, { products_id: "9750" }] },
        // 276 - HORROR
        { category_id: "273", products: [{ products_id: "26943" }, { products_id: "26858" }, { products_id: "26856" }, { products_id: "26833" }, { products_id: "26829" }, { products_id: "26826" }, { products_id: "26801" }, { products_id: "26800" }, { products_id: "26791" }, { products_id: "26727" }, { products_id: "26726" }, { products_id: "26725" }, { products_id: "26724" }, { products_id: "26723" }, { products_id: "26722" }, { products_id: "26721" }, { products_id: "26720" }, { products_id: "26719" }, { products_id: "26718" }, { products_id: "26717" }] },
        // 273 - KRYMINAŁ
        { category_id: "277", products: [{ products_id: "26940" }, { products_id: "26903" }, { products_id: "26880" }, { products_id: "26869" }, { products_id: "26868" }, { products_id: "26865" }, { products_id: "26864" }, { products_id: "26863" }, { products_id: "26855" }, { products_id: "26851" }, { products_id: "26850" }, { products_id: "26847" }, { products_id: "26842" }, { products_id: "26841" }, { products_id: "26838" }, { products_id: "26793" }, { products_id: "26692" }, { products_id: "26657" }, { products_id: "26632" }, { products_id: "26581" }] },
        // 277 - LITERATURA ŁODZIEŻOWA I YA
        { category_id: "270", products: [{ products_id: "26790" }, { products_id: "26789" }, { products_id: "26787" }, { products_id: "26785" }, { products_id: "26783" }, { products_id: "26777" }, { products_id: "26776" }, { products_id: "26623" }, { products_id: "26248" }, { products_id: "26247" }, { products_id: "26246" }, { products_id: "26232" }, { products_id: "26225" }, { products_id: "26011" }, { products_id: "25777" }, { products_id: "25776" }, { products_id: "25418" }, { products_id: "25061" }, { products_id: "25036" }, { products_id: "24876" }] },
        // 270 - PIĘKNA KLASYKA
        { category_id: "271", products: [{ products_id: "26934" }, { products_id: "26911" }, { products_id: "26867" }, { products_id: "26837" }, { products_id: "26786" }, { products_id: "26782" }, { products_id: "26781" }, { products_id: "26778" }, { products_id: "26714" }, { products_id: "26693" }, { products_id: "26676" }, { products_id: "26626" }, { products_id: "26616" }, { products_id: "26598" }, { products_id: "26593" }, { products_id: "26554" }, { products_id: "26519" }, { products_id: "26501" }, { products_id: "26446" }, { products_id: "26440" }] },
        // 271 - PIĘKNA WSPÓŁCZESNA
        { category_id: "269", products: [{ products_id: "25627" }, { products_id: "25640" }, { products_id: "25648" }, { products_id: "25649" }, { products_id: "25652" }, { products_id: "25654" }, { products_id: "25655" }, { products_id: "25678" }, { products_id: "25878" }, { products_id: "25882" }, { products_id: "25972" }, { products_id: "26022" }, { products_id: "26101" }, { products_id: "26102" }, { products_id: "26125" }, { products_id: "26149" }, { products_id: "26157" }, { products_id: "26183" }, { products_id: "26260" }, { products_id: "26263" }, { products_id: "26312" }, { products_id: "26313" }, { products_id: "26314" }, { products_id: "26315" }, { products_id: "26316" }, { products_id: "26325" }, { products_id: "26350" }, { products_id: "26367" }, { products_id: "26368" }, { products_id: "26370" }, { products_id: "26390" }, { products_id: "26410" }, { products_id: "26507" }, { products_id: "26514" }, { products_id: "26516" }, { products_id: "26518" }, { products_id: "26521" }, { products_id: "26522" }, { products_id: "26542" }, { products_id: "26690" }, { products_id: "26695" }, { products_id: "26703" }, { products_id: "26790" }, { products_id: "26791" }, { products_id: "26792" }, { products_id: "26795" }, { products_id: "26866" }, { products_id: "26938" }, { products_id: "26939" }, { products_id: "26941" }] },
        // 269 - OBYCZAJOWA
        { category_id: "475", products: [{ products_id: "26938" }, { products_id: "26903" }, { products_id: "26880" }, { products_id: "26865" }, { products_id: "26864" }, { products_id: "26860" }, { products_id: "26848" }, { products_id: "26835" }, { products_id: "26828" }, { products_id: "26799" }, { products_id: "26703" }, { products_id: "26695" }, { products_id: "26690" }, { products_id: "26630" }, { products_id: "26521" }, { products_id: "26312" }, { products_id: "26260" }, { products_id: "26228" }, { products_id: "26149" }, { products_id: "26011" }, { products_id: "25891" }, { products_id: "25739" }, { products_id: "25683" }, { products_id: "25682" }, { products_id: "25667" }, { products_id: "25655" }, { products_id: "25627" }, { products_id: "25614" }, { products_id: "25611" }, { products_id: "25421" }, { products_id: "25419" }, { products_id: "25416" }, { products_id: "25051" }, { products_id: "24993" }, { products_id: "24992" }, { products_id: "24991" }, { products_id: "24990" }, { products_id: "24793" }, { products_id: "24784" }] },
        // 475 - ROMANS
        { category_id: "476", products: [{ products_id: "23383" }, { products_id: "23370" }, { products_id: "23247" }, { products_id: "23244" }, { products_id: "23238" }, { products_id: "23237" }, { products_id: "21625" }, { products_id: "21600" }, { products_id: "21583" }, { products_id: "21570" }, { products_id: "21453" }, { products_id: "21450" }, { products_id: "21447" }, { products_id: "21446" }, { products_id: "21443" }, { products_id: "21442" }, { products_id: "21441" }, { products_id: "19200" }, { products_id: "17437" }, { products_id: "17353" }, { products_id: "16078" }, { products_id: "14142" }, { products_id: "13931" }, { products_id: "13915" }, { products_id: "12939" }, { products_id: "12743" }, { products_id: "11982" }, { products_id: "11961" }, { products_id: "11947" }, { products_id: "11747" }, { products_id: "9767" }, { products_id: "8870" }, { products_id: "8533" }, { products_id: "8150" }] },
        // 476 - EROTYCZNA
        { category_id: "9224", products: [{ products_id: "24684" }, { products_id: "24683" }, { products_id: "24682" }, { products_id: "24681" }, { products_id: "24680" }, { products_id: "24679" }, { products_id: "24678" }, { products_id: "24677" }, { products_id: "24676" }, { products_id: "24675" }, { products_id: "24674" }, { products_id: "24673" }, { products_id: "24672" }, { products_id: "24671" }, { products_id: "24670" }, { products_id: "24669" }, { products_id: "24668" }, { products_id: "24667" }, { products_id: "24666" }, { products_id: "24665" }, { products_id: "24664" }, { products_id: "24663" }, { products_id: "24662" }, { products_id: "24661" }, { products_id: "24660" }, { products_id: "24659" }, { products_id: "24658" }, { products_id: "24657" }, { products_id: "24656" }, { products_id: "24655" }, { products_id: "24654" }, { products_id: "24653" }, { products_id: "24652" }, { products_id: "24651" }, { products_id: "24650" }, { products_id: "24649" }, { products_id: "24648" }, { products_id: "24647" }, { products_id: "24646" }, { products_id: "24645" }, { products_id: "24644" }, { products_id: "24643" }, { products_id: "24642" }, { products_id: "24641" }, { products_id: "24640" }, { products_id: "24639" }, { products_id: "24638" }, { products_id: "24637" }, { products_id: "24636" }, { products_id: "24635" }] },
        // 9224 - HARLEQUINY
        { category_id: "391", products: [{ products_id: "26937" }, { products_id: "26819" }, { products_id: "26818" }, { products_id: "26817" }, { products_id: "26816" }, { products_id: "26815" }, { products_id: "26814" }, { products_id: "26813" }, { products_id: "26811" }, { products_id: "26810" }, { products_id: "26614" }, { products_id: "26613" }, { products_id: "26612" }, { products_id: "26611" }, { products_id: "26610" }, { products_id: "26609" }, { products_id: "26608" }, { products_id: "26607" }, { products_id: "26606" }, { products_id: "26605" }, { products_id: "26604" }, { products_id: "26603" }, { products_id: "26601" }, { products_id: "26600" }, { products_id: "26599" }, { products_id: "26409" }, { products_id: "26408" }, { products_id: "26407" }, { products_id: "26400" }, { products_id: "26399" }, { products_id: "25877" }, { products_id: "25829" }, { products_id: "25673" }, { products_id: "25415" }, { products_id: "25329" }, { products_id: "25109" }, { products_id: "24736" }, { products_id: "24735" }, { products_id: "24732" }, { products_id: "24171" }, { products_id: "24083" }, { products_id: "23185" }, { products_id: "23082" }, { products_id: "22878" }, { products_id: "21843" }, { products_id: "21842" }, { products_id: "21841" }, { products_id: "21535" }, { products_id: "21411" }, { products_id: "18064" }] }
        // 391 - KOMIKS
    ]
};

const compatibleCategories = {
    "269": ["269", "492"],
    "272": ["272", "492"],
    "491": ["491"],
    "492": ["492"],
    "494": ["494"],
    "278": ["278", "492"],
    "276": ["276", "492"],
    "273": ["273", "492"],
    "277": ["277", "492"],
    "270": ["270", "492"],
    "271": ["271", "492"],
    "475": ["475", "492"],
    "476": ["476", "492"],
    "9224": ["9224", "492"],
    "391": ["391", "492"]
    // BELETRYSTYKA
};

const categoryNames = {
    "269": "Lubisz powieści obyczajowe? Sprawdź inne tytuły z tej kategorii",
    "272": "Magia i kosmos to Twoje światy? Dodaj je do koszyka!",
    "491": "Ostatnio dodane książeczki dla najmłodszych, dzieci i młodzieży",
    "492": "Nie przegap najnowszych powieści z dostawy!",
    "494": "Literatura faktu – kilka nowych perełek na naszej stronie",
    "278": "A może kolejna podróż w przeszłość? Zobacz nasze propozycje",
    "276": "Kolejne powieści grozy, które mogą Cię zainteresować",
    "273": "Z tymi powieściami zostaniesz najlepszym detektywem w mieście!",
    "277": "Poznaj więcej trudnych i pięknych opowieści młodzieżowych i Young Adult",
    "270": "Klasyki, które warto mieć na swojej półce",
    "271": "Ambitna literatura wspólczesna dla wybrednych czytelników",
    "475": "Romanse, które trafią w Twoje serce",
    "476": "Literatura ze szczyptą ostrości",
    "9224": "Harlequiny w dobrej cenie",
    "391": "Komiksy i powieści graficzne z dużymi przecenami",
    // BELETRYSTYKA
    "382":"Literatura prawnicza, opracowania z komentarzami",
    "383": "Nieco więcej o biznesie i marketingu",
    "309": "Pielęgnacja roślin domowych",
    "310": "Ogród w domu lub na balkonie",
    "296": "Inne książki o historii Polski",
    "297": "Historia świata i narodów",
    "298": "Historia II Wojny Światowej",
    "299": "Opowieści o sprzęcie i technice wojskowej",
    "322": "Dokonaj cudów włąsnoręcznie z tymi poradnikami",
    "323": "Poradniki z zakresu fotografii i fotografowania",
    "324": "Kolorowanki antystresowe! Zrelaksuj się kolorując piękne rzeczy",
    "366": "Poradniki z zakresu muzyki",
    "371": "Humor i dowcipy",
    "460": "Książeczki do nauki języka angielskiego dla dzieci",
    "461": "Książki do nauki języka angielskiego",
    "453": "Książki do nauki języka hiszpańskiego",
    "454": "Książki do nauki języka niemieckigo",
    "455": "Książki do nauki języka francuskiego",
    "456": "Książki do nauki języka włoskiego",
    "457": "Książki do nauki języka rosyjskiego",
    "459": "Języki orientalne i mniej popularne",
    "291": "Albumy i książki o malarstwie",
    "292": "Albumy i książki o architekturze oraz designie",
    "293": "Książki o muzyce, tańcu i rzeźbie",
    "462": "Fotografia jako sztuka",
    "294": "Książki o sztuce",
    "326": "",
    "389": "",
    "376": "",
    "327": "",
    "328": "",
    "329": "",
    "330": "",
    "357": "",
    "304": "",
    "305": "",
    "374": "",
    "288": "",
    "287": "",
    "282": "",
    "289": "",
    "284": "",
    "285": "",
    "286": "",
    "375": "",
    "307": "",
    "388": "",
    "387": "",
    "385": "",
    "386": "",
    "317": "",
    "472": "",
    "473": "",
    "474": "",
    "367": "",
    "368": "",
    "365": "",
    "363": "",
    "364": "",
    "312": "",
    "313": "",
    "470": "",
    // KSIĄŻKA NIEBELETRYSTYCZNA







};