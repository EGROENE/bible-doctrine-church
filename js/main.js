// Populate homepage link in header of all docs in pages/
const universalPgHeader = document.getElementById('universal-pg-header');
const popHomepageLinkOfDocsInPages = () => {
    universalPgHeader.innerHTML += "<a id='homepage-link' href='../index.html'>"
    + "<img src='../assets/images/main-logo-2.png' alt='bdc-logo' style='width: 21.07%'>"
    + "<div>"
    + "<h1>Bible Doctrine Church</h1>"
    + "<h2>of West Michigan</h2>"
    + "</div>"
    + "</a>"
    // Convert header to flex (from grid), so items display in correct order:
    universalPgHeader.style.display = 'flex';
}

// Functionality to populate .deacons-container on about.html:
const deaconsInfo = [
    { deaconNameTitle: "Phillip Rewerts, President", deaconPhone: "616-560-3592" },
    { deaconNameTitle: "Tom Kilebrew, Vice President-Sunday School", deaconPhone: "616-498-4861" },
    { deaconNameTitle: "Mark Verstraete, Treasurer", deaconPhone: "616-402-2769" },
    { deaconNameTitle: "Ken Hildebrand, Secretary", deaconPhone: "231-865-6711" },
    { deaconNameTitle: "Ross Regua, Communion", deaconPhone: "310-507-4539" }
]
const deaconsContainer = document.getElementById('deacons-container');
const popDeaconsSection = () => {
    for (deacon of deaconsInfo) {
        deaconsContainer.innerHTML += "<div>"
        + "<header>" + deacon.deaconNameTitle + "</header>"
        + "<p>" + deacon.deaconPhone + "</p>"
        + "</div>"
    }
}