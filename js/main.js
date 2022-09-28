// START JS FOR DEFAULT ITEMS
// Populate homepage link in header of index.html:
const universalPgHeaderHomepage = document.getElementById('universal-pg-header');
const popHomepageLinkOfHomepage = () => {
    universalPgHeaderHomepage.innerHTML += "<a id='homepage-link' href='./index.html'>"
    + "<img src='./assets/images/main-logo-2.png' alt='bdc-logo' style='width: 21.07%'>"
    + "<div>"
    + "<h1>Bible Doctrine Church</h1>"
    + "<h2>of West Michigan</h2>"
    + "</div>"
    + "</a>"
    // Convert header to flex (from grid), so items display in correct order:
    universalPgHeaderHomepage.style.display = 'flex';
}

// Populate homepage link in header of all docs in pages/
const universalPgHeaderPages = document.getElementById('universal-pg-header');
const popHomepageLinkOfDocsInPages = () => {
    universalPgHeaderPages.innerHTML += "<a id='homepage-link' href='../index.html'>"
    + "<img src='../assets/images/main-logo-2.png' alt='bdc-logo' style='width: 21.07%'>"
    + "<div>"
    + "<h1>Bible Doctrine Church</h1>"
    + "<h2>of West Michigan</h2>"
    + "</div>"
    + "</a>"
    // Convert header to flex (from grid), so items display in correct order:
    universalPgHeaderPages.style.display = 'flex';
}

// Functionality to populate footer info on all pages:
const footers = document.querySelectorAll('footer');
const popFooter = () => {   
    for (let footer of footers) {
        footer.innerHTML += "<p>&copy; 2022, Bible Doctrine Church of West Michigan</p>"
    }
}
// END JS FOR DEFAULT ITEMS

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
    for (let deacon of deaconsInfo) {
        deaconsContainer.innerHTML += "<div>"
        + "<header>" + deacon.deaconNameTitle + "</header>"
        + "<p>" + deacon.deaconPhone + "</p>"
        + "</div>"
    }
}