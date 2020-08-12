function showContent() {
    let children = this.children;
    children[0].style.bottom = '100%';
    children[1].style.bottom = '100%';
}

let projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.onmouseover = showContent;
    project.ontouchstart = showContent;
})