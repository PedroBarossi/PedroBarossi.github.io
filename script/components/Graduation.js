class Graduation extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {

        const componentRoot = document.createElement("article");

        const course = document.createElement("h3");
        course.textContent = this.getAttribute("name") + " - ";

        const italic = document.createElement("span");
        italic.setAttribute("class", "article_title-italic")
        italic.textContent = this.getAttribute("level");

        course.appendChild(italic);

        const institute = document.createElement("div");
        institute.setAttribute("class", "article_text")
        institute.textContent = this.getAttribute("institute");
        
        const period = document.createElement("div");
        period.textContent += this.getAttribute("period");

        institute.appendChild(period);

        componentRoot.appendChild(course);
        componentRoot.appendChild(institute);

        return componentRoot;
    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
            .article_title-italic {
                font-style: italic;
            }
            
            .article_text {
                margin-left: 2rem;
            }
        `
        
        return style;
    }
}

customElements.define("add-grad", Graduation);