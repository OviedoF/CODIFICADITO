const text = document.getElementById('input_text');
const result = document.getElementById('result_text');
const codyButton = document.getElementById('codyButton');
const decodyButton = document.getElementById('decodyButton');

const copyText = () => {
    const button = document.getElementById('copyButton');
    const output = document.getElementById('result_text');
    const popUp = document.querySelector('.pop-up');

    button.addEventListener('click', () => {
        output.select();
        output.setSelectionRange(0, 99999);
        document.execCommand('copy');

        popUp.style.opacity = '1';
        popUp.style.bottom = "20%";

        setTimeout(() => {
            popUp.style.opacity = "0";
            setTimeout(() => {
                popUp.style.bottom = "0";
            }, 700);
        }, 800)
    });
}

const codificar = (e) => {
    let textCody = "";
    e.preventDefault();

    let textToArray = text.value.split('');
    textToArray.forEach(element => {
        switch (element) {
            case 'a':
                element = 'ai'; 
                break;
            case 'e':
                element = 'enter';
                break;
            case 'i':
                element = 'imes';
                break;
            case 'o':
                element = 'ober';
                break;
            case 'u':
                element = 'ufat';
                break;    
            default:
                break;
        }

        textCody += element;
    });
    
    result.value = textCody;
 }

const decodificar = (e) => {
    let textDecody = "";
    e.preventDefault();
    
    text0 = text.value.replace(/ober/ig, 'o');
    text1 = text0.replace(/ai/ig, 'a');
    text2 = text1.replace(/enter/ig, 'e');
    text3 = text2.replace(/imes/ig, 'i');
    textDecody = text3.replace(/ufat/ig, 'u');
    result.value = textDecody;
};

const aumentarLabel = (e) => {
    e.preventDefault();
    document.getElementById('label_form').style.transform = "scale(1.2)"
    setTimeout(() => {
        document.getElementById('label_form').style.transform = "scale(1)"
    }, 500);
};

const validar = (e) => {

    const exp = /[^a-z]/g;

    if(exp.test(e.target.value)) {
        e.target.classList.add('incorrect');

        codyButton.removeEventListener('click', codificar);
        codyButton.addEventListener('click', aumentarLabel)

        decodyButton.removeEventListener('click', decodificar);
        decodyButton.addEventListener('click', aumentarLabel)
    } else {
        e.target.classList.remove('incorrect');
        
        codyButton.removeEventListener('click', aumentarLabel);
        codyButton.addEventListener('click', codificar);

        decodyButton.removeEventListener('click', aumentarLabel);
        decodyButton.addEventListener('click', decodificar);
    }

}

(() => {
    const text = document.getElementById('input_text');
    const result = document.getElementById('result_text');
    const codyButton = document.getElementById('codyButton');
    const decodyButton = document.getElementById('decodyButton');

    text.addEventListener('keyup', validar);
    text.addEventListener('blur', validar);

    copyText();
}) ();