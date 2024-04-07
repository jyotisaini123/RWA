displayitem();

function displayitem(){
    let innerHtml = '';
    let detail = document.querySelector(".details");
    value.forEach(val => {
        innerHtml += innerHtml = `
        <h1>${val.fname}</h1>
        <P >${val.address}</P>
        <P style="margin-bottom: 30px; margin-top: 30px;">4.0
            ·
            Check-in rating
            Satisfactory experience
        </P>
        <div class="ammenities"  style="margin-bottom: 30px;">
            <h2>Ammenities</h2>
            <p><pre>
    ❄️AC                ᯤWifi                    ♨️Geyser
    
    🖥️TV                🛗Eleveter            ⚡Power Backup</pre></p>
        </div>
        <P  >About this OYO</P>
        <P  style="margin-bottom: 30px;" >A space for new-age travelers</P>
        <div class="policies">
            <h2>Hotel Policies</h2>
            <ul>
                <li><pre>Check In - 12PM     Check Out - 11AM</pre></li>
                <li>Students are welcome</li>
                <li>Guests can check in using any local or outstation ID proof.</li>
            </ul>
        </div>
       <button id="pcb">Proceed to Book</button>`
            
    });

   detail.innerHTML = innerHtml;
}