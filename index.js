console.log('funguju!');

// KOSTKA
/*
Naklonujte si repozitář se stránkou, která zobrazuje hrací kostku. Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

Nápověda: Rozumným postupem je vytvořit si proměnnou side, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut src.
*/

let cislo = 0

const diceGame = () => {
    if (cislo < 6) {
        cislo = cislo + 1
        let side = document.querySelector('.dice')
        side.src = `img/side${cislo}.svg`
    } else {
        cislo = 0
        diceGame()
    }
}

document.addEventListener('keydown', diceGame)


