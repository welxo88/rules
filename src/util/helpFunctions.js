import axios from 'axios';

export function setAccordionScriptTag() {
    let sOld = document.getElementById("accordeonJqueryScript");
    sOld.parentNode.removeChild(sOld);

    const s = document.createElement('script');
    s.id = 'accordeonJqueryScript';
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "$(function () {$('.accordion').first().accordion({ exclusive: false });});";
    document.body.appendChild(s);
}

export function getData(){
    let data;
    axios.get(`./example.json`)
    .then(res => {
      data = res.body;
    });
}