export class Skill {
    name;
    image;
    alt;
    level;

    constructor(name: string, image: string, alt: string, level: string) {
        this.name = name;
        this.image = `/images/${image}`;
        this.alt = alt;
        this.level = level;
    }
}

export class Experience {
    title;
    company;
    duration;
    description;

    constructor(title: string, company: string, duration: string, description: string | string[]) {
        this.title = title;
        this.company = company;
        this.duration = duration;
        if (Array.isArray(description)) this.description = new Description(description);
        else this.description = description;
    }
}

export class Description {
    constructor(description: string | string[]) {
        for (let i = 0; i < description.length; i++) {
            this[i] = description[i];
        }
    }
}

export class Education {
    institution;
    career;
    duration;
    description;

    constructor(institution: string, career: string = null, duration: string = null, description: string | string[]) {
        this.institution = institution;
        this.career = career;
        this.duration = duration;
        if (Array.isArray(description)) this.description = new Description(description);
        else this.description = description;
    }
}

export class Project {
    image;
    title;
    description;
    link;

    constructor(image: string, title: string, description: string, link: string) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.link = link;
    }
}
