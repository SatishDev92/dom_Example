let arr = [
    {
        dp: "https://i.pinimg.com/originals/a3/a3/48/a3a34808624024e99a26684b2f15b8a2.png",
        story: "https://pm1.narvii.com/5948/906bdce16392d5078b0e32c2b0d202ab39ea2fd1_hq.jpg"
    },
    {
        dp: "https://th.bing.com/th/id/R.1d17d34f65ac0ae8fc7a560b4d49dead?rik=PqkSdrj8FuXHRg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ap1PJwUnO4c%2fUIY7XeiqChI%2fAAAAAAAAL50%2fP1ra4qgwB0g%2fs1600%2fPokemon%2bWallpapers%2b5.jpg&ehk=fWQ3Nfjdjs1tBZsxoJYQ50TH7V6P25YxFvbuuceCbXg%3d&risl=&pid=ImgRaw&r=0",
        story: "https://images.nintendolife.com/6fd18282af5a0/pokemon.large.jpg"
    },
    {
        dp: "https://th.bing.com/th/id/OIP.lppNCJq33zLSQF7XtwdpSAHaJ0?w=186&h=246&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        story: "https://th.bing.com/th/id/OIP.yukQOp6I_TD55GL94gWQLAHaJQ?rs=1&pid=ImgDetMain"
    },
    {
        dp: "https://th.bing.com/th/id/OIP.BNpnqOKhojUX_Tv05OalFgHaLH?w=1600&h=2400&rs=1&pid=ImgDetMain",
        story: "https://cdn.filtergrade.com/wp-content/uploads/2016/05/03031735/740full-amanda-seyfried.jpg"
    },
    {
        dp: "https://c.wallhere.com/photos/de/77/women_model_portrait_looking_at_viewer_brunette_women_indoors_depth_of_field_Andrey_Firsov-1462415.jpg!d",
        story: "https://th.bing.com/th/id/OIP.PsY-d92RHTRxab7lYPAe3AHaLL?rs=1&pid=ImgDetMain"
    },
];

let clutter = "";
arr.forEach((elem, idx) => {
    clutter += ` <div class="story" id="${idx}">
                    <img src="${elem.dp}" alt="">
                </div>`;
});

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        let index = event.target.parentElement.id;
        let imgUrl = arr[index].story;
        document.querySelector("#fullscreen").style.display = "block";
        document.querySelector("#fullscreen").style.backgroundImage = `url(${imgUrl})`;
    }
    setTimeout(() => {
        document.querySelector("#fullscreen").style.display = "none";
    }, 5000);
});
