
document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById('videoPlayer');

  const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

  function getVideoPath(baseName) {
    return isMobile
      ? `../videos/${baseName}_mobile.mp4`
      : `../videos/${baseName}.mp4`;
  }

  // Load correct video on first load
  videoPlayer.src = getVideoPath("total_war");
});

const content_data = [
    {
        title: "Definition",
        text:
            "'Total War' can be briefly defined as an armed conflict in which all the exploitable resources available to one or more sides are organised and directed towards the complete and utter defeat of the enemy. Priority is given to warfare over non-combatant needs. Most wars throughout human history can be classified as “limited” rather than “total,” insofar as the leaders involved lacked either the ambition or the means to fully harness the entire material and human base theoretically available to them in order to achieve unlimited victory."
    },
    {
        title: "Spiritual Application",
        text:
            "Total War against the powers of darkness and every high thing that opposes the Lordship of Jesus Christ. All possible resources of the Christian engaged in 'Total War' will be used solely for the purpose of complete annihilation of the above-mentioned enemy. Resources include time, finances, gifting, expertise, and anything and everything else the Lord has given, right down to the last breath, heartbeat, and second of time. Resources will be used in a manner deemed by the Christian to best achieve this goal."
    },
    {
        title: "The Battlefield",
        text:
            "The only real power the demonic forces possess to oppose Christ is lies and their ability to blind human beings to the truth. Therefore, the conflict is against those lies propagated by individuals or human institutions under the influence of the devil. Nothing is off target; every bulwark and stronghold, no matter how seemingly small or culturally respectable, is marked for destruction. Bearing in mind that there are always two caveats. Firstly, individual human beings are slaves of our enemy to be freed, not targets in and of themselves. Secondly, the Devil has already been defeated by Christ, and a Christian's mission is merely to wage war on Satan's lies and not the demonic host themselves."
    },
    {
        title: "Weapons",
        text:
            "Our weapons are not carnal but mighty in God for the pulling down of strongholds (2 Cor 10:3-5). The stronghold of the enemy is lies, and therefore the primary weapon is truth, the word of God. However, those held captive by the Devil are unable to discern the truth by natural means, as they are supernaturally blinded and morally incapable. Therefore, the Christian is utterly incapable of effecting change in and of themselves and requires an act of God; consequently, their secondary weapon, which is equally essential, is prayer."
    },
    {
        title: "Practical Application",
        text:
            "A Christian committed to 'Total War' must therefore dedicate every waking moment to both the acquisition and declaration of the truth of the gospel and prayer. From the moment of waking in the morning to sleeping in the evening, every moment of the day will be allocated to the wielding of one of these two weapons unless necessarily involved in one of the below-mentioned biblical duties. It must be understood that a Christian does not have the power or desire in and of themselves to achieve this level of warfare and therefore must petition the Almighty for the strength and zeal to do so. Christian freedom means the allocation of some resources to spheres other than the war effort itself, which is acceptable, but it must be understood that he is not implementing 'Total War' and our enemy, the Devil, will continue to conduct his Total War campaign against Christ and His Church. Christian progress should be marked by an ever-increasing conformity to this ideal."
    },
    {
        title: "Biblical requirements",
        text:
            "Essential tasks to maintain health\r\n\r\nServing the church\r\n\r\nServing family members to maintain a godly witness and a biblical responsibility to them\r\n\r\nMeeting with brothers for mutual edification and upbuilding\r\n\r\nMeeting with friends for evangelistic purposes (must be ordained and preceded by prayer)\r\n\r\nAny other project for the furtherance of the gospel (which must be determined through much prayer to be right and profitable)\r\n\r\nSecular work (as necessary to achieve the goal)"
    },
    {
        title: "Scripture",
        text:
            "For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places. - Eph 6:12 (esv)\r\n\r\nBut we will devote ourselves to prayer and to the ministry of the word. - Acts 6:4 (esv)\r\n\r\nEvery athlete exercises self-control in all things. They do it to receive a perishable wreath, but an imperishable. - 1 Cor 9:25 (esv)\r\n\r\nMaking the best use of the time, because the days are evil. - Eph 5:16 (esv)\r\n\r\nAnd take the helmet of salvation, and the sword of the Spirit, which is the word of God, praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints. - Eph 6:17-18 (esv)"
    }
];