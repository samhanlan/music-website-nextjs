const portfolioItems = [
    {
        id: "CPTTWBD",
        artist: "Calum Pratt",
        title: "This Time Will Be Different",
    },
    {
        id: "SHSR",
        artist: "Sam Hanlan",
        title: "Sharp Relief",
    },
    {
        id: "CAL",
        artist: "Children & Lions",
    },
    {
        id: "OT",
        artist: "Ornament Tournaments",
        title: "Tacheles",
    },
    {
        id: "3PS",
        artist: "Three Pairs of Shoes",
    },
    {
        id: "CPA",
        artist: "Calum Pratt",
        title: "Adrift"
    },
    {
        id: "BS",
        artist: "Bella Spinks",
        title: "Personal Demons"
    },
    {
        id: "GF",
        artist: "Gregk Foley",
        title: "Grit & Gold"
    },
    {
        id: "DL",
        artist: "Danielle Lewis",
        title: "Paper Hearts"
    },
    {
        id: "CPE",
        artist: "Calum Pratt",
        title: "Essential Nature"
    },
    {
        id: "FAS",
        artist: "Freedom. & Such",
        title: "Windbreaker"
    },
]

export default function AudioEngineer() {
    return <div className="grid-container">
        <header className="logo-wrap">
            <a className="logo" href="#page-home"></a>
        </header>
        <nav>
            <a href="#page-latest">LATEST</a>
            <a href="#page-credits">CREDITS</a>
            <a href="#page-about">ABOUT</a>
            <a href="#page-contact">CONTACT</a>
        </nav>
        <aside id="sidebar">
            <section id="sidebar-background" />
            <section id="portfolio-list">
                {portfolioItems.map(({ id, artist, title }) => {
                    return <div id={`portfolio-item-${id}`} className="portfolio-item" key={id}>
                        <span className="portfolio-title">{artist} - {title ?? <em>eponymous</em>}</span>
                        <span className={`portfolio-artwork artwork-${id}`} />
                    </div>
                })}
            </section>
        </aside>
        <main id="content-display" />
        <footer>
            <a href="/" className="return-home-btn">
                <svg className="home-btn-clip-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 400" >
                    <title>Navigate home button</title>
                    <path d="m3.407845,2.2908l573.535629,-0.214851l0,302.619751l-399.566733,0.47657l0,91.50078l-168.850664,-122.477611l164.664284,-113.899403l0,46.703525l226.994846,0l0,-103.891506l-395.380353,-0.47657l-1.397009,-100.340686z" />
                </svg>
            </a>
            <small>&copy; Sam Hanlan <span id="copyright-year">{(new Date()).getFullYear()}</span></small>
        </footer>
    </div>
}

function Home() {
    return <>
        <section className="home-default-content">
            <h1>RECORDING ENGINEER</h1>
            <h2>PRODUCER</h2>
            <h3>FILM COMPOSER</h3>
            <h4>musician</h4>
        </section>
    </>
}

const About = () => {
    return <>
        <article>
            <h1>BACKGROUND</h1>
            <h2>EDUCATION</h2>
            <p>
                Academy of Contemporary Music
                <b>Music Production Course</b> accreditation
            </p>
            <p>University of South Wales <b>Music Technology BSc </b>1st Class</p>
            <p>University of West London <b>Pro Tools 110</b> accreditation</p>
            <p>Rockfield Studios <b>Recording Masterclass</b></p>
            <p>Berlin <b>AKG Scholarship of Sound</b></p>
        </article>

        <article>
            <h1>WHAT I DO</h1>
            <h2>ENGINEER</h2>
            <p>
                As a sound engineer, I know that this aspect of music production is
                the most objective, but it's application is always marred by opinion.
                My education has reinforced what I know about the physical processes
                of recording, and - like any vocation - experience in session work has
                taught me what it means to use those skills in the constraints of
                time, equipment, space and, often, personality.
            </p>
        </article>

        <article>
            <h2>PRODUCER</h2>
            <p>
                As a producer, I'm invested in the refinement and translation of ideas
                by any and all means available. As I'm writing this, this morning I
                was listening to Tinariwen - a Northern Mali soul rock band - and now
                I'm beaming in some 1996 Outkast - ATLiens; I'm charged up by new
                music, and genre is no longer the deal-breaker it was when I was
                17.<br />This eclecticism has given me a confidence across the
                production of many genres, allowing me to make the class of record
                that the artist had in mind.
            </p>
            <p>All's fair in love and record production.</p>
        </article>

        <article>
            <h2>COMPOSER</h2>
            <p>
                My love for electronic music early in my discovery of music and taste
                left me with a knowledge gained by attempting recreation of what I was
                hearing on Kid A, Drukqs and Body Riddle [...]
            </p>
            <p>
                I've always applied a little or a lot of what I know in electronic
                music production into whatever project is at hand, but primarily, my
                workability with synthesisers, MIDI trickery and sound design comes
                directly from that place.
            </p>
            <p>
                My alias 'Freedom. &amp; Such' has been the run-off of this process of
                discovery, which you can see
                <a href="http://freedomandsuch.com">HERE</a>
            </p>
        </article>

        <article>
            <h2>MUSICIAN</h2>
            <p>
                Needs must in the studio, so I'm grateful for learning the piano when
                I was younger, picking up the guitar as I went full teenager. I've
                always found the solid ground of musical knowledge has been the broad
                shoulders on which I've stacked my knowledge of recording and
                production.
            </p>
            <p>
                I've helped compose and performed on many of the records I've
                produced. Like any collaboration, the producer/engineer needs to be
                speaking the same language as the artist, even if that means learning
                a few extra phrases here and there.
            </p>
        </article>
    </>
}

const Latest = () => {
    return <>
        <article>
            <h1>BEN CHERRY<span> for FUJIFILM</span></h1>
            <h2>FILM SCORE</h2>
            <p>
                Following Ben around the Peak District in the early morning hours,
                <a href="http://www.glovesandglass.com" target="_blank">Ismar</a>
                filmed the adventure and I scored the short that he created.
            </p>
            <p>See and hear it here:</p>
            <iframe
                width="100%"
                height="380"
                src="http://www.youtube.com/embed/dWy3yKr-Wbs"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </article>

        <article>
            <h1>CURZON CINEMAS</h1>
            <h2>FILM SCORE</h2>
            <p>
                Commission piece for promotional short for independent cinema
                franchise Curzon - music composed with a clean crisp aesthetic to
                reflect the brand's growing, successfully simple approach to the
                modern cinema experience.
            </p>
            <p>
                Thanks to
                <a target="_blank" href="http://www.glovesandglass.com">Ismar</a> for
                getting me involved - the man who also directed, shot and edited the
                piece.
            </p>
        </article>

        <article>
            <h1>FREEDOM. &amp; SUCH<span> on BBC</span></h1>
            <h2>PRODUCTION</h2>
            <p>
                Radio debut for my alias Freedom. and Such - electronic music project
                - on BBC Introducing. Thanks Melita Dennett for putting me on.
            </p>
            <p>Hear it here:</p>
            <a target="_blank" href="http://www.bbc.co.uk/programmes/p02gh0x2">
                <img src="http://ichef.bbci.co.uk/images/ic/544x306/p011jcxs.jpg" />
            </a>
        </article>

        <article>
            <h1>BELLA SPINKS<span> in SESSION</span></h1>
            <h2>LOCATION RECORDING</h2>
            <p>
                Packed up my mobile rig for the trip down to the Brighton and the
                Unitarian Church for this session with Bella, working with a small
                crew to track 3 pieces.
            </p>
            <p>
                The session was haunted by a ceaseless rattling from deep inside the
                old grand piano in the hall, which nearly sonically ground things to a
                halt... A team dig revealed a tiny shard of wood lodged beneath a
                string - it's now a permanent fixture of the studio as some voodoo
                blessing for future sessions.
            </p>
        </article>

        <article>
            <h1>AUDIO VISUAL POSTCARD<span> #1 - BERLIN</span></h1>
            <h2>A&#92;V PROJECT</h2>
            <p>
                Working with long-term collaborator
                <a href="http://www.glovesandglass.com" target="_blank">Ismar Badzic</a>,
                this concept work seeks to portray a city through it's sights and
                sounds. My role as location sound engineer and foley collector
                produced pieces based on the collected samples and our experience of
                the place, people and personality of the city.
            </p>
            <p>Our first episode features Berlin.</p>
            <p>
                Visit the project
                <a target="_blank" href="http://avpostcard.com">HERE</a>.
            </p>
            <p>Watch episode one, below:</p>
            <iframe
                width="100%"
                height="380"
                src="https://www.youtube.com/embed/-a2jyygql3Q?rel=0&amp;showinfo=0"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </article>

        <article>
            <h1>DEEPER THAN SNOW</h1>
            <h2>FILM SCORE</h2>
            <p>
                Fulfilling a life-long dream of being shown on the Extreme Channel,
                this is an incredible profile short film from the mighty
                <a href="http://www.glovesandglass.com" target="_blank">Ismar Badzic</a>
                and producer Nick Perri. Following the fallout of Jake Cornish and his
                near-fatal encounter with an avalanche in the Swiss mountains.
            </p>
            <p>
                Co-composing the score with Dominic Sewell, this was a really
                rewarding project, capped off with a public screening in the film's
                setting - Anzeres.
            </p>
            <p>
                Watch the film
                <a target="_blank" href="http://uk.extreme.com/snowboard/1024906/the-white-line-a-film-about-a-snowboarder">HERE</a>.
            </p>
            <p>
                Below is a webisode for the film, for which I created the music and
                sound design:
            </p>
            <iframe
                width="100%"
                height="380"
                src="http://www.youtube.com/embed/7f-yrY7Hry0?rel=0&amp;showinfo=0"
                frameBorder="0"
                allowFullScreen
            />
        </article>

        <article>
            <h1>NANOOK of the NORTH</h1>
            <h2>DRUMS + VOCALS</h2>
            <p>
                Suffering for our art in Cardiff, Nanook was borne of something raw
                and powerful. Originally the band's drummer, I assisted in the
                recording and production of the record, mixing it in my studio.
                They've since taken off into the heady realms of London, where they're
                playing shows and recording new material.
            </p>
            <p>
                Visit their site
                <a href="http://www.nanookofthenorth.co.uk" target="_blank">HERE</a>.
            </p>
            <p>
                Below is the video for Panda Eyes, a mix I didn't contribute to but
                you can hear me drumming and vocalising on the track:
            </p>
            <iframe
                width="100%"
                height="380"
                src="http://www.youtube.com/embed/rSvn_nFOTpE?rel=0&amp;showinfo=0"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </article>
    </>
}

const Credits = () => {
    return <>
        <h1>SHOWCASE</h1>
        <article>
            <h2>ENGINEER/PRODUCITON <span>SHOWCASE</span></h2>
            <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/103235934%3Fsecret_token%3Ds-d9fae&amp;color=6bc0c8&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
            ></iframe>
        </article>
        <article>
            <h2>COMPOSITION <span>SHOWCASE</span></h2>
            <iframe
                width="100%"
                height="166"
                src="http://www.youtube.com/embed/pHTslhAFQG0?rel=0&amp;showinfo=0"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </article>

        <h1>DISCOGRAPHY</h1>
        <article>
            <h2>
                CHILDREN &amp; LIONS <span><em> eponymous</em></span>
            </h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="http://childrenandlions.bandcamp.com"
                className="portfolio-artwork artwork-CAL"
            ></a>
            <h2>ORNAMENT TOURNAMENTS <span>TACHELES</span></h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="http://ornamenttournaments.bandcamp.com"
                className="portfolio-artwork artwork-OT"
            ></a>
            <h2>
                THREE PAIRS of SHOES <span><em>eponymous</em></span>
            </h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="http://threepairsofshoes.bandcamp.com"
                className="portfolio-artwork artwork-3PS"
            ></a>
            <h2>CALUM PRATT <span>ADRIFT</span></h2>
            <p>Engineer, Producer, Mixer</p>
            <a
                target="_blank"
                href="http://calumpratt.bandcamp.com"
                className="portfolio-artwork artwork-CPA"
            ></a>
            <h2>DANIELLE LEWIS <span>PAPER HEARTS</span></h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="http://youtu.be/OmzTva5aLJc"
                className="portfolio-artwork artwork-DL"
            ></a>
            <h2>GREGK FOLEY <span>GRIT &amp; GOLD</span></h2>
            <p>Engineer, Producer, Mixer</p>
            <a
                target="_blank"
                href="https://gritandgold.bandcamp.com/album/grit-gold-ep"
                className="portfolio-artwork artwork-GF"
            ></a>
            <h2>BELLA SPINKS <span>PERSONAL DEMONS</span></h2>
            <p>Engineer, Producer, Mixer</p>
            <a
                target="_blank"
                href="https://soundcloud.com/bellaspinks/personal-demons-1"
                className="portfolio-artwork artwork-BS"
            ></a>
            <h2>CALUM PRATT <span>ESSENTIAL NATURE</span></h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="http://calumpratt.bandcamp.com"
                className="portfolio-artwork artwork-CPE"
            ></a>
            <h2>
                NANOOK of the NORTH <span><em>eponymous</em></span>
            </h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="http://www.last.fm/music/Nanook+of+the+North/Nanook+of+the+North+%28EP%29"
                className="portfolio-artwork artwork-NAN"
            ></a>
            <h2>RECORD <span>THE ENVELOPE</span></h2>
            <p>Engineer, Producer, Mixer, Performer</p>
            <a
                target="_blank"
                href="https://soundcloud.com/recorduk"
                className="portfolio-artwork artwork-REC"
            ></a>
            <h2>OPTIMUS is PRIMED <span>MIRRORS</span></h2>
            <p>Engineer, Producer, Mixer</p>
            <a
                target="_blank"
                href="https://myspace.com/optimusisprimed/music/songs"
                className="portfolio-artwork artwork-OIP"
            ></a>
        </article>

        <h1>FILM SCORES</h1>
        <article>
            <h2>BEN CHERRY for FUJIFILM <span>Short Film</span></h2>
            <p>Composer, Mixer</p>
            <a
                target="_blank"
                href="http://youtu.be/dWy3yKr-Wbs"
                className="portfolio-artwork artwork-BC"
            ></a>
            <h2>DEEPER THAN SNOW <span>Feature Film</span></h2>
            <p>Composer, Mixer</p>
            <a
                target="_blank"
                href="http://www.thewhitelinecrew.com/"
                className="portfolio-artwork artwork-DTS1"
            ></a>
            <h2>DEEPER THAN SNOW <span>Webisode #2</span></h2>
            <p>Composer, Mixer</p>
            <a
                target="_blank"
                href="http://youtu.be/7f-yrY7Hry0"
                className="portfolio-artwork artwork-DTS2"
            ></a>
        </article>

        <h1>PROJECTS</h1>
        <article>
            <h2>AUDIO VISUAL POSTCARD</h2>
            <p>Composer, Producer, Mixer</p>
            <a
                target="_blank"
                href="http://avpostcard.com"
                className="portfolio-artwork artwork-AVP"
            ></a>
            <h2>BELLA SPINKS <span>in session</span></h2>
            <p>Engineer, Mixer</p>
            <a
                target="_blank"
                href="https://www.youtube.com/watch?v=w_1E2a5wd_g"
                className="portfolio-artwork artwork-BSS"
            ></a>
            <h2>SOFA SESSIONS <span>with Unzip Media</span></h2>
            <p>Engineer, Producer, Mixer</p>
            <a
                target="_blank"
                href="http://www.youtube.com/user/UnzipMedia"
                className="portfolio-artwork artwork-SS"
            ></a>
        </article>
    </>
}

const ContactPage = () => {
    return <>
        <h1>
            samhanlan<svg
                className="at-sign"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
            >
                <title>mail icon</title>
                <path
                    d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z"
                /></svg
            >gmail.com
        </h1>
        <a target="_blank" href="http://www.soundcloud.com/samhanlan"
        ><h3>soundcloud.com/samhanlan</h3></a
        ><br />
        <p>
            Get in touch if you have a recording project in mind - I'm entirely
            mobile, specialising in location recording with a fully mobile rig, as
            well as a fully-featured studio control room to return to and work the
            sounds into their final form.
        </p>
        <img src="assets/sam1.jpg" />
        <h6>Photos by Joe Mercer</h6>
    </>
}