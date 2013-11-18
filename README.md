## PAGE LOAD ANIMATION for SmartPhone
スマートフォン用のページロードアニメーション

## Discription
- JSはHTML内の最後に記述するだけ 
- body,a,submit,formにクラスを追加でカンタンに 
- CSSに記述するのは.transitionだけ 

## How to Use
    $('.page-animation').loadAnimation({

        inAnimation: true,
        // IN Effect : fadeIn', 'scaleFromOver', 'scaleFromSmall', 'slideFromLeft', 'slideFromRight'
        inAnimationEffect: "scaleFromOver",

        outAnimation: true,
        // OUT Effect : fadeOut', 'scaleToOver', 'scaleToSmall', 'slideToLeft', 'slideToRight'
        outAnimationEffect: "slideToLeft",

        // AnimationDuration is You Set Transition's Duration on Your CSS. 
        animationDuration: 500,

        // This Name like a Css Selecter
        submitFormClassName: ".form",
        submitClassName: ".submit",
        locationClassName: ".a"
    });

### Effects
#### In Effect
-  fadeIn
-  scaleFromOver
-  scaleFromSmall
-  slideToLeft
-  slideToRight

#### Out Effect
-  fadeOut
-  scaleToOver
-  scaleToSmall
-  slideToLeft
-  slideToRight
