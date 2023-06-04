const loadExoClick = () => {
    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://a.realsrv.com/ad-provider.js';
    script.async = true;
    document.head.appendChild(script);
  
    const ins = document.createElement('ins');
    ins.className = 'adsbyexoclick';
    ins.setAttribute('data-zoneid', '4992990');
    document.body.appendChild(ins);
  
    const adProviderScript = document.createElement('script');
    adProviderScript.type = 'application/javascript';
    adProviderScript.innerHTML = '(AdProvider = window.AdProvider || []).push({"serve": {}});';
    document.head.appendChild(adProviderScript);
  };
  
  export default loadExoClick;
  