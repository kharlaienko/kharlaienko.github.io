document.addEventListener('DOMContentLoaded', function(){
    
    function addPopUp(){
        popUp.style.display = 'unset';
        
        popUp.style.position = 'fixed';
    
        body.style.overflow = 'hidden'

        popUp.style['overflow-y'] = 'scroll';

        popUp.classList.remove('pop-up-close');

        popUp.classList.add('pop-up-open');
    }

    function removePopUp(){
        
        body.style.overflow = 'unset';

        popUp.style.overflow = 'hidden';
        
        popUp.classList.remove('pop-up-open');
        
        popUp.classList.add('pop-up-close');
        
        setTimeout(() => {
            popUp.style.display = 'none';
            popUp.style.position = 'unset';
        }, 600);
    }


    function updateBacketQuantity (){
        if (localStorage.getItem('basket')){
            let quantity = JSON.parse(localStorage.getItem('basket')).length;
            backetQuantity.innerHTML = quantity > 100 ? "99+" : quantity;
        }else{
            backetQuantity.innerHTML = "0";
        }
    }

    function addFood(boughtFood){
        boughtFood.map(item => {
            popUpBox.innerHTML += `<div class="basket_item">
                                        <div class="basket_img"><img src="${item.imgSrc}" alt=""></div>
                                        <div class="basket_info_box">
                                            <div class="basket_name">Позиция: <span>${item.name}</span></div>
                                            <div class="basket_price">Цена: <span>${item.price}</span> грн</div>
                                            <button class="basket_delete pop-up_btn">Видалити</button>
                                        </div>
                                    </div>`
        });

        const basketDelete  = document.querySelectorAll(".basket_delete");
       
        [].forEach.call(basketDelete, function(el){
            el.addEventListener('click', function(){
                const item = this.closest('.basket_item');
    
                console.log(this.closest('.basket_item'));
                popUpBox.removeChild(this.closest('.basket_item'))
    
                const itemToRemove = {
                    name: item.children[1].children[0].children[0].innerHTML,
                    imgSrc: item.children[0].children[0].getAttribute('src'),
                    price: item.children[1].children[1].children[0].innerHTML,
                }
    
                let boughtFood = JSON.parse(localStorage.getItem('basket')) ?? [];
                
                let updatedBoughtFood = [];
                
                let counter = 0;

                boughtFood.map(food => {

                    if (food.name !== itemToRemove.name && food.imgSrc !== itemToRemove.imgSrc){
                        updatedBoughtFood.push(food);
                    }else if(food.name == itemToRemove.name && food.imgSrc == itemToRemove.imgSrc)
                    {
                        if (counter === 0){
                            counter++;
                            return
                        }else{
                            updatedBoughtFood.push(food);
                        }  
                    }
                });
    
                localStorage.setItem('basket', JSON.stringify(updatedBoughtFood));
    
                updateBacketQuantity();
            });
        });
    }

    const popUpBox = document.querySelector(".pop-up_items");
    const popUp = document.querySelector(".pop-up");

    const body = document.querySelector("body");

    const basket = document.querySelector('.basket');
    const backetQuantity = document.querySelector('.basket_quantity');

    const popUpTitle = document.querySelector('.pop-up_title');

    let basketOpen = false;

    updateBacketQuantity();
    
    basket.addEventListener('click', function(){

        if (popUpTitle.innerHTML === 'Меню'){
            popUpTitle.innerHTML = '';

            removePopUp();

            return
        }

        if (basketOpen === false){
            popUpBox.innerHTML = '';

            addPopUp();
            
            popUpTitle.innerHTML = 'Кошик';

            basketOpen = true;
            
            if(localStorage.getItem('basket')){
                
                const boughtFood = JSON.parse(localStorage.getItem('basket'));
                
                addFood(boughtFood);
            }

        }else if(basketOpen === true){
            popUp.style.position = 'unset'
            popUp.style.position = 'fixed'

            basketOpen = false;

            removePopUp();
        }
    });
    

});