
function play(jjj){
    var domains = ["bitzmediaandroid.blogspot.com/", "pinoyflixandroid.blogspot.com/","tagdubtvph.blogspot.com/"];
    
    var randomIndex = Math.floor(Math.random() * domains.length);
    
    window.location = "https://" + domains[randomIndex] + "play.html#"+ jjj;
}
function handleUrlHash() {
    const hash = window.location.hash;
    if (hash.includes('s=')) {
        const match = hash.match(/s=([^&]+)/);
        if (match && match[1]) {
            const vid = match[1];
            play(vid);
            
        }
    }
} 
window.addEventListener('DOMContentLoaded', handleUrlHash);
window.addEventListener('hashchange', handleUrlHash);