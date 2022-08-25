
// consts
const mainVideo = document.querySelector('.html5-main-video');
const randomComments = [
    "عظمة جدا __😘__",
    "عاش ي هندسه __💪__",
    "شرح اكثر من رائع __😍__",
    "عم الناس تريكه و الزيرو __😍__",
    "شكرا جدا يهندسه __😇😇😇__"
];

//
const channelNames = [
    'zAmericanEnglish',
    'elzero web school',
    'Coders Camp - Rasha Abdeen'
].map(name => name.toUpperCase())

// var 
var 
    ytLikeBtn,
    ytComments,
    ytWatchMetadata,
    channelName = '';


window.onload = () => {

    const metadata = setInterval(() =>  {

        if (ytWatchMetadata) clearInterval(metadata)
        else ytWatchMetadata = document.querySelector('ytd-watch-metadata')

    },500)

    const obsYtLikeBtn = new MutationObserver(() => {
        if (CheckChannelName()) LikeSimulation()
    })

    const like = setInterval(() =>  {

        if (ytLikeBtn) {

            // 
            clearInterval(like)

            //
            if (CheckChannelName()) LikeSimulation()

            //
            obsYtLikeBtn.observe(ytLikeBtn.firstElementChild, {childList: true, attributes: true})
        }
        else {
            ytLikeBtn = document.querySelector('#actions #top-level-buttons-computed')
        }

    },500)

}

function CheckChannelName() {

    //
    channelName = ytWatchMetadata.querySelector('ytd-channel-name #text-container').textContent.trim().toUpperCase();
    
    // Check in current channel
    if (channelName && channelNames.includes(channelName)) return true
    else {
        console.log('%cAuto Like extensions It only works with the channels that are specified in the array', 'color: red; font-size: 16px')
        return false
    }

}

function LikeSimulation() {
    if (!ytLikeBtn.firstElementChild?.classList.contains('style-default-active')) {
        ytLikeBtn.firstElementChild?.click()
        console.log('%cLike Simulation is Done', 'color: green; font-size: 16px') //
    }
}