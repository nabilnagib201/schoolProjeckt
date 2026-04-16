function send(){
    let input = document.getElementById("input");
    let text = input.value.trim();
    if(!text) return;

    add(text, "user");
    input.value = "";

    setTimeout(()=>{
        add(reply(text.toLowerCase()), "ai");
    }, 400);
}

function add(text, type){
    let chat = document.getElementById("chat");
    let div = document.createElement("div");
    div.className = "msg " + type;
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

// نخلي num1 متغير خارجي فقط
let num1 = 0;

function reply(t) {
  
  // تقييم 
  if (num1 == 5){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
    else if (num1 == 10){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 15){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 20){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 25){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 30){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
    else if (num1 == 35){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 40){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 45){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }
  else if (num1 == 50){
    num1++;
    alert ('هل انت راضي عنا ؟');
  }

  // رسايل ترحيبيه
  else if (t.includes("مرحبا") || t.includes("اهلا") || t.includes("هلا") || t.includes("الو")) {
    num1++;
    return "أهلاً بيك 😄";
  } else if (
    t.includes("كيفك") ||
    t.includes("عامل اي") ||
    t.includes("عامل ايه") ||
    t.includes("عامل اي؟") ||
    t.includes("عامل اى") ||
    t.includes("عامل اية") ||
    t.includes("عامل اية؟") ||
    t.includes("عامل ايه؟") ||
    t.includes("ازيك") 
  ) {
    num1++;
    return "تمام وانت؟😊" ;
  } else if (
   t.includes("الحمدلله") ||
   t.includes("كويس") ||
   t.includes("الحمد لله") ||
   t.includes("فل") ||
   t.includes("نشكر ربنا") ||
   t.includes("ماشي الحال") ||
   t.includes("تمام") 
   ){
    num1++;
    return "يارب دايما تكون كويس 😍❤️";
  }

  // تعريف عن النفس
  else if (t.includes("اسمك") || t.includes("انت مين") || t.includes("من انت") || t.includes("مين")) {
    num1++;
    return "أنا AI من Soft Web 😊\n علشان معلومات اكتر عني اكتب ' تفاصيل '";
  } else if (t.includes('تفاصيل')){
    num1++;
    return 'اسمي Soft AI 😁 \n تم انشائي بواسطه نبيل نجيب مينا 😎\n صممت لاساعدك في تصفح موقع مدرسة الشهيد علي زكريا 😘💕\n شاركنا تعليقك علي انستجرام : soft_wep 😊❤️';
  }

  // الاوامر
  else if(t.includes('command')){
    num1++;
    return 'يمكنك السؤال عن اي جزء يخص الموقع بمجرد كتابه اسمه مثلا جدول مواعيد اكتب جدول 👌💕 \n للدخول لصفحتنا علي انستجرام اكتب soft ai';
  }

  // الملف الشخصي
  else if (t.includes('الملف الشخصي') || t.includes("الملف الشخصى")){
    num1++;
    return 'تسجل به بياناتك و يعرض لك اخر معلومات عنك 😉\n لكن لا يزال العمل عليه 😔';
  }

  // الاسئله
  else if (t.includes('صفحه الاسئله') || t.includes('صفحه الاسئلة')){
    num1++;
    return 'صفحه بتساعدك تختبر معلوماتك في اي ماده 😉❤️';
  }

  // الجدول
  else if (t.includes('جدول') || t.includes('جدول حصص') || t.includes('جدول الحصص')){
    num1++;
    return 'مكان يساعدك في معرفه مواعيد حصص فصلك 😎😘';
  }

  // الانشطة
  else if (t.includes('الانشطه') || t.includes('الانشطة') || t.includes('انشطه') ||t.includes('انشطة') ){
    num1++;
    return 'يعلمك بالانشطه جديده مثل مسرحيه جديده و لو حابب تشارك او تتفرج ✌️💖';
  }

  // الكتب
  else if(t.includes('الكتب') ||t.includes('كتب')){
    num1++;
    return 'كتب علشان تذاكر منها 🙌💕';
  }

  // المسرحيات
  else if (t.includes('المسرحيات') || t.includes('مسرح')|| t.includes("مسرحيات")|| t.includes('المسرح')|| t.includes('مسرحيه')){
    num1++;
    return 'انشطه مسرحيه تحت اشراف  الاستاذه نرمين منير 🤩 \n بعض المسرحيات : \n 1- I need to mary - عايز اتجوز';
  }

  // التعليقات
  else if (t.includes('التعليقات') || t.includes('تعليقات') || t.includes('تعليق')|| t.includes('التعليق') || t.includes("كومنت")){
    num1++;
    return 'مكان يساعدك تشارك افكار جديده او حتي شكوه 💖🔥';
  }

  // الاخبار
  else if (t.includes('الاخبار')|| t.includes('اخبار')|| t.includes('خبر')|| t.includes('الخبر')){
    num1++;
    return 'مكان يخبرك بالجديد عن المدرسه او معلومات عامه حول الاختبارات و غيرها 😎✌️';
  }

  // soft web
  else if(t.includes('soft web') || t.includes('SOFT WEB') || t.includes('Soft Web')){
    num1++;
    return 'لمساعدتك في دراسة البرمجة 😘💕';
  }

  // انستجرام
  else if (t.includes('soft wep') || t.includes('soft_wep') || t.includes('soft AI') || t.includes('soft ai') || t.includes('instagram') || t.includes('insta') || t.includes('softwep')|| t.includes('softweb') || t.includes('soft')){
    window.location.replace('https://www.instagram.com/soft_wep?igsh=cjBpb28yNDNtYjJs');
    num1++;
    return 'تم دخولك 🤩🔥 \n لو اتاخر غالبا بسبب ضغط او النت عندك مش احسن حاجه 😔';
  }

  // مديح
  else if (t.includes('قمر') || t.includes('شاطر') || t.includes('ربنا يخليك') || t.includes('جدع') || t.includes('عاش') || t.includes('عسل') || t.includes('كويس') || t.includes('روعه') || t.includes('ذكي') || t.includes('اسطوري') || t.includes('مذهل')  || t.includes('جميل')  || t.includes('شجاع')  || t.includes('بطل')  || t.includes('طرش')  || t.includes('مميز')  || t.includes('متألق')  || t.includes('تسلم')){
    num1++;
    return 'تسلم 😍💕';
  }

  // حب
  else if (t.includes('حب')  || t.includes('بحبك') || t.includes('نتجوز') ){
    num1++;
    return 'الرجاء العلم اني مجرد نموذج ذكاء اصطناعي بسيط تم تطويره من نبيل نجيب و لست بشري 😊';
  }

  // نبيل
  else if (t.includes('نبيل')){
    num1++;
    return "لو عايز اكونت انستجرام او معلومات المطور اكتب nabil";
  } else if (t.includes('nabil') || t.includes('Nabil') || t.includes('NABIL')){
    num1++;
    return 'واتساب : +201030891803 \n انستجرام : nabilnagibmina';
  }

  // الشكر
  else if (t.includes('شكرا') || t.includes('بجد شكرا') || t.includes('شكرا بجد')){
    num1++;
    return 'العفو دا شرف لينا 😍💕';
  }

  // help
  else if (t.includes('help')){
    num1++;
    return "علشان اوامرك تمشي صح اوعي تستخدم ايموجي او علامات او تتكلم بلغه غبر العربيه تحديدا اللهجه المصريه 😎\n لو فضل معاك مشكله تواصل معنا علي انستجرام و علشان تدخل الانستا بتاعنا اكتب soft ai 😊";
  }

  // program // study
  else if (t.includes('program') || t.includes('study') || t.includes('مذاكره منصه')){
    window.location.href='https://nabilnagib201.github.io/softweb/stady.html';
    num1++;
    return 'تم دخولك 😎';
  }

  // معرفه عدد رسائل
  else if (t.includes('عدد رسائلي')){
    num1++;
    return `✌😎 عدد رسائلك: ${num1}`;
  }

  // فريق العمل 
  else if (t.includes('فريق العمل') || t.includes('فريق') || t.includes('مطور') ){
    num1++;
    return 'تم تطوير هذا الذكاء الاصطناعي بواسطه نبيل 😎✌️ \n لمعرفه المزيد اكتب nabilة';
  }

  // i need to mary
  else if (t.includes('i need to mary') || t.includes('عايز اتجوز')){
    num1++;
    return 'مسرحيه تم عقدها تحت اشراف الاستاذه نرمين منير 🔥 \n الممثلين : \n 1- مهرائيل سعد (عفاف العروسة) \n 2- دميانة يوسف (عايدة صاحبة العروسة) \n 3- ملك مقلاش (ام العروسة) \n 4- مريم معجوز (عطوف العريس) \n 5- رهف المصرى (ابو العريس) \n 6- مريم العطار (ابو العروسة)';
  }

  // عشوائي 
  else if (t.includes('بجد')){
    num1++;
    return 'اه بجد 😎✌️';
  }

  // المواد
  else if (t.includes('مواد')){
    num1++;
    return 'اكتب اسم ماده لدخول للكتاب 💖🙌';
  }

  // مطورين
  else if (t.includes('مطورين') || t.includes('المبرمجين')){
    num1++;
    return 'هذه منصه تمت بواسطه نبيل نجيب مينا و هذا هو ال CEO \n عمر محمد و هو مبرمج \n احمد الصفطاوي و هو مبرمج \n علي عاصم و هو ديزاينر \n محمد سعيد ابو عيد و هو ديزاين';
 }


  // لو مفيش أي تطابق
  else {
    num1++;
    return "مش فاهمك 😔\n غالبا دا بسبب تصميم علشان كدا اكتب الامر command علشان تعرف الاوامر المتاحة😘💕\n متستخدمش علامات زي ( ؟ . , : _ - { } [ ] < > ) \n او غالبا بسبب اني مش مبرمج ارد علي رساله دي 😊 \n او  اكتب ";
  }
}