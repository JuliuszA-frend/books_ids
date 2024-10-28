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
        { category_id: "391", products: [{ products_id: "26937" }, { products_id: "26819" }, { products_id: "26818" }, { products_id: "26817" }, { products_id: "26816" }, { products_id: "26815" }, { products_id: "26814" }, { products_id: "26813" }, { products_id: "26811" }, { products_id: "26810" }, { products_id: "26614" }, { products_id: "26613" }, { products_id: "26612" }, { products_id: "26611" }, { products_id: "26610" }, { products_id: "26609" }, { products_id: "26608" }, { products_id: "26607" }, { products_id: "26606" }, { products_id: "26605" }, { products_id: "26604" }, { products_id: "26603" }, { products_id: "26601" }, { products_id: "26600" }, { products_id: "26599" }, { products_id: "26409" }, { products_id: "26408" }, { products_id: "26407" }, { products_id: "26400" }, { products_id: "26399" }, { products_id: "25877" }, { products_id: "25829" }, { products_id: "25673" }, { products_id: "25415" }, { products_id: "25329" }, { products_id: "25109" }, { products_id: "24736" }, { products_id: "24735" }, { products_id: "24732" }, { products_id: "24171" }, { products_id: "24083" }, { products_id: "23185" }, { products_id: "23082" }, { products_id: "22878" }, { products_id: "21843" }, { products_id: "21842" }, { products_id: "21841" }, { products_id: "21535" }, { products_id: "21411" }, { products_id: "18064" }] },
        // 391 - KOMIKS
        { category_id: "382", products: [{ products_id: "25834" }, { products_id: "25832" }, { products_id: "23777" }, { products_id: "23776" }, { products_id: "23774" }, { products_id: "23773" }, { products_id: "23772" }, { products_id: "23771" }, { products_id: "23770" }, { products_id: "23769" }, { products_id: "23768" }, { products_id: "23767" }, { products_id: "23764" }, { products_id: "23763" }, { products_id: "23762" }, { products_id: "23761" }, { products_id: "23757" }, { products_id: "23756" }, { products_id: "23755" }, { products_id: "23753" }, { products_id: "23474" }, { products_id: "23473" }, { products_id: "23471" }, { products_id: "23470" }, { products_id: "23469" }, { products_id: "23468" }, { products_id: "23467" }, { products_id: "23466" }, { products_id: "23465" }, { products_id: "23464" }, { products_id: "23462" }, { products_id: "23459" }, { products_id: "23458" }, { products_id: "23457" }, { products_id: "23456" }, { products_id: "23455" }, { products_id: "23453" }, { products_id: "23452" }, { products_id: "23450" }, { products_id: "23449" }, { products_id: "23448" }, { products_id: "23446" }, { products_id: "23445" }, { products_id: "23442" }, { products_id: "23441" }, { products_id: "23440" }, { products_id: "23439" }, { products_id: "23438" }, { products_id: "23437" }, { products_id: "23436" }] },
        // 382 - PRAWO
        { category_id: "383", products: [{ products_id: "26563" }, { products_id: "26455" }, { products_id: "25083" }, { products_id: "24691" }, { products_id: "24333" }, { products_id: "24325" }, { products_id: "24319" }, { products_id: "24279" }, { products_id: "23388" }, { products_id: "23270" }, { products_id: "23265" }, { products_id: "23264" }, { products_id: "23253" }, { products_id: "23250" }, { products_id: "23249" }, { products_id: "23242" }, { products_id: "20202" }, { products_id: "19456" }, { products_id: "19296" }, { products_id: "19292" }, { products_id: "18208" }, { products_id: "17186" }, { products_id: "17185" }, { products_id: "15589" }, { products_id: "14925" }, { products_id: "14390" }, { products_id: "13596" }, { products_id: "13199" }, { products_id: "12571" }, { products_id: "9632" }, { products_id: "9628" }, { products_id: "9626" }, { products_id: "9625" }, { products_id: "9624" }, { products_id: "9622" }, { products_id: "8809" }, { products_id: "8806" }, { products_id: "8805" }, { products_id: "8594" }, { products_id: "8593" }, { products_id: "8591" }, { products_id: "8579" }, { products_id: "8578" }, { products_id: "8338" }, { products_id: "8334" }] },
        // 383 - BIZNES, MARKETING
        { category_id: "309", products: [{ products_id: "26179" }, { products_id: "25398" }, { products_id: "25381" }, { products_id: "22920" }, { products_id: "21076" }, { products_id: "20988" }, { products_id: "13443" }, { products_id: "11970" }, { products_id: "8469" }] },
        // 309 - DOM I OGRÓD
        { category_id: "310", products: [{ products_id: "26171" }, { products_id: "25963" }, { products_id: "25951" }, { products_id: "25774" }, { products_id: "25773" }, { products_id: "25766" }, { products_id: "25703" }, { products_id: "25632" }, { products_id: "25631" }, { products_id: "25093" }, { products_id: "21620" }, { products_id: "21227" }, { products_id: "18512" }, { products_id: "18511" }, { products_id: "13443" }, { products_id: "13337" }, { products_id: "12751" }, { products_id: "12485" }, { products_id: "12484" }, { products_id: "12482" }, { products_id: "12481" }, { products_id: "12480" }, { products_id: "12192" }, { products_id: "12135" }, { products_id: "10478" }, { products_id: "9963" }, { products_id: "8771" }, { products_id: "8631" }, { products_id: "8160" }, { products_id: "8148" }] },
        // 310 - OGRÓDEK I BALKON
        { category_id: "296", products: [{ products_id: "26969" }, { products_id: "26963" }, { products_id: "26395" }, { products_id: "26080" }, { products_id: "26048" }, { products_id: "26047" }, { products_id: "25912" }, { products_id: "25362" }, { products_id: "25168" }, { products_id: "24862" }, { products_id: "24827" }, { products_id: "23732" }, { products_id: "23713" }, { products_id: "23702" }, { products_id: "23593" }, { products_id: "22875" }, { products_id: "22799" }, { products_id: "22791" }, { products_id: "21879" }, { products_id: "21680" }, { products_id: "21508" }, { products_id: "21402" }, { products_id: "21369" }, { products_id: "21217" }, { products_id: "21204" }, { products_id: "21056" }, { products_id: "20905" }, { products_id: "20457" }, { products_id: "19976" }, { products_id: "19148" }, { products_id: "18770" }, { products_id: "18766" }, { products_id: "18118" }, { products_id: "18117" }, { products_id: "17857" }, { products_id: "17454" }, { products_id: "17243" }, { products_id: "17240" }, { products_id: "16691" }, { products_id: "15413" }, { products_id: "15167" }, { products_id: "14845" }, { products_id: "14627" }, { products_id: "14625" }, { products_id: "14624" }, { products_id: "14363" }, { products_id: "14123" }, { products_id: "13816" }, { products_id: "13632" }, { products_id: "13619" }] },
        // 296 - HISTORIA POLSKI
        { category_id: "297", products: [{ products_id: "26568" }, { products_id: "25771" }, { products_id: "25770" }, { products_id: "25672" }, { products_id: "25651" }, { products_id: "25264" }, { products_id: "24860" }, { products_id: "22527" }, { products_id: "22284" }, { products_id: "20904" }, { products_id: "19905" }, { products_id: "19774" }, { products_id: "19579" }, { products_id: "19436" }, { products_id: "19010" }, { products_id: "18759" }, { products_id: "18396" }, { products_id: "18134" }, { products_id: "18049" }, { products_id: "16687" }, { products_id: "16206" }, { products_id: "16128" }, { products_id: "14757" }, { products_id: "13198" }, { products_id: "12647" }, { products_id: "12134" }, { products_id: "11991" }, { products_id: "9844" }, { products_id: "8887" }, { products_id: "8456" }] },
        // 297 - HISTORIA POWSZECHNA
        { category_id: "298", products: [{ products_id: "26836" }, { products_id: "26588" }, { products_id: "26587" }, { products_id: "26584" }, { products_id: "26582" }, { products_id: "26562" }, { products_id: "26558" }, { products_id: "26363" }, { products_id: "26362" }, { products_id: "26224" }, { products_id: "25770" }, { products_id: "25755" }, { products_id: "25752" }, { products_id: "25362" }, { products_id: "25207" }, { products_id: "24501" }, { products_id: "24470" }, { products_id: "23732" }, { products_id: "23627" }, { products_id: "22404" }, { products_id: "22001" }, { products_id: "21655" }, { products_id: "21399" }, { products_id: "21262" }, { products_id: "21255" }, { products_id: "21226" }, { products_id: "17454" }, { products_id: "17021" }, { products_id: "15673" }, { products_id: "14757" }, { products_id: "13646" }, { products_id: "13480" }, { products_id: "13195" }, { products_id: "12647" }, { products_id: "12377" }, { products_id: "12070" }, { products_id: "10139" }, { products_id: "10138" }, { products_id: "9853" }, { products_id: "9847" }, { products_id: "9840" }, { products_id: "9839" }, { products_id: "9836" }, { products_id: "9834" }, { products_id: "9833" }, { products_id: "9798" }, { products_id: "9795" }, { products_id: "9459" }, { products_id: "9454" }, { products_id: "9435" }] },
        // 298 - II WOJNA ŚWIATOWA
        { category_id: "299", products: [{ products_id: "25772" }, { products_id: "24327" }, { products_id: "24311" }, { products_id: "22777" }, { products_id: "18051" }, { products_id: "17108" }, { products_id: "14213" }, { products_id: "13967" }, { products_id: "13541" }, { products_id: "13062" }, { products_id: "10515" }, { products_id: "10513" }, { products_id: "10511" }, { products_id: "10509" }, { products_id: "10506" }, { products_id: "10505" }, { products_id: "9836" }, { products_id: "9435" }, { products_id: "9069" }, { products_id: "8179" }] },
        // 299 - MILITARIA
        { category_id: "322", products: [{ products_id: "26324" }, { products_id: "25246" }, { products_id: "25166" }, { products_id: "25108" }, { products_id: "25076" }, { products_id: "25075" }, { products_id: "25002" }, { products_id: "23246" }, { products_id: "23229" }, { products_id: "23208" }, { products_id: "22492" }, { products_id: "21629" }, { products_id: "21147" }, { products_id: "21110" }, { products_id: "20995" }, { products_id: "20978" }, { products_id: "13916" }, { products_id: "9425" }] },
        // 322 - RĘKODZIEŁO
        { category_id: "324", products: [{ products_id: "25623" }, { products_id: "25622" }, { products_id: "22911" }, { products_id: "21001" }, { products_id: "16267" }, { products_id: "12529" }, { products_id: "12527" }, { products_id: "8564" }, { products_id: "8560" }, { products_id: "8261" }] },
        // 324 - KOLOROWANKI DLA DOROSŁYCH
        { category_id: "371", products: [{ products_id: "17159" }, { products_id: "16178" }, { products_id: "14010" }, { products_id: "14009" }, { products_id: "14008" }, { products_id: "14007" }, { products_id: "14006" }, { products_id: "14005" }, { products_id: "14004" }, { products_id: "14003" }, { products_id: "13551" }, { products_id: "12361" }, { products_id: "11692" }, { products_id: "9920" }, { products_id: "9529" }, { products_id: "8979" }, { products_id: "8271" }] },
        // 371 - HUMOR
        { category_id: "460", products: [{ products_id: "26774" }, { products_id: "26773" }, { products_id: "26772" }, { products_id: "26664" }, { products_id: "26382" }, { products_id: "26286" }, { products_id: "26018" }, { products_id: "25812" }, { products_id: "25638" }, { products_id: "25634" }, { products_id: "24140" }, { products_id: "24028" }, { products_id: "23665" }, { products_id: "22865" }, { products_id: "22864" }, { products_id: "22863" }, { products_id: "22330" }, { products_id: "22052" }, { products_id: "21229" }, { products_id: "20735" }, { products_id: "20732" }, { products_id: "20731" }, { products_id: "20677" }, { products_id: "19659" }, { products_id: "16821" }, { products_id: "16290" }, { products_id: "16068" }, { products_id: "14379" }, { products_id: "14336" }, { products_id: "14335" }, { products_id: "14198" }, { products_id: "14197" }, { products_id: "14196" }, { products_id: "14195" }, { products_id: "13092" }, { products_id: "12362" }, { products_id: "9310" }, { products_id: "9166" }, { products_id: "8986" }, { products_id: "8985" }, { products_id: "8983" }, { products_id: "8861" }, { products_id: "8859" }, { products_id: "8852" }, { products_id: "8850" }, { products_id: "8848" }, { products_id: "8845" }, { products_id: "8837" }, { products_id: "8829" }, { products_id: "8810" }] },
        // 460 - JĘZYK ANGIELSKI DLA DZIECI
        { category_id: "461", products: [{ products_id: "25873" }, { products_id: "21724" }, { products_id: "21723" }, { products_id: "18785" }, { products_id: "13893" }, { products_id: "13609" }, { products_id: "13459" }, { products_id: "13389" }, { products_id: "13218" }, { products_id: "12971" }, { products_id: "11966" }, { products_id: "11452" }, { products_id: "10386" }, { products_id: "9420" }, { products_id: "8323" }, { products_id: "8311" }] },
        // 461 - JĘZYK ANGIELSKI DLA DOROSŁYCH
        { category_id: "454", products: [{ products_id: "24143" }, { products_id: "24094" }, { products_id: "23309" }, { products_id: "23300" }, { products_id: "21728" }, { products_id: "21727" }, { products_id: "21725" }, { products_id: "18355" }, { products_id: "17312" }, { products_id: "15962" }, { products_id: "14852" }, { products_id: "14656" }, { products_id: "11146" }, { products_id: "9655" }, { products_id: "9414" }] },
        // 454 - JĘZYK NIEMIECKI
        { category_id: "455", products: [{ products_id: "24150" }, { products_id: "23535" }, { products_id: "23307" }, { products_id: "23304" }, { products_id: "17311" }, { products_id: "14231" }, { products_id: "13309" }, { products_id: "12441" }, { products_id: "11150" }, { products_id: "9109" }] },
        // 455 - JĘZYK FRANCUSKI
        { category_id: "456", products: [{ products_id: "24142" }, { products_id: "23660" }, { products_id: "23303" }, { products_id: "20674" }, { products_id: "19634" }, { products_id: "17102" }, { products_id: "15512" }, { products_id: "15509" }, { products_id: "13470" }, { products_id: "13281" }, { products_id: "11786" }, { products_id: "11151" }] },
        // 456 - INNE JĘZYKI
        { category_id: "291", products: [{ products_id: "26977" }, { products_id: "26968" }, { products_id: "26960" }, { products_id: "26902" }, { products_id: "26762" }, { products_id: "26761" }, { products_id: "26625" }, { products_id: "26624" }, { products_id: "26512" }, { products_id: "26396" }, { products_id: "26332" }, { products_id: "26037" }, { products_id: "26036" }, { products_id: "25907" }, { products_id: "25786" }, { products_id: "25785" }, { products_id: "25784" }, { products_id: "25783" }, { products_id: "25775" }, { products_id: "25751" }, { products_id: "25119" }, { products_id: "25074" }, { products_id: "25034" }, { products_id: "25018" }, { products_id: "24998" }, { products_id: "24958" }, { products_id: "24476" }, { products_id: "24175" }, { products_id: "23664" }, { products_id: "22800" }, { products_id: "22793" }, { products_id: "22792" }, { products_id: "22550" }, { products_id: "22326" }, { products_id: "22028" }, { products_id: "21304" }, { products_id: "21265" }, { products_id: "19933" }, { products_id: "19776" }, { products_id: "19627" }, { products_id: "19557" }, { products_id: "19022" }, { products_id: "19020" }, { products_id: "19019" }, { products_id: "18919" }, { products_id: "18750" }, { products_id: "18441" }, { products_id: "18440" }, { products_id: "16713" }, { products_id: "16145" }] },
        // 291 - MALARSTWO
        { category_id: "292", products: [{ products_id: "26970" }, { products_id: "26961" }, { products_id: "26245" }, { products_id: "26128" }, { products_id: "26127" }, { products_id: "25308" }, { products_id: "25033" }, { products_id: "25018" }, { products_id: "24997" }, { products_id: "23479" }, { products_id: "23478" }, { products_id: "23477" }, { products_id: "23476" }, { products_id: "23475" }, { products_id: "22300" }, { products_id: "21304" }, { products_id: "20952" }, { products_id: "19933" }, { products_id: "19021" }, { products_id: "18752" }, { products_id: "17109" }, { products_id: "16136" }, { products_id: "15896" }, { products_id: "14844" }, { products_id: "14843" }, { products_id: "14839" }, { products_id: "14838" }, { products_id: "13636" }, { products_id: "13503" }, { products_id: "10479" }, { products_id: "9367" }, { products_id: "9098" }] },
        // 292 - ARCHITEKTURA
        { category_id: "294", products: [{ products_id: "26969" }, { products_id: "26809" }, { products_id: "26129" }, { products_id: "25246" }, { products_id: "25094" }, { products_id: "25092" }, { products_id: "25091" }, { products_id: "25090" }, { products_id: "25089" }, { products_id: "25088" }, { products_id: "25087" }, { products_id: "25086" }, { products_id: "25084" }, { products_id: "25077" }, { products_id: "22238" }, { products_id: "21113" }, { products_id: "20990" }, { products_id: "20985" }, { products_id: "20984" }, { products_id: "20982" }, { products_id: "20952" }, { products_id: "20819" }, { products_id: "17154" }, { products_id: "17110" }, { products_id: "16713" }, { products_id: "16711" }, { products_id: "16651" }, { products_id: "16528" }, { products_id: "16126" }, { products_id: "16105" }, { products_id: "16102" }, { products_id: "16099" }, { products_id: "15896" }, { products_id: "15837" }, { products_id: "15592" }, { products_id: "15476" }, { products_id: "14845" }, { products_id: "14386" }, { products_id: "14385" }, { products_id: "14324" }, { products_id: "14046" }, { products_id: "14038" }, { products_id: "13989" }, { products_id: "13969" }, { products_id: "13927" }, { products_id: "13912" }, { products_id: "13829" }, { products_id: "13076" }, { products_id: "12938" }, { products_id: "11900" }] },
        // 294 - INNE KSIĄŻKI O SZTUCE
        { category_id: "326", products: [{ products_id: "24301" }, { products_id: "24048" }, { products_id: "20119" }, { products_id: "15485" }, { products_id: "15249" }, { products_id: "14788" }, { products_id: "13394" }, { products_id: "13388" }, { products_id: "13387" }, { products_id: "13086" }, { products_id: "13085" }, { products_id: "11462" }, { products_id: "11261" }, { products_id: "9483" }, { products_id: "9474" }, { products_id: "8589" }, { products_id: "8434" }] },
        // 326 - CIASTA I DESERY
        { category_id: "389", products: [{ products_id: "26106" }, { products_id: "17155" }, { products_id: "14144" }, { products_id: "14143" }, { products_id: "13217" }, { products_id: "12798" }, { products_id: "10741" }, { products_id: "10124" }, { products_id: "9029" }, { products_id: "9023" }, { products_id: "9020" }] },
        // 389 - RYBY I MIĘSA
        { category_id: "376", products: [{ products_id: "26671" }, { products_id: "26575" }, { products_id: "26509" }, { products_id: "26197" }, { products_id: "26191" }, { products_id: "25765" }, { products_id: "25764" }, { products_id: "25763" }, { products_id: "25313" }, { products_id: "24863" }, { products_id: "24447" }, { products_id: "22910" }, { products_id: "22907" }, { products_id: "22895" }, { products_id: "22502" }, { products_id: "22429" }, { products_id: "21469" }, { products_id: "21058" }, { products_id: "18174" }, { products_id: "17690" }, { products_id: "17287" }, { products_id: "17217" }, { products_id: "17063" }, { products_id: "16650" }, { products_id: "16390" }, { products_id: "16214" }, { products_id: "15456" }, { products_id: "14926" }, { products_id: "14489" }, { products_id: "14082" }, { products_id: "13815" }, { products_id: "13785" }, { products_id: "13544" }, { products_id: "12797" }, { products_id: "12731" }, { products_id: "11912" }, { products_id: "11552" }, { products_id: "11461" }, { products_id: "11460" }, { products_id: "10129" }, { products_id: "9585" }, { products_id: "8803" }, { products_id: "8743" }, { products_id: "8151" }, { products_id: "8086" }, { products_id: "8059" }] },
        // 376 - DIETY
        { category_id: "327", products: [{ products_id: "26967" }, { products_id: "25798" }, { products_id: "25795" }, { products_id: "22353" }, { products_id: "22109" }, { products_id: "21223" }, { products_id: "19179" }, { products_id: "18757" }, { products_id: "18458" }, { products_id: "18364" }, { products_id: "17155" }, { products_id: "15249" }, { products_id: "14011" }, { products_id: "13405" }, { products_id: "13388" }, { products_id: "13387" }, { products_id: "13217" }, { products_id: "12963" }, { products_id: "12828" }, { products_id: "12827" }, { products_id: "12821" }, { products_id: "12803" }, { products_id: "12798" }, { products_id: "12751" }, { products_id: "12371" }, { products_id: "12193" }, { products_id: "12189" }, { products_id: "12178" }, { products_id: "12115" }, { products_id: "12052" }, { products_id: "11976" }, { products_id: "11612" }, { products_id: "10741" }, { products_id: "10129" }, { products_id: "10126" }, { products_id: "10124" }, { products_id: "10106" }, { products_id: "9476" }, { products_id: "9029" }, { products_id: "9024" }, { products_id: "9023" }, { products_id: "9020" }, { products_id: "8588" }, { products_id: "8570" }] },
        // 327 - KUCHNIA POLSKA I DOMOWA
        { category_id: "328", products: [{ products_id: "26689" }, { products_id: "26688" }, { products_id: "26398" }, { products_id: "26181" }, { products_id: "25232" }, { products_id: "24887" }, { products_id: "24693" }, { products_id: "24472" }, { products_id: "23719" }, { products_id: "23382" }, { products_id: "23357" }, { products_id: "22369" }, { products_id: "21433" }, { products_id: "20485" }, { products_id: "16877" }, { products_id: "16667" }, { products_id: "14453" }, { products_id: "13612" }, { products_id: "11811" }, { products_id: "11776" }, { products_id: "11775" }, { products_id: "9368" }, { products_id: "8515" }] },
        // 328 - KUCHNIE ŚWIATA



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
    "391": ["391", "492"],
    // BELETRYSTYKA
    "382": ["382", "494"],
    "383": ["383", "494"],
    "309": ["309", "494"],
    "310": ["310", "494"],
    "296": ["296", "494"],
    "297": ["297", "494"],
    "298": ["298", "494"],
    "299": ["299", "494"],
    "322": ["322", "494"],
    // "323": ["323", "494"],
    "324": ["324", "494"],
    // "366": ["366", "494"],
    "371": ["371", "494"],
    "460": ["460", "494"],
    "461": ["461", "494"],
    // "453": ["453", "494"],
    "454": ["454", "494"],
    // "455": ["455", "494"],
    "456": ["456", "494"],
    "457": ["457", "494"],
    "459": ["459", "494"],
    "291": ["291", "494"],
    "292": ["292", "494"],
    // "293": ["293", "494"],
    // "462": ["462", "494"],
    "294": ["294", "494"],
    "326": ["326", "494"],
    "389": ["389", "494"],
    "376": ["376", "494"],
    "327": ["327", "494"],
    "328": ["328", "494"],
    "329": ["329", "494"],
    "330": ["330", "494"],
    "357": ["357", "494"],
    "303": ["303", "494"],
    "304": ["304", "494"],
    "305": ["305", "494"],
    "374": ["374", "494"],
    "288": ["288", "494"],
    "287": ["287", "494"],
    "282": ["282", "494"],
    "289": ["289", "494"],
    "284": ["284", "494"],
    "285": ["285", "494"],
    "286": ["286", "494"],
    "375": ["375", "494"],
    "307": ["307", "494"],
    "388": ["388", "494"],
    "387": ["387", "494"],
    "385": ["385", "494"],
    "386": ["386", "494"],
    "317": ["317", "494"],
    "472": ["472", "494"],
    "473": ["473", "494"],
    "474": ["474", "494"],
    "367": ["367", "494"],
    "368": ["368", "494"],
    "365": ["365", "494"],
    "363": ["363", "494"],
    "364": ["364", "494"],
    "312": ["312", "494"],
    "313": ["313", "494"],
    "470": ["470", "494"]
    // KSIĄŻKA NIEBELETRYSTYCZNA


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
    "326": "Wypróbuj inne książki z przepisami na pyszne ciasta i desery",
    "389": "Książki o przygotowywaniu mięs i ryb",
    "376": "Książki kulinarne z dietetycznymi przepisami",
    "327": "Kuchnia Polska i domowa",
    "328": "Kuchnie z całego świata",
    "329": "Drinki i koktajle z alkoholem",
    "330": "Napoje bezalkoholowe",
    "357": "Książki z kuchnią roślinną, wege, superfoods",
    "303": "Książki popularnonaukowe, dotyczące nauk ścisłych",
    "304": "Nauki społeczne, humanistyczne",
    "305": "Encyklopedie oraz słowniki",
    "374": "Biografie postaci historycznych",
    "288": "Dowiedz się więcej o słynnych artystach oraz literatach",
    "287": "Historie osób, związanych z muzyką i kinem",
    "282": "Biografie słynnych sportowców i sportsmenek",
    "289": "Biografie, wspomnienia",
    "284": "Polecamy inne reportaże społeczne",
    "285": "Reportaże ze świata polityki",
    "286": "Reportaże z podróży po Polsce i świecie",
    "375": "Eseje, felietony",
    "307": "Książki o sporcie i mototryzacji",
    "388": "Albumy krajoznawcze o Polsce",
    "387": "Piękne albumy o wielu fascynujących miejscach na świecie",
    "385": "Przewodniki po Polsce",
    "386": "Przewodniki po świecie",
    "317": "Rozmaite mapy w dobrych cenach",
    "472": "Poradniki psychologiczne, dotyczące związków i relacji",
    "473": "Książki, dotyczące rozwoju osobistego i stylu życia",
    "474": "Książki, dotyczącego wychowania i rodziny",
    "367": "Książki o religiach",
    "368": "Ezoteryka oraz rozwój duchowy",
    "365": "Poradniki dotyczące urody i piękna",
    "363": "KSiążki omawiające problemy zdrowotne, poradniki medyczne",
    "364": "Jesteś miłośnikiem ziół? Zobacz koniecznie te pozycje",
    "312": "Piękne albumy o zwierzętach",
    "313": "Te książki pomogą zrozumieć Ci Twoje zwierzę",
    "470": "Opowieści o zwierzętach i ich obyczajach",
    // KSIĄŻKA NIEBELETRYSTYCZNA







};