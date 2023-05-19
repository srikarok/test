
    const wrapper=document.querySelector('.wrapper');
    const Loginlink1=document.querySelector('.loginlink');
    const registerLink=document.querySelector('.registerlink');
    const btnpopup=document.querySelector('.btnloginpopup');
    const Iconclose=document.querySelector('.iconclose');

    registerLink.addEventListener('click',()=>{
        wrapper.classList.add('active');});

    Loginlink1.addEventListener('click',()=>{
    wrapper.classList.remove('active');});

    btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');});
    
    Iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');});

