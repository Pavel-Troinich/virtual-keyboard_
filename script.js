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
            <div class="key">
                <span class="rus hidden">й</span>
                <span class="eng">q</span>
            </div>
            <div class="key">
                <span class="rus hidden">ц</span>
                <span class="eng">w</span>
            </div>
            <div class="key">
                <span class="rus hidden">у</span>
                <span class="eng">e</span>
            </div>
            <div class="key">
                <span class="rus hidden">к</span>
                <span class="eng">r</span>
            </div>
            <div class="key">
                <span class="rus hidden">е</span>
                <span class="eng">t</span>
            </div>
            <div class="key">
                <span class="rus hidden">н</span>
                <span class="eng">y</span>
            </div>
            <div class="key">
                <span class="rus hidden">г</span>
                <span class="eng">u</span>
            </div>
            <div class="key">
                <span class="rus hidden">ш</span>
                <span class="eng">i</span>
            </div>
            <div class="key">
                <span class="rus hidden">щ</span>
                <span class="eng">o</span>
            </div>
            <div class="key">
                <span class="rus hidden">з</span>
                <span class="eng">p</span>
            </div>
            <div class="key">
                <span class="rus hidden">х</span>
                <span class="eng">[</span>
            </div>
            <div class="key">
                <span class="rus hidden">ъ</span>
                <span class="eng">]</span>
            </div>
            <div class="key del">
                <span>Del</span>
            </div>
        </div>
        <div class="row">
            <div class="key capslock"><span>Caps Lock</span></div>
            <div class="key">
                <span class="rus hidden">ф</span>
                <span class="eng">a</span>
            </div>
            <div class="key">
                <span class="rus hidden">ы</span>
                <span class="eng">s</span>
            </div>
            <div class="key">
                <span class="rus hidden">в</span>
                <span class="eng">d</span>
            </div>
            <div class="key">
                <span class="rus hidden">а</span>
                <span class="eng">f</span>
            </div>
            <div class="key">
                <span class="rus hidden">п</span>
                <span class="eng">g</span>
            </div>
            <div class="key">
                <span class="rus hidden">р</span>
                <span class="eng">h</span>
            </div>
            <div class="key">
                <span class="rus hidden">о</span>
                <span class="eng">j</span>
            </div>
            <div class="key">
                <span class="rus hidden">л</span>
                <span class="eng">k</span>
            </div>
            <div class="key">
                <span class="rus hidden">д</span>
                <span class="eng">l</span>
            </div>
            <div class="key">
                <span class="rus hidden">ж</span>
                <span class="eng">;</span>
            </div>
            <div class="key">
                <span class="rus hidden">э</span>
                <span class="eng">'</span>
            </div>
            <div class="key enter"><span>Enter</span></div>
        </div>
        <div class="row">
            <div class="key shiftL"><span>Shift</span></div>
            <div class="key">
                <span>\</span>
            </div>
            <div class="key">
                <span class="rus hidden">я</span>
                <span class="eng">z</span>
            </div>
            <div class="key">
                <span class="rus hidden">ч</span>
                <span class="eng">x</span>
            </div>
            <div class="key">
                <span class="rus hidden">с</span>
                <span class="eng">c</span>
            </div>
            <div class="key">
                <span class="rus hidden">м</span>
                <span class="eng">v</span>
            </div>
            <div class="key">
                <span class="rus hidden">и</span>
                <span class="eng">b</span>
            </div>
            <div class="key">
                <span class="rus hidden">т</span>
                <span class="eng">n</span>
            </div>
            <div class="key">
                <span class="rus hidden">ь</span>
                <span class="eng">m</span>
            </div>
            <div class="key">
                <span class="rus hidden">б</span>
                <span class="eng">,</span>
            </div>
            <div class="key">
                <span class="rus hidden">ю</span>
                <span class="eng">.</span>
            </div>
            <div class="key">
                <span class="rus hidden">.</span>
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
    <p>Для переключения языка комбинация: левыe ctrl + alt</p>`);