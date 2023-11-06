const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let thisPage = 1;
let limit = 7;
let list = $$('.table__discount-item')


function loadItem(){
    let beginGet = limit  * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, index) => {
        if(index >= beginGet && index <= endGet){
            item.style.display = ''
        } else {
            item.style  .display = 'none'
        }
    });

}

loadItem();
listPage();

function listPage(){
    let count = Math.ceil(list.length / limit);
    $('.body__left-tableDiscount--listPage').innerHTML = ''
    if(count >= 5){
        for(i = 1; i <= 3; i++){
            let newPage = document.createElement('li');
            newPage.classList.add('table__discount-item')
            newPage.innerText = i;
            if(i == 1){
                newPage.classList.add('active')
            }
            newPage.setAttribute('onclick', 'changePage(' + i + ')')
            $('.body__left-tableDiscount--listPage').appendChild(newPage);
        }
        // load button ...
        let newPage = document.createElement('li');
        newPage.classList.add('table__discount-item');
        newPage.innerText = '...';
        $('.body__left-tableDiscount--listPage').appendChild(newPage);

        // load button cuối
        newPage = document.createElement('li');
        newPage.classList.add('table__discount-item');
        newPage.innerText = count;
        $('.body__left-tableDiscount--listPage').appendChild(newPage);
        newPage.setAttribute('onclick', 'btnFinal(' + ')')
    }
}


function changePage(i){
    thisPage = i;
    loadItem();
    // listPage();  
    reLoadListPage(i);
    setActive(i)
}

function reLoadListPage(i){
    const listBtn = $$('.table__discount-item')
    let length =  Math.ceil(list.length / limit);
    let lengtharr = listBtn.length
    if(i == Number(listBtn[2].innerText)){
        if(i < length){
            for(j = 0; j <= 2; j++){
                listBtn[j].innerText = Number(listBtn[j].innerText) + 1
                listBtn[j].setAttribute('onclick', 'changePage(' + Number(listBtn[j].innerText) + ')')
            }
        }
    }
    if(i == Number(listBtn[0].innerText)){
        if(i >= 2){
            if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
                listBtn[lengtharr - 2].style.display = ''
            }
            if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
                listBtn[lengtharr - 1].style.display = ''
            }
            for(j = 0; j <= 2; j++){
                listBtn[j].innerText = Number(listBtn[j].innerText) - 1
                listBtn[j].setAttribute('onclick', 'changePage(' + Number(listBtn[j].innerText) + ')')
            }
        }
    }

    if((Number(listBtn[2].innerText) == 8 && lengtharr > 3)){
        if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
            listBtn[lengtharr - 2].style.display = 'none'
        }
        if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
            listBtn[lengtharr - 1].style.display = 'none'
        }
    }

}

function setActive(i){
    const listBtn = $$('.table__discount-item')
    listBtn.forEach((item, index) => {
        item.classList.remove('active')

        if(Number(item.innerText) == i){
            item.classList.add('active')
        }
    });
}

function btnFinal(){
    thisPage = 8
    loadItem()
    const listBtn = $$('.table__discount-item')
    let count = Math.ceil(list.length / limit);
    let length = listBtn.length
    listBtn[length - 1].style.display = 'none'
    listBtn[length - 2].style.display = 'none'
    listBtn[0].innerText = count - 2;
    listBtn[0].setAttribute('onclick', 'changePage(' +  (count - 2) + ')')
    listBtn[1].innerText = count - 1;
    listBtn[1].setAttribute('onclick', 'changePage(' +  (count - 1) + ')')
    listBtn[2].innerText = count;
    listBtn[2].setAttribute('onclick', 'changePage(' +  count  + ')')
    listBtn.forEach((item, index) => {
        item.classList.remove('active')

        if(Number(item.innerText) == 8){
            item.classList.add('active')
        }
    });
}



    /* nếu count > 3
        3 button đầu là 1, 2 và 3
        button giữa là ...
        button cuối là count;

        khi click vào button đầu tiên or thứ 2
            => loadPage
        khi click vào button thứ 3
            => btn 1 <> btn 1 + 1
            => btn 2 <> btn 2 + 1 và gắn active
            => btn 3 <> btn 3 + 1 và xóa active
            => thêm btn ... trước btn 1

    */
           
            let thisPageP = 1;
            let limitP = 7;
            let listP = $$('.table__product-item')
            
            
            function loadItemP(){
                let beginGet = limitP  * (thisPageP - 1);
                let endGet = limitP * thisPageP - 1;
                listP.forEach((item, index) => {
                    if(index >= beginGet && index <= endGet){
                        item.style.display = ''
                    } else {
                        item.style  .display = 'none'
                    }
                });
            
            }
            
            loadItemP();
            listPageP();
            
            function listPageP(){
                let count = Math.ceil(listP.length / limitP);
                $('.body__left-tableProduct--listPage').innerHTML = ''
                if(count >= 5){
                    for(i = 1; i <= 3; i++){
                        let newPage = document.createElement('li');
                        newPage.classList.add('tableProduct__listPage-item')
                        newPage.innerText = i;
                        if(i == 1){
                            newPage.classList.add('active')
                        }
                        newPage.setAttribute('onclick', 'changePageP(' + i + ')')
                        $('.body__left-tableProduct--listPage').appendChild(newPage);
                    }
                    // load button ...
                    let newPage = document.createElement('li');
                    newPage.classList.add('tableProduct__listPage-item');
                    newPage.innerText = '...';
                    $('.body__left-tableProduct--listPage').appendChild(newPage);
            
                    // load button cuối
                    newPage = document.createElement('li');
                    newPage.classList.add('tableProduct__listPage-item');
                    newPage.innerText = count;
                    $('.body__left-tableProduct--listPage').appendChild(newPage);
                    newPage.setAttribute('onclick', 'btnFinalP(' + ')')
                }
            }
            
            
            function changePageP(i){
                thisPageP = i;
                loadItemP();
                // listPage();  
                reLoadListPageP(i);
                setActiveP(i)
            }
            
            function reLoadListPageP(i){
                const listBtn = $$('.tableProduct__listPage-item')
                let length =  Math.ceil(listP.length / limitP);
                let lengtharr = listBtn.length
                if(i == Number(listBtn[2].innerText)){
                    if(i < length){
                        for(j = 0; j <= 2; j++){
                            listBtn[j].innerText = Number(listBtn[j].innerText) + 1
                            listBtn[j].setAttribute('onclick', 'changePageP(' + Number(listBtn[j].innerText) + ')')
                        }
                    }
                }
                if(i == Number(listBtn[0].innerText)){
                    if(i >= 2){
                        if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
                            listBtn[lengtharr - 2].style.display = ''
                        }
                        if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
                            listBtn[lengtharr - 1].style.display = ''
                        }
                        for(j = 0; j <= 2; j++){
                            listBtn[j].innerText = Number(listBtn[j].innerText) - 1
                            listBtn[j].setAttribute('onclick', 'changePageP(' + Number(listBtn[j].innerText) + ')')
                        }
                    }
                }
            
                if((Number(listBtn[2].innerText) == 8 && lengtharr > 3)){
                    if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
                        listBtn[lengtharr - 2].style.display = 'none'
                    }
                    if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
                        listBtn[lengtharr - 1].style.display = 'none'
                    }
                }
            
            }
            
            function setActiveP(i){
                const listBtn = $$('.tableProduct__listPage-item')
                listBtn.forEach((item, index) => {
                    item.classList.remove('active')
            
                    if(Number(item.innerText) == i){
                        item.classList.add('active')
                    }
                });
            }
            
            function btnFinalP(){
                thisPageP = 8
                loadItemP()
                const listBtn = $$('.tableProduct__listPage-item')
                let count = Math.ceil(listP.length / limitP);
                let length = listBtn.length
                listBtn[length - 1].style.display = 'none'
                listBtn[length - 2].style.display = 'none'
                listBtn[0].innerText = count - 2;
                listBtn[0].setAttribute('onclick', 'changePageP(' +  (count - 2) + ')')
                listBtn[1].innerText = count - 1;
                listBtn[1].setAttribute('onclick', 'changePageP(' +  (count - 1) + ')')
                listBtn[2].innerText = count;
                listBtn[2].setAttribute('onclick', 'changePageP(' +  count  + ')')
                listBtn.forEach((item, index) => {
                    item.classList.remove('active')
            
                    if(Number(item.innerText) == 8){
                        item.classList.add('active')
                    }
                });
            }
            