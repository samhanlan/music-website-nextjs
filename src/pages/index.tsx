import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/SingerSongwriter.module.scss";
import logoImage from "@/assets/SH_logo_horizontal.jpg";
import bandcampLogo from "@/assets/bandcampLogo.svg";

const links = {
    tidal: "GET FROM CALUM?",
    deezer: "https://www.deezer.com/album/262854002",
    appleMusic: "https://music.apple.com/us/album/lifetime-access-ep/1588508937?uo=4",
    youtube: "https://youtube.com/channel/UCVSn-yQId3JNtShdzNrJ_Ig",
    instagram: "https://www.instagram.com/samhanlan/",
    spotify: "https://open.spotify.com/artist/3XEowfTI8l2Wc7SHmrf5KN?si=d5OQLAI3SsGS0zwY8DP6Jw&dl_branch=1",
    inTheNook: "https://www.youtube.com/embed/dBAUMlKddLE",
    bandcamp: "https://samhanlan.bandcamp.com",
    bandcampLifetimeAccess: "https://bandcamp.com/EmbeddedPlayer/album=1721633599/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/",
    bandcampSharpRelief: "https://bandcamp.com/EmbeddedPlayer/album=585253199/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/",
};

export default function SingerSongwriter() {
    return <main className={styles.main}>
        <div className={styles.innerContainer}>
            <Logo />
            <SocialIcons />
            <HeroVideo />
            <ReleasesList />
        </div>
    </main>
}

const Logo = () => {
    return <div className={styles.logoImageWrap}>
        <Image className={styles.logoImage} alt="sam hanlan logo" src={logoImage} width={840} height={178} />
    </div>
}

const ReleasesList = () => {
    return <div className={styles.releasesList}>
        <div className={styles.bandcampEmbedBorder}>
            <div className={styles.bandcampEmbed}>
                <iframe width={350} height={350} src={links.bandcampLifetimeAccess} seamless><a href="https://samhanlan.bandcamp.com/album/lifetime-access">Lifetime Access by Sam Hanlan</a></iframe>
            </div>
        </div>
        <div className={styles.bandcampEmbedBorder}>
            <div className={styles.bandcampEmbed}>
                <iframe width={350} height={350} src={links.bandcampSharpRelief} seamless><a href="https://samhanlan.bandcamp.com/album/sharp-relief">Sharp Relief by Sam Hanlan</a></iframe>
            </div>
        </div>
    </div>
}

const HeroVideo = () => {
    return <div className={styles.videoBorder}>
        <div className={styles.videoWrap}>
            <iframe width="560" height="315" src={links.inTheNook} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
    </div>
}

const SocialIcons = () => {
    return <>
        <ul className={styles.socialIconsList}>
            <li>
                <a href={links.instagram} target="_blank">
                    <svg className={styles.socialIcon} role="img" viewBox="0 0 600 600">
                        <use xlinkHref="#instagram-icon" />
                    </svg>
                </a>
            </li>
            <li>
                <a href={links.spotify} target="_blank">
                    <svg className={styles.socialIcon} role="img" viewBox="0 0 24 24">
                        <use xlinkHref="#spotify-icon" />
                    </svg>
                </a>
            </li>
            <li>
                <a href={links.bandcamp} target="_blank">
                    <Image className={styles.socialIcon} src={bandcampLogo} alt="bandcamp logo" />
                </a>
            </li>
            <li>
                <a href={links.deezer} target="_blank">
                    <svg className={styles.socialIcon} viewBox="0 0 97.75 97.75">
                        <use xlinkHref="#deezer-icon" />
                    </svg>
                </a>
            </li>
            <li>
                <a href={links.appleMusic} target="_blank">
                    <svg className={styles.socialIcon} viewBox="0 0 512 512">
                        <use xlinkHref="#apple-music-icon" />
                    </svg>
                </a>
            </li>
            <li>
                <a href={links.tidal} target="_blank">
                    <svg className={styles.socialIcon} fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512">
                        <use xlinkHref="#tidal-icon" />
                    </svg>
                </a>
            </li>
            <li>
                <a href={links.youtube} target="_blank">
                    <svg className={styles.socialIcon} role="img" viewBox="0 0 3333 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                        <use xlinkHref="#youtube-icon" />
                    </svg>
                </a>
            </li>
        </ul>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <defs>
                <symbol id="spotify-icon">
                    <title>Spotify icon</title>
                    <path
                        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
                    />
                </symbol>
                <symbol id="instagram-icon">
                    <g>
                        <circle cx="300" cy="300" r="300" />
                        <path fill="white" d="M300,123.5c-47.9,0-54,0.2-72.8,1.1c-18.8,0.9-31.6,3.8-42.8,8.2c-11.6,4.5-21.5,10.5-31.3,20.4   c-9.8,9.8-15.8,19.7-20.4,31.3c-4.4,11.2-7.4,24.1-8.2,42.8c-0.8,18.8-1.1,24.8-1.1,72.8c0,47.9,0.2,53.9,1.1,72.8   c0.9,18.8,3.8,31.6,8.2,42.8c4.5,11.6,10.5,21.5,20.4,31.3c9.8,9.8,19.7,15.9,31.3,20.4c11.2,4.4,24.1,7.3,42.8,8.2   c18.8,0.9,24.8,1.1,72.8,1.1c47.9,0,53.9-0.2,72.8-1.1c18.8-0.9,31.6-3.8,42.9-8.2c11.6-4.5,21.4-10.6,31.2-20.4   c9.8-9.8,15.8-19.7,20.4-31.3c4.3-11.2,7.3-24,8.2-42.8c0.8-18.8,1.1-24.8,1.1-72.8c0-47.9-0.2-53.9-1.1-72.8   c-0.9-18.8-3.9-31.6-8.2-42.8c-4.5-11.6-10.6-21.5-20.4-31.3c-9.8-9.8-19.6-15.8-31.3-20.4c-11.3-4.4-24.1-7.3-42.9-8.2   C353.9,123.7,347.9,123.5,300,123.5L300,123.5z M284.2,155.3c4.7,0,9.9,0,15.8,0c47.1,0,52.7,0.2,71.3,1   c17.2,0.8,26.5,3.7,32.8,6.1c8.2,3.2,14.1,7,20.3,13.2c6.2,6.2,10,12.1,13.2,20.3c2.4,6.2,5.3,15.6,6.1,32.8   c0.8,18.6,1,24.2,1,71.3c0,47.1-0.2,52.7-1,71.3c-0.8,17.2-3.7,26.5-6.1,32.8c-3.2,8.2-7,14.1-13.2,20.3c-6.2,6.2-12,10-20.3,13.2   c-6.2,2.4-15.6,5.3-32.8,6.1c-18.6,0.8-24.2,1-71.3,1c-47.1,0-52.7-0.2-71.3-1c-17.2-0.8-26.5-3.7-32.8-6.1   c-8.2-3.2-14.1-7-20.3-13.2c-6.2-6.2-10-12.1-13.2-20.3c-2.4-6.2-5.3-15.6-6.1-32.8c-0.8-18.6-1-24.2-1-71.3   c0-47.1,0.2-52.7,1-71.3c0.8-17.2,3.7-26.5,6.1-32.8c3.2-8.2,7-14.1,13.2-20.3c6.2-6.2,12.1-10,20.3-13.2   c6.2-2.4,15.6-5.3,32.8-6.1C245,155.5,251.3,155.3,284.2,155.3L284.2,155.3z M394.2,184.6c-11.7,0-21.2,9.5-21.2,21.2   c0,11.7,9.5,21.2,21.2,21.2c11.7,0,21.2-9.5,21.2-21.2C415.4,194.1,405.9,184.6,394.2,184.6L394.2,184.6z M300,209.4   c-50.1,0-90.6,40.6-90.6,90.6c0,50.1,40.6,90.6,90.6,90.6c50.1,0,90.6-40.6,90.6-90.6C390.6,249.9,350.1,209.4,300,209.4L300,209.4   z M300,241.2c32.5,0,58.8,26.3,58.8,58.8c0,32.5-26.3,58.8-58.8,58.8c-32.5,0-58.8-26.3-58.8-58.8   C241.2,267.5,267.5,241.2,300,241.2z" />
                    </g>
                </symbol>
                <symbol id="youtube-icon">
                    <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm913 1294s-18-129-74-185c-71-74-151-75-187-79-261-19-652-19-652-19h-1s-392 0-652 19c-36 4-116 5-187 79-56 56-74 185-74 185s-19 151-19 302v141c0 151 19 302 19 302s18 129 74 185c71 74 164 72 206 80 149 14 634 19 634 19s392-1 653-19c36-4 116-5 187-79 56-56 74-185 74-185s19-151 19-302v-141c0-151-19-302-19-302zm-1107 615v-524l504 263-504 261z" />
                </symbol>
                <symbol id="deezer-icon">
                    <path d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z    M25.676,69.248H12.365v-4.033h13.311V69.248z M25.676,64.006H12.365V59.97h13.311V64.006z M25.676,58.762H12.365v-4.035h13.311   V58.762z M25.676,53.516H12.365v-4.033h13.311V53.516z M25.676,48.271H12.365v-4.034h13.311V48.271z M40.604,69.248H27.291v-4.033   h13.313V69.248z M40.604,64.006H27.291V59.97h13.313V64.006z M40.604,58.762H27.291v-4.035h13.313V58.762z M55.531,69.248H42.219   v-4.033h13.313L55.531,69.248L55.531,69.248z M55.531,64.006H42.219V59.97h13.313L55.531,64.006L55.531,64.006z M55.531,58.762   H42.219v-4.035h13.313L55.531,58.762L55.531,58.762z M55.531,53.516H42.219v-4.033h13.313L55.531,53.516L55.531,53.516z    M55.531,48.271H42.219v-4.034h13.313L55.531,48.271L55.531,48.271z M55.531,43.026H42.219v-4.034h13.313L55.531,43.026   L55.531,43.026z M55.531,37.783H42.219v-4.035h13.313L55.531,37.783L55.531,37.783z M70.457,69.248H57.145v-4.033h13.313   L70.457,69.248L70.457,69.248z M70.457,64.006H57.145V59.97h13.313L70.457,64.006L70.457,64.006z M70.457,58.762H57.145v-4.035   h13.313L70.457,58.762L70.457,58.762z M70.457,53.516H57.145v-4.033h13.313L70.457,53.516L70.457,53.516z M70.457,48.271H57.145   v-4.034h13.313L70.457,48.271L70.457,48.271z M85.385,69.248H72.072v-4.033h13.312V69.248z M85.385,64.006H72.072V59.97h13.312   V64.006z M85.385,58.759H72.072v-4.034h13.312V58.759z M85.385,53.516H72.072V49.48h13.312V53.516z M85.385,48.271H72.072v-4.037   h13.312V48.271z M85.385,43.025H72.072v-4.033h13.312V43.025z M85.385,37.78H72.072v-4.033h13.312V37.78z M72.072,32.536v-4.034   h13.312v4.034H72.072z" />
                </symbol>
                <symbol id="apple-music-icon">
                    <path d="M511.8,130.7c0-15.7-1.3-31.4-5.1-46.7C500,56,484,34.7,460.2,19C448,11,434.5,6.1,420.1,3.5c-11-2-22.2-2.9-33.3-3.2   L384.1,0H127.6c-3.2,0.3-6.5,0.4-9.7,0.6C102,1.5,86.2,3.2,71.1,9.2C42.7,20.4,22.1,40.1,10.1,68.4C5.9,78,3.8,88.2,2.3,98.5   c-1.2,8.3-1.9,16.8-2.2,25.2l-0.2,2v260.7c0.2,3,0.3,6,0.5,9c1.1,17.4,3.3,34.7,10.7,50.7c13.8,30.3,37.1,50.2,69,59.7   c8.9,2.8,18.2,4,27.6,4.8c11.8,1.2,23.7,1.3,35.5,1.3h235.3c11.2,0,22.3-0.7,33.5-2.2c17.6-2.2,34.1-7.4,49-17.2   c17.9-11.8,31.4-27.5,40.1-47.1c4-9,6.2-18.6,7.9-28.2c2.4-14.4,2.9-29,2.9-43.6c-0.1-81,0-162-0.1-243L511.8,130.7z M374.8,215.8   v121.8c0,8.9-1.2,17.7-5.2,25.7c-6.2,12.6-16.2,20.5-29.6,24.3c-7.4,2.2-15.1,3.3-22.8,3.7c-20.2,1-37.8-12.7-41.4-32.7   c-3.1-16.5,4.8-34.7,22.2-43.2c6.8-3.3,14.2-5.3,21.7-6.8c8.1-1.7,16.2-3.3,24.2-5.2c5.9-1.3,9.7-4.9,10.9-11l0.4-4.1   c0-38.7,0-77.5,0-116.2l-0.6-3.9c-0.8-3.2-3.2-5.2-6.5-5c-3.4,0.2-6.7,0.7-10.1,1.4c-16.3,3.2-32.5,6.4-48.7,9.7l-78.9,15.9   l-1.1,0.3c-5.9,1.7-8,4.3-8.3,10.5v2.7c-0.1,55.5,0,111-0.1,166.5c0,9-1,17.8-4.6,26.2c-5.9,13.7-16.4,22.3-30.6,26.3   c-7.5,2.2-15.2,3.4-23,3.7c-20.4,0.8-37.4-12.8-40.9-32.9c-3-17.3,4.9-36,24.6-44.3c7.7-3.2,15.6-4.9,23.7-6.6   c6.1-1.2,12.3-2.5,18.3-3.7c8.2-1.7,12.4-6.9,12.8-15.2v-3.2c0-63.2,0-126.3,0-189.5c0-2.7,0.3-5.3,0.9-7.9   c1.5-6.1,5.8-9.6,11.7-11c5.4-1.4,11-2.4,16.5-3.6c15.7-3.2,31.2-6.3,46.9-9.4l48.4-9.8c14.3-2.8,28.6-5.7,42.9-8.6   c4.7-0.9,9.4-1.9,14.2-2.3c6.6-0.6,11.2,3.6,11.8,10.3c0.2,1.6,0.3,3.2,0.3,4.7C374.8,134.2,374.8,174.9,374.8,215.8L374.8,215.8z" />
                </symbol>
                <symbol id="tidal-icon">
                    <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0zm50.384 219.459l-50.372 50.383 50.379 50.391-50.382 50.393-50.395-50.393 50.393-50.389-50.393-50.39 50.395-50.372 50.38 50.369 50.389-50.375 50.382 50.382-50.382 50.392-50.394-50.391zm-100.767-.001l-50.392 50.392-50.385-50.392 50.385-50.382 50.392 50.382z" />
                </symbol>
            </defs>
        </svg>
    </>
}
