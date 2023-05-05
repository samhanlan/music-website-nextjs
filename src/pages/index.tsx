import Head from 'next/head'
import Link from 'next/link'

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return <>
    <Head>
      <title>Sam Hanlan</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta name="description" content="Sam Hanlan - music producer | audio engineer | songwriter" />
      <link rel="shortcut icon" href="../assets/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <span id="logo" className={styles.logo} />
      <SingerSongwriter />
      <AudioEngineer orientation='landscape' />
      <AudioEngineer orientation='portrait' />
      <ElectronicMusician />
    </main>
  </>
}

const SingerSongwriter = () => {
  return <Link  href="/singer-songwriter">
    <svg
      id="singer-songwriter-link-ring"
      className={`${styles['link-ring-graphic']} ${styles['singer-songwriter-link-ring']}`}
      viewBox="12.5 12.5 175 175"
    >
      <defs>
        <path
          id="curve-ref-1"
          d="m 25,100 a 75,75 0 1 1 150,0 75,75 0 1 1 -150,0 m 75,0"
        ></path>
      </defs>
      <circle
        id="curve-1"
        fill="none"
        stroke="black"
        strokeWidth="2"
        cx="100"
        cy="100"
        r="65"
      ></circle>
      <text fill="black" letterSpacing="-0.5">
        <textPath
          xlinkHref="#curve-ref-1"
          href="#curve-ref-1"
          textAnchor="end"
          startOffset="0"
        >
          singer songwriter
          <animate
            values="0%; 47%"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0.9 0.95 1"
            fill="freeze"
            attributeName="startOffset"
            begin="0s"
            dur="1.2s"
            repeatCount="0"
          ></animate>
        </textPath>
      </text>
    </svg>
    <span id="singer-songwriter-collage" className={`${styles['collage-img']} ${styles['singer-songwriter-collage']}`} />
  </Link>
}

const ElectronicMusician = () => {
  return <a href="/freedom-and-such">
    <svg
      id="electronic-musician-link-ring"
      className={`${styles['electronic-musician-link-ring']} ${styles['link-ring-graphic']}`}
      viewBox="12.5 12.5 175 175"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <path
          id="curve-ref-3"
          d="m 25,100 a 75,75 0 1 1 150,0 75,75 0 1 1 -150,0 m 75,0"
        ></path>
      </defs>
      <circle
        id="curve-3"
        fill="none"
        stroke="black"
        strokeWidth="2"
        cx="100"
        cy="100"
        r="65"
      ></circle>
      <text fill="black" letterSpacing="-0.5">
        <textPath
          xlinkHref="#curve-ref-3"
          href="#curve-ref-3"
          textAnchor="start"
          startOffset="50%"
        >
          electronic musician
          <animate
            values="50%; 0%"
            keyTimes="0; 1"
            calcMode="spline"
            keySplines="0 0.87 0.95 1"
            fill="freeze"
            attributeName="startOffset"
            begin="1.8s"
            dur="1.2s"
            repeatCount="0"
          ></animate>
        </textPath>
      </text>
    </svg>
    <span id="electronic-music-collage" className={`${styles['collage-img']} ${styles['electronic-music-collage']}`} />
  </a>
}

const AudioEngineer = ({ orientation }: { orientation: "landscape" | "portrait" }) => {
  switch (orientation) {
    case "landscape": {
      return <Landscape />;
    }
    case "portrait": {
      return <Portrait />;
    }
    default: {
      throw new Error("Oi you didn't provide an orientation");
    }
  }

  function Landscape() {
    return <a href="/audio-engineer">
      <svg
        id="audio-eng-link-ring"
        className={`${styles['audio-eng-link-ring']} ${styles['link-ring-graphic']} ${styles.landscape}`}
        viewBox="12.5 12.5 175 175"
      >
        <defs>
          <path
            id="curve-ref-2b"
            d="m 25,100 a 75,75 0 1 1 150,0 75,75 0 1 1 -150,0 m 75,0"
          ></path>
        </defs>
        <circle
          id="curve-2b"
          fill="none"
          stroke="black"
          strokeWidth="2"
          cx="100"
          cy="100"
          r="65"
        ></circle>
        <text fill="black">
          <textPath
            xlinkHref="#curve-ref-2b"
            href="#curve-ref-2b"
            textAnchor="end"
            startOffset="90%"
          >
            audio engineer
            <animate
              values="90%; 33%"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0 0.85 0.97 1"
              fill="freeze"
              attributeName="startOffset"
              begin="0.8s"
              dur="1.2s"
              repeatCount="0"
            ></animate>
          </textPath>
        </text>
      </svg>
      <span id="audio-eng-collage" className={`${styles['collage-img']} ${styles['audio-eng-collage']} ${styles.landscape}`} />
    </a>
  }

  function Portrait() {
    return <a href="/audio-engineer">
      <svg
        id="audio-eng-link-ring"
        className={`${styles['audio-eng-link-ring']} ${styles['link-ring-graphic']}`}
        viewBox="12.5 12.5 175 175"
      >
        <defs>
          <path
            id="curve-ref-2a"
            d="m 100,100 m -82.5,0 a 82.5,82.5 0 1,0 165,0 a 82.5,82.5 0 1,0 -165,0"
          ></path>
        </defs>
        <circle
          id="curve-2a"
          fill="none"
          stroke="black"
          strokeWidth="2"
          cx="100"
          cy="100"
          r="65"
        ></circle>
        <text fill="black">
          <textPath
            xlinkHref="#curve-ref-2a"
            href="#curve-ref-2a"
            textAnchor="end"
            startOffset="0"
          >
            audio engineer
            <animate
              values="90%; 40%"
              keyTimes="0; 1"
              calcMode="spline"
              keySplines="0 0.85 0.97 1"
              fill="freeze"
              attributeName="startOffset"
              begin="0.8s"
              dur="1.2s"
              repeatCount="0"
            ></animate>
          </textPath>
        </text>
      </svg>
      <span id="audio-eng-collage" className={`${styles['collage-img']} ${styles['audio-eng-collage']}`} />
    </a>
  }
}