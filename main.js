function getRandomChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}
window.onload= ()=>{document.getElementById("generate").addEventListener("click", ()=>{
    let str = "";
    str += getRandomChoice([
        "Ziemian",
        "6lm10a",
        "Tytan",
        "Alkin",
        "Wywka",
        "Opp",
        "Tazar",
/*        "Oryginalne Forge",
        "Kolumna oczu",
        "Jaskinia Behemota",
        "Soundtrack z czwórki",
        "Mix fantasy i science-fiction" */
    ]) + " ";
    str += getRandomChoice([
        "to potężna jednostka,",
        "to dobry pick,",
        "to mój ulubiony szablon,",
        "to mocny gracz,",
        "to kibel,",
        "na secie do hp ma 91 hp zamiast 70,",
        "nic nie gra tylko farci,",
        "ma świetny rozwój,",
/*        "to złoto,",
        "to sztos totalny,",
        "to najlepszy koncept ever,",
        "to mistrzostwo świata,",
        "to jebane arcydzieło,",
        "to ideał pod każdym względem,",
        "to prawdziwa petarda," */
    ]) + " ";
/*    str += getRandomChoice([
        "a",
        "z kolei",
        "szkoda, że",
        "za to",
        "niestety",
        "ale",
        "ale nie zapominajmy, że",
        "podczas gdy",
        "natomiast",
        "na nieszczęście",
        "jednocześnie",
        "jednak",
        "a najśmieszniejsze jest to, że",
        "a z tego wynika, że",
        "a zatem",
        "co prowadzi do wniosku, że",
        "skądinąd",
        "a jak wiadomo",
        "a pewnie pamiętacie, że",
        "a przy okazji zwróćmy uwagę, że",
    ]) + " ";
    str += getRandomChoice([
        "Jebus",
        "kapitol",
        "Ubisoft",
        "piątka",
        "WoG",
        "6lm10a",
        "obrotowa kamera",
        "VCMI",
        "tryb single player",
        "gierka mobilna od Ubi",
        "kwadratowe pole bitwy",
        "uniwersum Ashan",
    ]) + " ";
    str += getRandomChoice([
        "to niedopracowany kasztan.",
        "to gówno obsrane.",
        "strasznie posysa.",
        "to siermiężne anime.",
        "to kompletny kasztan.",
        "to jedno wielkie IKS DE.",
        "podoba się tylko osobom bez gustu.",
        "wygląda gorzej niż mój poranny stolec.",
        "to partactwo.",
        "to tragedia okrutna.",
        "śmierdzi.",
        "to jakiś kiepski żart.",
        "literalnie się do niczego nie nadaje.",
        "to tania sklejanka w paintcie.",
        "to ideologia.",
        "to srogie XDDDDDDDD.",
        "powoduje odruchy wymiotne.",
        "to zabawka dla dzieci.",
        "musi zniknąć w trybie natychmiastowym.",
        "to jakaś padaka.",
        "to fan fiction napisane na kolanie."
    ]) + " ";
    str += getRandomChoice([
        "Fakt nie opinia.",
        "Mam nadzieje, że pomogłem.",
        "Zapraszam do dyskusji!",
        "Pozdro Gnolle!",
        "Smacznej kawusi!",
        "Całuję rączki!",
        "Nie zapraszam do dyskusji bo nie ma o czym.",
        "Change my mind!",
        "Prove me wrong!",
        "Takie są fakty.",
        "Trust me.",
        "Serio.",
        "Prawda baituje najbardziej.",
        "[ZOBACZ ZDJĘCIA]",
        "Tak było, nie zmyślam.",
        "Obrazek dla atencji.",
        "Pozdrawiam cieplutko!"
    ]) */
    document.getElementById("text").innerHTML = str;
})}
