import React from 'react'

const Home = () => (
    <section className="home">
        <header className="row">
            <div className="col-12">
                <h1>Hot and Popular</h1>
            </div>
        </header>
        <div className="row movie-list-wrapper">
            {movieList.map((movie, i) => {
                return (
                    <article className="col-md-3 my-4 movie-item" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${movie.poster_path})`}}>
                        <div className="overlay">
                            <header className="w-100">
                                <h1>{movie.title}</h1>
                            </header>
                            <p>{movie.overview}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    </section>
)

export default Home

const movieList = [
    {
      "vote_count": 1323,
      "id": 337167,
      "video": false,
      "vote_average": 6.1,
      "title": "Fifty Shades Freed",
      "popularity": 550.259609,
      "poster_path": "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
      "original_language": "en",
      "original_title": "Fifty Shades Freed",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
      "adult": false,
      "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
      "release_date": "2018-02-07"
    },
    {
      "vote_count": 6883,
      "id": 269149,
      "video": false,
      "vote_average": 7.7,
      "title": "Zootopia",
      "popularity": 331.997061,
      "poster_path": "/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
      "original_language": "en",
      "original_title": "Zootopia",
      "genre_ids": [
        16,
        12,
        10751,
        35
      ],
      "backdrop_path": "/mhdeE1yShHTaDbJVdWyTlzFvNkr.jpg",
      "adult": false,
      "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
      "release_date": "2016-02-11"
    },
    {
      "vote_count": 3807,
      "id": 354912,
      "video": false,
      "vote_average": 7.8,
      "title": "Coco",
      "popularity": 239.701617,
      "poster_path": "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
      "original_language": "en",
      "original_title": "Coco",
      "genre_ids": [
        12,
        35,
        10751,
        16
      ],
      "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
      "adult": false,
      "overview": "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      "release_date": "2017-10-27"
    },
    {
      "vote_count": 4037,
      "id": 284054,
      "video": false,
      "vote_average": 7.3,
      "title": "Black Panther",
      "popularity": 187.65808,
      "poster_path": "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      "original_language": "en",
      "original_title": "Black Panther",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "backdrop_path": "/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
      "adult": false,
      "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
      "release_date": "2018-02-13"
    },
    {
      "vote_count": 1084,
      "id": 333339,
      "video": false,
      "vote_average": 8,
      "title": "Ready Player One",
      "popularity": 177.999682,
      "poster_path": "/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
      "original_language": "en",
      "original_title": "Ready Player One",
      "genre_ids": [
        12,
        878,
        28
      ],
      "backdrop_path": "/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg",
      "adult": false,
      "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
      "release_date": "2018-03-28"
    },
    {
      "vote_count": 4893,
      "id": 181808,
      "video": false,
      "vote_average": 7.1,
      "title": "Star Wars: The Last Jedi",
      "popularity": 166.296758,
      "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      "original_language": "en",
      "original_title": "Star Wars: The Last Jedi",
      "genre_ids": [
        14,
        12,
        878
      ],
      "backdrop_path": "/oVdLj5JVqNWGY0LEhBfHUuMrvWJ.jpg",
      "adult": false,
      "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      "release_date": "2017-12-13"
    },
    {
      "vote_count": 932,
      "id": 338970,
      "video": false,
      "vote_average": 6.1,
      "title": "Tomb Raider",
      "popularity": 131.03126,
      "poster_path": "/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
      "original_language": "en",
      "original_title": "Tomb Raider",
      "genre_ids": [
        28,
        12,
        14
      ],
      "backdrop_path": "/yVlaVnGRwJMxB3txxwA24XurSNp.jpg",
      "adult": false,
      "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      "release_date": "2018-03-08"
    },
    {
      "vote_count": 316,
      "id": 447332,
      "video": false,
      "vote_average": 7.4,
      "title": "A Quiet Place",
      "popularity": 126.976483,
      "poster_path": "/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
      "original_language": "en",
      "original_title": "A Quiet Place",
      "genre_ids": [
        18,
        27,
        53,
        878
      ],
      "backdrop_path": "/roYyPiQDQKmIKUEhO912693tSja.jpg",
      "adult": false,
      "overview": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
      "release_date": "2018-04-05"
    },
    {
      "vote_count": 790,
      "id": 353616,
      "video": false,
      "vote_average": 6.4,
      "title": "Pitch Perfect 3",
      "popularity": 121.194721,
      "poster_path": "/fchHLsLjFvzAFSQykiMwdF1051.jpg",
      "original_language": "en",
      "original_title": "Pitch Perfect 3",
      "genre_ids": [
        35,
        10402
      ],
      "backdrop_path": "/f5a9YRvJ7uSM0JAtEI59sqKRnVg.jpg",
      "adult": false,
      "overview": "After the highs of winning the world championships, the Bellas find themselves split apart and discovering there aren't job prospects for making music with your mouth. But when they get the chance to reunite for an overseas USO tour, this group of awesome nerds will come together to make some music, and some questionable decisions, one last time.",
      "release_date": "2017-12-21"
    },
    {
      "vote_count": 5417,
      "id": 284053,
      "video": false,
      "vote_average": 7.4,
      "title": "Thor: Ragnarok",
      "popularity": 120.007773,
      "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      "original_language": "en",
      "original_title": "Thor: Ragnarok",
      "genre_ids": [
        28,
        12,
        14
      ],
      "backdrop_path": "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
      "adult": false,
      "overview": "Thor is being imprisoned by Asgard's old enemy Surtur. Surtur wishes for the destruction of Asgard and the deaths of its people. An unsuspecting relative comes to Asgard claiming to be the rightful owner of the throne and reaks havik. With all these unsuspecting truns of events Thor is then captured by a dashing warrior,  sent in to a death match. With all of these events the least of Thors problems are'nt sloved when Loki raises a battle between tow brothers. Put aside their differences Thor ,Loki ,Warrior and a few other unsuspecting arrivals puts the powerful Hela in check and takes back Asgard and the throne.",
      "release_date": "2017-10-25"
    },
    {
      "vote_count": 4060,
      "id": 141052,
      "video": false,
      "vote_average": 6.4,
      "title": "Justice League",
      "popularity": 112.632519,
      "poster_path": "/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
      "original_language": "en",
      "original_title": "Justice League",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "backdrop_path": "/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg",
      "adult": false,
      "overview": "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
      "release_date": "2017-11-15"
    },
    {
      "vote_count": 7896,
      "id": 321612,
      "video": false,
      "vote_average": 6.8,
      "title": "Beauty and the Beast",
      "popularity": 107.756175,
      "poster_path": "/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
      "original_language": "en",
      "original_title": "Beauty and the Beast",
      "genre_ids": [
        10751,
        14,
        10749
      ],
      "backdrop_path": "/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
      "adult": false,
      "overview": "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
      "release_date": "2017-03-16"
    },
    {
      "vote_count": 7494,
      "id": 198663,
      "video": false,
      "vote_average": 7,
      "title": "The Maze Runner",
      "popularity": 106.888583,
      "poster_path": "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg",
      "original_language": "en",
      "original_title": "The Maze Runner",
      "genre_ids": [
        28,
        9648,
        878,
        53
      ],
      "backdrop_path": "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
      "adult": false,
      "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape.",
      "release_date": "2014-09-10"
    },
    {
      "vote_count": 3355,
      "id": 399055,
      "video": false,
      "vote_average": 7.3,
      "title": "The Shape of Water",
      "popularity": 104.961098,
      "poster_path": "/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
      "original_language": "en",
      "original_title": "The Shape of Water",
      "genre_ids": [
        18,
        14,
        10749
      ],
      "backdrop_path": "/rgyhSn3mINvkuy9iswZK0VLqQO3.jpg",
      "adult": false,
      "overview": "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
      "release_date": "2017-12-01"
    },
    {
      "vote_count": 12491,
      "id": 118340,
      "video": false,
      "vote_average": 7.9,
      "title": "Guardians of the Galaxy",
      "popularity": 99.39147,
      "poster_path": "/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
      "original_language": "en",
      "original_title": "Guardians of the Galaxy",
      "genre_ids": [
        28,
        878,
        12
      ],
      "backdrop_path": "/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
      "adult": false,
      "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
      "release_date": "2014-07-30"
    },
    {
      "vote_count": 7207,
      "id": 245891,
      "video": false,
      "vote_average": 7,
      "title": "John Wick",
      "popularity": 94.16236,
      "poster_path": "/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
      "original_language": "en",
      "original_title": "John Wick",
      "genre_ids": [
        28,
        53
      ],
      "backdrop_path": "/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
      "adult": false,
      "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
      "release_date": "2014-10-22"
    },
    {
      "vote_count": 389,
      "id": 268896,
      "video": false,
      "vote_average": 6,
      "title": "Pacific Rim: Uprising",
      "popularity": 93.227551,
      "poster_path": "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
      "original_language": "en",
      "original_title": "Pacific Rim: Uprising",
      "genre_ids": [
        28,
        14,
        878,
        12
      ],
      "backdrop_path": "/mo5EJsExrQCroqPDwUwp6jeq0xS.jpg",
      "adult": false,
      "overview": "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
      "release_date": "2018-03-21"
    },
    {
      "vote_count": 1107,
      "id": 446354,
      "video": false,
      "vote_average": 7,
      "title": "The Post",
      "popularity": 91.3991,
      "poster_path": "/h4XG3g6uMMPIBPjAoQhC2QIMdkl.jpg",
      "original_language": "en",
      "original_title": "The Post",
      "genre_ids": [
        18,
        36
      ],
      "backdrop_path": "/8sb4aBST28vN3rBz704XJczS0Ld.jpg",
      "adult": false,
      "overview": "A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.",
      "release_date": "2017-12-22"
    },
    {
      "vote_count": 784,
      "id": 399035,
      "video": false,
      "vote_average": 5.8,
      "title": "The Commuter",
      "popularity": 91.011512,
      "poster_path": "/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
      "original_language": "en",
      "original_title": "The Commuter",
      "genre_ids": [
        28,
        80,
        18
      ],
      "backdrop_path": "/clmYuR1t4TtKcakIOvYIPrjyxDc.jpg",
      "adult": false,
      "overview": "A businessman on his daily commute home gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.",
      "release_date": "2018-01-11"
    },
    {
      "vote_count": 14205,
      "id": 24428,
      "video": false,
      "vote_average": 7.5,
      "title": "The Avengers",
      "popularity": 87.425408,
      "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
      "original_language": "en",
      "original_title": "The Avengers",
      "genre_ids": [
        878,
        28,
        12
      ],
      "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
      "adult": false,
      "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
      "release_date": "2012-04-25"
    }
  ]