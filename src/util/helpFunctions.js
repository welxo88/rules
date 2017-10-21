import axios from 'axios';

export function setAccordionScriptTag() {
    //PROPER WAY, BUT DOES NOT WORK - CHECK WHY!
    //let sOld = document.getElementById("accordeonJqueryScript");
    let sOld = document.body.lastChild;
    sOld.parentNode.removeChild(sOld);

    const s = document.createElement('script');
    s.id = 'accordeonJqueryScript';
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "$(function () {$('.accordion').first().accordion({ exclusive: false });});";
    document.body.appendChild(s);
}

export function getData(){
    return axios.get(`./example.json`);
}