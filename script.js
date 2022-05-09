document.body.insertAdjacentHTML("beforeend", `<h1>RSS Virtual Keyboard</h1>
    <textarea type="text" id="result" autofocus></textarea>
    <div class="klaviatura">
        <div class="row">
            <div class="key"><span>ё</span><sup>~</sup></div>
            <div class="key"><span>1</span><sup>!</sup></div>
            <div class="key"><span>2</span><sup>@</sup></div>
            <div class="key"><span>3</span><sup>#</sup></div>
            <div class="key"><span>4</span><sup>$</sup></div>
            <div class="key"><span>5</span><sup>%</sup></div>
            <div class="key"><span>6</span><sup>^</sup></div>
            <div class="key"><span>7</span><sup>?</sup></div>
            <div class="key"><span>8</span><sup>*</sup></div>
            <div class="key"><span>9</span><sup>(</sup></div>
            <div class="key"><span>0</span><sup>)</sup></div>
            <div class="key"><span>-</span><sup>_</sup></div>
            <div class="key"><span>=</span><sup>+</sup></div>
            <div class="key backspace"><span>Backspace</span></div>
        </div>
        <div class="row">
            <div class="key tab"><span>Tab</span></div>
            <div class="key" onclick="CheckAnswer()">
                <span class="rus">й</span>
                <span class="eng">q</span>
            </div>
            <div class="key">
                <span class="rus">ц</span>
                <span class="eng">w</span>
            </div>
            <div class="key">
                <span class="rus">у</span>
                <span class="eng">e</span>
            </div>
            <div class="key">
                <span class="rus">к</span>
                <span class="eng">r</span>
            </div>
            <div class="key">
                <span class="rus">е</span>
                <span class="eng">t</span>
            </div>
            <div class="key">
                <span class="rus">н</span>
                <span class="eng">y</span>
            </div>
            <div class="key">
                <span class="rus">г</span>
                <span class="eng">u</span>
            </div>
            <div class="key">
                <span class="rus">ш</span>
                <span class="eng">i</span>
            </div>
            <div class="key">
                <span class="rus">щ</span>
                <span class="eng">o</span>
            </div>
            <div class="key">
                <span class="rus">з</span>
                <span class="eng">p</span>
            </div>
            <div class="key">
                <span class="rus">х</span>
                <span class="eng">[</span>
            </div>
            <div class="key">
                <span class="rus">ъ</span>
                <span class="eng">]</span>
            </div>
            <div class="key del">
                <span>Del</span>
            </div>
        </div>
        <div class="row">
            <div class="key capslock"><span>Caps Lock</span></div>
            <div class="key">
                <span class="rus">ф</span>
                <span class="eng">a</span>
            </div>
            <div class="key">
                <span class="rus">ы</span>
                <span class="eng">s</span>
            </div>
            <div class="key">
                <span class="rus">в</span>
                <span class="eng">d</span>
            </div>
            <div class="key">
                <span class="rus">а</span>
                <span class="eng">f</span>
            </div>
            <div class="key">
                <span class="rus">п</span>
                <span class="eng">g</span>
            </div>
            <div class="key">
                <span class="rus">р</span>
                <span class="eng">h</span>
            </div>
            <div class="key">
                <span class="rus">о</span>
                <span class="eng">j</span>
            </div>
            <div class="key">
                <span class="rus">л</span>
                <span class="eng">k</span>
            </div>
            <div class="key">
                <span class="rus">д</span>
                <span class="eng">l</span>
            </div>
            <div class="key">
                <span class="rus">ж</span>
                <span class="eng">;</span>
            </div>
            <div class="key">
                <span class="rus">э</span>
                <span class="eng">'</span>
            </div>
            <div class="key enter"><span>Enter</span></div>
        </div>
        <div class="row">
            <div class="key shiftL"><span>Shift</span></div>
            <div class="key">
                <span>/</span>
            </div>
            <div class="key">
                <span class="rus">я</span>
                <span class="eng">z</span>
            </div>
            <div class="key">
                <span class="rus">ч</span>
                <span class="eng">x</span>
            </div>
            <div class="key">
                <span class="rus">с</span>
                <span class="eng">c</span>
            </div>
            <div class="key">
                <span class="rus">м</span>
                <span class="eng">v</span>
            </div>
            <div class="key">
                <span class="rus">и</span>
                <span class="eng">b</span>
            </div>
            <div class="key">
                <span class="rus">т</span>
                <span class="eng">n</span>
            </div>
            <div class="key">
                <span class="rus">ь</span>
                <span class="eng">m</span>
            </div>
            <div class="key">
                <span class="rus">б</span>
                <span class="eng">,</span>
            </div>
            <div class="key">
                <span class="rus">ю</span>
                <span class="eng">.</span>
            </div>
            <div class="key">
                <span class="rus">.</span>
                <span class="eng">/</span>
            </div>
            <div class="key"><span>▲</span></div>
            <div class="key shiftR"><span>Shift</span></div>
        </div>
        <div class="row">
            <div class="key ctrlL"><span>Ctrl</span></div>
            <div class="key win"><span>Win</span></div>
            <div class="key altL"><span>Alt</span></div>
            <div class="key space"></div>
            <div class="key altR"><span>Alt</span></div>
            <div class="key ctrlR"><span>Ctrl</span></div>
            <div class="key"><span>◄</span></div>
            <div class="key"><span>▼</span></div>
            <div class="key"><span>►</span></div>
        </div>
    </div>
    <p>Клавиатура создана в операционной системе Windows</p>
    <p>Для переключения языка комбинация: левыe Shift + Alt</p>`);

const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0',
'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
'BracketRight', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote',
'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp',
'ShiftRight', 'ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const keys = document.querySelectorAll(".key");
const res = document.getElementById('result');

document.addEventListener('keydown', function(event) {    
    for(let i = 0; i<keys.length; i++){
        if (event.code == keyCodes[i]) {
            keys[i].classList.add('act');
            setTimeout(() => keys[i].classList.remove('act'), 200);
            res.focus();
        }
    }
    res.focus();
});

function switchLang (func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
            return;
            }
        }
        pressed.clear();

        func();
    });

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
    });

}

const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');
// alert(window.navigator.userLanguage)
let userLang = localStorage.getItem('lang'); 
if(userLang == 'ru') {
    for (let elem of eng) {
        elem.classList.add('hidden');
        localStorage.setItem('lang', 'ru');
    }
} else for (let elem of rus) {
    elem.classList.toggle('hidden');
    localStorage.setItem('lang', 'en');
    }



switchLang(
    () => {        
        for (let elem of rus) {
            elem.classList.toggle('hidden');
        }
        for (let elem of eng) {
            elem.classList.toggle('hidden');
        }
        if(userLang == 'ru') {
            localStorage.setItem('lang', 'en'); 
        } else if (userLang == 'en') {
            localStorage.setItem('lang', 'ru');
        }
    },
    "AltLeft",
    "ShiftLeft"
);

keys.forEach(element => {
    element.addEventListener('click', function(event) {
        res.value = res.value + event.target.textContent;
    });
}); 

// document.addEventListener('click', function(event) {
//     res.value = res.value + event.target.textContent;
// })