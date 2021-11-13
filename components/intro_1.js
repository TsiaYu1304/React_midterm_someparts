function IntroOne (){
    return(
        <div className = "intro_1_container" style={{ backgroundImage: "url(img/intro.png)" }}>
            {/* <img className="intro_1_BG" src ="img/intro.png" /> */}
            <div className = "intro_1_item">
            <img className="intro_1_Logo" src ="img/LogoY.png" />
            <div className="intor_1_describe">
                這是一個專門拍賣二手衣服的網站，每個人都可以將還能夠穿的衣服上傳拍賣，創造共享經濟。</div>
            </div>
           
        </div>
    );

}
export default IntroOne;