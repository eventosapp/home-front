enum pages {
    "home" = "/",
    "portal" = "/portal"
};

interface product {
    title: string;
    desciption: string;
    image: string;
    imageAlt?: string;
}

export { pages, product };