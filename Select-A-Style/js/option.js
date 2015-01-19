//Dropdown Option Selector Function
$("#style").change(function(){
  if ($(this).val() === "opt1") {
    newName = "SERIF";
    offName = "serif";
    new_font_name = "Serif";
    new_font_colour = "#FFFFFF";
    new_off_colour = "#86E8FD";
    new_base_colour = "#474747";
    base();
  }
  else if ($(this).val() === "opt2") {
    newName = "CHANGO";
    offName = "chango";
    new_font_name = "Chango";
    new_font_colour = "#AF4ADF";
    new_off_colour = "#F00452";
    new_base_colour = "#EFA4E1";
    chango();
  }
  else if ($(this).val() === "opt3") {
    newName = "UBUNTU";
    offName = "ubuntu";
    new_font_name = "Ubuntu";
    new_font_colour = "#00FF00";
    new_off_colour = "#31F2F5";
    new_base_colour = "#000000";
    ubuntu();
  }
  else if ($(this).val() === "opt4") {
    newName = "KAUSHAN";
    offName = "kaushan";
    new_font_name = "Kaushan Script";
    new_font_colour = "#E10E2D";
    new_off_colour = "#2232AB";
    new_base_colour = "#F2E9EA";
    kaushan();
  }
  else if ($(this).val() === "opt5") {
    newName = "SIMONETTA";
    offName = "simonetta";
    new_font_name = "Simonetta";
    new_font_colour = "#75A6F0";
    new_off_colour = "#27C246";
    new_base_colour = "#F2E2CA";
    simonetta();
  }
  else if ($(this).val() === "opt10") {
    newName = "ACLONICA";
    offName = "aclonica";
    new_font_name = "Aclonica";
    new_font_colour = "#1D23B8";
    new_off_colour = "#E2F777";
    new_base_colour = "#777BD4";
    aclonica();
  }
  else if ($(this).val() === "opt11") {
    newName = "ACME";
    offName = "acme";
    new_font_name = "Acme";
    new_font_colour = "#DE162A";
    new_off_colour = "#FFFFFF";
    new_base_colour = "#D9D162";
    acme();
  }
  else if ($(this).val() === "opt13") {
    newName = "ADAMINA";
    offName = "adamina";
    new_font_name = "Adamina";
    new_font_colour = "#AB894B";
    new_off_colour = "#24C729";
    new_base_colour = "#E8E0A2";
    adamina();
  }
  else if ($(this).val() === "opt15") {
    newName = "AGUAFINA";
    offName = "aguafina";
    new_font_name = "Aguafina Script";
    new_font_colour = "#68E9F3";
    new_off_colour = "#F47BEC";
    new_base_colour = "#438EF0";
    aguafina();
  }
  else if ($(this).val() === "opt16") {
    newName = "ALADIN";
    offName = "aladin";
    new_font_name = "Aladin";
    new_font_colour = "#6031BD";
    new_off_colour = "#F5B60A";
    new_base_colour = "#527AFF";
    aladin();
  }
  else if ($(this).val() === "opt18") {
    newName = "ALICE";
    offName = "alice";
    new_font_name = "Alice";
    new_font_colour = "#27C444";
    new_off_colour = "#F05959";
    new_base_colour = "#D9BF89";
    alice();
  }
  else if ($(this).val() === "opt20") {
    newName = "ALLURA";
    offName = "allura";
    new_font_name = "Allura";
    new_font_colour = "#EB2A71";
    new_off_colour = "#B461E8";
    new_base_colour = "#F7CBAD";
    allura();
  }
  else if ($(this).val() === "opt21") {
    newName = "ALMENDRA";
    offName = "almendra";
    new_font_name = "Almendra";
    new_font_colour = "#2F00DB";
    new_off_colour = "#F0E816";
    new_base_colour = "#A1968D";
    almendra();
  }
  else if ($(this).val() === "opt22") {
    newName = "AMARANTE";
    offName = "amarante";
    new_font_name = "Amarante";
    new_font_colour = "#C75B26";
    new_off_colour = "#EDF2DA";
    new_base_colour = "#DBC5A2";
    amarante();
  }
  else if ($(this).val() === "opt23") {
    newName = "ARCHITECT";
    offName = "architect";
    new_font_name = "Architects Daughter";
    new_font_colour = "#2E77FF";
    new_off_colour = "#FFC233";
    new_base_colour = "#F0F0F0";
    architect();
  }
  else if ($(this).val() === "opt24") {
    newName = "ARIZONIA";
    offName = "arizonia";
    new_font_name = "Arizonia";
    new_font_colour = "#FF0000";
    new_off_colour = "#FF4CA6";
    new_base_colour = "#EDDECE";
    arizonia();
  }
  else if ($(this).val() === "opt25") {
    newName = "ARTIFIKA";
    offName = "artifika";
    new_font_name = "Artifika";
    new_font_colour = "#8303AD";
    new_off_colour = "#B400F5";
    new_base_colour = "#BAF7FF";
    artifika();
  }
  else if ($(this).val() === "opt26") {
    newName = "ATOMIC AGE";
    offName = "atomic age";
    new_font_name = "Atomic Age";
    new_font_colour = "#FFD700";
    new_off_colour = "#000000";
    new_base_colour = "#D5E6D9";
    atomic_age();
  }
  else if ($(this).val() === "opt28") {
    newName = "BANGERS";
    offName = "bangers";
    new_font_name = "Bangers";
    new_font_colour = "#B20000";
    new_off_colour = "#0000B2";
    new_base_colour = "#DAE9F5";
    bangers();
  }
  else if ($(this).val() === "opt29") {
    newName = "BELLEZA";
    offName = "belleza";
    new_font_name = "Belleza";
    new_font_colour = "#8E1B1B";
    new_off_colour = "#15C243";
    new_base_colour = "#E3D4A3";
    belleza();
  }
  else if ($(this).val() === "opt31") {
    newName = "BILBO";
    offName = "bilbo";
    new_font_name = "Bilbo";
    new_font_colour = "#D68F0B";
    new_off_colour = "#45BF4D";
    new_base_colour = "#D9C39A";
    bilbo();
  }
  else if ($(this).val() === "opt32") {
    newName = "BUBBLER ONE";
    offName = "bubbler one";
    new_font_name = "Bubbler One";
    new_font_colour = "#FFFFFF";
    new_off_colour = "#000000";
    new_base_colour = "#AB1168";
    bubbler();
  }
  else if ($(this).val() === "opt33") {
    newName = "CEVICHE ONE";
    offName = "ceviche one";
    new_font_name = "Ceviche One";
    new_font_colour = "#E88010";
    new_off_colour = "#FFFFFF";
    new_base_colour = "#474747";
    ceviche();
  }
  else if ($(this).val() === "opt34") {
    newName = "CHICLE";
    offName = "chicle";
    new_font_name = "Chicle";
    new_font_colour = "#F21BD2";
    new_off_colour = "#A81EF7";
    new_base_colour = "#A5D2FA";
    chicle();
  }
  else if ($(this).val() === "opt35") {
    newName = "CINZEL";
    offName = "cinzel";
    new_font_name = "Cinzel";
    new_font_colour = "#BF0808";
    new_off_colour = "#FFFFFF";
    new_base_colour = "#D6B692";
    cinzel();
  }
  else if ($(this).val() === "opt36") {
    newName = "CONDIMENT";
    offName = "condiment";
    new_font_name = "Condiment";
    new_font_colour = "#DECC09";
    new_off_colour = "#DE091B";
    new_base_colour = "#303030";
    condiment();
  }
  else if ($(this).val() === "opt37") {
    newName = "COURGETTE";
    offName = "courgette";
    new_font_name = "Courgette";
    new_font_colour = "#FA14E7";
    new_off_colour = "#1CF1FC";
    new_base_colour = "#FFB0B0";
    courgette();
  }
  else if ($(this).val() === "opt39") {
    newName = "DAMION";
    offName = "damion";
    new_font_name = "Damion";
    new_font_colour = "#F70C0C";
    new_off_colour = "#1500FF";
    new_base_colour = "#000000";
    damion();
  }
  else if ($(this).val() === "opt40") {
    newName = "DROID SANS";
    offName = "droid sans";
    new_font_name = "Droid Sans";
    new_font_colour = "#723B16";
    new_off_colour = "#FFFFFF";
    new_base_colour = "#8DB0C7";
    droid_sans();
  }
  else if ($(this).val() === "opt41") {
    newName = "EAGLE LAKE";
    offName = "eagle lake";
    new_font_name = "Eagle Lake";
    new_font_colour = "#246909";
    new_off_colour = "#713A87";
    new_base_colour = "#D2C9B5";
    eagle_lake();
  }
  else if ($(this).val() === "opt43") {
    newName = "EXO";
    offName = "exo";
    new_font_name = "Exo";
    new_font_colour = "#BF4713";
    new_off_colour = "#3D5DE0";
    new_base_colour = "#DBDBDB";
    exo();
  }
  else if ($(this).val() === "opt44") {
    newName = "FEDERANT";
    offName = "federant";
    new_font_name = "Federant";
    new_font_colour = "#805E41";
    new_off_colour = "#402F20";
    new_base_colour = "#C7BAB0";
    federant();
  }
  else if ($(this).val() === "opt45") {
    newName = "FELIPA";
    offName = "felipa";
    new_font_name = "Felipa";
    new_font_colour = "#8A060C";
    new_off_colour = "#545C94";
    new_base_colour = "#EDE1D1";
    felipa();
  }
  else if ($(this).val() === "opt46") {
    newName = "FUGAZ ONE";
    offName = "fugaz one";
    new_font_name = "Fugaz One";
    new_font_colour = "#F5A511";
    new_off_colour = "#B852D1";
    new_base_colour = "#C7C8FF";
    fugaz();
  }
  else if ($(this).val() === "opt47") {
    newName = "GERMANIA ONE";
    offName = "germania one";
    new_font_name = "Germania One";
    new_font_colour = "#3B3B3B";
    new_off_colour = "#A62929";
    new_base_colour = "#FFFAF0";
    germania();
  }
  else if ($(this).val() === "opt48") {
    newName = "HAPPY MONKEY";
    offName = "happy monkey";
    new_font_name = "Happy Monkey";
    new_font_colour = "#B100C4";
    new_off_colour = "#4090F7";
    new_base_colour = "#FFC3E1";
    happy_monkey();
  }
  else if ($(this).val() === "opt50") {
    newName = "ICEBERG";
    offName = "iceberg";
    new_font_name = "Iceberg";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    iceberg();
  }
  else if ($(this).val() === "opt51") {
    newName = "ITALIANNO";
    offName = "italianno";
    new_font_name = "Italianno";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    italianno();
  }
  else if ($(this).val() === "opt52") {
    newName = "JIM NIGHTSHADE";
    offName = "jim nightshade";
    new_font_name = "Jim Nightshade";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    jim_nightshade();
  }
  else if ($(this).val() === "opt53") {
    newName = "JOTI ONE";
    offName = "joti one";
    new_font_name = "Joti One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    joti_one();
  }
  else if ($(this).val() === "opt54") {
    newName = "JULEE";
    offName = "julee";
    new_font_name = "Julee";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    julee();
  }
  else if ($(this).val() === "opt55") {
    newName = "KALAM";
    offName = "kalam";
    new_font_name = "Kalam";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    kalam();
  }
  else if ($(this).val() === "opt56") {
    newName = "LEMON";
    offName = "lemon";
    new_font_name = "Lemon";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    lemon();
  }
  else if ($(this).val() === "opt58") {
    newName = "LIMELIGHT";
    offName = "limelight";
    new_font_name = "Limelight";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    limelight();
  }
  else if ($(this).val() === "opt61") {
    newName = "MACONDO";
    offName = "macondo";
    new_font_name = "Macondo";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    macondo();
  }
  else if ($(this).val() === "opt64") {
    newName = "MARKO ONE";
    offName = "marko one";
    new_font_name = "Marko One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    marko_one();
  }
  else if ($(this).val() === "opt65") {
    newName = "MEDIEVAL SHARP";
    offName = "medieval sharp";
    new_font_name = "MedievalSharp";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    medieval_sharp();
  }
  else if ($(this).val() === "opt66") {
    newName = "MEDULA ONE";
    offName = "medula one";
    new_font_name = "Medula One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    medula_one();
  }
  else if ($(this).val() === "opt67") {
    newName = "MERIENDA";
    offName = "merienda";
    new_font_name = "Merienda";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    merienda();
  }
  else if ($(this).val() === "opt68") {
    newName = "METAL MANIA";
    offName = "metal mania";
    new_font_name = "Metal Mania";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    metal_mania();
  }
  else if ($(this).val() === "opt69") {
    newName = "METAMORPHOUS";
    offName = "metamorphous";
    new_font_name = "Metamorphous";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    metamorphous();
  }
  else if ($(this).val() === "opt73") {
    newName = "NOVA CUT";
    offName = "nova cut";
    new_font_name = "Nova Cut";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    nova_cut();
  }
  else if ($(this).val() === "opt75") {
    newName = "OLEO SCRIPT";
    offName = "oleo script";
    new_font_name = "Oleo Script";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    oleo();
  }
  else if ($(this).val() === "opt76") {
    newName = "OREGANO";
    offName = "oregano";
    new_font_name = "Oregano";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    oregano();
  }
  else if ($(this).val() === "opt77") {
    newName = "PAPRIKA";
    offName = "paprika";
    new_font_name = "Paprika";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    paprika();
  }
  else if ($(this).val() === "opt78") {
    newName = "PERMANENT MARKER";
    offName = "permanent marker";
    new_font_name = "Permanent Marker";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    permanent_marker();
  }
  else if ($(this).val() === "opt79") {
    newName = "PETIT FORMAL";
    offName = "petit formal";
    new_font_name = "Petit Formal Script";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    petit_formal();
  }
  else if ($(this).val() === "opt80") {
    newName = "PHILOSOPHER";
    offName = "philosopher";
    new_font_name = "Philosopher";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    philosopher();
  }
  else if ($(this).val() === "opt81") {
    newName = "PIRATA ONE";
    offName = "pirata one";
    new_font_name = "Pirata One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    pirata();
  }
  else if ($(this).val() === "opt82") {
    newName = "PLAYBALL";
    offName = "playball";
    new_font_name = "Playball";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    playball();
  }
  else if ($(this).val() === "opt83") {
    newName = "POIRET ONE";
    offName = "poiret one";
    new_font_name = "Poiret One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    poiret();
  }
  else if ($(this).val() === "opt84") {
    newName = "POMPIERE";
    offName = "pompiere";
    new_font_name = "Pompiere";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    pompiere();
  }
  else if ($(this).val() === "opt87") {
    newName = "QUINTESSENTIAL";
    offName = "quintessential";
    new_font_name = "Quintessential";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    quintessential();
  }
  else if ($(this).val() === "opt88") {
    newName = "RACING SANS ONE";
    offName = "racing sans one";
    new_font_name = "Racing Sans One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    racing();
  }
  else if ($(this).val() === "opt89") {
    newName = "RALEWAY";
    offName = "raleway";
    new_font_name = "Raleway";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    raleway();
  }
  else if ($(this).val() === "opt91") {
    newName = "RIGHTEOUS";
    offName = "righteous";
    new_font_name = "Righteous";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    righteous();
  }
  else if ($(this).val() === "opt92") {
    newName = "ROMANESCO";
    offName = "romanesco";
    new_font_name = "Romanesco";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    romanesco();
  }
  else if ($(this).val() === "opt93") {
    newName = "SALSA";
    offName = "salsa";
    new_font_name = "Salsa";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    salsa();
  }
  else if ($(this).val() === "opt94") {
    newName = "SMYTHE";
    offName = "smythe";
    new_font_name = "Smythe";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    smythe();
  }
  else if ($(this).val() === "opt97") {
    newName = "SPECIAL ELITE";
    offName = "special elite";
    new_font_name = "Special Elite";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    special_elite();
  }
  else if ($(this).val() === "opt99") {
    newName = "TRADE WINDS";
    offName = "trade winds";
    new_font_name = "Trade Winds";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    trade_winds();
  }
  else if ($(this).val() === "opt101") {
    newName = "UNCIAL ANTIQUA";
    offName = "uncial antiqua";
    new_font_name = "Uncial Antiqua";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    uncial();
  }
  else if ($(this).val() === "opt102") {
    newName = "VT323";
    offName = "vt323";
    new_font_name = "VT323";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    vt323();
  }
  else if ($(this).val() === "opt103") {
    newName = "VAMPIRO ONE";
    offName = "vampiro one";
    new_font_name = "Vampiro One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    vampiro();
  }
  else if ($(this).val() === "opt104") {
    newName = "VOLTAIRE";
    offName = "voltaire";
    new_font_name = "Voltaire";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    voltaire();
  }
  else if ($(this).val() === "opt105") {
    newName = "WENDY ONE";
    offName = "wendy one";
    new_font_name = "Wendy One";
    new_font_colour = "#000000";
    new_off_colour = "#000000";
    new_base_colour = "#FFFFFF";
    wendy();
  }

});