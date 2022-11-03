class Language extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement("li");

        if (this.getAttribute("current") === "true") {
            
            componentRoot.setAttribute("class", "current-language");
            componentRoot.textContent = this.getAttribute("display");

            return componentRoot;
        } else {

            const navlink = document.createElement("a");
            navlink.setAttribute("href", `/${this.getAttribute("topage")}.html`)
            navlink.setAttribute("target", "_self")
            navlink.textContent = this.getAttribute("display")
    
            componentRoot.appendChild(navlink);
    
            return componentRoot;
        }

    }

    style() {
        const style = document.createElement("style");
        style.textContent = `
        li{
            display: inline-flex;
            list-style: none;
            vertical-align: middle;
        }

        a {
            cursor: pointer;
            color: black;
        }
        
        a:hover {
            font-weight: bold;
        }
        
        a:visited {
            color: black;
        }

        .current-language {
            font-weight: 600;
        }
        `

        return style;
    }
}

customElements.define("add-lang", Language);