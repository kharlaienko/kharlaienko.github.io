document.addEventListener("DOMContentLoaded", () => {

    const popUpBox = document.querySelector(".pop-up_items");
    const popUpCloseArrow = document.querySelector(".pop-up_arrow-back-img");
    const popUp = document.querySelector(".pop-up");

    const body = document.querySelector("body");

    const menuItems = document.querySelectorAll(".menu_item");

    [].forEach.call(menuItems, function(el){
        el.addEventListener('click', function(event) {
            addPopUp(this.dataset.food);
        });
    });

    function addPopUp(food){
        popUp.style.display = 'unset';
        
        popUp.style.position = 'fixed';
    
        body.style.overflow = 'hidden'
    
        const popUpItems = foodItems[food];

        addPopUpItems(popUpItems, food);
    }
    
    function removePopUp(){
        popUp.style.display = 'none';
        
        popUp.style.position = 'unset';
        
        body.style.overflow = 'unset';
    }

    const getWeight = (food, weight) => {

        if(food === 'cold-drinks'){
            if (weight){
                return weight.toString().split("")[0] === "0" ? `${weight} л.` : `${weight} мл.`
            }
        }

        return weight ? `${weight}г.` : '' 
    }
    
    function addPopUpItems(popUpItems, food) {
        const popUpBox = document.querySelector(".pop-up_items");

        popUpItems.map(item => {
            popUpBox.innerHTML += `<div class="pop-up_item">
                                        <div class="pop-up_img">
                                            <span class="pop-up_position-name"
                                                >${item.name}</span
                                            >
                                            <img
                                                src="img/${item.imgSrc}"
                                                alt="${item.name}"
                                            />
                                        </div>
                                        <div class="pop-up_dish-discribe">
                                            ${item.description}
                                        </div>
                                        <form action="#">
                                            <label class="pop-up_order-box"
                                                ><input class="pop-up_btn" type="submit" value="Замовити" /><span
                                                    class="pop-up_price"
                                                    >${item.price} грн. ${getWeight(food, item.weight)}
                                                </span></label
                                            >
                                        </form>
                                    </div>`
        });
    
    }
    
    popUpCloseArrow.addEventListener('click', () => {
        popUpBox.innerHTML = ''
        removePopUp();
    });

    const foodItems = {
        breakfast: [
        {
            name: 'Яйця пашот з сьомгою та авокадо',
            description: 'Дві половинки тостового хліба, яйця пашот 2 шт, лосось, авокадо і сир філадельфія',
            price: 65,
            weight: 200,
            imgSrc: "сніданки/Яйця пашот з сьомгою та авокадо.jpg"
        },
        {
            name: 'Каша вівсяна на молоці з ягодами',
            description: 'Крупа вівсяна, молоко, свіжоморожені ягоди',
            price: 32,
            weight: 250,
            imgSrc: "сніданки/Каша вівсяна на молоці з ягодами.jpg"
        },
                {
            name: 'Ситний сніданок',
            description: 'Курячі яйця 2 шт смажені, сосиски, бекон смажений, томати та дві половинки тостового хліба.',
            price: 54,
            weight: 250,
            imgSrc: "сніданки/Ситний сніданок.jpg"
        },
        {
            name: 'Фарширований омлет',
            description: 'Омлет, гриби , сир моцарела та бекон, помідор, дві половинки тостового хліба',
            price: 44,
            weight: 280,
            imgSrc: "сніданки/Фарширований омлет.jpg"
        },
        {
            name: 'Англійський сніданок',
            description: 'Дві половинки тостового хліба, яйця пашот 2 шт, лосось, авокадо і сир філадельфія',
            price: 46,
            weight: 250,
            imgSrc: "сніданки/Англійський сніданок.jpg"
        },
        {
            name: 'Бабусині налисники',
            description: 'Млинець, сир., сметана',
            price: 36,
            weight: 180,
            imgSrc: "сніданки/Бабусині налисники.jpg"
        },
        ],
        'main-dishes': 
        [
            {
                name: "М'ясна дошка",
                description: "4 вида м'яса: вирізка, шия, куряче філе та баварські ковбаски. Картопля по селянські. Соус барбекю.",
                price: 425,
                weight: 700,
                imgSrc: "основні/М'ясна дошка.jpg"
            },
            {
                name: 'Свинина на кістці',
                description: 'Неймовірно смачна свинина з печеною картоплею',
                price: 96,
                weight: 230,
                imgSrc: "основні/Свинина на кістці.jpg"
            },
            {
                name: 'Медальйони зі свинини',
                description: 'Соковиті медальйони зі свинини, подаються на картопляній "подушці".',
                price: 125,
                weight: 220,
                imgSrc: "основні/Медальйони зі свинини.jpg"
            },
            {
                name: 'Куряча грудинка',
                description: 'Куряча грудка фарширована сиром філадельфія, подається з горіховим соусом та картоплею',
                price: 92,
                weight: 220,
                imgSrc: "основні/Куряча грудинка.jpg"
            },
            {
                name: 'Ошийок запечений з овочами',
                description: 'Запечений ошийок подається разом з тушкованими овочами.',
                price: 108,
                weight: 230,
                imgSrc: "основні/Ошийок запечений з овочами.jpg"
            },
            {
                name: 'Соте з сома',
                description: 'Тушковане філе сома з овочами, заправлене вершковим соусом.',
                price: 82,
                weight: 250,
                imgSrc: "основні/Соте з сома.jpg"
            },
        ],
        'cold-snacks': 
        [
            {
                name: "Асорті сирне",
                description: "Російський, моцарела та горгонзола , подається з медом.",
                price: 98,
                weight: 180,
                imgSrc: "холодні закуски/Асорті сирне.jpg"
            },
            {
                name: 'Асорті овочеве',
                description: 'Помідор, огірок та болгарський перець',
                price: 48,
                weight: 250,
                imgSrc: "холодні закуски/Асорті овочеве.jpg"
            },
            {
                name: 'Тар-тар з лосося',
                description: 'Ніжний лосось порізаний шматочками додається авокадо,огірок , сир філадельфія подається з багетом.',
                price: 132,
                weight: 200,
                imgSrc: "холодні закуски/Тар-тар з лосося.jpg"
            },
            {
                name: 'Сет Брускет',
                description: 'Французький багет, крем-сир, лосось, масляна риба, італійська салямі, прошуто.',
                price: 94,
                weight: 200,
                imgSrc: "холодні закуски/Сет Брускет.jpg"
            },
            {
                name: 'Сало українське',
                description: 'Сало українське, подається з цибулею.',
                price: 28,
                weight: 100,
                imgSrc: "холодні закуски/Сало українське.jpg"
            },
            {
                name: 'Соління власного виробництва',
                description: 'Тушковане філе сома з овочами, заправлене вершковим соусом.',
                price: 38,
                weight: 100,
                imgSrc: "холодні закуски/Соління власного виробництва.jpg"
            },
        ],
        'salads': 
        [
            {
                name: "Цезар з куркою",
                description: 'Куряче філе, бекон, листя салату,помідор, грінки та соус "Цезар"',
                price: 84,
                weight: 230,
                imgSrc: "салати/Цезар з куркою.jpg"
            },
            {
                name: "Картопляне пюре",
                description: 'Помідор, огірок та болгарський перець',
                price: 114,
                weight: 210,
                imgSrc: "салати/Салат з креветками та вяленими томатами.jpg"
            },
            {
                name: 'Салат теплий зі свинини',
                description: 'Свинна вирізка, чері, огірок, яблуко, листя салату, соус.',
                price: 78,
                weight: 180,
                imgSrc: "салати/Салат теплий зі свинини.jpg"
            },
            {
                name: 'Салат Грецький',
                description: 'Огірок, помідор, перець болгарський, фета, маслини, листя салату та соус грецький.',
                price: 58,
                weight: 210,
                imgSrc: "салати/Салат Грецький.jpg"
            },
            {
                name: 'Салат з сирними кнедлями',
                description: 'Крем-сир, перець болгарський маринований, чері, листя салату, соус гірчично- медовий, горіх грецький.',
                price: 74,
                weight: 170,
                imgSrc: "салати/Салат з сирними кнедлями.jpg"
            },
            {
                name: 'Салат з Прошуто за соусом Теріякі',
                description: 'Прошуто, листя салату, чері, горгонзола, пармезан, соус теріякі.',
                price: 84,
                weight: 180,
                imgSrc: "салати/Салат з Прошуто за соусом Теріякі.jpg"
            },
        ],
        'garnish': 
        [
            {
                name: "Картопля по-селянськи",
                description: 'Печена картопля з часником"',
                price: 26,
                weight: 200,
                imgSrc: "гарніри/Картопля по-селянськи.jpg"
            },
            {
                name: "Картопляне пюре",
                description: 'Картопля, масло, молоко',
                price: 24,
                weight: 200,
                imgSrc: "гарніри/Картопляне пюре.jpg"
            },
            {
                name: 'Картопля Фрі',
                description: 'Свинна вирізка, чері, огірок, яблуко, листя салату, соус',
                price: 78,
                weight: 180,
                imgSrc: "гарніри/Картопля Фрі.jpg"
            },
        ],
        'burger-and-pasta':[
            {
                name: 'Гамбургер',
                description: 'Котлета свино говяжа, булочка, листя салату, помідор, огірок, цибуля та соус',
                price: 56,
                weight: 280,
                imgSrc: "бургери/Гамбургер.jpg"
            },
            {
                name: 'Чізбургер',
                description: 'Котлета свино говяжа, булочка, сир чедер, листя салату, помідор, огірок, цибуля та соус',
                price: 59,
                weight: 290,
                imgSrc: "бургери/Чізбургер.jpg"
            },
            {
                name: 'Паста Карбонара',
                description: 'Паста італійська, бекон, сир пармезан , яйце, вершковий соус',
                price: 62,
                weight: 280,
                imgSrc: "бургери/Паста Карбонара.jpg"
            },
            {
                name: 'Паста Болоньєзе',
                description: "Паста італійська, м'ясний фарш, пармезан, вино ч.с, соус",
                price: 64,
                weight: 280,
                imgSrc: "бургери/Паста Болоньєзе.jpg"
            },
            {
                name: 'Паста з лососем',
                description: 'Італійська паста, лосось , пармезан, вершки',
                price: 78,
                weight: 250,
                imgSrc: "бургери/Паста з лососем.jpg"
            },
        ],
        'pizza':[
            {
                name: 'Маргарита',
                description: 'Сир моцарела, помідор, базилік, оливкова олія, соус',
                price: 82,
                weight: 390,
                imgSrc: "піца/піца.jpg"
            },
            {
                name: 'Салямі',
                description: 'Сир моцарела, салямі, соус, болгарський перець, помідори, оливкова олія, ореган',
                price: 94,
                weight: 420,
                imgSrc: "піца/піца.jpg"
            },
            {
                name: 'Гавайська',
                description: 'Сир моцарела, куряче філе, шампіньйони, ананаси, помідори, соус, оливкова олія',
                price: 94,
                weight: 440,
                imgSrc: "піца/піца.jpg"
            },
            {
                name: 'З шинкою',
                description: 'Сир моцарела, шинка, помідор, маслини, оливкова олія, соус, орегано',
                price: 94,
                weight: 420,
                imgSrc: "піца/піца.jpg"
            },
            {
                name: 'Піца італійська з салямі',
                description: 'Салямі італійська, сир моцарела, помідора, маслини, орегано, перець папероні',
                price: 112,
                weight: 450,
                imgSrc: "піца/піца.jpg"
            },
            {
                name: 'Квадро Карне',
                description: 'Сир моцарела, шинка, салямі, бекон , куряче філе, соус, помідора',
                price: 136,
                weight: 470,
                imgSrc: "піца/піца.jpg"
            },
        ],
        'sushi':[
            {
                name: 'Рол Фреш з апельсином',
                description: 'Рис, лосось , філадельфія, апельсин, норі',
                price: 104,
                weight: 215,
                imgSrc: "суші/Рол Фреш з апельсином.jpg"
            },
            {
                name: 'Каліфорнія з лососем в кунжуті',
                description: 'Рис, огірок, норі, лосось, авокадо, кунжут',
                price: 105,
                weight: 195,
                imgSrc: "суші/Каліфорнія з лососем в кунжуті.jpg"
            },
            {
                name: 'Унагі Хайя',
                description: 'Сир моцарела, куряче філе, шампіньйони, ананаси, помідори, соус, оливкова олія',
                price: 94,
                weight: 440,
                imgSrc: "суші/Унагі Хайя.jpg"
            },
            {
                name: 'Канада',
                description: 'Рис, огірок, норі, вугор, лосось, філадельфія, листя салату, омлет японський',
                price: 125,
                weight: 210,
                imgSrc: "суші/Канада.jpg"
            },
            {
                name: 'Каліфорнія з вугрем в ікрі тобіко',
                description: 'Салямі італійська, сир моцарела, помідора, маслини, орегано, перець папероні',
                price: 112,
                weight: 450,
                imgSrc: "суші/Каліфорнія з вугрем в ікрі тобіко.jpg"
            },
            {
                name: 'Рол Філадельфія',
                description: 'Рис, огірок, норі, лосось, філадельфія, авокадо',
                price: 120,
                weight: 215,
                imgSrc: "суші/Рол Філадельфія.jpg"
            },
        ],
        'to-beer':[
            {
                name: 'Курячі крильця з соусом барбекю',
                description: 'Курячі крильця з соусом барбекю',
                price: 46,
                weight: 230,
                imgSrc: "до пива/Курячі крильця з соусом барбекю.jpg"
            },
            {
                name: 'Баварські ковбаски гриль з соусом ',
                description: 'Смажені баварські ковбаски подаються з соусом барбекю',
                price: 64,
                weight: 140,
                imgSrc: "до пива/Баварські ковбаски гриль з соусом.jpg"
            },
            {
                name: 'Фокачча',
                description: 'Італійський корж, сир моцарела, оливкова олія,',
                price: 34,
                weight: 250,
                imgSrc: "до пива/Фокачча.jpg"
            },
            {
                name: 'Бастурма до пива',
                description: '',
                price: 42,
                weight: 40,
                imgSrc: "до пива/Бастурма до пива.jpg"
            },
            {
                name: 'Хрусткий арахіс в паніровці',
                description: '',
                price: 20,
                weight: 50,
                imgSrc: "до пива/Хрусткий арахіс в паніровці.jpg"
            },
            {
                name: 'Сировялена вітчина(хамон)',
                description: '',
                price: 54,
                weight: 60,
                imgSrc: "до пива/Сировялена вітчина(хамон).jpg"
            },
        ],
        'hot-drinks':[
            {
                name: 'Американо',
                description: '',
                price: 18,
                weight: null,
                imgSrc: "гарячі напої/Американо.jpg"
            },
            {
                name: 'Еспресо',
                description: '',
                price: 18,
                weight: null,
                imgSrc: "гарячі напої/Еспресо.jpg"
            },
            {
                name: 'Какао з маршмелоу',
                description: '',
                price: 30,
                weight: null,
                imgSrc: "гарячі напої/Какао з маршмелоу.jpg"
            },
            {
                name: 'Чай натуральний',
                description: 'Малина, смородина, обліпиха, клюква, вишня',
                price: 38,
                weight: null,
                imgSrc: "гарячі напої/Чай натуральний.jpg"
            },
            {
                name: 'Чай фруктовий',
                description: 'Туті фруті, полуниця в йогурті, диня в йогурті',
                price: 24,
                weight: null,
                imgSrc: "гарячі напої/Чай фруктовий.jpg"
            },
            {
                name: 'Чай елітних сортів',
                description: 'Альпійський луг, антистрес, льодовиковий період',
                price: 20,
                weight: null,
                imgSrc: "гарячі напої/Чай елітних сортів.jpg"
            },
        ],
        'desserts':[
            {
                name: 'Чізкейк з солоною карамеллю',
                description: 'Десерт на основі сиру маскарпоне, политий солоною карамеллю ніжний витончений смак десерту.',
                price: 55,
                weight: 150,
                imgSrc: "десерти/Чізкейк з солоною карамеллю.jpg"
            },
            {
                name: 'Морозиво власного виробництва',
                description: 'Чонриця',
                price: 38,
                weight: 60,
                imgSrc: "десерти/Морозиво власного виробництва.jpg"
            },
            {
                name: 'Морозиво власного виробництва',
                description: 'Шоколад',
                price: 38,
                weight: 60,
                imgSrc: "десерти/заглушка.jpg"
            },
            {
                name: 'Фондан шоколадний з морозивом',
                description: 'Вишуканий французький десерт з ніжною шоколадною начинкою, яка просто тане в роті',
                price: 55,
                weight: 250,
                imgSrc: "десерти/Фондан шоколадний з морозивом.jpg"
            },
            {
                name: 'Безе Павлової',
                description: 'Повітряне безе з кремом та ягодами.',
                price: 52,
                weight: 110,
                imgSrc: "десерти/Безе Павлової.jpg"
            },
        ],
        'cold-drinks':[
            {
                name: 'Фреш апельсиновий',
                description: '',
                price: 45,
                weight: 200,
                imgSrc: "холодні напої/Фреш апельсиновий.jpg"
            },
            {
                name: 'Коктейль молочний',
                description: '',
                price: 34,
                weight: 220,
                imgSrc: "холодні напої/Коктейль молочний.jpg"
            },
            {
                name: 'Соки в асортименті',
                description: 'Томатний, апельсиновий, мультивітамінний, персиковий, лимонний',
                price: 12,
                weight: 250,
                imgSrc: "холодні напої/Соки в асортименті.jpg"
            },
            {
                name: 'Боржомі',
                description: '',
                price: 40,
                weight: 0.5,
                imgSrc: "холодні напої/Боржомі.jpg"
            },
            {
                name: 'Lipton чай',
                description: '',
                price: 16,
                weight: 0.5,
                imgSrc: "холодні напої/Lipton чай.jpg"
            },
            {
                name: 'Pepsi Cola скло',
                description: '',
                price: 17,
                weight: 0.3,
                imgSrc: "холодні напої/Pepsi Cola скло.jpg"
            },
        ],
    }
});