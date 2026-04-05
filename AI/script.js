
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

function reply(t) {
  // رسايل ترحيبيه
  if (t.includes("مرحبا") || t.includes("اهلا") || t.includes("هلا") || t.includes("الو")) {
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
    return "تمام وانت؟😊";
  } else if (
   t.includes("الحمدلله") ||
   t.includes("كويس") ||
   t.includes("الحمد لله") ||
   t.includes("فل") ||
   t.includes("نشكر ربنا") ||
   t.includes("ماشي الحال") ||
   t.includes("تمام") 
   ){
    return "يارب دايما تكون كويس 😍❤️";
   }

  // تعريف عن النفس
  else if (
    t.includes("اسمك") ||
    t.includes("انت مين") ||
    t.includes("من انت") ||
    t.includes("مين")
  ) {
    return "أنا AI من Soft Web 😊\n علشان معلومات اكتر عني اكتب ' تفاصيل '";
  } else if (
    t.includes('تفاصيل')
  ){
    return 'اسمي Soft AI 😁 \n تم انشائي بواسطه نبيل نجيب مينا 😎\n صممت لاساعدك في تصفح موقع مدرسة الشهيد علي زكريا 😘💕\n شاركنا تعليقك علي انستجرام : soft_wep 😊❤️';
  }
  //الاوامر 
  else if(t.includes('command')){
    return 'يمكنك السؤال عن اي جزء يخص الموقع بمجرد كتابه اسمه مثلا جدول مواعيد اكتب جدول 👌💕 \n للدخول لصفحتنا علي انستجرام اكتب soft ai';
  }

  // الملف الشخصي
  else if (t.includes('الملف الشخصي') || t.includes("الملف الشخصى")){
    return 'تسجل به بياناتك و يعرض لك اخر معلومات عنك 😉\n لكن لا يزال العمل عليه 😔';
  }
  // الاسئله
 else if (t.includes('صفحه الاسئله') || t.includes('صفحه الاسئلة')){
  return 'صفحه بتساعدك تختبر معلوماتك في اي ماده 😉❤️';
 }
 //الجدول
 else if (t.includes('جدول') || t.includes('جدول حصص') || t.includes('جدول الحصص')){
  return 'مكان يساعدك في معرفه مواعيد حصص فصلك 😎😘';
 }
 // الانشطة
 else if (t.includes('الانشطه') || t.includes('الانشطة') || t.includes('انشطه') ||t.includes('انشطة') ){
  return 'يعلمك بالانشطه جديده مثل مسرحيه جديده و لو حابب تشارك او تتفرج ✌️💖';
 }
 // الكتب
 else if(t.includes('الكتب') ||t.includes('كتب')){
  return 'كتب علشان تذاكر منها 🙌💕';
 }
 // المسرحيات
 else if (t.includes('المسرحيات') ||
 t.includes('مسرح')||
 t.includes("مسرحيات")||
 t.includes('المسرح')||
 t.includes('مسرحيه') 
 ){
  return 'انشطه مسرحيه غالبا ما تكون تحت اشراف  الاستاذه نرمين منير 🤩 \n بعض المسرحيات : \n 1- I need to mary - عايز اتجوز';
 }
 // التعليقات
 else if (t.includes('التعليقات') ||
 t.includes('تعليقات') ||
 t.includes('تعليق')||
 t.includes('التعليق') ||
 t.includes("كومنت")
){
  return 'مكان يساعدك تشارك افكار جديده او حتي شكوه 💖🔥';
}
// الاخيار
else if (t.includes('الاخبار')||
  t.includes('اخبار')||
  t.includes('خبر')||
  t.includes('الخبر')
){
  return 'مكان يخبرك بالجديد عن المدرسه او معلومات عامه حول الاختبارات و غيرها 😎✌️';
}
// soft web
else if(t.includes('soft web') || t.includes('SOFT WEB') || t.includes('Soft Web')){
  return 'لمساعدتك في دراسة البرمجة 😘💕';
}
// انستجرام
else if (t.includes('soft wep') ||
  t.includes('soft_wep') ||
  t.includes('soft AI') ||
  t.includes('soft ai') ||
  t.includes('instagram') || 
  t.includes('insta') ||
  t.includes('softwep')||
  t.includes('softweb') ||
  t.includes('soft')
){
  window.location.replace('https://www.instagram.com/soft_wep?igsh=cjBpb28yNDNtYjJs');
  return'تم دخولك  🤩🔥 \n لو اتاخر غالبا بسبب ضغط او النت عندك مش احسن حاجه 😔';
}
// مديح
else if (t.includes('قمر') ||
  t.includes('شاطر') ||
  t.includes('ربنا يخليك') ||
  t.includes('جدع') ||
  t.includes('عسل') ||
  t.includes('كويس') ||
  t.includes('روعه') ||
  t.includes('ذكي') ||
  t.includes('اسطوري') ||
  t.includes('مذهل')  ||
  t.includes('جميل')  ||
  t.includes('شجاع')  ||
  t.includes('بطل')  ||
  t.includes('طرش')  ||
  t.includes('مميز')  ||
  t.includes('متألق')  ||
  t.includes('تسلم')

) {
  return 'تسلم 😍💕';
}
// حب
else if (t.includes('حب')  || t.includes('بحبك') ){
  return 'الرجاء العلم اني مجرد نموذج ذكاء اصطناعي بسيط جدا و لست بشري 😊';
}
// نبيل
else if (t.includes('نبيل')){
  return "لو عايز اكونت انستجرام او معلومات المطور اكتب nabil"
}
else if (t.includes('nabil') || t.includes('Nabil') || t.includes('NABIL')){
  return 'واتساب : +201030891803 \n انستجرام : nabilnagibmina';
}
// كلمات بذيئه
else if (t.includes('كسمك')  ||
t.includes('احا')  ||
t.includes('يبن العرص')  ||
t.includes('عرص')  ||
t.includes('معرص')  ||
t.includes('خول')  ||
t.includes('متناك')||
t.includes('مرا')  ||
t.includes('كس امك')  ||
t.includes('زاني')  ||
t.includes('مخول')  ||
t.includes('زواني')  ||
t.includes('وسخ')  ||
t.includes('وسخه') ||
t.includes('شرموط')  ||
t.includes('شرموطه')  ||
t.includes('الشرموط')  ||
t.includes('الشرموطه')  
){
  return 'لي كدا 😔 \n كل اللي عملته اني بساعدك علشان تنجح 💔';
}
// الشكر
else if (t.includes('شكرا') || t.includes('بجد شكرا') || t.includes('شكرا بجد')){
  return 'العفو دا شرف لينا 😍💕';
}
// help
else if (t.includes('help')){
  return "علشان اوامرك تمشي صح اوعي تستخدم ايموجي او علامات او تتكلم بلغه غبر العربيه تحديدا اللهجه المصريه 😎\n لو فضل معاك مشكله تواصل معنا علي انستجرام و علشان تخش الانستا بتاعنا اكتب soft ai 😊";
}
  // لو مفيش أي تطابق
  else {
    return "مش فاهمك 😔\n غالبا دا بسبب تصميم علشان كدا اكتب الامر command علشان تعرف الاوامر المتاحة😘💕\n متستخدمش ايموجي في كلامك او علامات زي ( ؟ . , : _ - { } [ ] < > )";
  }
}
