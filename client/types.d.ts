export type VideoFormat = {
    _id: string
    title: string
    url: string
    duration: string
    rating: number
    category: number[]
    imgPreview: string
    vidPreview: string
    actor: string[]
}

export interface CategoryFormat {
    _id: string;
    name: string;
    idCategory: number;
    img: string;
}