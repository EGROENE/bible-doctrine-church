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