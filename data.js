const categories = [
  {id:"breakfast", image:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80", name:{en:"Breakfast",ar:"الفطور",tr:"Kahvaltı"}},
  {id:"starters", image:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80", name:{en:"Hot Starters",ar:"مقبلات ساخنة",tr:"Sıcak Başlangıçlar"}},
  {id:"burgers", image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80", name:{en:"Burgers",ar:"البرغر",tr:"Burgerler"}},
  {id:"pizza", image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80", name:{en:"Pizza & Pide",ar:"بيتزا وبيدا",tr:"Pizza ve Pide"}},
  {id:"grill", image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", name:{en:"Kebab & Grill",ar:"الكباب والمشاوي",tr:"Kebap ve Izgara"}},
  {id:"coffee", image:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80", name:{en:"Coffee",ar:"القهوة",tr:"Kahve"}},
  {id:"drinks", image:"https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80", name:{en:"Cold Drinks",ar:"مشروبات باردة",tr:"Soğuk İçecekler"}},
  {id:"shisha", image:"https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80", name:{en:"Shisha",ar:"الأرجيلة",tr:"Nargile"}},
  {id:"alcohol", image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", name:{en:"Alcohol",ar:"مشروبات كحولية",tr:"Alkollü İçecekler"}}
];

const menuItems = [
  {category:"breakfast", price:"Ask", best:true, name:{en:"English Breakfast",ar:"فطور إنجليزي",tr:"İngiliz Kahvaltısı"}, description:{en:"Eggs, sausage, beans and bread.",ar:"بيض، نقانق، فاصوليا وخبز.",tr:"Yumurta, sosis, fasulye ve ekmek."}},
  {category:"breakfast", price:"Ask", name:{en:"Menemen",ar:"مينيمن",tr:"Menemen"}, description:{en:"Eggs with tomato and pepper.",ar:"بيض مع طماطم وفلفل.",tr:"Domates ve biberli yumurta."}},
  {category:"starters", price:"Ask", name:{en:"French Fries",ar:"بطاطا مقلية",tr:"Patates Kızartması"}, description:{en:"Crispy fried potatoes.",ar:"بطاطا مقرمشة.",tr:"Çıtır patates."}},
  {category:"starters", price:"Ask", name:{en:"Chicken Wings",ar:"أجنحة دجاج",tr:"Tavuk Kanat"}, description:{en:"Served with sauce.",ar:"تقدم مع الصوص.",tr:"Sos ile servis edilir."}},
  {category:"burgers", price:"Ask", best:true, name:{en:"Classic Burger",ar:"برغر كلاسيك",tr:"Klasik Burger"}, description:{en:"Beef burger with fries.",ar:"برغر لحم مع بطاطا.",tr:"Patates ile dana burger."}},
  {category:"burgers", price:"Ask", name:{en:"Chicken Burger",ar:"برغر دجاج",tr:"Tavuk Burger"}, description:{en:"Crispy chicken burger.",ar:"برغر دجاج مقرمش.",tr:"Çıtır tavuk burger."}},
  {category:"pizza", price:"Ask", name:{en:"Margherita Pizza",ar:"بيتزا مارغريتا",tr:"Margherita Pizza"}, description:{en:"Mozzarella and tomato sauce.",ar:"موزاريلا وصلصة طماطم.",tr:"Mozzarella ve domates sosu."}},
  {category:"grill", price:"Ask", name:{en:"Mixed Grill",ar:"مشاوي مشكلة",tr:"Karışık Izgara"}, description:{en:"Selection of grilled meats.",ar:"تشكيلة من المشاوي.",tr:"Karışık ızgara."}},
  {category:"coffee", price:"Ask", name:{en:"Turkish Coffee",ar:"قهوة تركية",tr:"Türk Kahvesi"}, description:{en:"Traditional Turkish coffee.",ar:"قهوة تركية تقليدية.",tr:"Geleneksel Türk kahvesi."}},
  {category:"drinks", price:"Ask", name:{en:"Soft Drinks",ar:"مشروبات غازية",tr:"Gazlı İçecekler"}, description:{en:"Cola, Fanta, Sprite.",ar:"كولا، فانتا، سبرايت.",tr:"Kola, Fanta, Sprite."}},
  {category:"shisha", price:"Ask", best:true, name:{en:"Double Apple",ar:"تفاحتين",tr:"Çift Elma"}, description:{en:"Classic flavor.",ar:"نكهة كلاسيكية.",tr:"Klasik aroma."}},
  {category:"alcohol", price:"Ask", name:{en:"Beer",ar:"بيرة",tr:"Bira"}, description:{en:"Ask staff for available brands.",ar:"اسأل الموظف عن الأنواع المتوفرة.",tr:"Markalar için personele sorunuz."}}
];
