    const find_mentors =document.querySelector('.find-mentors');
    const list_section=document.querySelector('.list-section');
    const body=document.querySelector('.hero-section');

    find_mentors.addEventListener('mouseover',function(){
        list_section.style.scale=1;
    })
    find_mentors.addEventListener('mouseout',function(e){
        if ((e.relatedTarget !== list_section && !list_section.contains(e.relatedTarget))) {
            list_section.style.scale = 0;
        }
    })
    document.addEventListener("DOMContentLoaded", function() {
        var typeData = new Typed(".txt", {
            strings: [
                "Python", "SEO", "CEO", "Backend", "Frontend", "DevOps", "Machine learning", "Data Science", "Web Development", "Engineer", "React", "JavaScript", "AWS"
            ],
            loop: true,
            typeSpeed: 80,
            backSpeed: 80,
            backDelay: 500,
            css: {
                color: 'white'
            }
        });
    }); 

    const loader =document.querySelector('click')