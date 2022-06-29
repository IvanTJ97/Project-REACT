const X0=["3", "5", "7", "9","11","13"];
const X1=["1", "2", "3", "4","5","6"];
const X2=["11", "12", "13", "14","15","16"];
const X3=["21", "22", "23", "24","25","26"];
const X4=["31", "32", "33", "34","35","36"];
const X5=["41", "42", "43", "44","45","46"];
const X6=["51", "52", "53", "54","55","56"];
const X7=["61", "62", "63", "64","65","66"];
const X8=["71", "72", "73", "74","75","76"];
const X9=["81", "82", "83", "84","85","86"];
const X10 = ["91", "92", "93", "94","95","96"];
const XFINAL=["40", "42", "44", "46","48","50"];
const Y1=90;
const Y2=80;
const Y3=68;
const Y4=57;
const Y5=47;
const Y6=36;
const Y7=25;
const Y8=14;
const Y9=3;
const YFINAL=50;
const obj = [
    {
        "Pos": "1",
        "X": X0,
        "Y": Y1,
        "Text": "Inicio"
    },
    {
        "Pos": "2",
        "X": X3,
        "Y": Y1,
        "Text": "Bebes tú"
    },
    {
        "Pos": "3",
        "X": X4,
        "Y": Y1,
        "Text": "Bebe el de tu derecha"
    },
    {
        "Pos": "4",
        "X": X5,
        "Y": Y1,
        "Text": "Bebe el de tu izquierda"
    },
    {
        "Pos": "5",
        "X": X6,
        "Y": Y1,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "6",
        "X": X7,
        "Y": Y1,
        "Text": "De puente a puente, y tiro porque me lleva la corriente"
    },
    {
        "Pos": "7",
        "X": X8,
        "Y": Y1,
        "Text": "Beben los que tengan barba"
    },
    {
        "Pos": "8",
        "X": X9,
        "Y": Y1,
        "Text": "Escalera"
    },
    {
        "Pos": "9",
        "X": X10,
        "Y": Y1,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "10",
        "X": X10,
        "Y": Y2,
        "Text": "Bebe el más alto"
    },
    {
        "Pos": "11",
        "X": X10,
        "Y": Y3,
        "Text": "Beben los que lleven ropa interior"
    },
    {
        "Pos": "12",
        "X": X10,
        "Y": Y4,
        "Text": "De puente a puente, y tiro porque me lleva la corriente"
    },
    {
        "Pos": "13",
        "X": X10,
        "Y": Y5,
        "Text": "Bebe el más bajito"
    },
    {
        "Pos": "14",
        "X": X10,
        "Y": Y6,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "15",
        "X": X10,
        "Y": Y7,
        "Text": "Beben los que no llevan ropa interior"
    },
    {
        "Pos": "16",
        "X": X10,
        "Y": Y8,
        "Text": "Yo nunca"
    },
    {
        "Pos": "17",
        "X": X10,
        "Y": Y9,
        "Text": "Beben los que lleven tanga"
    },
    {
        "Pos": "18",
        "X": X9,
        "Y": Y9,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "19",
        "X": X8,
        "Y": Y9,
        "Text": "Hace calor, jugad a pasar el hielo"
    },
    {
        "Pos": "20",
        "X": X7,
        "Y": Y9,
        "Text": "Beben todos los presentes"
    },
    {
        "Pos": "21",
        "X": X6,
        "Y": Y9,
        "Text": "Bebe los que no lleven tanga"
    },
    {
        "Pos": "22",
        "X": X5,
        "Y": Y9,
        "Text": "Chupito de la alegría"
    },
    {
        "Pos": "23",
        "X": X4,
        "Y": Y9,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "24",
        "X": X3,
        "Y": Y9,
        "Text": "Beben los chicos"
    },
    {
        "Pos": "25",
        "X": X2,
        "Y": Y9,
        "Text": "Bebe el más joven"
    },
    {
        "Pos": "26",
        "X": X1,
        "Y": Y9,
        "Text": "De dado a dado, y el cubata me lo he acabado"
    },
    {
        "Pos": "27",
        "X": X1,
        "Y": Y8,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "28",
        "X": X1,
        "Y": Y7,
        "Text": "Beben las chicas"
    },
    {
        "Pos": "29",
        "X": X1,
        "Y": Y6,
        "Text": "Imita a alguien, el que acierte manda beber X3"
    },
    {
        "Pos": "30",
        "X": X1,
        "Y": Y5,
        "Text": "Bebe el mayor de los presentes"
    },
    {
        "Pos": "31",
        "X": X1,
        "Y": Y4,
        "Text": "Ziz, Zac, Zoe"
    },
    {
        "Pos": "32",
        "X": X1,
        "Y": Y3,
        "Text": "Pozo, bebes 1 para salir"
    },
    {
        "Pos": "33",
        "X": X1,
        "Y": Y2,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "34",
        "X": X2,
        "Y": Y2,
        "Text": "¿Quién es más probable?"
    },
    {
        "Pos": "35",
        "X": X3,
        "Y": Y2,
        "Text": "Beben los nombres que empiecen por vocal"
    },
    {
        "Pos": "36",
        "X": X4,
        "Y": Y2,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "37",
        "X": X5,
        "Y": Y2,
        "Text": "Bibuja algo, el que lo adivine reparte X3"
    },
    {
        "Pos": "38",
        "X": X6,
        "Y": Y2,
        "Text": "Bebe quien se haya masturbado hoy"
    },
    {
        "Pos": "39",
        "X": X7,
        "Y": Y2,
        "Text": "Beben los que no lleven gafas"
    },
    {
        "Pos": "40",
        "X": X8,
        "Y": Y2,
        "Text": "Levántate y baila, el último bebe X5"
    },
    {
        "Pos": "41",
        "X": X9,
        "Y": Y2,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "42",
        "X": X9,
        "Y": Y3,
        "Text": "Posada, te invitan a beber 2 y no te puedes negar"
    },
    {
        "Pos": "43",
        "X": X9,
        "Y": Y4,
        "Text": "Beben los que hayan cagado hoy"
    },
    {
        "Pos": "44",
        "X": X9,
        "Y": Y5,
        "Text": "Te llaman, coge el teléfono"
    },
    {
        "Pos": "45",
        "X": X9,
        "Y": Y6,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "46",
        "X": X9,
        "Y": Y7,
        "Text": "Beben todos menos tú"
    },
    {
        "Pos": "47",
        "X": X9,
        "Y": Y8,
        "Text": "Yo siempre (Yo nunca al revés)"
    },
    {
        "Pos": "48",
        "X": X8,
        "Y": Y8,
        "Text": "Beben los gafotas"
    },
    {
        "Pos": "49",
        "X": X7,
        "Y": Y8,
        "Text": "Tararea una canción, quien la adivine reparte X4"
    },
    {
        "Pos": "50",
        "X": X6,
        "Y": Y8,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "51",
        "X": X5,
        "Y": Y8,
        "Text": "Bebe la persona delante tuyo"
    },
    {
        "Pos": "52",
        "X": X4,
        "Y": Y8,
        "Text": "Cárcel, bebes X3 para poder escapar"
    },
    {
        "Pos": "53",
        "X": X3,
        "Y": Y8,
        "Text": "De dado a dado, y el cubata me lo he acabado"
    },
    {
        "Pos": "54",
        "X": X2,
        "Y": Y8,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "55",
        "X": X2,
        "Y": Y7,
        "Text": "Beben los nombres que empiezan por consonante"
    },
    {
        "Pos": "56",
        "X": X2,
        "Y": Y6,
        "Text": "Beben los del barça"
    },
    {
        "Pos": "57",
        "X": X2,
        "Y": Y5,
        "Text": "Beben los del Madrid"
    },
    {
        "Pos": "58",
        "X": X2,
        "Y": Y4,
        "Text": "Te toca el chupito mortal"
    },
    {
        "Pos": "59",
        "X": X2,
        "Y": Y3,
        "Text": "De oca a oca, y tiro porque me toca"
    },
    {
        "Pos": "60",
        "X": X3,
        "Y": Y3,
        "Text": "Pozo, bebes 1 para salir"
    },
    {
        "Pos": "61",
        "X": X4,
        "Y": Y3,
        "Text": "Moneda"
    },
    {
        "Pos": "62",
        "X": X5,
        "Y": Y3,
        "Text": "Chupito random"
    },
    {
        "Pos": "63",
        "X": XFINAL,
        "Y": YFINAL,
        "Text": "Felicidades, has sobrevivido a este absurdo juego"
    }
]

export default obj;