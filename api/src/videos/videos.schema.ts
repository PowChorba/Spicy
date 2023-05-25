import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'


export type VideosDocument = HydratedDocument<Videos>

@Schema()
export class Videos {
    @Prop({auto: true})
    id: number

    @Prop({required: true, unique: true})
    title: string

    @Prop({unique: true})
    url: string

    @Prop({required: true})
    duration: string

    @Prop({required: true})
    category: Array<number>

    @Prop()
    rating: number

    @Prop({unique: true})
    imgPreview: string

    @Prop()
    vidPreview: string

    @Prop()
    actor: Array<string>

    @Prop()
    views: string

    @Prop()
    fecha: string

    @Prop()
    fuente: string

    @Prop()
    counter: number

}

export const VideosSchema = SchemaFactory.createForClass(Videos)