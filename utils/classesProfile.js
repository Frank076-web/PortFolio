export class Skill {
    constructor(name, image, alt, level) {
        this.name = name;
        this.image = `/images/${image}`;
        this.alt = alt;
        this.level = level;
    }
}

export class Experience {
    constructor(title, company, duration, description) {
        this.title = title;
        this.company = company;
        this.duration = duration;
        if (Array.isArray(description)) this.description = new Description(description);
        else this.description = description;
    }
}

export class Description {
    constructor(description) {
        for (let i = 0; i < description.length; i++) {
            this[i] = description[i];
        }
    }
}

export class Education {
    constructor(institution, career = null, duration = null, description) {
        this.institution = institution;
        this.career = career;
        this.duration = duration;
        if (Array.isArray(description)) this.description = new Description(description);
        else this.description = description;
    }
}

export class Project {
    constructor(image, title, description, link) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}
