const reviews = [

    {
        name: "Teszt Elek",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolores obcaecati officia, fuga fugiat quasi, aperiam libero eum eligendi eveniet unde! Consectetur mollitia assumenda tempore quo rem minus voluptates possimus magnam doloribus perspiciatis, dolorem totam consequatur rerum nostrum accusantium hic. At praesentium itaque velit similique totam soluta! Recusandae labore suscipit dolores porro nesciunt? Alias magnam aut animi, cumque laboriosam deleniti nulla culpa blanditiis officia facilis, enim quae cupiditate odio atque facere! Nemo vitae aspernatur magnam. Repudiandae quo labore aliquid sint."
    },

    {
        name: "Török Bálintné",
        job: "HTML programozó!!! XD",
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolores obcaecati officia, fuga fugiat quasi, aperiam libero eum eligendi eveniet unde! Consectetur mollitia assumenda tempore quo rem minus voluptates possimus magnam doloribus perspiciatis, dolorem totam consequatur rerum nostrum accusantium hic. At praesentium itaque velit similique totam soluta! Recusandae labore suscipit dolores porro nesciunt? Alias magnam aut animi, cumque laboriosam deleniti nulla culpa blanditiis officia facilis, enim quae cupiditate odio atque facere! Nemo vitae aspernatur magnam. Repudiandae quo labore aliquid sint."
    },

    {
        name: "Szent Emily",
        job: "Manuális tesztelő",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, dolores obcaecati officia, fuga fugiat quasi, aperiam libero eum eligendi eveniet unde! Consectetur mollitia assumenda tempore quo rem minus voluptates possimus magnam doloribus perspiciatis, dolorem totam consequatur rerum nostrum accusantium hic. At praesentium itaque velit similique totam soluta! Recusandae labore suscipit dolores porro nesciunt? Alias magnam aut animi, cumque laboriosam deleniti nulla culpa blanditiis officia facilis, enim quae cupiditate odio atque facere! Nemo vitae aspernatur magnam. Repudiandae quo labore aliquid sint."
    }

];

//Eltárolom változókba azokat az elemeket amiket használni akarok.
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Kiinduló pont felvétele -> ez fogja jelölni, hogy a tömbön belűl melyik elem legyen a kezdőérték! Kit lássunk előként!

let current = 0;

//Kiinduló elem (emberke) betöltése
window.addEventListener("load", () => {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
})

//írunk egy függvényt amivel kitudjuk választani a következő emberünket és a hozzá köthető adatokat (kép, név, állás, vélemény)
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}

//Gombnyomásra ugorjunk a következő emberkére
nextBtn.addEventListener("click", () => {

    //A kiinduló értéket növelük 1-el -> lépünk egyet előre az objektumok között
    current++;

    if(current > reviews.lenght - 1){

        current = 0;
    }

    showPerson(current);
})

//gombnyomásra ugorjunk vissza az előző emberkére
prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){

        current = reviews.lenght - 1;
    }

    showPerson(current);
})