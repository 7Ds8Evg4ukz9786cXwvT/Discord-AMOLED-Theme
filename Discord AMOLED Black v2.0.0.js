// ==UserScript==
// @name Discord AMOLED Black
// @version 2.0.0
// @author JustTheo
// @namespace http://tampermonkey.net/
// @run-at document-start
// @include https://discord.com/*
// @description Dark Theme
// ==/UserScript==

(function() {
let css = `
/*---------------------------------------- BACKGROUND ----------------------------------------*/
body {
    background: url("https://media.discordapp.net/attachments/810707389962911804/822484547433660476/Black_Box.png?width=1168&height=701");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
.appMount-3lHmkl {
    background: rgba(0, 0, 0, .6);
}
/*---------------------------------------- REMOVE DARK & WHITE THEME BACKGROUNDS ----------------------------------------*/
.theme-dark,
.theme-light {
    --background-message-hover: rgba(0, 0, 0, 0);
    --header-primary: #fff;
    --header-secondary: #b9bbbe;
    --text-normal: #dcddde;
    --text-muted: #9d9d9d;
    --channels-default: #8e9297;
    --interactive-normal: #b9bbbe;
    --interactive-hover: #dcddde;
    --interactive-active: #fff;
    --interactive-muted: #4f545c;
    --background-primary: transparent;
    --background-secondary: transparent;
    --background-tertiary: transparent;
    --background-accent: transparent;
    --background-floating: rgba(0, 0, 0, .8);
    --activity-card-background: transparent;
    --deprecated-panel-background: transparent
}
/*---------------------------------------- SLIDE IN AND OUT ANIMATION ----------------------------------------*/
/* CHANNELS/DMS */
div.sidebar-2K8pFh {
    opacity: 0;
    width: 40px;
    -webkit-transition: opacity 0.3s ease-in-out, width 0.5s;
    -moz-transition: opacity 0.3s ease-in-out;
    -ms-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
}
div.sidebar-2K8pFh:hover {
    opacity: 1;
    width: 250px;
}
/* MEMBER LIST */
[class|=membersWrap] {
    opacity: 0;
    width: 10px;
    min-width: 40px;
    -webkit-transition: opacity 0.3s ease-in-out, width 0.5s;
    -moz-transition: opacity 0.3s ease-in-out;
    -ms-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
}
[class|=membersWrap]:hover {
    opacity: 1;
    width: 240px;
}
.members-1998pB {
    opacity: 0;
    width: 40px;
    -webkit-transition: opacity 0.3s ease-in-out, width 0.5s;
    -moz-transition: opacity 0.3s ease-in-out;
    -ms-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
}
.members-1998pB:hover {
    opacity: 1;
    width: 240px;
}
/*---------------------------------------- VOICE/VIDEO CALL WINDOW TRANSPARENVY ----------------------------------------*/
.video-1FfuMD {
    background: rgba(0, 0, 0, .35);
}
.theme-light .video-1FfuMD.minimum-1pRSEN {
    background: #000000;
    background: rgba(0, 0, 0, .35);
}
.theme-light .wrapper-29NfPK,
.theme-dark .wrapper-29NfPK {
    background: rgba(0, 0, 0, 0);
}
.video-1kutKI {
    background-color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- CHANGES "JUMP TO PRESENT" BAR TO LIGHT BLUE (JUST LIKE THE "NEW MESSAGE" BAR) ----------------------------------------*/
.jumpToPresentBar-9P20AM {
    background-color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- REMOVALS ----------------------------------------*/
/* PROFILE TAB BORDER ABOVE MESSAGE BOX */
.footer-1fjuF6 {
    border-top: 0 solid;
}
/* WHITE THEME TAG/PING BACKGROUND */
.theme-light .wrapper-3WhCwL {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px
}
/* BORDERS BETWEEN CHAT MESSAGES */
.divider-32i8lo {
    opacity: 0;
}
/* VIDEO CALL BLACK BORDER */
.videoBackgroundWrapper-2dCt49 {
    background-color: rgba(0, 0, 0, 0);
}
/* PROFILE POPUP MESSAGE BOX BORDER */
.quickMessage-2XpSaN {
    border: 0px solid #dcddde;
}
/* PROFILE POPUP BORDER */
.theme-light .userPopout-3XzG_A,
.theme-dark .userPopout-3XzG_A {
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0);
}
/*---------------------------------------- CODE BLOCK RECOLOR ----------------------------------------*/
.markup-2BOw-j code {
    background-color: #35383e;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.50);
    -moz-box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.50);
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.50);
    border: 1px solid rgba(0, 0, 0, .22);
}
/*---------------------------------------- BORDER ADDITIONS ----------------------------------------*/
/* PROFILE TAB TOP */
.container-3baos1 {
    border-top: 1px solid rgba(0, 0, 0, 0);
}
/* SERVER BAR BORDER */
.guilds-1SWlCJ {
    border-right: 2px solid rgba(0, 0, 0, 0);
}
/* VOICE CALL TAB TOP AND RIGHT AND BOTTOM */
.container-1giJp5 {
    border-bottom: 1px solid var(--background-modifier-accent);
    border-top: 1px solid rgba(0, 0, 0, 0);
    border-right: 1px solid rgba(0, 0, 0, 0);
}
/* PROFILE TAB RIGHT */
.container-3baos1 {
    border-right: 1px solid rgba(0, 0, 0, 0);
}
/* CHAT LEFT */
.chatContent-a9vAAp {
    border-left: 2px solid rgba(0, 0, 0, 0);
}
/*---------------------------------------- SERVER BAR BACKGROUND ----------------------------------------*/
.scroller-2TZvBN {
    background-color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- SCROLL BAR CHANGES ----------------------------------------*/
.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-thumb {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0) inset;
    border-radius: 10px;
}
.theme-dark .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10px;
}
.theme-light .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-thumb {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(64, 68, 75, 1);
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0) inset;
}
.theme-light .scrollerThemed-2oenus.themedWithTrack-q8E3vB .scroller-2FKFPG::-webkit-scrollbar-track-piece {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- PROFILE TAB ----------------------------------------*/
/* SPOTIFY FIX */
.headerSpotify-zpWxgT {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0);
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, .4);
    margin-bottom: 10px;
}
/* "PLAYING A GAME" FIX */
.headerPlaying-j0WQBV,
.headerStreaming-2FjmGz {
    background: rgba(0, 0, 0, 0);
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, .4);
    margin-bottom: 10px;
}
.userPopout-3XzG_A:background {
    filter: blur(8px);
    -webkit-filter: blur(8px);
}
/* BACKGROUND */
.userPopout-3XzG_A {
    background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), urlhttps://media.discordapp.net/attachments/810707389962911804/822484547433660476/Black_Box.png?width=1168&height=701");
    padding-top: 20px;
    padding-bottom: 0px;
    padding-left: 10px;
    padding-right: 10px;
    background-position: center top;
    background-size: cover;
    background-color: #000000;
}
/* HEADER */
.theme-light .headerNormal-T_seeN,
.theme-dark .headerNormal-T_seeN {
    border-radius: 15px;
    background-color: rgba(40, 40, 40, .4);
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, .4);
}
/* BACKGROUND BORDER RADIUS */
.userPopout-3XzG_A {
    border-radius: 15px;
}
/* BODY */
.theme-dark .bodyInner-245q0L,
.theme-dark .footer-1fjuF6 {
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0);
}
/* MESSAGE BOX */
.theme-light .quickMessage-1yeL4E,
.theme-dark .quickMessage-1yeL4E {
    background-color: rgba(40, 40, 40, .4);
    border-radius: 15px;
    margin-top: 5px;
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, .4);
}
/* BODY 2 */
.body-3iLsc4 {
    background-color: rgba(0, 0, 0, 0);
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, .4);
}
/* BORDER RADIUS FIX */
.popout-2iWAc- {
    border-radius: 15px;
}
/*---------------------------------------- CHAT MESSAGE BAR ----------------------------------------*/
/* BORDER RADIUS FIX */
.scrollableContainer-2NUZem {
    border-radius: 20px;
}
/* COLOR */
.inner-zqa7da {
    background-color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- OTHER BACKGROUND FIXES / MINOR INDIVIDUAL FIXES ----------------------------------------*/
/* NITRO STORE PAGE */
/* MAIN */
.applicationStore-1pNvnv {
    background-color: rgba(0, 0, 0, 0);
}
/* SECONDARY */
.scroller-9moviB {
    background-color: rgba(0, 0, 0, 0);
}
/* NITRO AD BORDER RADIUS */
.theme-dark .tier1Banner-1B_WXY {
    border-radius: 15px;
}
/* GRADIANT REMOVAL ON GAME SCROLL */
.gradientOverlayRight-3vMuS8,
.gradientOverlayLeft-3w159C {
    left: -1000px
}
/* GAME SCROLL ARROW BACKGROUND FIXES */
.scrollerButton-1Vm5_P {
    background-color: rgba(0, 0, 0, 0);
}
/* FRIENDS TAB */
.theme-light .container-1D34oG,
.theme-dark .container-1D34oG {
    background-color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- LIGHT (aka RETARDED) MODE COLOR FIXES ----------------------------------------*/
/* ACTIVITY TAB FIXES (BOTH LIGHT AND DARK) */
.theme-light .header-3uLGFv {
    color: #fff;
}
.theme-light .emptyCard-1AOHER {
    border-color: #00000000;
}
.theme-light .wrapper-3UweLa {
    background: #202225;
    color: #b9bbbe;
}
.theme-light .recentlyPlayedContainer-2F3MqS {
    background-color: #202225;
    border: 0px solid #e3e5e8;
}
.theme-dark .wrapper-Lii66c,
.theme-light .wrapper-Lii66c {
    background-color: #202225;
    border: 0px solid #e3e5e8;
}
.theme-light .card-3EIh8J {
    box-shadow: inset 0 0 0 0px #e3e5e8, 0 0 0 transparent
}
.theme-light .separator-2c4hi3,
.theme-dark .separator-2c4hi3 {
    background-color: #f7f7f78f;
}
.theme-dark .wrapper-9ppXpy,
.theme-light .wrapper-9ppXpy {
    box-shadow: inset 0 1px 0 #f7f7f78f;
}
.theme-light .card-3EIh8J:hover {
    background-color: #18191D;
}
/* LINKS */
.markup-2BOw-j a {
    color: rgba(0, 0, 0, 0);
}
/*------------ PROFILE TAB ------------*/
/* BOTTOM WHITE BACKGROUND REMOVAL */
.theme-light .bodyInner-245q0L,
.theme-light .footer-1fjuF6 {
    background-color: rgba(0, 0, 0, 0);
}
/* BODY TEXT COLOR FIX */
.theme-light .bodyInner-245q0L,
.theme-light .footer-1fjuF6 {
    color: rgba(0, 0, 0, 0);
}
/* NAME COLOR */
.theme-light .headerNormal-T_seeN .headerName-fajvi9,
.theme-light .headerNormal-T_seeN .headerTagUsernameNoNickname-2_H881 {
    color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- ROLES SELECTION POPUP BORDER RADIUS FIX ----------------------------------------*/
.theme-dark .container-VSDcQc .sectionTag-pXyto9 {
    border-radius: 15px;
}
.theme-dark .autocompleteArrow-Zxoy9H,
.theme-dark .autocompleteHeaderBackground-30T70q {
    border-radius: 15px;
}
.theme-light .container-VSDcQc .sectionTag-pXyto9 {
    border-radius: 15px;
}
.theme-light .autocompleteArrow-Zxoy9H,
.theme-light .autocompleteHeaderBackground-30T70q {
    border-radius: 15px;
}
/*---------------------------------------- ROLES SELECTION POPUP SHADOW FIX ----------------------------------------*/
.theme-dark .autocompleteArrow-Zxoy9H,
.theme-dark .autocompleteShadow-iiGWFU {
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0)
}
.theme-light .autocompleteArrow-Zxoy9H,
.theme-light .autocompleteShadow-iiGWFU {
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0), 0 0 0 1px rgba(0, 0, 0, 0)
}
/*---------------------------------------- DARK THEME PING BORDER RADIUS FIX ----------------------------------------*/
.theme-dark .wrapper-3WhCwL {
    border-radius: 4px;
}
/*---------------------------------------- BOLD FONT/MARKUP FIX ----------------------------------------*/
.markup-2BOw-j {
    color: #d5d5d5;
}
/*---------------------------------------- PPOFILE TAB POPUP TEXT COLOR CHANGES ----------------------------------------*/
/* SUB HEADER RECOLOR */
.bodyTitle-Y0qMQz {
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
}
/* TEXTBOX TEXT COLOR CHANGE (MESSAGE) */
.theme-light .quickMessage-1yeL4E::-webkit-input-placeholder,
.theme-dark .quickMessage-1yeL4E::-webkit-input-placeholder {
    color: rgb(0, 0, 0, 0);
}
/* TEXTBOX TEXT COLOR CHANGE (NOTE) */
.note-3kmerW textarea::-webkit-input-placeholder {
    color: rgb(0, 0, 0, 0);
}
/* MAKE (NOTE) TRANSPARENT WHEN CLICKED */
.note-3kmerW textarea:focus::placeholder {
    color: transparent;
}
/* MAKE (MESSAGE) TRANSPARENT WHEN CLICKED */
.theme-light .quickMessage-1yeL4E:focus::placeholder,
.theme-dark .quickMessage-1yeL4E:focus::placeholder {
    color: rgba(0, 0, 0, 0);
}
/*---------------------------------------- PPOFILE TAB PADDING/MARGIN REMOVALS AND STUFF ----------------------------------------*/
/* REMOVE HELPFUL TIP */
.theme-dark .protip-YaFfgO {
    opacity: 0;
    height: 0px;
    width: 0px;
}
/* RANDOM PADDING? FORGOT ?-? */
.theme-dark .bodyInner-245q0L,
.theme-dark .footer-1fjuF6 {
    padding-top: 5px;
}
/* HEADER MARGIN */
.theme-light .headerNormal-T_seeN,
.theme-dark .headerNormal-T_seeN {
    margin-bottom: 10px;
}
/*---------------------------------------- MENU TAB BACKGROUND AND PADDING ----------------------------------------*/
/* BACKGROUND */
.contextMenu-HLZMGh {
    background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://media.discordapp.net/attachments/810707389962911804/822484547433660476/Black_Box.png?width=1168&height=701");
    background-position: center top;
    background-size: cover;
}
/* BAN/KICK BUTTONS MARGIN IN BETWEEN */
.itemBase-tz5SeC.danger-2dXSTE:nth-child(1) {
    margin-bottom: 3px;
}
/* BAN/KICK BUTTONS NO HOVER */
.itemBase-tz5SeC.danger-2dXSTE:nth-child(1),
.itemBase-tz5SeC.danger-2dXSTE:nth-child(2) {
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
}
/* BAN/KICK BUTTONS HOVER */
.itemBase-tz5SeC.danger-2dXSTE:nth-child(1):hover,
.itemBase-tz5SeC.danger-2dXSTE:nth-child(2):hover {
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 15px;
}
/*---------------------------------------- ROLE GIVER TAB THINGY BORDER RADUS FIX ----------------------------------------*/
.theme-dark .row-rrHHJU.selected-1pIgLL {
    border-radius: 15px;
}
/*---------------------------------------- EMOJI BAR ----------------------------------------*/
/* MAIN BODY CHANGES */
.emojiPicker-3m1S-j, .emojiPicker-3m1S-j {
    background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://media.discordapp.net/attachments/810707389962911804/822484547433660476/Black_Box.png?width=1168&height=701");
    background-position: center top;
    background-size: cover;
    border-radius: 15px;
    margin-bottom: 13px;
}
/* "prefc, Today at 9:46 AM: Remove the cancerous new emoji bar:" */
.infoBar-U6oBFk {
    display:none;
}
/* TOP */
.emojiPicker-3m1S-j .header-1nkwgG {
    background-color: rgba(0, 0, 0, 0);
}
/* BOTTOM */
.emojiPicker-3m1S-j .categories-1feg4n, .emojiPicker-3m1S-j .categories-1feg4n {
    background-color: rgba(0, 0, 0, 0);
}
/*---------- SCROLL BAR CHANGES ----------*/
.scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track, .theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-dark .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp.scrollerTrack-1ZIpsv>.scrollerStore-390omS::-webkit-scrollbar-track {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0;
}
.scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track, .theme-light .scrollerWrap-2lJEkd.scrollerTrack-1ZIpsv>.scroller-2FKFPG::-webkit-scrollbar-track {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0;
}
.scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-dark .scrollerThemed-2oenus.themeLight-1_DWyY .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-light .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0) inset;
    border-radius: 0;
}
.scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-dark .scrollerWrap-2lJEkd .scroller-2FKFPG::-webkit-scrollbar-thumb, .theme-light .scrollerThemed-2oenus.themeDark-2cjlUp .scroller-2FKFPG::-webkit-scrollbar-thumb {
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0) inset;
    border-radius: 0;
}
/* SCROLLBAR BAR THING WIDER */
.scroller-2FKFPG::-webkit-scrollbar-thumb, .scroller-2FKFPG::-webkit-scrollbar-track {
    border-style: none;
}
/* not the emoji tab, but emoji bar */
.emojiButton-jE9tXC {
    display:none;
    border-left: 0px;
}
.separator-42rNt0 {
    width: 0px;
}
/*---------------------------------------- BOTTOM LEFT VOICE AND PROFILE PANELS TRANCPERENCY FIX ----------------------------------------*/
.panels-j1Uci_ {
    background-color: rgba(0, 0, 0, 0);
}

.
.appMount-3lHmkl {
    background-image: url(https://media.discordapp.net/attachments/810707389962911804/822484547433660476/Black_Box.png?width=1168&height=701);
    background-color: rgba(0, 0, 0, .5);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.theme-dark {
    --background-primary: rgba(0, 0, 0, .5);
    --background-secondary: rgba(0, 0, 0, .5);
    --background-tertiary: rgba(0, 0, 0, .5);
    --deprecated-panel-background: rgba(0, 0, 0, .5);
    --channeltextarea-background: rgba(0, 0, 0, .5);
    --background-secondary-alt: rgba(0, 0, 0, .5);

}
.theme-dark .container-1D34oG {
    background-color: rgba(0, 0, 0, .5)
}
.theme-dark .inset-3sAvek {
    background-color: rgba(0, 0, 0, .5);
}
.theme-dark .outer-1AjyKL.active-1xchHY, .theme-dark .outer-1AjyKL.interactive-3B9GmY:hover {
    background-color: rgba(0, , 0, .5)
}
`;
if (typeof GM_addStyle !== "undefined") {
  GM_addStyle(css);
} else {
  let styleNode = document.createElement("style");
  styleNode.appendChild(document.createTextNode(css));
  (document.querySelector("head") || document.documentElement).appendChild(styleNode);
}
})();