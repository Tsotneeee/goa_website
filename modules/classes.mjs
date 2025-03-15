class Courses {
    constructor(courseID){
        this.courseID = courseID;
    }
    
    get render() {
        const p = document.createElement('p');
        switch (this.courseID) {
            case 1:
                p.textContent = "ვებ პროგრამირება";
                break;
            case 2:
                p.textContent = "გრაფიკული დიზაინი";
                break;
            case 3:
                p.textContent = "რობოტიკა";
                break;
            case 4:
                p.textContent = "თამაშების დეველოპმენტი";
                break;
        }
        document.getElementById('out').appendChild(p);
    }
}

export { Courses };