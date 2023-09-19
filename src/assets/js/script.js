const positions = document.querySelectorAll(".pos");
const player = document.querySelector(".player");
const playerX = [];
const playerO = [];
let cont = 0;

let winPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

positions.forEach(currentItem => {
    currentItem.addEventListener("click", playAction);
});

function playAction(e) {
    if (e.currentTarget.getAttribute("data-disabled")) {
        return;
    }
    cont += 1;
    console.log(cont);
    let currentItem = e.currentTarget;
    let currentPlayer = player.textContent;
    let positionChoose = currentItem.getAttribute("pos");

    currentItem.innerHTML = `${currentPlayer}`;
    if (currentPlayer === "X") {
        player.textContent = "O";
        playerX.push(positionChoose);
        if (checkForWin(playerX)) {
            alert(`O jogador ${currentPlayer} venceu o jogo`);
            location.reload()
        }
    }
    if (currentPlayer === "O") {
        player.textContent = "X";
        playerO.push(positionChoose);
        if (checkForWin(playerO)) {
            alert(`O jogador ${currentPlayer} venceu o jogo`);
            location.reload()
        }
    }
    if (cont === 9) {
        alert(`O jogo terminou empatado !!!`);
        location.reload()
    }
    e.currentTarget.setAttribute("data-disabled", "true");

}

function checkForWin(playerArray) {
    let hasWon = false;

    winPositions.forEach(function (winPosition) {
        if (winPosition.every(function (position) {
            return playerArray.includes(position.toString());
        })) {
            hasWon = true;
        }
    });

    return hasWon;
}

console.log("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam consequatur deleniti atque tempora dicta a eaque eos. Autem, quaerat molestias aliquid tempora eum reprehenderit sunt harum quod nihil dicta accusamus quasi unde id quidem velit. Ratione non blanditiis eius! Ratione, suscipit illo. Dignissimos deserunt animi possimus voluptatem ullam quam aut pariatur aliquam! Quis corrupti officia sed tempore voluptatem deserunt quam reprehenderit dignissimos est consectetur! Qui reprehenderit necessitatibus officiis recusandae delectus vel in at provident ea, cumque asperiores cum sunt explicabo quod iste ducimus magni earum debitis maiores omnis, porro quibusdam harum! Voluptates ratione modi quos culpa totam. Quidem delectus architecto doloremque rerum magni et. Neque reprehenderit, expedita provident mollitia in, id, culpa recusandae quos officiis velit soluta optio fugit similique! In nam molestiae tempore cum maxime animi dolorum aliquid recusandae repellendus quo necessitatibus, sint harum ducimus nobis ad! Ad sit modi cumque quisquam, quam veniam cum, officiis aperiam porro, deleniti dicta repellendus corporis quos iste repudiandae exercitationem placeat? Accusamus, eum. Omnis accusantium laboriosam molestias provident. Laborum et repellendus modi assumenda quia? Excepturi consectetur et blanditiis, quam veniam dolor modi asperiores animi, sunt voluptatibus eius laboriosam nesciunt hic voluptates amet? Dicta, animi sequi voluptas corrupti, maiores, assumenda voluptatibus repellat est reiciendis architecto delectus? Nemo distinctio harum debitis optio corrupti, nulla tempora. Optio eos non aperiam omnis? Nisi incidunt suscipit dolorum porro? Magnam voluptate, eum eius laboriosam ratione voluptatem sapiente numquam deleniti, earum animi reprehenderit veniam maxime fugiat in, iste voluptatum ut dolore! Illo expedita dolor sunt iusto officia sequi commodi adipisci illum ab unde ipsam rerum amet, voluptatibus quasi enim necessitatibus ullam nesciunt tempore deserunt. Placeat nobis aliquid nostrum incidunt similique dolores saepe blanditiis ex voluptates doloribus. Nesciunt amet aspernatur, nulla quaerat, neque explicabo aliquam inventore nobis molestiae eius quod repellat itaque numquam exercitationem iure iusto provident enim magni atque porro suscipit minus. Eaque voluptas unde ex nulla quisquam, expedita distinctio voluptatum dolore porro, eum repudiandae illum dolorem fugit. Mollitia obcaecati recusandae optio maiores quo quisquam maxime iusto id atque officiis repellendus magni, quaerat vitae tempora praesentium ab. Enim incidunt, ipsum dolore maxime reprehenderit praesentium nulla ducimus voluptatem eligendi ipsa illo voluptatum repellat delectus ad perspiciatis voluptas error consectetur eos nam magnam tenetur alias expedita! Corporis dolor mollitia eos sed dignissimos, sapiente, quaerat pariatur totam eligendi quod iusto? Eaque dolorum ipsam accusamus autem corrupti modi minus aut exercitationem temporibus eius beatae iste, molestiae, quod ut laboriosam provident repellendus quibusdam, fugiat labore? Itaque nobis earum culpa pariatur harum consectetur totam molestiae tempora delectus impedit, rerum quaerat, ex maiores mollitia inventore? Eveniet, modi. Enim labore officiis architecto similique magni accusamus saepe voluptate vel in ipsum illo sint assumenda, repellendus, delectus temporibus! Reprehenderit commodi consequatur, magnam molestias dolorem assumenda ut nisi praesentium quidem dolor aut sint ipsam repellat officia. Alias debitis facere animi recusandae nemo magni consequatur possimus quae. Ipsum obcaecati neque ea repellendus nemo repudiandae porro. Dignissimos quibusdam fuga hic vero ullam consequuntur aspernatur magnam soluta, quaerat tenetur laborum maiores nihil voluptates, in, possimus voluptate quisquam eum deserunt ipsum dolores beatae at? Tenetur, et sunt. Eligendi veritatis sunt quisquam ipsum nesciunt ea maxime. Possimus, voluptatibus iusto, nemo culpa ut aut et neque repellat, ipsa nulla deserunt illo? Accusamus eligendi incidunt ut voluptatibus! Vitae alias quia error doloribus maiores quasi consequatur sunt dignissimos! Excepturi quos impedit reiciendis explicabo cum distinctio debitis iusto sunt doloribus dignissimos animi cupiditate rem sit, delectus ab quo fugit maiores repellendus ut labore! Incidunt eos similique quo tempore ullam commodi et mollitia quas sit quidem, repellat blanditiis architecto velit assumenda minus facere impedit iure odio nam, nulla nesciunt accusamus omnis quod dolorum. Necessitatibus quibusdam ipsa dolore quisquam eveniet suscipit minus expedita, labore aut omnis nisi autem minima doloremque quidem facere vitae numquam, quas ab beatae iusto non? Dignissimos eum ut perferendis dolores distinctio nemo ipsum facilis, dolorem iste excepturi inventore fugiat consectetur quo ea facere? Quaerat odit fugit esse ducimus voluptate cupiditate cum accusantium ea. Adipisci, voluptatem nulla? Debitis ducimus totam, illum, sed id labore optio repudiandae beatae incidunt ea nulla vero impedit dolorem vel maxime repellat natus explicabo atque. Iste eius cum in, culpa voluptatibus nemo id eaque commodi consectetur repellat saepe neque tempore error placeat aspernatur, voluptates corrupti soluta? Quae totam, tempora, debitis omnis dolor porro, illum vero expedita non hic ratione facilis quis earum ab animi rem accusamus velit ea dicta praesentium quo natus suscipit iusto! Sequi vero obcaecati ipsam! Quibusdam similique voluptatum id perspiciatis officia. Et, quae! Officiis iste sequi ea accusantium dolore earum minus eaque dignissimos qui omnis facilis voluptatum magnam voluptas, delectus odit laudantium perspiciatis sint reprehenderit nobis. Quidem inventore quasi quaerat natus suscipit quibusdam expedita, sit blanditiis recusandae consequuntur voluptatibus placeat sapiente doloremque beatae nisi nesciunt quae ab soluta, quo est in dolorum hic voluptas ut. Eaque, ducimus? Qui aut eos ipsam laudantium esse ut, dignissimos, perferendis inventore animi quod consequuntur asperiores? Ratione, adipisci! Magnam eaque quo consequuntur. Deserunt quia ipsam blanditiis distinctio atque sit quibusdam id quaerat nesciunt aliquid, sequi, excepturi magni aut? Omnis, sunt. Nam nobis necessitatibus, quis voluptatibus iusto esse quo, fuga sapiente quae modi unde iure itaque fugit harum, nihil explicabo rerum consequatur labore odio fugiat ratione assumenda voluptates repellat dolorum. Obcaecati itaque hic deserunt vitae accusamus? Necessitatibus similique fugit architecto, odio minus aut nobis aliquam, tempora, minima voluptas maxime magnam. Deserunt totam similique molestias alias minus iure, assumenda ut quam dolores voluptatem obcaecati, magnam ratione delectus omnis. Minima distinctio pariatur iusto obcaecati cumque voluptates id. Sit voluptatibus laboriosam nemo repellendus explicabo, nobis, deserunt perspiciatis alias odit repellat dolore aperiam ea quae sequi. Nulla quod explicabo dolorem cumque dolores consequuntur. Quaerat velit harum modi cum quibusdam alias pariatur, laudantium quae voluptate reiciendis doloremque, asperiores aperiam iusto impedit tempore vitae blanditiis obcaecati adipisci perferendis sequi cumque unde repellat! Saepe cum mollitia error autem, dolores sint omnis veniam obcaecati accusamus at maiores repellat cumque atque reprehenderit tempora porro quae vitae et? Laboriosam, repellat vel id, tempore inventore quam rerum amet alias soluta aut illum non est, fugit cupiditate fugiat? Dolores quia laudantium quasi praesentium sit quas minima tempore? Magni, nostrum fugiat.");