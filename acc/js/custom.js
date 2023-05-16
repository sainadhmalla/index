

$(document).ready(function(){
$('#srchBtnId').click(function(){
$('#srchSecDivId').toggleClass('showhide')
});
$('#closebtnId').click(function(){
$('#srchSecDivId').removeClass('showhide');
});
});

$('.burgrMenu').click(function(){
  $(this).toggleClass('openClose');
  $('.mainMenuList').toggleClass('burgenMenuShowHide');
});

  $('.internshipMainDivHmcar').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        },
        1500:{
            items:3
        }
    }
})
$('#burgrMenuId').click(function(){
    $(this).toggleClass('activeMenu')
    $('#mMenuLst').slideToggle();
});

$(document).ready(function() {
$(".skpTpcnt").click(function() {
     $('html, body').animate({
         scrollTop: $(".abtSecNew").offset().top
     }, 500);
 });
});

$(document).ready(function() {
    function showDateTime() {
  var myDiv = document.getElementById("myDiv");

  var date = new Date();
  var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var dayName = dayList[date.getDay()];
  var monthName = monthNames[date.getMonth()];
  var today = `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;

  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var time = hour + ":" + min + ":" + sec;
  myDiv.innerText = `Today is  ${today}. Time is ${time}`;
}
setInterval(showDateTime, 1000);

});

$(document).ready(function() {
  var resize = new Array('div', '.resizable');
  resize = resize.join(',');

  //resets the font size when "reset" is clicked
  var resetFont = $(resize).css('font-size');
  $(".reset").click(function() {
    $(resize).css('font-size', resetFont);
  });

  //increases font size when "+" is clicked
  $(".increase").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });

  //decrease font size when "-" is clicked

  $(".decrease").click(function() {
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber * 0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });

});

var country_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "Telangana", "West Bengal");

// States
var s_a = new Array();
s_a[0]="";
s_a[1]=" Alipur | Andaman Island | Anderson Island | Arainj-Laka-Punga | Austinabad | Bamboo Flat | Barren Island | Beadonabad | Betapur | Bindraban | Bonington | Brookesabad | Cadell Point | Calicut | Chetamale | Cinque Islands | Defence Island | Digilpur | Dolyganj | Flat Island | Geinyale | Great Coco Island | Haddo | Havelock Island | Henry Lawrence Island | Herbertabad | Hobdaypur | Ilichar | Ingoie | Inteview Island | Jangli Ghat | Jhon Lawrence Island | Karen | Kartara | KYD Islannd | Landfall Island | Little Andmand | Little Coco Island | Long Island | Maimyo | Malappuram | Manglutan | Manpur | Mitha Khari | Neill Island | Nicobar Island | North Brother Island | North Passage Island | North Sentinel Island | Nothen Reef Island | Outram Island | Pahlagaon | Palalankwe | Passage Island | Phaiapong | Phoenix Island | Port Blair | Preparis Island | Protheroepur | Rangachang | Rongat | Rutland Island | Sabari | Saddle Peak | Shadipur | Smith Island | Sound Island | South Sentinel Island | Spike Island | Tarmugli Island | Taylerabad | Titaije | Toibalawe | Tusonabad | West Island | Wimberleyganj | Yadita";
s_a[2]=" Achampet | Adilabad | Adoni | Alampur | Allagadda | Alur | Amalapuram | Amangallu | Anakapalle | Anantapur | Andole | Araku | Armoor | Asifabad | Aswaraopet | Atmakur | B. Kothakota | Badvel | Banaganapalle | Bandar | Bangarupalem | Banswada | Bapatla | Bellampalli | Bhadrachalam | Bhainsa | Bheemunipatnam | Bhimadole | Bhimavaram | Bhongir | Bhooragamphad | Boath | Bobbili | Bodhan | Chandoor | Chavitidibbalu | Chejerla | Chepurupalli | Cherial | Chevella | Chinnor | Chintalapudi | Chintapalle | Chirala | Chittoor | Chodavaram | Cuddapah | Cumbum | Darsi | Devarakonda | Dharmavaram | Dichpalli | Divi | Donakonda | Dronachalam | East Godavari | Eluru | Eturnagaram | Gadwal | Gajapathinagaram | Gajwel | Garladinne | Giddalur | Godavari | Gooty | Gudivada | Gudur | Guntur | Hindupur | Hunsabad | Huzurabad | Huzurnagar | Hyderabad | Ibrahimpatnam | Jaggayyapet | Jagtial | Jammalamadugu | Jangaon | Jangareddygudem | Jannaram | Kadiri | Kaikaluru | Kakinada | Kalwakurthy | Kalyandurg | Kamalapuram | Kamareddy | Kambadur | Kanaganapalle | Kandukuru | Kanigiri | Karimnagar | Kavali | Khammam | Khanapur (AP) | Kodangal | Koduru | Koilkuntla | Kollapur | Kothagudem | Kovvur | Krishna | Krosuru | Kuppam | Kurnool | Lakkireddipalli | Madakasira | Madanapalli | Madhira | Madnur | Mahabubabad | Mahabubnagar | Mahadevapur | Makthal | Mancherial | Mandapeta | Mangalagiri | Manthani | Markapur | Marturu | Medachal | Medak | Medarmetla | Metpalli | Mriyalguda | Mulug | Mylavaram | Nagarkurnool | Nalgonda | Nallacheruvu | Nampalle | Nandigama | Nandikotkur | Nandyal | Narasampet | Narasaraopet | Narayanakhed | Narayanpet | Narsapur | Narsipatnam | Nazvidu | Nelloe | Nellore | Nidamanur | Nirmal | Nizamabad | Nuguru | Ongole | Outsarangapalle | Paderu | Pakala | Palakonda | Paland | Palmaneru | Pamuru | Pargi | Parkal | Parvathipuram | Pathapatnam | Pattikonda | Peapalle | Peddapalli | Peddapuram | Penukonda | Piduguralla | Piler | Pithapuram | Podili | Polavaram | Prakasam | Proddatur | Pulivendla | Punganur | Putturu | Rajahmundri | Rajampeta | Ramachandrapuram | Ramannapet | Rampachodavaram | Rangareddy | Rapur | Rayachoti | Rayadurg | Razole | Repalle | Saluru | Sangareddy | Sathupalli | Sattenapalle | Satyavedu | Shadnagar | Siddavattam | Siddipet | Sileru | Sircilla | Sirpur Kagaznagar | Sodam | Sompeta | Srikakulam | Srikalahasthi | Srisailam | Srungavarapukota | Sudhimalla | Sullarpet | Tadepalligudem | Tadipatri | Tanduru | Tanuku | Tekkali | Tenali | Thungaturthy | Tirivuru | Tirupathi | Tuni | Udaygiri | Ulvapadu | Uravakonda | Utnor | V.R. Puram | Vaimpalli | Vayalpad | Venkatgiri | Venkatgirikota | Vijayawada | Vikrabad | Vinjamuru | Vinukonda | Visakhapatnam | Vizayanagaram | Vizianagaram | Vuyyuru | Wanaparthy | Warangal | Wardhannapet | Yelamanchili | Yelavaram | Yeleswaram | Yellandu | Yellanuru | Yellareddy | Yerragondapalem | Zahirabad ";
s_a[3]=" Along | Anini | Anjaw | Bameng | Basar | Changlang | Chowkhem | Daporizo | Dibang Valley | Dirang | Hayuliang | Huri | Itanagar | Jairampur | Kalaktung | Kameng | Khonsa | Kolaring | Kurung Kumey | Lohit | Lower Dibang Valley | Lower Subansiri | Mariyang | Mechuka | Miao | Nefra | Pakkekesang | Pangin | Papum Pare | Passighat | Roing | Sagalee | Seppa | Siang | Tali | Taliha | Tawang | Tezu | Tirap | Tuting | Upper Siang | Upper Subansiri | Yiang Kiag ";
s_a[4]=" Abhayapuri | Baithalangshu | Barama | Barpeta Road | Bihupuria | Bijni | Bilasipara | Bokajan | Bokakhat | Boko | Bongaigaon | Cachar | Cachar Hills | Darrang | Dhakuakhana | Dhemaji | Dhubri | Dibrugarh | Digboi | Diphu | Goalpara | Gohpur | Golaghat | Guwahati | Hailakandi | Hajo | Halflong | Hojai | Howraghat | Jorhat | Kamrup | Karbi Anglong | Karimganj | Kokarajhar | Kokrajhar | Lakhimpur | Maibong | Majuli | Mangaldoi | Mariani | Marigaon | Moranhat | Morigaon | Nagaon | Nalbari | Rangapara | Sadiya | Sibsagar | Silchar | Sivasagar | Sonitpur | Tarabarihat | Tezpur | Tinsukia | Udalgiri | Udalguri | UdarbondhBarpeta";
s_a[5]=" Adhaura | Amarpur | Araria | Areraj | Arrah | Arwal | Aurangabad | Bagaha | Banka | Banmankhi | Barachakia | Barauni | Barh | Barosi | Begusarai | Benipatti | Benipur | Bettiah | Bhabhua | Bhagalpur | Bhojpur | Bidupur | Biharsharif | Bikram | Bikramganj | Birpur | Buxar | Chakai | Champaran | Chapara | Dalsinghsarai | Danapur | Darbhanga | Daudnagar | Dhaka | Dhamdaha | Dumraon | Ekma | Forbesganj | Gaya | Gogri | Gopalganj | H.Kharagpur | Hajipur | Hathua | Hilsa | Imamganj | Jahanabad | Jainagar | Jamshedpur | Jamui | Jehanabad | Jhajha | Jhanjharpur | Kahalgaon | Kaimur (Bhabua) | Katihar | Katoria | Khagaria | Kishanganj | Korha | Lakhisarai | Madhepura | Madhubani | Maharajganj | Mahua | Mairwa | Mallehpur | Masrakh | Mohania | Monghyr | Motihari | Motipur | Munger | Muzaffarpur | Nabinagar | Nalanda | Narkatiaganj | Naugachia | Nawada | Pakribarwan | Pakridayal | Patna | Phulparas | Piro | Pupri | Purena | Purnia | Rafiganj | Rajauli | Ramnagar | Raniganj | Raxaul | Rohtas | Rosera | S.Bakhtiarpur | Saharsa | Samastipur | Saran | Sasaram | Seikhpura | Sheikhpura | Sheohar | Sherghati | Sidhawalia | Singhwara | Sitamarhi | Siwan | Sonepur | Supaul | Thakurganj | Triveniganj | Udakishanganj | Vaishali | Wazirganj";
s_a[6]=" Chandigarh | Mani Marja";
s_a[7]=" Ambikapur | Antagarh | Arang | Bacheli | Bagbahera | Bagicha | Baikunthpur | Balod | Balodabazar | Balrampur | Barpalli | Basana | Bastanar | Bastar | Bderajpur | Bemetara | Berla | Bhairongarh | Bhanupratappur | Bharathpur | Bhatapara | Bhilai | Bhilaigarh | Bhopalpatnam | Bijapur | Bilaspur | Bodla | Bokaband | Chandipara | Chhinagarh | Chhuriakala | Chingmut | Chuikhadan | Dabhara | Dallirajhara | Dantewada | Deobhog | Dhamda | Dhamtari | Dharamjaigarh | Dongargarh | Durg | Durgakondal | Fingeshwar | Gariaband | Garpa | Gharghoda | Gogunda | Ilamidi | Jagdalpur | Janjgir | Janjgir-Champa | Jarwa | Jashpur | Jashpurnagar | Kabirdham-Kawardha | Kanker | Kasdol | Kathdol | Kathghora | Kawardha | Keskal | Khairgarh | Kondagaon | Konta | Korba | Korea | Kota | Koyelibeda | Kuakunda | Kunkuri | Kurud | Lohadigundah | Lormi | Luckwada | Mahasamund | Makodi | Manendragarh | Manpur | Marwahi | Mohla | Mungeli | Nagri | Narainpur | Narayanpur | Neora | Netanar | Odgi | Padamkot | Pakhanjur | Pali | Pandaria | Pandishankar | Parasgaon | Pasan | Patan | Pathalgaon | Pendra | Pratappur | Premnagar | Raigarh | Raipur | Rajnandgaon | Rajpur | Ramchandrapur | Saraipali | Saranggarh | Sarona | Semaria | Shakti | Sitapur | Sukma | Surajpur | Surguja | Tapkara | Toynar | Udaipur | Uproda | Wadrainagar";
s_a[8]=" Amal | Amli | Bedpa | Chikhli | Dadra & Nagar Haveli | Dahikhed | Dolara | Galonda | Kanadi | Karchond | Khadoli | Kharadpada | Kherabari | Kherdi | Kothar | Luari | Mashat | Rakholi | Rudana | Saili | Sili | Silvassa | Sindavni | Udva | Umbarkoi | Vansda | Vasona | Velugam ";
s_a[9]=" Brancavare | Dagasi | Daman | Diu | Magarvara | Nagwa | Pariali | Passo Covo ";
s_a[10]=" Central Delhi | East Delhi | New Delhi | North Delhi | North East Delhi | North West Delhi | South Delhi | South West Delhi | West Delhi ";
s_a[11]=" Canacona | Candolim | Chinchinim | Cortalim | Goa | Jua | Madgaon | Mahem | Mapuca | Marmagao | Panji | Ponda | Sanvordem | Terekhol ";
s_a[12]=" Ahmedabad | Ahwa | Amod | Amreli | Anand | Anjar | Ankaleshwar | Babra | Balasinor | Banaskantha | Bansada | Bardoli | Bareja | Baroda | Barwala | Bayad | Bhachav | Bhanvad | Bharuch | Bhavnagar | Bhiloda | Bhuj | Billimora | Borsad | Botad | Chanasma | Chhota Udaipur | Chotila | Dabhoi | Dahod | Damnagar | Dang | Danta | Dasada | Dediapada | Deesa | Dehgam | Deodar | Devgadhbaria | Dhandhuka | Dhanera | Dharampur | Dhari | Dholka | Dhoraji | Dhrangadhra | Dhrol | Dwarka | Fortsongadh | Gadhada | Gandhi Nagar | Gariadhar | Godhra | Gogodar | Gondal | Halol | Halvad | Harij | Himatnagar | Idar | Jambusar | Jamjodhpur | Jamkalyanpur | Jamnagar | Jasdan | Jetpur | Jhagadia | Jhalod | Jodia | Junagadh | Junagarh | Kalawad | Kalol | Kapad Wanj | Keshod | Khambat | Khambhalia | Khavda | Kheda | Khedbrahma | Kheralu | Kodinar | Kotdasanghani | Kunkawav | Kutch | Kutchmandvi | Kutiyana | Lakhpat | Lakhtar | Lalpur | Limbdi | Limkheda | Lunavada | M.M.Mangrol | Mahuva | Malia-Hatina | Maliya | Malpur | Manavadar | Mandvi | Mangrol | Mehmedabad | Mehsana | Miyagam | Modasa | Morvi | Muli | Mundra | Nadiad | Nakhatrana | Nalia | Narmada | Naswadi | Navasari | Nizar | Okha | Paddhari | Padra | Palanpur | Palitana | Panchmahals | Patan | Pavijetpur | Porbandar | Prantij | Radhanpur | Rahpar | Rajaula | Rajkot | Rajpipla | Ranavav | Sabarkantha | Sanand | Sankheda | Santalpur | Santrampur | Savarkundla | Savli | Sayan | Sayla | Shehra | Sidhpur | Sihor | Sojitra | Sumrasar | Surat | Surendranagar | Talaja | Thara | Tharad | Thasra | Una-Diu | Upleta | Vadgam | Vadodara | Valia | Vallabhipur | Valod | Valsad | Vanthali | Vapi | Vav | Veraval | Vijapur | Viramgam | Visavadar | Visnagar | Vyara | Waghodia | Wankaner ";
s_a[13]=" Adampur Mandi | Ambala | Assandh | Bahadurgarh | Barara | Barwala | Bawal | Bawanikhera | Bhiwani | Charkhidadri | Cheeka | Chhachrauli | Dabwali | Ellenabad | Faridabad | Fatehabad | Ferojpur Jhirka | Gharaunda | Gohana | Gurgaon | Hansi | Hisar | Jagadhari | Jatusana | Jhajjar | Jind | Julana | Kaithal | Kalanaur | Kalanwali | Kalka | Karnal | Kosli | Kurukshetra | Loharu | Mahendragarh | Meham | Mewat | Mohindergarh | Naraingarh | Narnaul | Narwana | Nilokheri | Nuh | Palwal | Panchkula | Panipat | Pehowa | Ratia | Rewari | Rohtak | Safidon | Sirsa | Siwani | Sonipat | Tohana | Tohsam | Yamunanagar ";
s_a[14]=" Amb | Arki | Banjar | Bharmour | Bilaspur | Chamba | Churah | Dalhousie | Dehra Gopipur | Hamirpur | Jogindernagar | Kalpa | Kangra | Kinnaur | Kullu | Lahaul | Mandi | Nahan | Nalagarh | Nirmand | Nurpur | Palampur | Pangi | Paonta | Pooh | Rajgarh | Rampur Bushahar | Rohru | Shimla | Sirmaur | Solan | Spiti | Sundernagar | Theog | Udaipur | Una";
s_a[15]=" Akhnoor | Anantnag | Badgam | Bandipur | Baramulla | Basholi | Bedarwah | Budgam | Doda | Gulmarg | Jammu | Kalakot | Kargil | Karnah | Kathua | Kishtwar | Kulgam | Kupwara | Leh | Mahore | Nagrota | Nobra | Nowshera | Nyoma | Padam | Pahalgam | Patnitop | Poonch | Pulwama | Rajouri | Ramban | Ramnagar | Reasi | Samba | Srinagar | Udhampur | Vaishno Devi ";
s_a[16]=" Bagodar | Baharagora | Balumath | Barhi | Barkagaon | Barwadih | Basia | Bermo | Bhandaria | Bhawanathpur | Bishrampur | Bokaro | Bolwa | Bundu | Chaibasa | Chainpur | Chakardharpur | Chandil | Chatra | Chavparan | Daltonganj | Deoghar | Dhanbad | Dumka | Dumri | Garhwa | Garu | Ghaghra | Ghatsila | Giridih | Godda | Gomia | Govindpur | Gumla | Hazaribagh | Hunterganj | Ichak | Itki | Jagarnathpur | Jamshedpur | Jamtara | Japla | Jharmundi | Jhinkpani | Jhumaritalaiya | Kathikund | Kharsawa | Khunti | Koderma | Kolebira | Latehar | Lohardaga | Madhupur | Mahagama | Maheshpur Raj | Mandar | Mandu | Manoharpur | Muri | Nagarutatri | Nala | Noamundi | Pakur | Palamu | Palkot | Patan | Rajdhanwar | Rajmahal | Ramgarh | Ranchi | Sahibganj | Saraikela | Simaria | Simdega | Singhbhum | Tisri | Torpa ";
s_a[17]=" Afzalpur | Ainapur | Aland | Alur | Anekal | Ankola | Arsikere | Athani | Aurad | Bableshwar | Badami | Bagalkot | Bagepalli | Bailhongal | Bangalore | Bangalore Rural | Bangarpet | Bantwal | Basavakalyan | Basavanabagewadi | Basavapatna | Belgaum | Bellary | Belthangady | Belur | Bhadravati | Bhalki | Bhatkal | Bidar | Bijapur | Biligi | Chadchan | Challakere | Chamrajnagar | Channagiri | Channapatna | Channarayapatna | Chickmagalur | Chikballapur | Chikkaballapur | Chikkanayakanahalli | Chikkodi | Chikmagalur | Chincholi | Chintamani | Chitradurga | Chittapur | Cowdahalli | Davanagere | Deodurga | Devangere | Devarahippargi | Dharwad | Doddaballapur | Gadag | Gangavathi | Gokak | Gowribdanpur | Gubbi | Gulbarga | Gundlupet | H.B.Halli | H.D. Kote | Haliyal | Hampi | Hangal | Harapanahalli | Hassan | Haveri | Hebri | Hirekerur | Hiriyur | Holalkere | Holenarsipur | Honnali | Honnavar | Hosadurga | Hosakote | Hosanagara | Hospet | Hubli | Hukkeri | Humnabad | Hungund | Hunsagi | Hunsur | Huvinahadagali | Indi | Jagalur | Jamkhandi | Jewargi | Joida | K.R. Nagar | Kadur | Kalghatagi | Kamalapur | Kanakapura | Kannada | Kargal | Karkala | Karwar | Khanapur | Kodagu | Kolar | Kollegal | Koppa | Koppal | Koratageri | Krishnarajapet | Kudligi | Kumta | Kundapur | Kundgol | Kunigal | Kurugodu | Kustagi | Lingsugur | Madikeri | Madugiri | Malavalli | Malur | Mandya | Mangalore | Manipal | Manvi | Mashal | Molkalmuru | Mudalgi | Muddebihal | Mudhol | Mudigere | Mulbagal | Mundagod | Mundargi | Murugod | Mysore | Nagamangala | Nanjangud | Nargund | Narsimrajapur | Navalgund | Nelamangala | Nimburga | Pandavapura | Pavagada | Puttur | Raibag | Raichur | Ramdurg | Ranebennur | Ron | Sagar | Sakleshpur | Salkani | Sandur | Saundatti | Savanur | Sedam | Shahapur | Shankarnarayana | Shikaripura | Shimoga | Shirahatti | Shorapur | Siddapur | Sidlaghatta | Sindagi | Sindhanur | Sira | Sirsi | Siruguppa | Somwarpet | Sorab | Sringeri | Sriniwaspur | Srirangapatna | Sullia | T. Narsipur | Tallak | Tarikere | Telgi | Thirthahalli | Tiptur | Tumkur | Turuvekere | Udupi | Virajpet | Wadi | Yadgiri | Yelburga | Yellapur ";
s_a[18]=" Adimaly | Adoor | Agathy | Alappuzha | Alathur | Alleppey | Alwaye | Amini | Androth | Attingal | Badagara | Bitra | Calicut | Cannanore | Chetlet | Ernakulam | Idukki | Irinjalakuda | Kadamath | Kalpeni | Kalpetta | Kanhangad | Kanjirapally | Kannur | Karungapally | Kasargode | Kavarathy | Kiltan | Kochi | Koduvayur | Kollam | Kottayam | Kovalam | Kozhikode | Kunnamkulam | Malappuram | Mananthodi | Manjeri | Mannarghat | Mavelikkara | Minicoy | Munnar | Muvattupuzha | Nedumandad | Nedumgandam | Nilambur | Palai | Palakkad | Palghat | Pathaanamthitta | Pathanamthitta | Payyanur | Peermedu | Perinthalmanna | Perumbavoor | Punalur | Quilon | Ranni | Shertallai | Shoranur | Taliparamba | Tellicherry | Thiruvananthapuram | Thodupuzha | Thrissur | Tirur | Tiruvalla | Trichur | Trivandrum | Uppala | Vadakkanchery | Vikom | Wayanad ";
s_a[19]=" Agatti Island | Bingaram Island | Bitra Island | Chetlat Island | Kadmat Island | Kalpeni Island | Kavaratti Island | Kiltan Island | Lakshadweep Sea | Minicoy Island | North Island | South Island ";
s_a[20]=" Agar | Ajaigarh | Alirajpur | Amarpatan | Amarwada | Ambah | Anuppur | Arone | Ashoknagar | Ashta | Atner | Babaichichli | Badamalhera | Badarwsas | Badnagar | Badnawar | Badwani | Bagli | Baihar | Balaghat | Baldeogarh | Baldi | Bamori | Banda | Bandhavgarh | Bareli | Baroda | Barwaha | Barwani | Batkakhapa | Begamganj | Beohari | Berasia | Berchha | Betul | Bhainsdehi | Bhander | Bhanpura | Bhikangaon | Bhimpur | Bhind | Bhitarwar | Bhopal | Biaora | Bijadandi | Bijawar | Bijaypur | Bina | Birsa | Birsinghpur | Budhni | Burhanpur | Buxwaha | Chachaura | Chanderi | Chaurai | Chhapara | Chhatarpur | Chhindwara | Chicholi | Chitrangi | Churhat | Dabra | Damoh | Datia | Deori | Deosar | Depalpur | Dewas | Dhar | Dharampuri | Dindori | Gadarwara | Gairatganj | Ganjbasoda | Garoth | Ghansour | Ghatia | Ghatigaon | Ghorandogri | Ghughari | Gogaon | Gohad | Goharganj | Gopalganj | Gotegaon | Gourihar | Guna | Gunnore | Gwalior | Gyraspur | Hanumana | Harda | Harrai | Harsud | Hatta | Hoshangabad | Ichhawar | Indore | Isagarh | Itarsi | Jabalpur | Jabera | Jagdalpur | Jaisinghnagar | Jaithari | Jaitpur | Jaitwara | Jamai | Jaora | Jatara | Jawad | Jhabua | Jobat | Jora | Kakaiya | Kannod | Kannodi | Karanjia | Kareli | Karera | Karhal | Karpa | Kasrawad | Katangi | Katni | Keolari | Khachrod | Khajuraho | Khakner | Khalwa | Khandwa | Khaniadhana | Khargone | Khategaon | Khetia | Khilchipur | Khirkiya | Khurai | Kolaras | Kotma | Kukshi | Kundam | Kurwai | Kusmi | Laher | Lakhnadon | Lamta | Lanji | Lateri | Laundi | Maheshwar | Mahidpurcity | Maihar | Majhagwan | Majholi | Malhargarh | Manasa | Manawar | Mandla | Mandsaur | Manpur | Mauganj | Mawai | Mehgaon | Mhow | Morena | Multai | Mungaoli | Nagod | Nainpur | Narsingarh | Narsinghpur | Narwar | Nasrullaganj | Nateran | Neemuch | Niwari | Niwas | Nowgaon | Pachmarhi | Pandhana | Pandhurna | Panna | Parasia | Patan | Patera | Patharia | Pawai | Petlawad | Pichhore | Piparia | Pohari | Prabhapattan | Punasa | Pushprajgarh | Raghogarh | Raghunathpur | Rahatgarh | Raisen | Rajgarh | Rajpur | Ratlam | Rehli | Rewa | Sabalgarh | Sagar | Sailana | Sanwer | Sarangpur | Sardarpur | Satna | Saunsar | Sehore | Sendhwa | Seondha | Seoni | Seonimalwa | Shahdol | Shahnagar | Shahpur | Shajapur | Sheopur | Sheopurkalan | Shivpuri | Shujalpur | Sidhi | Sihora | Silwani | Singrauli | Sirmour | Sironj | Sitamau | Sohagpur | Sondhwa | Sonkatch | Susner | Tamia | Tarana | Tendukheda | Teonthar | Thandla | Tikamgarh | Timarani | Udaipura | Ujjain | Umaria | Umariapan | Vidisha | Vijayraghogarh | Waraseoni | Zhirnia ";
s_a[21]=" Achalpur | Aheri | Ahmednagar | Ahmedpur | Ajara | Akkalkot | Akola | Akole | Akot | Alibagh | Amagaon | Amalner | Ambad | Ambejogai | Amravati | Arjuni Merogaon | Arvi | Ashti | Atpadi | Aurangabad | Ausa | Babhulgaon | Balapur | Baramati | Barshi Takli | Barsi | Basmatnagar | Bassein | Beed | Bhadrawati | Bhamregadh | Bhandara | Bhir | Bhiwandi | Bhiwapur | Bhokar | Bhokardan | Bhoom | Bhor | Bhudargad | Bhusawal | Billoli | Brahmapuri | Buldhana | Butibori | Chalisgaon | Chamorshi | Chandgad | Chandrapur | Chandur | Chanwad | Chhikaldara | Chikhali | Chinchwad | Chiplun | Chopda | Chumur | Dahanu | Dapoli | Darwaha | Daryapur | Daund | Degloor | Delhi Tanda | Deogad | Deolgaonraja | Deori | Desaiganj | Dhadgaon | Dhanora | Dharani | Dhiwadi | Dhule | Dhulia | Digras | Dindori | Edalabad | Erandul | Etapalli | Gadhchiroli | Gadhinglaj | Gaganbavada | Gangakhed | Gangapur | Gevrai | Ghatanji | Golegaon | Gondia | Gondpipri | Goregaon | Guhagar | Hadgaon | Hatkangale | Hinganghat | Hingoli | Hingua | Igatpuri | Indapur | Islampur | Jalgaon | Jalna | Jamkhed | Jamner | Jath | Jawahar | Jintdor | Junnar | Kagal | Kaij | Kalamb | Kalamnuri | Kallam | Kalmeshwar | Kalwan | Kalyan | Kamptee | Kandhar | Kankavali | Kannad | Karad | Karjat | Karmala | Katol | Kavathemankal | Kedgaon | Khadakwasala | Khamgaon | Khed | Khopoli | Khultabad | Kinwat | Kolhapur | Kopargaon | Koregaon | Kudal | Kuhi | Kurkheda | Kusumba | Lakhandur | Langa | Latur | Lonar | Lonavala | Madangad | Madha | Mahabaleshwar | Mahad | Mahagaon | Mahasala | Mahaswad | Malegaon | Malgaon | Malgund | Malkapur | Malsuras | Malwan | Mancher | Mangalwedha | Mangaon | Mangrulpur | Manjalegaon | Manmad | Maregaon | Mehda | Mekhar | Mohadi | Mohol | Mokhada | Morshi | Mouda | Mukhed | Mul | Mumbai | Murbad | Murtizapur | Murud | Nagbhir | Nagpur | Nahavara | Nanded | Nandgaon | Nandnva | Nandurbar | Narkhed | Nashik | Navapur | Ner | Newasa | Nilanga | Niphad | Omerga | Osmanabad | Pachora | Paithan | Palghar | Pali | Pandharkawada | Pandharpur | Panhala | Paranda | Parbhani | Parner | Parola | Parseoni | Partur | Patan | Pathardi | Pathari | Patoda | Pauni | Peint | Pen | Phaltan | Pimpalner | Pirangut | Poladpur | Pune | Pusad | Pusegaon | Radhanagar | Rahuri | Raigad | Rajapur | Rajgurunagar | Rajura | Ralegaon | Ramtek | Ratnagiri | Raver | Risod | Roha | Sakarwadi | Sakoli | Sakri | Salekasa | Samudrapur | Sangamner | Sanganeshwar | Sangli | Sangola | Sanguem | Saoner | Saswad | Satana | Satara | Sawantwadi | Seloo | Shahada | Shahapur | Shahuwadi | Shevgaon | Shirala | Shirol | Shirpur | Shirur | Shirwal | Sholapur | Shri Rampur | Shrigonda | Shrivardhan | Sillod | Sinderwahi | Sindhudurg | Sindkheda | Sindkhedaraja | Sinnar | Sironcha | Soyegaon | Surgena | Talasari | Talegaon S.Ji Pant | Taloda | Tasgaon | Thane | Tirora | Tiwasa | Trimbak | Tuljapur | Tumsar | Udgir | Umarkhed | Umrane | Umrer | Urlikanchan | Vaduj | Velhe | Vengurla | Vijapur | Vita | Wada | Wai | Walchandnagar | Wani | Wardha | Warlydwarud | Warora | Washim | Wathar | Yavatmal | Yawal | Yeola | Yeotmal ";
s_a[22]=" Bishnupur | Chakpikarong | Chandel | Chattrik | Churachandpur | Imphal | Jiribam | Kakching | Kalapahar | Mao | Mulam | Parbung | Sadarhills | Saibom | Sempang | Senapati | Sochumer | Taloulong | Tamenglong | Thinghat | Thoubal | Ukhrul ";
s_a[23]=" Amlaren | Baghmara | Cherrapunjee | Dadengiri | Garo Hills | Jaintia Hills | Jowai | Khasi Hills | Khliehriat | Mariang | Mawkyrwat | Nongpoh | Nongstoin | Resubelpara | Ri Bhoi | Shillong | Tura | Williamnagar";
s_a[24]=" Aizawl | Champhai | Demagiri | Kolasib | Lawngtlai | Lunglei | Mamit | Saiha | Serchhip";
s_a[25]=" Dimapur | Jalukie | Kiphire | Kohima | Mokokchung | Mon | Phek | Tuensang | Wokha | Zunheboto ";
s_a[26]=" Anandapur | Angul | Anugul | Aska | Athgarh | Athmallik | Attabira | Bagdihi | Balangir | Balasore | Baleswar | Baliguda | Balugaon | Banaigarh | Bangiriposi | Barbil | Bargarh | Baripada | Barkot | Basta | Berhampur | Betanati | Bhadrak | Bhanjanagar | Bhawanipatna | Bhubaneswar | Birmaharajpur | Bisam Cuttack | Boriguma | Boudh | Buguda | Chandbali | Chhatrapur | Chhendipada | Cuttack | Daringbadi | Daspalla | Deodgarh | Deogarh | Dhanmandal | Dharamgarh | Dhenkanal | Digapahandi | Dunguripali | G. Udayagiri | Gajapati | Ganjam | Ghatgaon | Gudari | Gunupur | Hemgiri | Hindol | Jagatsinghapur | Jajpur | Jamankira | Jashipur | Jayapatna | Jeypur | Jharigan | Jharsuguda | Jujumura | Kalahandi | Kalimela | Kamakhyanagar | Kandhamal | Kantabhanji | Kantamal | Karanjia | Kashipur | Kendrapara | Kendujhar | Keonjhar | Khalikote | Khordha | Khurda | Komana | Koraput | Kotagarh | Kuchinda | Lahunipara | Laxmipur | M. Rampur | Malkangiri | Mathili | Mayurbhanj | Mohana | Motu | Nabarangapur | Naktideul | Nandapur | Narlaroad | Narsinghpur | Nayagarh | Nimapara | Nowparatan | Nowrangapur | Nuapada | Padampur | Paikamal | Palla Hara | Papadhandi | Parajang | Pardip | Parlakhemundi | Patnagarh | Pattamundai | Phiringia | Phulbani | Puri | Puruna Katak | R. Udayigiri | Rairakhol | Rairangpur | Rajgangpur | Rajkhariar | Rayagada | Rourkela | Sambalpur | Sohela | Sonapur | Soro | Subarnapur | Sunabeda | Sundergarh | Surada | T. Rampur | Talcher | Telkoi | Titlagarh | Tumudibandha | Udala | Umerkote ";
s_a[27]=" Bahur | Karaikal | Mahe | Pondicherry | Purnankuppam | Valudavur | Villianur | Yanam ";
s_a[28]=" Abohar | Ajnala | Amritsar | Balachaur | Barnala | Batala | Bathinda | Chandigarh | Dasua | Dinanagar | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Garhashanker | Goindwal | Gurdaspur | Guruharsahai | Hoshiarpur | Jagraon | Jalandhar | Jugial | Kapurthala | Kharar | Kotkapura | Ludhiana | Malaut | Malerkotla | Mansa | Moga | Muktasar | Nabha | Nakodar | Nangal | Nawanshahar | Nawanshahr | Pathankot | Patiala | Patti | Phagwara | Phillaur | Phulmandi | Quadian | Rajpura | Raman | Rayya | Ropar | Rupnagar | Samana | Samrala | Sangrur | Sardulgarh | Sarhind | SAS Nagar | Sultanpur Lodhi | Sunam | Tanda Urmar | Tarn Taran | Zira ";
s_a[29]=" Abu Road | Ahore | Ajmer | Aklera | Alwar | Amber | Amet | Anupgarh | Asind | Aspur | Atru | Bagidora | Bali | Bamanwas | Banera | Bansur | Banswara | Baran | Bari | Barisadri | Barmer | Baseri | Bassi | Baswa | Bayana | Beawar | Begun | Behror | Bhadra | Bharatpur | Bhilwara | Bhim | Bhinmal | Bikaner | Bilara | Bundi | Chhabra | Chhipaborad | Chirawa | Chittorgarh | Chohtan | Churu | Dantaramgarh | Dausa | Deedwana | Deeg | Degana | Deogarh | Deoli | Desuri | Dhariawad | Dholpur | Digod | Dudu | Dungarpur | Dungla | Fatehpur | Gangapur | Gangdhar | Gerhi | Ghatol | Girwa | Gogunda | Hanumangarh | Hindaun | Hindoli | Hurda | Jahazpur | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Kaman | Kapasan | Karauli | Kekri | Keshoraipatan | Khandar | Kherwara | Khetri | Kishanganj | Kishangarh | Kishangarhbas | Kolayat | Kota | Kotputli | Kotra | Kotri | Kumbalgarh | Kushalgarh | Ladnun | Ladpura | Lalsot | Laxmangarh | Lunkaransar | Mahuwa | Malpura | Malvi | Mandal | Mandalgarh | Mandawar | Mangrol | Marwar-Jn | Merta | Nadbai | Nagaur | Nainwa | Nasirabad | Nathdwara | Nawa | Neem Ka Thana | Newai | Nimbahera | Nohar | Nokha | Onli | Osian | Pachpadara | Pachpahar | Padampur | Pali | Parbatsar | Phagi | Phalodi | Pilani | Pindwara | Pipalda | Pirawa | Pokaran | Pratapgarh | Raipur | Raisinghnagar | Rajgarh | Rajsamand | Ramganj Mandi | Ramgarh | Rashmi | Ratangarh | Reodar | Rupbas | Sadulshahar | Sagwara | Sahabad | Salumber | Sanchore | Sangaria | Sangod | Sapotra | Sarada | Sardarshahar | Sarwar | Sawai Madhopur | Shahapura | Sheo | Sheoganj | Shergarh | Sikar | Sirohi | Siwana | Sojat | Sri Dungargarh | Sri Ganganagar | Sri Karanpur | Sri Madhopur | Sujangarh | Taranagar | Thanaghazi | Tibbi | Tijara | Todaraisingh | Tonk | Udaipur | Udaipurwati | Uniayara | Vallabhnagar | Viratnagar ";
s_a[30]=" Barmiak | Be | Bhurtuk | Chhubakha | Chidam | Chubha | Chumikteng | Dentam | Dikchu | Dzongri | Gangtok | Gauzing | Gyalshing | Hema | Kerung | Lachen | Lachung | Lema | Lingtam | Lungthu | Mangan | Namchi | Namthang | Nanga | Nantang | Naya Bazar | Padamachen | Pakhyong | Pemayangtse | Phensang | Rangli | Rinchingpong | Sakyong | Samdong | Singtam | Siniolchu | Sombari | Soreng | Sosing | Tekhug | Temi | Tsetang | Tsomgo | Tumlong | Yangang | Yumtang ";
s_a[31]=" Ambasamudram | Anamali | Arakandanallur | Arantangi | Aravakurichi | Ariyalur | Arkonam | Arni | Aruppukottai | Attur | Avanashi | Batlagundu | Bhavani | Chengalpattu | Chengam | Chennai | Chidambaram | Chingleput | Coimbatore | Courtallam | Cuddalore | Cumbum | Denkanikoitah | Devakottai | Dharampuram | Dharmapuri | Dindigul | Erode | Gingee | Gobichettipalayam | Gudalur | Gudiyatham | Harur | Hosur | Jayamkondan | Kallkurichi | Kanchipuram | Kangayam | Kanyakumari | Karaikal | Karaikudi | Karur | Keeranur | Kodaikanal | Kodumudi | Kotagiri | Kovilpatti | Krishnagiri | Kulithalai | Kumbakonam | Kuzhithurai | Madurai | Madurantgam | Manamadurai | Manaparai | Mannargudi | Mayiladuthurai | Mayiladutjurai | Mettupalayam | Metturdam | Mudukulathur | Mulanur | Musiri | Nagapattinam | Nagarcoil | Namakkal | Nanguneri | Natham | Neyveli | Nilgiris | Oddanchatram | Omalpur | Ootacamund | Ooty | Orathanad | Palacode | Palani | Palladum | Papanasam | Paramakudi | Pattukottai | Perambalur | Perundurai | Pollachi | Polur | Pondicherry | Ponnamaravathi | Ponneri | Pudukkottai | Rajapalayam | Ramanathapuram | Rameshwaram | Ranipet | Rasipuram | Salem | Sankagiri | Sankaran | Sathiyamangalam | Sivaganga | Sivakasi | Sriperumpudur | Srivaikundam | Tenkasi | Thanjavur | Theni | Thirumanglam | Thiruraipoondi | Thoothukudi | Thuraiyure | Tindivanam | Tiruchendur | Tiruchengode | Tiruchirappalli | Tirunelvelli | Tirupathur | Tirupur | Tiruttani | Tiruvallur | Tiruvannamalai | Tiruvarur | Tiruvellore | Tiruvettipuram | Trichy | Tuticorin | Udumalpet | Ulundurpet | Usiliampatti | Uthangarai | Valapady | Valliyoor | Vaniyambadi | Vedasandur | Vellore | Velur | Vilathikulam | Villupuram | Virudhachalam | Virudhunagar | Wandiwash | Yercaud ";
s_a[32]=" Agartala | Ambasa | Bampurbari | Belonia | Dhalai | Dharam Nagar | Kailashahar | Kamal Krishnabari | Khopaiyapara | Khowai | Phuldungsei | Radha Kishore Pur | Tripura ";
s_a[33]=" Achhnera | Agra | Akbarpur | Aliganj | Aligarh | Allahabad | Ambedkar Nagar | Amethi | Amiliya | Amroha | Anola | Atrauli | Auraiya | Azamgarh | Baberu | Badaun | Baghpat | Bagpat | Baheri | Bahraich | Ballia | Balrampur | Banda | Bansdeeh | Bansgaon | Bansi | Barabanki | Bareilly | Basti | Bhadohi | Bharthana | Bharwari | Bhogaon | Bhognipur | Bidhuna | Bijnore | Bikapur | Bilari | Bilgram | Bilhaur | Bindki | Bisalpur | Bisauli | Biswan | Budaun | Budhana | Bulandshahar | Bulandshahr | Capianganj | Chakia | Chandauli | Charkhari | Chhata | Chhibramau | Chirgaon | Chitrakoot | Chunur | Dadri | Dalmau | Dataganj | Debai | Deoband | Deoria | Derapur | Dhampur | Domariyaganj | Dudhi | Etah | Etawah | Faizabad | Farrukhabad | Fatehpur | Firozabad | Garauth | Garhmukteshwar | Gautam Buddha Nagar | Ghatampur | Ghaziabad | Ghazipur | Ghosi | Gonda | Gorakhpur | Gunnaur | Haidergarh | Hamirpur | Hapur | Hardoi | Harraiya | Hasanganj | Hasanpur | Hathras | Jalalabad | Jalaun | Jalesar | Jansath | Jarar | Jasrana | Jaunpur | Jhansi | Jyotiba Phule Nagar | Kadipur | Kaimganj | Kairana | Kaisarganj | Kalpi | Kannauj | Kanpur | Karchhana | Karhal | Karvi | Kasganj | Kaushambi | Kerakat | Khaga | Khair | Khalilabad | Kheri | Konch | Kumaon | Kunda | Kushinagar | Lalganj | Lalitpur | Lucknow | Machlishahar | Maharajganj | Mahoba | Mainpuri | Malihabad | Mariyahu | Math | Mathura | Mau | Maudaha | Maunathbhanjan | Mauranipur | Mawana | Meerut | Mehraun | Meja | Mirzapur | Misrikh | Modinagar | Mohamdabad | Mohamdi | Moradabad | Musafirkhana | Muzaffarnagar | Nagina | Najibabad | Nakur | Nanpara | Naraini | Naugarh | Nawabganj | Nighasan | Noida | Orai | Padrauna | Pahasu | Patti | Pharenda | Phoolpur | Phulpur | Pilibhit | Pitamberpur | Powayan | Pratapgarh | Puranpur | Purwa | Raibareli | Rampur | Ramsanehi Ghat | Rasara | Rath | Robertsganj | Sadabad | Safipur | Sagri | Saharanpur | Sahaswan | Sahjahanpur | Saidpur | Salempur | Salon | Sambhal | Sandila | Sant Kabir Nagar | Sant Ravidas Nagar | Sardhana | Shahabad | Shahganj | Shahjahanpur | Shikohabad | Shravasti | Siddharthnagar | Sidhauli | Sikandra Rao | Sikandrabad | Sitapur | Siyana | Sonbhadra | Soraon | Sultanpur | Tanda | Tarabganj | Tilhar | Unnao | Utraula | Varanasi | Zamania ";
s_a[34]=" Almora | Bageshwar | Bhatwari | Chakrata | Chamoli | Champawat | Dehradun | Deoprayag | Dharchula | Dunda | Haldwani | Haridwar | Joshimath | Karan Prayag | Kashipur | Khatima | Kichha | Lansdown | Munsiari | Mussoorie | Nainital | Pantnagar | Partapnagar | Pauri Garhwal | Pithoragarh | Purola | Rajgarh | Ranikhet | Roorkee | Rudraprayag | Tehri Garhwal | Udham Singh Nagar | Ukhimath | Uttarkashi ";
s_a[35]=" Adra | Alipurduar | Amlagora | Arambagh | Asansol | Balurghat | Bankura | Bardhaman | Basirhat | Berhampur | Bethuadahari | Birbhum | Birpara | Bishanpur | Bolpur | Bongoan | Bulbulchandi | Burdwan | Calcutta | Canning | Champadanga | Contai | Cooch Behar | Daimond Harbour | Dalkhola | Dantan | Darjeeling | Dhaniakhali | Dhuliyan | Dinajpur | Dinhata | Durgapur | Gangajalghati | Gangarampur | Ghatal | Guskara | Habra | Haldia | Harirampur | Harishchandrapur | Hooghly | Howrah | Islampur | Jagatballavpur | Jalpaiguri | Jhalda | Jhargram | Kakdwip | Kalchini | Kalimpong | Kalna | Kandi | Karimpur | Katwa | Kharagpur | Khatra | Krishnanagar | Mal Bazar | Malda | Manbazar | Mathabhanga | Medinipur | Mekhliganj | Mirzapur | Murshidabad | Nadia | Nagarakata | Nalhati | Nayagarh | Parganas | Purulia | Raiganj | Rampur Hat | Ranaghat | Seharabazar | Siliguri | Suri | Takipur | Tamluk";


function populateStates(countryElementId, stateElementId) {

  var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

  var stateElement = document.getElementById(stateElementId);

  stateElement.length = 0; // Fixed by Julian Woods
  stateElement.options[0] = new Option('Select District', '');
  stateElement.selectedIndex = 0;

  var state_arr = s_a[selectedCountryIndex].split("|");

  for (var i = 0; i < state_arr.length; i++) {
    stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
  }
}

function populateCountries(countryElementId, stateElementId) {
  // given the id of the <select> tag as function argument, it inserts <option> tags
  var countryElement = document.getElementById(countryElementId);
  countryElement.length = 0;
  countryElement.options[0] = new Option('Select State', '-1');
  countryElement.selectedIndex = 0;
  for (var i = 0; i < country_arr.length; i++) {
    countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
  }

  // Assigned all countries. Now assign event listener for the states.

  if (stateElementId) {
    countryElement.onchange = function() {
      populateStates(countryElementId, stateElementId);
    };
  }
}

$(document).ready(function() {
  populateCountries("country", "state");
});



/*institute*/

var ctx = document.getElementById("totalInstId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban : 4000',
            data: [200, 300, 400, 500, 600, 700],
            backgroundColor: '#9ad0f6'
        },
          {
            label: 'Rural : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#ffb1c1'
        }]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('data', context.dataset, context.datasetIndex)
              return ` ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*institute*/

var ctx = document.getElementById("totalInstId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt : 4000',
            data: [200, 300, 400, 500, 600, 700],
            backgroundColor: '#8c81f1'
        },
          {
            label: 'Private : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#81f1b9'
        }]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('data', context.dataset, context.datasetIndex)
              return ` ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*institute*/

var ctx = document.getElementById("totalInstId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women : 4000',
            data: [200, 300, 400, 500, 600, 700],
            backgroundColor: '#ffb1c1'
        },
          {
            label: 'Boys : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#9ad0f6'
        },
          {
            label: 'Co-ed : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#c9b3fb'
        },
          {
            label: 'Minority : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#bafbb3'
        }]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('data', context.dataset, context.datasetIndex)
              return ` ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});



/*institute*/

var ctx = document.getElementById("instCatId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban.: 2000',
            data: [120, 190, 130, 150, 120, 130],
            backgroundColor: '#fcca9f'
        },
          {
            label: 'Rural : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#c4c1f0'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*institute*/

var ctx = document.getElementById("instCatId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt.: 2000',
            data: [120, 190, 130, 150, 120, 130],
            backgroundColor: '#fcca9f'
        },
          {
            label: 'Private : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#c4c1f0'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*institute*/

var ctx = document.getElementById("instCatId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women.: 2000',
            data: [120, 190, 130, 150, 120, 130],
            backgroundColor: '#ffb1c1'
        },
          {
            label: 'Boys : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#c9b3fb'
        },
          {
            label: 'Co-ed : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#d4a5ff'
        },
          {
            label: 'Minority : 3000',
            data: [150, 340, 330, 520, 240, 530],
            backgroundColor: '#afffba'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});




/*management*/

var ctx = document.getElementById("managementId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban.: 300',
            data: [12, 19, 45, 5, 40, 63],
            backgroundColor: '#f3b1bc'
        },
                  {
            label: 'Rural: 200',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#d999f4'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*management*/

var ctx = document.getElementById("managementId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt.: 300',
            data: [12, 19, 45, 5, 40, 63],
            backgroundColor: '#f3b1bc'
        },
                  {
            label: 'Private: 200',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#d999f4'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*management*/

var ctx = document.getElementById("managementId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 300',
            data: [12, 19, 45, 5, 40, 63],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 200',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },
                  {
            label: 'Co-ed: 200',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f1b7ff'
        },
                  {
            label: 'Minority: 200',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#a4feb9'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*arts*/

var ctx = document.getElementById("artsIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban:3000',
            data: [12, 9, 3, 5, 21, 32],
            backgroundColor: '#c4c1f0'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#dcc1f0'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*arts*/

var ctx = document.getElementById("artsIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt:3000',
            data: [12, 9, 3, 5, 21, 32],
            backgroundColor: '#c4c1f0'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#dcc1f0'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*arts*/

var ctx = document.getElementById("artsIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women:3000',
            data: [12, 9, 3, 5, 21, 32],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#adddff'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#cab2ff'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b7ffb9'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*science*/

var ctx = document.getElementById("scienceIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 3000',
            data: [12, 19, 33, 5, 22, 15],
            backgroundColor: '#a9f7b7'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#efa9f7'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*science*/

var ctx = document.getElementById("scienceIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 3000',
            data: [12, 19, 33, 5, 22, 15],
            backgroundColor: '#a9f7b7'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#efa9f7'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*science*/

var ctx = document.getElementById("scienceIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 3000',
            data: [12, 19, 33, 5, 22, 15],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#e9b3ff'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b3ffb5'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*commerce*/

var ctx = document.getElementById("commerceIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 3000',
            data: [25, 19, 3, 25, 35, 45],
            backgroundColor: '#fc9999'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c5fc99'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*commerce*/

var ctx = document.getElementById("commerceIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 3000',
            data: [25, 19, 3, 25, 35, 45],
            backgroundColor: '#fc9999'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c5fc99'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*commerce*/

var ctx = document.getElementById("commerceIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 3000',
            data: [25, 19, 3, 25, 35, 45],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aadcff'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b2fe'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#bcffb9'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*law*/

var ctx = document.getElementById("lawIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 3000',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#b6fbec'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b6b9fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*law*/

var ctx = document.getElementById("lawIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 3000',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#b6fbec'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b6b9fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*law*/

var ctx = document.getElementById("lawIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 3000',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aedeff'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#ccb6ff'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#bbffb2'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*medical*/

var ctx = document.getElementById("mediIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 3000',
            data: [12, 19, 13, 15, 20, 35],
            backgroundColor: '#9aedf6'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f6dd9a'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*medical*/

var ctx = document.getElementById("mediIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 3000',
            data: [12, 19, 13, 15, 20, 35],
            backgroundColor: '#9aedf6'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f6dd9a'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*medical*/

var ctx = document.getElementById("mediIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 3000',
            data: [12, 19, 13, 15, 20, 35],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#bdfbb3'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*medical*/

var ctx = document.getElementById("htlIns-1");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 3000',
            data: [12, 19, 13, 15, 20, 35],
            backgroundColor: '#9aedf6'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f6dd9a'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*medical*/

var ctx = document.getElementById("htlIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 3000',
            data: [12, 19, 13, 15, 20, 35],
            backgroundColor: '#9aedf6'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f6dd9a'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*medical*/

var ctx = document.getElementById("htlIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 3000',
            data: [12, 19, 13, 15, 20, 35],
            backgroundColor: '#9aedf6'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f6dd9a'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#bdfbb3'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*nursing*/

var ctx = document.getElementById("nurIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 3000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#e8b3fb'
        },
                  {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*nursing*/

var ctx = document.getElementById("nurIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 3000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#e8b3fb'
        },
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});
/*nursing*/

var ctx = document.getElementById("nurIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 3000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },
                  {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },
                  {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },
                  {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9fbb3'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Gross Enrollment Ratio*/

var ctx = document.getElementById("grsEnrIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 2500',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#b168c9'
        },{
            label: 'Rural: 2500',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Gross Enrollment Ratio*/

var ctx = document.getElementById("grsEnrIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 2500',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#64f0a2'
        },{
            label: 'Private: 2500',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8fcfed'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});

/*Gross Enrollment Ratio*/

var ctx = document.getElementById("grsEnrIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 2500',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },{
            label: 'Boys: 2500',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },{
            label: 'Co-ed: 2500',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },{
            label: 'Minority: 2500',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b3fbba'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("dropratIns");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#f69f9f'
        },{
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("dropratIns-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#808d8d'
        },{
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#95e1fa'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("dropratIns-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#f69f9f'
        },{
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9eaefb'
        },{
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#fb9ed7'
        },{
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b9fc9c'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("stndFac");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        /*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("stndFac-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#b1bafc'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b2f9ff'
        }
        /*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("stndFac-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb2e5'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b2d6ff'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#ffbcea'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c8ffb5'
        }
        /*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("aicteId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95f9e3'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#e2ffa9'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("aicteId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("aicteId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c5abfe'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#ffb1c1'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b7ffdb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("ugcId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#eda3ff'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#a3fffe'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("ugcId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#efffa3'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("ugcId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: ffb1c1',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c5b1ff'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#e79dff'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9dffa9'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("nbaId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("nbaId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#e99dff'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9dd4ff'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("nbaId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ac5f6'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#cc9af6'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9af6c3'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("naacId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("naacId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("naacId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#acbaf7'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#e3acf7'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b7f7ac'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("nrifId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});
/*Dropout Rate*/

/*Dropout Rate*/

var ctx = document.getElementById("nrifId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("nrifId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f8b3fb'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b0fdb9'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("aisheId");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("aisheId-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#95d0f9'
        },
         {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("aisheId-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },
         {
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },
         {
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#d69cff'
        },
         {
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#adfbab'
        }
        
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/
var ctx = document.getElementById("inswIF");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#a4f799'
        },{
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});
/*Dropout Rate*/
var ctx = document.getElementById("inswIF-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#a4f799'
        },{
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/
var ctx = document.getElementById("inswIF-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },{
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },{
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },{
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c2fbb3'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("inswTol");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#e8b3fb'
        },{
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8bbcef'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("inswTol-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#e8b3fb'
        },{
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8bbcef'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("inswTol-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },{
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },{
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },{
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#b8fbb3'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("inswComL");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#99e6f7'
        },{
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("inswComL-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#99e6f7'
        },{
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("inswComL-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },{
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },{
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c6b3fb'
        },{
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c6fbb3'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("insfortu");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Urban: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#99e6f7'
        },{
            label: 'Rural: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("insfortu-2");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Govt: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#99e6f7'
        },{
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});

/*Dropout Rate*/

var ctx = document.getElementById("insfortu-3");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Women: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ffb1c1'
        },{
            label: 'Boys: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#9ad0f6'
        },{
            label: 'Co-ed: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        },{
            label: 'Minority: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c1ffa5'
        }
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("nbaAcc");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Total: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#ba99f7'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});



/*Dropout Rate*/

var ctx = document.getElementById("naacAcc");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Total: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#928b8b'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});



/*Dropout Rate*/

var ctx = document.getElementById("nrifrank");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Total: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#a7f2e1'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("wmnIs");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Total: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#f698e3'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("manInst");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Total: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#5f97f4'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});


/*Dropout Rate*/

var ctx = document.getElementById("coedinsT");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [{
            label: 'Total: 5000',
            data: [12, 19, 10, 15, 20, 30],
            backgroundColor: '#7af4f3'
        }/*,
                  {
            label: 'Private: 2000',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#c9b3fb'
        }*//*,
                  {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#8f8f9e'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#aaf59b'
        },
        {
            label: 'Dataset 1',
            data: [15, 34, 33, 52, 24, 53],
            backgroundColor: '#f7c498'
        }*/
        ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        tooltip: {
          interaction: {
            mode: 'point'
          }/*,
          callbacks: {
            label: function (context) {
              console.log('label', context.dataset, context.datasetIndex)
              return `Nursing Institutes ${context.datasetIndex}`
             }
          }*/
        }
      }
    }
});



