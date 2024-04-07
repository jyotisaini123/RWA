let arr;

        function onload(){
            let arrstr = localStorage.getItem('arr');
            arr = arrstr ? JSON.parse(arrstr) : [];
            display();
        }

        function openItem(itemId){
            arr.push(itemId);
            localStorage.setItem('arr', JSON.stringify(arr));
        }

    
        function display() {
            let container = document.querySelector(".container");
            let innerHtml = ''; 
            items.forEach(item => {
                innerHtml += `
                    <a href="hotel.html">
                        <div class="box border" onclick="openItem('${item.id}')">
                            <img src="/html2/project13/Images/${item.image}.png" alt="Jaipur" height="250px">
                            <p>${item.hname}</p>
                            <p>Price: ${item.price}/Day</p>
                            <p>Address: ${item.address}</p>
                        </div>
                    </a>`;  
            });
            container.innerHTML = innerHtml;  
        }

        onload();