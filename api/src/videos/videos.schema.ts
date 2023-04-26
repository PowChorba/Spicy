import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'


export type VideosDocument = HydratedDocument<Videos>

@Schema()
export class Videos {
    @Prop({auto: true})
    id: number

    @Prop({required: true})
    title: string

    @Prop()
    url: string

    @Prop({required: true})
    duration: string

    @Prop({required: true})
    category: number

    @Prop()
    rating: number

    @Prop()
    imgPreview: string

    @Prop()
    vidPreview: string

}

export const VideosSchema = SchemaFactory.createForClass(Videos)