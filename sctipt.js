window.addEventListener("load", shadowBox);

function shadowBox(){
    const preview = document.getElementById("item");
    const resultCss = document.getElementById("result-css");
    const  btnCopy= document.getElementById("btn-copy");
    const inputs = document.querySelectorAll(".shadow-property");
    const blockColor = document.getElementById("block-color");

    inputs.forEach(inp => inp.addEventListener("input", generateShadow));
    btnCopy.addEventListener("click", copyCss);
    blockColor.addEventListener("input", getColor);

    function getColor(){
        preview.style.backgroundColor = hexToRGBA(blockColor.value, 1);
    }
    function generateShadow(){
        const hShadow = document.getElementById("h-shadow").value;
        const vShadow = document.getElementById("v-shadow").value;
        const blurRadius = document.getElementById("blur-radius").value;
        const spreadRadius = document.getElementById("spread-radius").value;
        const shadowColor = document.getElementById("shadow-color").value;
        const shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
        const shadowInset = document.getElementById("shadow-inset").checked;
        let shadow = '';

        if (shadowInset) shadow += "inset";
        shadow = `${shadow} ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRGBA(shadowColor, shadowColorOpacity)}`;
    
        preview.style.boxShadow = shadow;
        resultCss.textContent = `box-shadow: ${shadow}`;
    }
    function hexToRGBA(color, opacity){
        const red = parseInt(color.substr(1,2),16);
        const green = parseInt(color.substr(3,2),16);
        const blue = parseInt(color.substr(5,2),16);
        return `rgba(${red}, ${green}, ${blue}, ${opacity})`
    }

    function copyCss(){
        resultCss.select();
        document.execCommand("copy");
        alert("Css copid to clipboard");
    }

}