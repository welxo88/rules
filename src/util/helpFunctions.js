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
    return axios.get(`./example.json?201712072`);
}

export function preg_quote( str ) {
    // http://kevin.vanzonneveld.net
    // +   original by: booeyOH
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // *     example 1: preg_quote("$40");
    // *     returns 1: '\$40'
    // *     example 2: preg_quote("*RRRING* Hello?");
    // *     returns 2: '\*RRRING\* Hello\?'
    // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
    // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'

    return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
}